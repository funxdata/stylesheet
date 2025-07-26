import PagesRouter  from "./types/router.ts";
declare const GlobalPagesRouter: PagesRouter;
console.log("hello")
const document_app = document.getElementById("app") as HTMLElement;
document_app.innerHTML =`
    <button class="my-button">hello</button>
`

