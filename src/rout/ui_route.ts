import { load_md } from "@/src/cloudapi/loadfile.ts"
export const load_ui_pages = async (path:string)=>{
    const markdown = document.getElementById("markdown-doc-main") as HTMLElement;
    console.log(path)
    const buffer = await load_md(path);
    const md_info = new TextDecoder("utf-8").decode(buffer);
    const md_html = globalThis.marked.parse(md_info);
    markdown.innerHTML = md_html;
}