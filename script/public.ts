import { resolve, dirname, fromFileUrl } from "@std/path";
import { uploadFileToUpyun, readFilesRecursive } from "./upfile.ts";
import dayjs from "npm:dayjs";

// 获取当前模块的目录路径
const __dirname = dirname(fromFileUrl(import.meta.url));
console.log(__dirname);

// 示例用法
const publicDir = resolve(__dirname, "../docs");
console.log(publicDir);

// 读取所有文件
const dir_files = await readFilesRecursive(publicDir);

// 上传文件文档文件
for (const file of dir_files) {
  await uploadFileToUpyun("ui/docs", file.fullPath, file.relativePath);
}

const assetsDir = resolve(__dirname, "../assets");
const asset_files = await readFilesRecursive(assetsDir);
// 上传文件静态文件
for (const file of asset_files) {
  await uploadFileToUpyun("ui/assets", file.fullPath, file.relativePath);
}