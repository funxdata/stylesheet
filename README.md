### funxdata stylesheet
funxdata stylesheet library

#### 相关环境

* 安装 deno

```
mac: curl -fsSL https://deno.land/install.sh | sh
windows: irm https://deno.land/install.ps1 | iex
```
* 安装 node

```
https://nodejs.org/en/download
```

#### 运行与开发

* 启动服务

```
    deno task view&
```

* 停止服务
```
macos: pkill -f "deno task view"

windows:  Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like "*deno task view*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```

运行正在编写的文件

```
npx tailwindcss -i 编写的文件 -o 打包输出目录 --watch
例如: npx tailwindcss -i ./styles/base.css -o ./dist/base.css --watch

```


#### 打包与发布


#### 目录介绍

* example 一些示例文件

* tests 测试文件 不打包上传

* styles 核心样式文件目录

* src ui.funxdata.com 的核心运行文件

#### 相关

* figma 文件地址
