import { createElement, doc } from "common-micro-libs/src/jsutils/runtime-aliases"

//===========================================================================
const OFFICE_ICON_ELEMENT = Symbol("OFFICE");
const ICON_TEMPLATE = createElement("template");
const IS_CODEPOINT = /^U\+/i;
let fromCodePoint;

ICON_TEMPLATE.innerHTML = `<span class="i-con i-con-font ms-Icon"></span>`;

/**
 * Font support for [Office UI Fabric](https://developer.microsoft.com/en-us/fabric#/styles/icons)
 * Icon can be defined by name, using the `iconMap` property below, or by `code` - the Unicode that
 * represents the icon. The `code` value can the actual unicode character (the escape sequence -
 * ex. `\uF505`) or the Unicode codepoint (ex. `U+F505`).
 *
 * @type {IconSource}
 */
export const officeUiFabric = {
    cdnUrl: "//static2.sharepointonline.com/files/fabric/assets/icons",
    isIconLoaded: false,

    /**
     * A map (object) of "icon name" to "icon Unicode code point" that represents the icon.
     * (NOTE: unicode should be represented as `U+<code>`, not the UTF16 escaped sequence).
     * See `source.office-ui-fabric-icon-codes.js` for a list of code along with names, which
     * can be used set this object.
     *
     * @type {Object}
     */
    iconMap: {},

    /**
     * A map of "icon name alias" to "Icon unicode". These names might have had to be
     * changed due to constrains in the icon-codes.js file
     *
     * @type {Object}
     */
    iconAliases: {},

    doSetup(IconClass) {
        fromCodePoint = IconClass.fromCodePoint;
        IconClass.setupFont(this.getFontFaceCss());
    },

    getIcon({ code, name }, iconInstance) {
        // Setup the instance
        // Create the Internal element that will be used to display the icon
        if (!iconInstance[OFFICE_ICON_ELEMENT]) {
            iconInstance[OFFICE_ICON_ELEMENT] = doc.importNode(ICON_TEMPLATE.content, true).firstChild;

        }
        iconInstance[OFFICE_ICON_ELEMENT].textContent = code
            ? IS_CODEPOINT.test(code)
                ? fromCodePoint(code)
                : code
            : fromCodePoint(this.iconMap[name] || this.iconAliases[name]);
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
