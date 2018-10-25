import {showcase} from "project-showcase"


//========================================================
const GROUP_NAME = "Icon";

showcase({ name: "Sources", group: GROUP_NAME}, function ($content) {
    setupBoxIcons($content);
    setupOfficeUiFabric($content);
});

function setupBoxIcons($cntr) {
    const div = document.createElement("div");
    div.innerHTML = '<h3>BoxIcons</h3>' +
        [ "award", "ball", "basketball", "football", "swim", "tennis-ball" ]
            .reduce((content, iconName) => content += `<i-con from="boxicons" name="${ iconName }"></i-con>`, "");
    $cntr.appendChild(div);
}

function setupOfficeUiFabric($cntr) {
    const div = document.createElement("div");
    div.innerHTML = '<h3>Office UI Fabric</h3>' +
        [  "12PointStar", "6PointStar", "AADLogo", "Accept", "AccessLogo", "AccessLogoFill", "AccountManagement", "Accounts", "ActivateOrders" ]
            .reduce((content, iconName) => content += `<i-con from="office-ui-fabric" name="${ iconName }"></i-con>`, "");
    $cntr.appendChild(div);
}