import { icons_title,icons_infos,search_item,icons_view,icons_main } from "../html/icons.ts"
const icons_json_data = [
  { iconname: "icon-x" },
  { iconname: "icon-wechat-filling" },
  { iconname: "icon-wand" },
  { iconname: "icon-video" },
  { iconname: "icon-usersetting" },
  { iconname: "icon-user" },
  { iconname: "icon-upload" },
  { iconname: "icon-unlock" },
  { iconname: "icon-twitter" },
  { iconname: "icon-trash" },
  { iconname: "icon-tools" },
  { iconname: "icon-tips" },
  { iconname: "icon-time-filling" },
  { iconname: "icon-time" },
  { iconname: "icon-tick-circle" },
  { iconname: "icon-thumb-up" },
  { iconname: "icon-text" },
  { iconname: "icon-task-filling" },
  { iconname: "icon-switch" },
  { iconname: "icon-success" },
  { iconname: "icon-stop" },
  { iconname: "icon-star" },
  { iconname: "icon-star-filling" },
  { iconname: "icon-smile" },
  { iconname: "icon-share" },
  { iconname: "icon-setting" },
  { iconname: "icon-search" },
  { iconname: "icon-safe" },
  { iconname: "icon-rocket" },
  { iconname: "icon-refresh" },
  { iconname: "icon-question" },
  { iconname: "icon-prompt" },
  { iconname: "icon-plus-circle" },
  { iconname: "icon-plus" },
  { iconname: "icon-play-circle" },
  { iconname: "icon-password" },
  { iconname: "icon-pause-circle" },
  { iconname: "icon-notification-filling" },
  { iconname: "icon-notification" },
  { iconname: "icon-mobile-phone" },
  { iconname: "icon-message" },
  { iconname: "icon-menu" },
  { iconname: "icon-map" },
  { iconname: "icon-mail" },
  { iconname: "icon-loading" },
  { iconname: "icon-location" },
  { iconname: "icon-lock" },
  { iconname: "icon-link" },
  { iconname: "icon-info-circle" },
  { iconname: "icon-image-error" },
  { iconname: "icon-image" },
  { iconname: "icon-home" },
  { iconname: "icon-help" },
  { iconname: "icon-heart-filling" },
  { iconname: "icon-heart" },
  { iconname: "icon-history" },
  { iconname: "icon-hide" },
  { iconname: "icon-forward" },
  { iconname: "icon-folder" },
  { iconname: "icon-filter" },
  { iconname: "icon-file-common" },
  { iconname: "icon-facebook" },
  { iconname: "icon-exit" },
  { iconname: "icon-edit" },
  { iconname: "icon-download" },
  { iconname: "icon-delete" },
  { iconname: "icon-dashboard" },
  { iconname: "icon-customer-service" },
  { iconname: "icon-copy" },
  { iconname: "icon-collection-filling" },
  { iconname: "icon-close" },
  { iconname: "icon-clock" },
  { iconname: "icon-check-item" },
  { iconname: "icon-check-circle" },
  { iconname: "icon-calendar" },
  { iconname: "icon-camera" },
  { iconname: "icon-browse" },
  { iconname: "icon-bottom" },
  { iconname: "icon-bell" },
  { iconname: "icon-attachment" },
  { iconname: "icon-arrow-up" },
  { iconname: "icon-arrow-right" },
  { iconname: "icon-arrow-left" },
  { iconname: "icon-arrow-down" },
  { iconname: "icon-apps" },
  { iconname: "icon-application" },
  { iconname: "icon-activity" }
];

// 加载图标库
export const init_icons=()=>{
    const document_container = document.getElementById("container") as HTMLElement;
    document_container.innerHTML = icons_main;
     const document_main = document.getElementById("icons-main") as HTMLElement;
    document_main.innerHTML = icons_title + icons_infos;

    const icons_all = document.getElementById("icons-all") as HTMLElement;
    icons_all.innerHTML = search_item+ icons_view
    console.log("aaaa")
    let preview_html = "";
    for (let index = 0; index < icons_json_data.length; index++) {
        const element = icons_json_data[index];
        preview_html = preview_html  +   `<div class="preview ">
                                            <span class="inner dark-color-white">
                                                <i class="ic ${ element.iconname }"></i>
                                            </span>
                                            <span class="label dark-color-gray-200">${ element.iconname}</span>
                                        </div>`    
    }
    const iconallview = document.getElementById("mianIcons") as HTMLElement;
    console.log(iconallview)
    iconallview.innerHTML = preview_html;

} 