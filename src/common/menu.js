import initOptions from "./options.js"
import {GM_getValue, GM_setValue} from "vite-plugin-monkey/dist/client";
import {waitForElm} from "./utils.js";

let noneLogo;

waitForElm("#lzt-logo").then((e) => {
    noneLogo = getComputedStyle(e).backgroundImage.slice(5, -2);
});

export const Types = {
    CHECKBOX: 0,
    ICON_SELECTOR: 1,
    SELECT: 2
}

let tempValues = {};

class Category {
    constructor(name) {
        this.name = name;
        this.options = [];
    }

    async defineOption(id, info, onExecute, def, type) {
        const option = {
            id: id,
            info: info,
            onExecute: onExecute,
            def: def,
            type: type || Types.CHECKBOX,
            get value() {
                if (tempValues[id] == null)
                    return GM_getValue(id, def);
                return tempValues[id];
            },
            set value(value) {
                tempValues[id] = value;
            }
        }
        this.options.push(option);
        if ((option.value && option.type === Types.CHECKBOX) || option.type !== Types.CHECKBOX)
            await onExecute?.call(option);
    }
}

export const CATEGORIES = {
    common: new Category("Основные"),
    visual: new Category("Внешний вид"),
    other: new Category("Прочее")
};

function buildType(type, id, info, value) {
    switch (type) {
        case Types.CHECKBOX:
            const option = document.createElement("html");

            const label = document.createElement("label")
            label.innerText = info;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = id;
            if (value)
                checkbox.setAttribute("checked", "checked");

            label.prepend(checkbox)

            option.append(label);
            return option.outerHTML;
        case Types.ICON_SELECTOR:
            const div = document.createElement("div");
            div.classList.add("iconSelector");

            for (let [id, logo] of Object.entries(info)) {
                if (id === "NONE")
                    logo = noneLogo;
                const input = document.createElement("input");
                input.classList.add("iconTab");
                input.type = "radio";
                input.name = "icon_tab";
                input.id = id;

                if (value === id)
                    input.setAttribute("checked", "checked");

                const label = document.createElement("label");
                label.htmlFor = id;

                const img = document.createElement("img");
                img.src = logo;

                label.append(img);
                div.append(input, label);
            }

            return div.outerHTML;
        case Types.SELECT:
            const selectdiv = document.createElement("div"); // костыль
            const select = document.createElement("select");
            select.classList.add("ctrlOrder", "textCtrl", "extraLarge");
            select.id = id;
            select.style.marginTop = "5px";

            for (const [name, rule] of Object.entries(info)) {
                const option = document.createElement("option");

                option.value = name;
                option.innerText = name;

                option.style.fontFamily = name;

                if (name === value)
                    option.setAttribute("selected", "selected");

                select.append(option);
            }

            selectdiv.append(select)
            return selectdiv.outerHTML;
    }
}

export function createMenu() {
    const menu = document.createElement("html");

    const heading = document.createElement("h2");
    heading.classList.add("lhModal", "heading");
    heading.innerText = "Настройки LOLZHELPER";

    const baseHTML = document.createElement("div");
    baseHTML.classList.add("lhModal", "baseHtml");

    const tabs = document.createElement("div");
    tabs.classList.add("menuTabs");

    const options = document.createElement("div")
    options.classList.add("options")

    const applySettings = document.createElement("button");
    applySettings.classList.add("applySettings", "button", "primary");
    applySettings.innerText = "Применить";

    baseHTML.append(tabs, options, applySettings);

    for (const [id, cat] of Object.entries(CATEGORIES)) {
        const tab = document.createElement("input");
        tab.type = "radio"
        tab.name = "category_tab";
        tab.classList.add("menuTab")
        tab.id = id;
        if (Object.keys(CATEGORIES)[0] === id)
            tab.setAttribute("checked", "checked");

        const label = document.createElement("label");
        label.htmlFor = id;
        label.innerText = cat.name;

        tabs.append(tab, label);
    }

    menu.append(heading, baseHTML);
    return XenForo.createOverlay(null, menu.innerHTML, {
        onBeforeLoad() {
            this.trigger.find(".OverlayCloser").css("z-index", 1);
            this.trigger.find(".chosen-container, .chosen-drop").css("width", "auto");
            this.trigger.find(".chosen-results").css("margin-left", 0);
            const options = this.trigger.find(".options");
            this.trigger.find(".menuTab").change(function () {
                options.html("")
                CATEGORIES[this.id].options.forEach((opt) => {
                    $(buildType(opt.type, opt.id, opt.info, opt.value)).appendTo(options).find("input, select").change(function () {
                        switch (opt.type) {
                            case Types.CHECKBOX:
                                opt.value = this.checked;
                                break;
                            case Types.ICON_SELECTOR:
                                opt.value = options.find(".iconTab:checked").attr("id");
                                break;
                            case Types.SELECT:
                                opt.value = this.value;
                                break;
                        }
                    });
                });
            });
            this.trigger.find(".menuTab:first").change();
            this.trigger.find(".applySettings").click(function () {
                for (const [key, value] of Object.entries(tempValues)) {
                    GM_setValue(key, value);
                }
                location.reload();
            });
        },
        onBeforeClose() {
            this.trigger.parent(".modal").remove();
        }
    }).load();
}

initOptions();