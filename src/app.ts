import PagesRouter  from "./types/router.ts";
declare const GlobalPagesRouter: PagesRouter;
const app = document.getElementById("app") as HTMLElement;

app.innerHTML="<h1>home page</h1>"
    
// 主页
GlobalPagesRouter.on("/",async function(){ 
    app.innerHTML="<h1>hello</h1>"
    console.log("home")
})

// 主页
GlobalPagesRouter.on("/home",async function(){ 
    app.innerHTML="<h1>home</h1>"
    console.log("home")
})


