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
    setupTwenoji($content);
});

function setupBoxIcons($cntr) {
    const div = document.createElement("div");
    div.innerHTML = `<h3>BoxIcons</h3>
<p><a href="https://boxicons.com/">boxicons.com</a></p>
${
    ["award", "ball", "basketball", "football", "swim", "tennis-ball"]
        .reduce((content, iconName) => content += `<i-con from="boxicons" name="${ iconName }"></i-con>`, "")
}
`;

    $cntr.appendChild(div);
}

function setupOfficeUiFabric($cntr) {
    const div = document.createElement("div");
    div.innerHTML = `
<h3>Office UI Fabric</h3>
<p><a href="https://developer.microsoft.com/en-us/fabric#/styles/icons">developer.microsoft.com/en-us/fabric</a></p>
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


function setupTwenoji($cntr) {
    const div = document.createElement("div");
    div.innerHTML = `
<h3>Twemoji</h3>
<p><a href="https://twemoji.twitter.com/">twemoji.twitter.com</a></p>
${
    [
        "1f600",
        "1f603",
        "1f604",
        "1f601",
        "U+1F970",
        "U+1F60D",
        "U+1F929",
        "U+1F618",
        "U+1F617"
    ].reduce((content, emojiHexCode) => content += `<i-con from="twenmoji" code="${ emojiHexCode }"></i-con>`, "")
}
`;
    $cntr.appendChild(div);
}
