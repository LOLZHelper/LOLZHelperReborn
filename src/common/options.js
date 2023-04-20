import {CATEGORIES, Types} from "./menu.js";
import {waitForElm} from "./utils.js";
import {GM_addStyle} from "vite-plugin-monkey/dist/client";

let noneLogo;

waitForElm("#lzt-logo").then(function () {
    noneLogo = getComputedStyle(this).backgroundImage.slice(5, -2);
})

const Logos = {
    NONE: noneLogo,
    FBI: "data:image/svg+xml,%0A%3Csvg width='460' height='460' viewBox='0 0 460 460' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M276 235.785C249.513 214.27 218.905 202 186.281 202C137.749 202 93.6838 229.207 61 273.5C74.8004 292.205 90.6319 307.862 107.973 319.707L135.826 305.795C129.837 296.48 126.364 285.394 126.364 273.5C126.364 240.443 153.19 213.645 186.281 213.645C211.996 213.645 233.927 229.827 242.427 252.554L276 235.785ZM206.9 270.298C206.231 265.955 204.196 261.908 201.048 258.762C197.133 254.851 191.818 252.662 186.28 252.677V252.677C174.759 252.677 165.419 262.007 165.419 273.519C165.419 279.176 167.676 284.302 171.338 288.059L206.9 270.298ZM164.608 343.168H207.955C200.848 344.377 193.616 345 186.281 345C178.946 345 171.714 344.377 164.608 343.168Z' fill='%232BAD72'/%3E%3Cpath d='M276.277 236.275L276.939 237.6L279 236.574L277.212 235.126L276.277 236.275ZM60.8452 274L59.6497 273.124L59 274L59.6497 274.876L60.8452 274ZM107.912 320.219L107.074 321.447L107.795 321.934L108.576 321.546L107.912 320.219ZM135.822 306.304L136.486 307.631L137.965 306.896L137.072 305.508L135.822 306.304ZM242.637 253.048L241.246 253.567L241.824 255.111L243.301 254.371L242.637 253.048ZM201.175 259.258L202.225 258.215L201.175 259.258ZM207.038 270.797L207.703 272.124L208.671 271.637L208.506 270.569L207.038 270.797ZM186.377 253.171L186.374 251.69L183.009 251.699L185.283 254.172L186.377 253.171ZM186.377 253.172V254.655H189.754L187.473 252.171L186.377 253.172ZM171.405 288.563L170.342 289.6L171.099 290.371L172.07 289.89L171.405 288.563ZM164.661 343.686V342.205L164.412 345.149L164.661 343.686ZM208.095 343.686L208.345 345.149L208.095 342.205V343.686ZM186.378 203.962C218.677 203.962 249.023 216.085 275.343 237.424L277.212 235.126C250.45 213.425 219.459 201 186.378 201V203.962ZM62.0407 274.876C94.5941 230.839 138.346 203.962 186.378 203.962V201C137.151 201 92.5948 228.551 59.6497 273.124L62.0407 274.876ZM108.751 318.997C91.5299 307.254 75.7828 291.716 62.0407 273.124L59.6497 274.876C73.5639 293.703 89.5435 309.488 107.074 321.447L108.751 318.997ZM135.158 304.983L107.248 318.898L108.576 321.546L136.486 307.631L135.158 304.983ZM124.855 274C124.855 286.193 128.422 297.554 134.572 307.106L137.072 305.508C131.22 296.418 127.826 285.607 127.826 274H124.855ZM186.378 212.648C152.4 212.648 124.855 240.116 124.855 274H127.826C127.826 241.752 154.04 215.61 186.378 215.61V212.648ZM244.028 252.53C235.301 229.237 212.784 212.648 186.378 212.648V215.61C211.505 215.61 232.938 231.394 241.246 253.567L244.028 252.53ZM275.615 234.951L241.973 251.724L243.301 254.371L276.939 237.6L275.615 234.951ZM200.125 260.307C203.055 263.232 204.948 266.99 205.571 271.026L208.506 270.569C207.788 265.922 205.604 261.584 202.225 258.215L200.125 260.307ZM186.381 254.655C191.534 254.636 196.481 256.673 200.125 260.307L202.225 258.215C198.022 254.022 192.317 251.675 186.374 251.69L186.381 254.655ZM187.473 252.171L187.472 252.17L185.283 254.172L187.473 252.171ZM166.959 274.019C166.959 263.325 175.653 254.655 186.377 254.655V251.691C174.013 251.691 163.989 261.689 163.989 274.019H166.959ZM172.469 287.532C169.058 284.04 166.959 279.276 166.959 274.019H163.989C163.989 280.078 166.412 285.576 170.342 289.6L172.469 287.532ZM206.374 269.471L170.741 287.242L172.07 289.89L207.703 272.124L206.374 269.471ZM164.661 345.167H208.095V342.205H164.661V345.167ZM207.846 342.23C200.806 343.421 193.643 344.038 186.378 344.038V347C193.812 347 201.142 346.371 208.345 345.149L207.846 342.23ZM186.378 344.038C179.113 344.038 171.95 343.421 164.91 342.23L164.412 345.149C171.614 346.371 178.945 347 186.378 347V344.038Z' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M431 204L26 406H431V204Z' fill='%232BAD72' stroke='white' stroke-opacity='0.01' stroke-width='2.96786' stroke-miterlimit='10'/%3E%3Cpath d='M26 406H431V435H26V406Z' fill='%232BAD72' stroke='white' stroke-opacity='0.01' stroke-width='2.96786' stroke-miterlimit='10'/%3E%3Cpath d='M142.292 157H431V25L358.827 106.942V25L286.648 106.942V25L214.472 106.942V25L142.296 106.942V25L26 157H98.1761H142.292Z' fill='%232BAD72' stroke='white' stroke-opacity='0.01' stroke-width='2.96786' stroke-miterlimit='10'/%3E%3C/svg%3E%0A",
    OLD: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Слой_2' x='0px' y='0px' viewBox='0 0 90 40' style='enable-background:new 0 0 90 40;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%2323A86D;%7D%0A%3C/style%3E%3Cpath class='st0' d='M49,31V13h15.1l4-4H16v4h17L21,32h-8V9H9v27h59l-4-4H49V31 M26,32h19v-1V13h-7L26,32z'/%3E%3C/svg%3E#svgView(viewBox(20,5,35,35))",
    XMAS: "https://zelenka.guru/public/zelenka/256-christmas.svg",
    CUM: "https://zelenka.guru/public/zelenka/64-christmas.svg",
    CUMALT: "https://zelenka.guru/public/zelenka/64-christmas-v.2.svg"
};

const Fonts = {
    NONE: null,
    Montserrat: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
};

export default async function () {
    await CATEGORIES.common.defineOption("id", "Отображение дополнительной информации", async function () {
        waitForElm(".pairsJustified").then(() => {
            const id = /market\/user\/(\d+)\/items/.exec(document.querySelector(".userContentLinks .button[href^=\"market/\"]").href)[1];
            const profile_info_row = document.createElement("div");
            profile_info_row.classList.add("clear_fix", "profile_info_row");

            const label = document.createElement("div");
            label.classList.add("label", "fl_l");
            label.innerText = "ID: ";

            const labeled = document.createElement("div");
            labeled.classList.add("labeled");
            labeled.innerText = id;

            profile_info_row.append(label, labeled);

            document.getElementsByClassName("pairsJustified")[0].append(profile_info_row);
        });
        waitForElm(".contestThreadBlock").then(async function () {
            const marginBlock = Array.from(document.querySelectorAll('.marginBlock'));
            const participants = marginBlock.filter(e => {
                return e.innerText.startsWith('Приняли участие:') || e.innerText.startsWith('Took part:');
            });
            const prizes = marginBlock.filter(e => {
                return e.innerText.startsWith('Количество призов:') || e.innerText.startsWith('Number of prizes:');
            });
            participants[0].innerHTML += ` (Шанс: ${(100 / (+participants[0].innerText?.match(/\d+/) / (+prizes[0]?.innerText?.match(/\d+/) || 1))).toFixed(2)}%)`;
        });
    }, true);
    await CATEGORIES.common.defineOption("contestUpper", "Блок розыгрыша над сообщением", async function () {
        waitForElm(".contestThreadBlock").then(() => {
           const contestThreadBlock = document.getElementsByClassName("contestThreadBlock")[0];
           contestThreadBlock.parentNode.prepend(contestThreadBlock);
        });
    }, true);
    await CATEGORIES.other.defineOption("nokid", "Отключение стуков при банвордах", null, true);
    await CATEGORIES.other.defineOption("nomirror", "Предотвращать переход на зеркало", null, true);
    await CATEGORIES.visual.defineOption("logo", Logos, async function () {
        switch (this.value) {
            case 'OLD':
                GM_addStyle('#lzt-logo {background-size: 100%;width: 87px;height: 44px;float: left;margin: unset;margin-left: -8px;background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' version=\'1.1\' id=\'Слой_2\' x=\'0px\' y=\'0px\' viewBox=\'0 0 90 40\' style=\'enable-background:new 0 0 90 40;\' xml:space=\'preserve\'%3E%3Cstyle type=\'text/css\'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%2323A86D;%7D%0A%3C/style%3E%3Cpath class=\'st0\' d=\'M49,31V13h15.1l4-4H16v4h17L21,32h-8V9H9v27h59l-4-4H49V31 M26,32h19v-1V13h-7L26,32z\'/%3E%3C/svg%3E") center;}')
                break;
            case 'XMAS':
                GM_addStyle('#lzt-logo {background-size: 100%;width: 87px;height: 44px;float: left;margin: unset;margin-left: -8px;background: url(https://zelenka.guru/public/zelenka/256-christmas.svg);}')
                break;
            case 'CUM':
                GM_addStyle('#lzt-logo {background: url(https://zelenka.guru/public/zelenka/64-christmas.svg);background-size: 100%}')
                break;
            case 'CUMALT':
                GM_addStyle('#lzt-logo {background: url(https://zelenka.guru/public/zelenka/64-christmas-v.2.svg);background-size: 100%}')
                break;
            case 'FBI': // thanks EARTY
                GM_addStyle('#lzt-logo {background-image: url("data:image/svg+xml,%0A%3Csvg width=\'460\' height=\'460\' viewBox=\'0 0 460 460\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M276 235.785C249.513 214.27 218.905 202 186.281 202C137.749 202 93.6838 229.207 61 273.5C74.8004 292.205 90.6319 307.862 107.973 319.707L135.826 305.795C129.837 296.48 126.364 285.394 126.364 273.5C126.364 240.443 153.19 213.645 186.281 213.645C211.996 213.645 233.927 229.827 242.427 252.554L276 235.785ZM206.9 270.298C206.231 265.955 204.196 261.908 201.048 258.762C197.133 254.851 191.818 252.662 186.28 252.677V252.677C174.759 252.677 165.419 262.007 165.419 273.519C165.419 279.176 167.676 284.302 171.338 288.059L206.9 270.298ZM164.608 343.168H207.955C200.848 344.377 193.616 345 186.281 345C178.946 345 171.714 344.377 164.608 343.168Z\' fill=\'%232BAD72\'/%3E%3Cpath d=\'M276.277 236.275L276.939 237.6L279 236.574L277.212 235.126L276.277 236.275ZM60.8452 274L59.6497 273.124L59 274L59.6497 274.876L60.8452 274ZM107.912 320.219L107.074 321.447L107.795 321.934L108.576 321.546L107.912 320.219ZM135.822 306.304L136.486 307.631L137.965 306.896L137.072 305.508L135.822 306.304ZM242.637 253.048L241.246 253.567L241.824 255.111L243.301 254.371L242.637 253.048ZM201.175 259.258L202.225 258.215L201.175 259.258ZM207.038 270.797L207.703 272.124L208.671 271.637L208.506 270.569L207.038 270.797ZM186.377 253.171L186.374 251.69L183.009 251.699L185.283 254.172L186.377 253.171ZM186.377 253.172V254.655H189.754L187.473 252.171L186.377 253.172ZM171.405 288.563L170.342 289.6L171.099 290.371L172.07 289.89L171.405 288.563ZM164.661 343.686V342.205L164.412 345.149L164.661 343.686ZM208.095 343.686L208.345 345.149L208.095 342.205V343.686ZM186.378 203.962C218.677 203.962 249.023 216.085 275.343 237.424L277.212 235.126C250.45 213.425 219.459 201 186.378 201V203.962ZM62.0407 274.876C94.5941 230.839 138.346 203.962 186.378 203.962V201C137.151 201 92.5948 228.551 59.6497 273.124L62.0407 274.876ZM108.751 318.997C91.5299 307.254 75.7828 291.716 62.0407 273.124L59.6497 274.876C73.5639 293.703 89.5435 309.488 107.074 321.447L108.751 318.997ZM135.158 304.983L107.248 318.898L108.576 321.546L136.486 307.631L135.158 304.983ZM124.855 274C124.855 286.193 128.422 297.554 134.572 307.106L137.072 305.508C131.22 296.418 127.826 285.607 127.826 274H124.855ZM186.378 212.648C152.4 212.648 124.855 240.116 124.855 274H127.826C127.826 241.752 154.04 215.61 186.378 215.61V212.648ZM244.028 252.53C235.301 229.237 212.784 212.648 186.378 212.648V215.61C211.505 215.61 232.938 231.394 241.246 253.567L244.028 252.53ZM275.615 234.951L241.973 251.724L243.301 254.371L276.939 237.6L275.615 234.951ZM200.125 260.307C203.055 263.232 204.948 266.99 205.571 271.026L208.506 270.569C207.788 265.922 205.604 261.584 202.225 258.215L200.125 260.307ZM186.381 254.655C191.534 254.636 196.481 256.673 200.125 260.307L202.225 258.215C198.022 254.022 192.317 251.675 186.374 251.69L186.381 254.655ZM187.473 252.171L187.472 252.17L185.283 254.172L187.473 252.171ZM166.959 274.019C166.959 263.325 175.653 254.655 186.377 254.655V251.691C174.013 251.691 163.989 261.689 163.989 274.019H166.959ZM172.469 287.532C169.058 284.04 166.959 279.276 166.959 274.019H163.989C163.989 280.078 166.412 285.576 170.342 289.6L172.469 287.532ZM206.374 269.471L170.741 287.242L172.07 289.89L207.703 272.124L206.374 269.471ZM164.661 345.167H208.095V342.205H164.661V345.167ZM207.846 342.23C200.806 343.421 193.643 344.038 186.378 344.038V347C193.812 347 201.142 346.371 208.345 345.149L207.846 342.23ZM186.378 344.038C179.113 344.038 171.95 343.421 164.91 342.23L164.412 345.149C171.614 346.371 178.945 347 186.378 347V344.038Z\' fill=\'white\' fill-opacity=\'0.01\'/%3E%3Cpath d=\'M431 204L26 406H431V204Z\' fill=\'%232BAD72\' stroke=\'white\' stroke-opacity=\'0.01\' stroke-width=\'2.96786\' stroke-miterlimit=\'10\'/%3E%3Cpath d=\'M26 406H431V435H26V406Z\' fill=\'%232BAD72\' stroke=\'white\' stroke-opacity=\'0.01\' stroke-width=\'2.96786\' stroke-miterlimit=\'10\'/%3E%3Cpath d=\'M142.292 157H431V25L358.827 106.942V25L286.648 106.942V25L214.472 106.942V25L142.296 106.942V25L26 157H98.1761H142.292Z\' fill=\'%232BAD72\' stroke=\'white\' stroke-opacity=\'0.01\' stroke-width=\'2.96786\' stroke-miterlimit=\'10\'/%3E%3C/svg%3E%0A")}');
                break;
        }
    }, "NONE", Types.ICON_SELECTOR);
    await CATEGORIES.visual.defineOption("font", Fonts, async function() {
        if (this.value === "NONE") return;
        for (const [name ,rule] of Object.entries(Fonts)) {
            GM_addStyle(`@import url('${rule}');`);
            if (this.value === name) {
                GM_addStyle(`body {font-family: ${name}}`);
            }
        }
    }, "NONE", Types.SELECT);
    await CATEGORIES.visual.defineOption("adblock", "Скрытие рекламы", async function () {
        import("../style/adblock.css");
    }, true);
    await CATEGORIES.visual.defineOption("hideignored", "Скрыть блок \"Вы игнорируете аккаунты...\"", async function () {
        GM_addStyle(".itemIgnored {display: none}")
    }, false);

}