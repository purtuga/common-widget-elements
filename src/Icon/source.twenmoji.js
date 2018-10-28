import {consoleError, createElement} from "common-micro-libs";

//======================================================================
const TEMPLATE = createElement("template");

// FIXME: create emoji tables - similar to: https://unicode.org/emoji/charts/full-emoji-list.html

/**
 * Shows Emoji from Twenmoji.
 * Get code from https://unicode.org/emoji/charts/full-emoji-list.html
 * Images served from unpkg - https://unpkg.com/twemoji@latest/2/svg/
 *
 * @type {IconSource}
 */
export const twenmoji = {
    cdnUrl: "//unpkg.com/twemoji@latest/2/svg",
    getIcon(props, iconInstance) {
        if (props.code) {
            const iconUrl = `${this.cdnUrl}/${getSvgImgNameFromCode(props.code)}.svg`;

            return iconInstance.constructor
                .fetchSvg(iconUrl)
                .then(returnNewElement)
                .catch(handleReject);
        }
        return Promise.reject(new Error("twemoji 'node' missing"));
    }
};

function getSvgImgNameFromCode(code) {
    return code
        .toLowerCase()
        .replace(/^u\+/, "");
}

function handleReject(error) {
    consoleError(error);
    return Promise.reject(error);
}

function returnNewElement(svgString) {
    TEMPLATE.innerHTML = svgString;
    return document.importNode(TEMPLATE.content, true).firstChild;
}