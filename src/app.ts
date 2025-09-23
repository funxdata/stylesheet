import type { PagesRouterInfo,Route } from "@funxdata/pages/routtype";
// deno-lint-ignore no-explicit-any
const GlobalPagesRouter = (globalThis as any)["GlobalPagesRouter"] as PagesRouterInfo;
import { header } from "./html/header.ts"
import { container} from "./html/aside.ts";


const document_app = document.getElementById("app") as HTMLElement;
document_app.insertAdjacentHTML("beforeend", header);
document_app.insertAdjacentHTML("beforeend", container);

const ele_node = GlobalPagesRouter.on("/ui", "元素" ) as Route;
ele_node.loadjs = "./src/rout/ui.ts"

const themes_node = GlobalPagesRouter.on("/themes"," 主题") as Route;
themes_node.loadjs = "./src/rout/themes.ts"

const icons_node = GlobalPagesRouter.on("/icons","图标") as Route;
icons_node.loadjs = "./src/rout/icons.ts"

GlobalPagesRouter.init("/ui");



