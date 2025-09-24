import { aside } from "../html/aside.ts";
import { docmain } from "../html/docmain.ts";
import { data_ui_json } from "@/src/cloudapi/ui_data.ts"
import { Tpl } from "@funxdata/pages/tplstype";
// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
// 扩展 globalThis 的类型声明
declare global {
  var marked: any;
}

const init_docs= async ()=>{
  const document_container = document.getElementById("container") as HTMLElement;
  document_container.innerHTML = TplToHtml.renderString(aside,{navdata:data_ui_json})+docmain;
}

init_docs()