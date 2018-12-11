import {showcase} from "@purtuga/project-showcase"

//================================================================
const GROUP_NAME = "Confirm Action";


showcase({ name: "Default usage", group: GROUP_NAME}, function ($cntr) {
    const $div = document.createElement("div");
    $div.innerHTML = `
<confirm-action></confirm-action>
`;
    $cntr.appendChild($div);
});

