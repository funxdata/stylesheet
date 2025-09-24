import type { PagesRouterInfo,Route } from "@funxdata/pages/routtype";
import { data_ui_json } from "@/src/cloudapi/ui_data.ts"
// deno-lint-ignore no-explicit-any
const GlobalPagesRouter = (globalThis as any)["GlobalPagesRouter"] as PagesRouterInfo;
import { header } from "./html/header.ts"
import { container} from "./html/aside.ts";
import { load_ui_pages } from "./rout/ui_route.ts"


const document_app = document.getElementById("app") as HTMLElement;
document_app.insertAdjacentHTML("beforeend", header);
document_app.insertAdjacentHTML("beforeend", container);

const ele_node = GlobalPagesRouter.on("/ui", "元素" ) as Route;
ele_node.loadjs = "./src/rout/ui.ts"

const themes_node = GlobalPagesRouter.on("/themes"," 主题") as Route;
themes_node.loadjs = "./src/rout/themes.ts"

const icons_node = GlobalPagesRouter.on("/icons","图标") as Route;
icons_node.loadjs = "./src/rout/icons.ts"


// 加载ui route
for (let index = 0; index < data_ui_json.length; index++) {
    const element = data_ui_json[index];
    if(element.haschild){
        // deno-lint-ignore prefer-const no-explicit-any
        let childs = element.item as any;
        for (let j = 0; j < childs.length; j++) {
            const item = childs[j];
            // deno-lint-ignore prefer-const
            let temp_rout = GlobalPagesRouter.on(item.rout as string,item.title)
            if(temp_rout!=null){
                temp_rout.hook = async ()=>{
                    load_ui_pages(item.rout);
                } 
            }
        }
    }else{
            // deno-lint-ignore prefer-const
            let temp_rout = GlobalPagesRouter.on(element.rout as string,element.name)
            if(temp_rout!=null){
                temp_rout.hook = async ()=>{
                    load_ui_pages(temp_rout.pathname);
            } 
        }
    }
}

GlobalPagesRouter.init("/ui");



