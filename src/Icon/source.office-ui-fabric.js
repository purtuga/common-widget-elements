import { setAttribute, createElement, createTextNode } from "common-micro-libs/src/jsutils/runtime-aliases"
import * as iconMap from "./source.office-ui-fabric-icon-codes"


//===========================================================================
const OFFICE = Symbol("OFFICE");
const ICON_TEMPLATE = document.createElement("template");

ICON_TEMPLATE.innerHTML = `<span class="i-con i-con-font ms-Icon"></span>`;

// Adjust Icons whose name had to be adjusted in order to be compliant to a const name
const aliases = {
    "12PointStar": iconMap.twelvePointStar,
    "6PointStar": iconMap.sixPointStar
};

export const officeUiFabric = {
    cdnUrl: "//static2.sharepointonline.com/files/fabric/assets/icons",
    isIconLoaded: false,
    iconMap,
    getIcon(props, iconInstance) {
        // Load the font if needed.
        if (!this.isIconLoaded) {
            this.isIconLoaded = true;
            if (!document.head.querySelector("style[data-id='FabricMDL2Icons'")) {
                loadFont(this.fontFaceCss(), "FabricMDL2Icons");
            }
        }

        // Setup the instance
        // Create the Internal element that will be used to display the icon
        if (!iconInstance[OFFICE]) {
            iconInstance[OFFICE] = {
                $icon: document.importNode(ICON_TEMPLATE.content, true).firstChild
            };
            iconInstance.$ui.appendChild(getStyleEle(this.getStyles()));

        }
        iconInstance[OFFICE].$icon.textContent = this.iconMap[props.name] || aliases[props.name];
        return Promise.resolve(iconInstance[OFFICE].$icon);
    },
    fontFaceCss() {
        return `
@font-face {
    font-family: FabricMDL2Icons;
    src: url(${this.cdnUrl}/fabricmdl2icons-2.68.woff2) format("woff2"),
         url(${this.cdnUrl}/fabricmdl2icons-2.68.woff) format("woff"),
         url(${this.cdnUrl}/fabricmdl2icons-2.68.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
}
`;
    },
    getStyles() {
        return `
${this.fontFaceCss()}

.ms-Icon {
    display: inline-block;
    font-family: FabricMDL2Icons;
    font-style: normal;
    font-weight: 400;
    speak: none;
}
`;
    }
};

function getStyleEle(cssCode, id) {
    const styleEle = createElement("style");
    styleEle.type = "text/css";
    styleEle.appendChild(createTextNode(cssCode));
    if (id) {
        setAttribute(styleEle, "data-id", id);
    }
    return styleEle;
}


function loadFont(fontFaceCss, id) {
    // Issue with @font-face: https://bugs.chromium.org/p/chromium/issues/detail?id=336876#c28
    document.head.appendChild(getStyleEle(fontFaceCss, id));
}
