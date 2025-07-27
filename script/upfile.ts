// upyun.ts

import { extname, join, posix, relative, sep } from "@std/path";
import { S3Client, PutObjectCommand } from "npm:@aws-sdk/client-s3";

// 读取配置（也可以换成 Deno.env.get）
const config = {
    AccessKey: process.env.AccessKey,
    SecretAccessKey: process.env.SecretAccessKey,
    bucketname: process.env.UPX_SERVICENAME,
};

// 初始化 S3 客户端（兼容又拍云）
const s3 = new S3Client({
  endpoint: "https://s3.api.upyun.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: config.AccessKey,
    secretAccessKey: config.SecretAccessKey,
  },
  forcePathStyle: true,
} as any);

// MIME 类型映射
const mimeTypes: Record<string, string> = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".html": "text/html",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "font/otf",
  ".txt": "text/plain",
};

// 上传单个文件
export async function uploadFileToUpyun(remoteDir: string, localPath: string, relativePath: string) {
  try {
    const fileContent = await Deno.readFile(localPath);
    const ext = extname(relativePath).toLowerCase();
    const contentType = mimeTypes[ext] ?? "application/octet-stream";
    const key = posix.join(remoteDir, relativePath.split(sep).join("/"));

    const command = new PutObjectCommand({
      Bucket: config.bucketname,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    });

    await s3.send(command);
    console.log(`✅ 上传成功: ${key} (${contentType})`);
  } catch (err) {
    console.error("❌ 上传失败:", err);
  }
}

// 读取目录下所有文件
export async function readFilesRecursive(dir: string, base = dir): Promise<Array<{ fullPath: string; relativePath: string }>> {
  const results: Array<{ fullPath: string; relativePath: string }> = [];

  for await (const entry of Deno.readDir(dir)) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory) {
      const nested = await readFilesRecursive(fullPath, base);
      results.push(...nested);
    } else if (entry.isFile) {
      const relPath = relative(base, fullPath);
      results.push({ fullPath, relativePath: relPath });
    }
  }

  return results;
}
