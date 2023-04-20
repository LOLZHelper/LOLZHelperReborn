import {GM_getValue, GM_xmlhttpRequest} from "vite-plugin-monkey/dist/client";

export function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}
function APIRequest(url) {
    return new Promise(resolve => {
        let token = GM_getValue("token", null);
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://api.zelenka.guru/" + url,
            headers: {"Authorization": "Bearer " + token},
            onload: function (result) {
                if (result.status === 401) {
                    if (location.host === 'zelenka.guru') {
                        location.href = "/account/authorize?client_id=0wk5apc3k0&response_type=token&scope=read"
                    } else {
                        location.href = "/account/authorize?client_id=l2cdsrzb84&response_type=token&scope=read"
                    }
                }
                resolve(result)
            },
            onerror: function () {
                resolve(null)
                XenForo.alert('Вы слишком часто отправляете запросы к API, попробуйте позже', '', 2500)
            }
        });
    });
}