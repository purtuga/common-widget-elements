import {showcase} from "project-showcase"


//========================================================
const GROUP_NAME = "Icon";

showcase({name: "Sources", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<style>
    i-con {
        margin: 1em;
        --icon-size: 32px;
    }
</style>
`;
    setupBoxIcons($content);
    setupOfficeUiFabric($content);
});

function setupBoxIcons($cntr) {
    const div = document.createElement("div");
    div.innerHTML = '<h3>BoxIcons</h3>' +
        ["award", "ball", "basketball", "football", "swim", "tennis-ball"]
            .reduce((content, iconName) => content += `<i-con from="boxicons" name="${ iconName }"></i-con>`, "");
    $cntr.appendChild(div);
}

function setupOfficeUiFabric($cntr) {
    const div = document.createElement("div");
    div.innerHTML = `
<h3>Office UI Fabric</h3>
${
    [
        "12PointStar",
        "6PointStar",
        "AADLogo",
        "Accept",
        "AccessLogo",
        "AccessLogoFill",
        "AccountManagement",
        "Accounts",
        "ActivateOrders"
    ].reduce((content, iconName) => content += `<i-con from="office-ui-fabric" name="${ iconName }"></i-con>`, "")
}
<p>These are showing using the icon code instead of name</p>
${
    [
        '\uF42B',
        '\uF2AC',
        '\uF444',
        '\uE73F',
        '\uEC1B',
        '\uF543',
        '\uE9AA',
        '\uE9AB',
        '\uEB6B',
        '\uEF8D',
        '\uE8F8'
    ].reduce((content, iconCode) => content += `<i-con from="office-ui-fabric" code="${ iconCode }"></i-con>`, "")
}
`;
    $cntr.appendChild(div);
}