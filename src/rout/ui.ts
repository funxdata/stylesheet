import { aside } from "../html/aside.ts";

export const init_docs= ()=>{
    const document_container = document.getElementById("container") as HTMLElement;
    document_container.innerHTML = aside;
}