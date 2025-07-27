import path from 'path'
import { fileURLToPath } from 'url'
import { uploadFileToUpyun,readFilesRecursive } from "./upfile.ts";
// 获取 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

// 示例用法
const publicDir = path.resolve(__dirname, '../docs')
console.log(publicDir)
const dir_files = await readFilesRecursive(publicDir);

for (const file of dir_files) {
  await uploadFileToUpyun("uidocs", file.fullPath, file.relativePath);
}