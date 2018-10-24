import { consoleError, createElement } from "common-micro-libs/src/jsutils/runtime-aliases"

//============================================================
const CACHE = Object.create(null);

export const boxicons = {
    cdnUrl: "//unpkg.com/boxicons@latest/svg",
    getIcon: (props/*, instance*/) => {
        if (props.name) {
            const iconUrl = `${boxicons.cdnUrl}/regular/bx-${props.name}.svg`;

            if (CACHE[iconUrl]) {
                return CACHE[iconUrl].then(returnNewElement);
            }

            CACHE[iconUrl] = new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('load', function () {
                    if (this.status < 200 || this.status >= 300) {
                        reject(new Error(`${this.status} ${this.responseText}`));
                        return;
                    }
                    const template = createElement("template");
                    template.innerHTML = `<span class="i-con">${this.responseText}</span>`;
                    resolve(template);
                });
                request.onerror = reject;
                request.onabort = reject;
                request.open('GET', iconUrl);
                request.send();
            });

            CACHE[iconUrl].catch(handleReject);
            return CACHE[iconUrl].then(returnNewElement);
        }
    }
};

function handleReject(error) {
    consoleError(error);
    return Promise.reject(error);
}

function returnNewElement(iconTemplate) {
    return document.importNode(iconTemplate.content, true).firstChild;
}
