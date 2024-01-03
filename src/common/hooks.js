import {CATEGORIES} from "./menu.js";

export default function () {
    window.onload = () => {
        const xfAct = XenForo.activate;
        const xfAjax = XenForo.ajax;
        if (CATEGORIES.other.options.nokid.value) {
            XenForo.PrankProvider.prank = () => {}
        }
        XenForo.activate = function () {
            const ret = xfAct.apply(this, arguments)
            const $els = arguments[0];
            if (CATEGORIES.other.options.nomirror.value) {
                for (let e of document.getElementsByClassName("externalLink")) {
                    e.href = e.href.replaceAll(/^(https?:\/\/)(zelenka|lolz)\.guru/g, `$1${location.host}`);
                }
            }
            return ret;
        }
        XenForo.ajax = function () {
            const url = arguments[0];
            const data = arguments[1];
            const success = arguments[2];
            const options = arguments[3];
            if (url === "threads/low-priority") {
                return;
            }
            return xfAjax.apply(this, arguments);
        }

    }

}