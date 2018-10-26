import { createElement, doc } from "common-micro-libs/src/jsutils/runtime-aliases"
import * as iconMap from "./source.office-ui-fabric-icon-codes"


//===========================================================================
const OFFICE_ICON_ELEMENT = Symbol("OFFICE");
const ICON_TEMPLATE = createElement("template");

ICON_TEMPLATE.innerHTML = `<span class="i-con i-con-font ms-Icon"></span>`;

// Adjust Icons whose name had to be adjusted in order to be compliant to a const name
const aliases = {
    "12PointStar": iconMap.twelvePointStar,
    "6PointStar": iconMap.sixPointStar
};


/**
 * Font support for [Office UI Fabric](https://developer.microsoft.com/en-us/fabric#/styles/icons)
 *
 * @type {IconSource}
 */
export const officeUiFabric = {
    cdnUrl: "//static2.sharepointonline.com/files/fabric/assets/icons",
    isIconLoaded: false,
    iconMap,

    doSetup(IconClass) {
        IconClass.setupFont(this.getFontFaceCss());
    },

    getIcon(props, iconInstance) {
        // Setup the instance
        // Create the Internal element that will be used to display the icon
        if (!iconInstance[OFFICE_ICON_ELEMENT]) {
            iconInstance[OFFICE_ICON_ELEMENT] = doc.importNode(ICON_TEMPLATE.content, true).firstChild;

        }
        iconInstance[OFFICE_ICON_ELEMENT].textContent = props.code || this.iconMap[props.name] || aliases[props.name];
        return Promise.resolve(iconInstance[OFFICE_ICON_ELEMENT]);
    },

    getFontFaceCss() {
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
${this.getFontFaceCss()}

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
