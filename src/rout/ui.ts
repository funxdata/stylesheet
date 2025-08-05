import { aside } from "../html/aside.ts";
import { docmain } from "../html/docmain.ts";
import { load_md } from "../cloudapi/loadfile.ts"
// 扩展 globalThis 的类型声明
declare global {
  var marked: any;
}


export const init_docs= async ()=>{
    const document_container = document.getElementById("container") as HTMLElement;
    document_container.innerHTML = aside+docmain;

    const markdown = document.getElementById("markdown-doc-main") as HTMLElement;

    const buffer = await load_md("ele/layout");
    const md_info = new TextDecoder("utf-8").decode(buffer);
    const md_html = globalThis.marked.parse(md_info);
    markdown.innerHTML = md_html;
}