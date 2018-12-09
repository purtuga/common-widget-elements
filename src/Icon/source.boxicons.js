import { consoleError, createElement } from "@purtuga/common/src/jsutils/runtime-aliases.js"

//============================================================
const TEMPLATE = createElement("template");

/**
 * Support for [BoxIcons](https://boxicons.com/)
 *
 * @type {IconSource}
 */
export const boxicons = {
    cdnUrl: "//unpkg.com/boxicons@latest/svg",
    getIcon(props, iconInstance) {
        if (props.name) {
            const iconUrl = `${this.cdnUrl}/regular/bx-${props.name}.svg`;

            return iconInstance.constructor
                .fetchSvg(iconUrl)
                .then(returnNewElement)
                .catch(handleReject);
        }
        return Promise.reject(new Error("boxicon 'name' missing"));
    }
};

function handleReject(error) {
    consoleError(error);
    return Promise.reject(error);
}

function returnNewElement(svgString) {
    TEMPLATE.innerHTML = svgString;
    return document.importNode(TEMPLATE.content, true).firstChild;
}
