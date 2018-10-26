import { consoleError, createElement } from "common-micro-libs/src/jsutils/runtime-aliases"

//============================================================
const TEMPLATE = createElement("template");

/**
 * Support for [BoxIcons](https://boxicons.com/)
 *
 * @type {IconSource}
 */
export const boxicons = {
    cdnUrl: "//unpkg.com/boxicons@latest/svg",
    getIcon(props, instance) {
        if (props.name) {
            const iconUrl = `${this.cdnUrl}/regular/bx-${props.name}.svg`;

            return instance.constructor
                .fetchSvg(iconUrl)
                .then(returnNewElement)
                .catch(handleReject);
        }
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
