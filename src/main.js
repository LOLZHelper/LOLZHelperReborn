import "./style/menu.css"
import { waitForElm } from "./common/utils.js"
import { createMenu } from "./common/menu.js";
import {GM_setValue} from "vite-plugin-monkey/dist/client";

if (location.hash.startsWith('#access_token=')) {
    GM_setValue("token", location.hash.match(/access_token=([a-zA-Z\d]+)&/)[1])
}
waitForElm("#AccountMenu .blockLinksList").then(blockLinksList => {
    const liMenuButton = document.createElement("li");
    const menuButton = document.createElement("a");
    menuButton.classList.add("bold");
    menuButton.style.color = "rgb(0, 186, 120)";
    menuButton.innerText = "LOLZHELPER"
    liMenuButton.onclick = createMenu;
    liMenuButton.append(menuButton);

    const liAccountMenu = blockLinksList.getElementsByTagName("li")[0];
    liAccountMenu.parentNode.insertBefore(liMenuButton, liAccountMenu.nextSibling);
});