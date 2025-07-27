import PagesRouter  from "./types/router.ts";
import { header } from "./html/header.ts"
import { container} from "./html/aside.ts";
import { init_docs } from "./rout/ui.ts";
import { init_icons } from "./rout/icons.ts";
declare const GlobalPagesRouter: PagesRouter
const document_app = document.getElementById("app") as HTMLElement;
document_app.insertAdjacentHTML("beforeend", header);
document_app.insertAdjacentHTML("beforeend", container);
GlobalPagesRouter.on("/",async ()=>{
   await init_docs();
})

GlobalPagesRouter.on("/ui",async ()=>{
   await init_docs();
})
GlobalPagesRouter.on("/icons",async ()=>{
   await init_icons();
})



