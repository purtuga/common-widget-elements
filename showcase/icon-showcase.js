import {showcase} from "@purtuga/project-showcase"


//========================================================
const GROUP_NAME = "Icon";
let uiFrabricNameMapDone = false;

//-----------------------------------------------------------------------
//  TESTS
//-----------------------------------------------------------------------
showcase({name: "Icon Tests", group: GROUP_NAME}, function($content) {
    const testRunner = document.createElement("showcase-test-runner");
    $content.appendChild(testRunner);
    testRunner.setAttribute("auto-run", true);
    testRunner.style.height = window.innerHeight - 150 + "px";
    testRunner.tests = [
        "common-widget-elements.js",
        "test/icon.test.js"
    ];
});


//-----------------------------------------------------------------------
//  ICON SOURCES
//-----------------------------------------------------------------------
showcase(
    {
        name: "Sources",
        group: GROUP_NAME
    },
    function ($content) {
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
    }
);

// Setup showcase for Boxicons
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

// Setup icons for Office UI Fabric
function setupOfficeUiFabric($cntr) {
    const div = document.createElement("div");
    $cntr.appendChild(div);

    const insertIcons = () => {
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
<p>These are shown using the icon Unicode escaped sequence (ex. <code>\\uF42B</code>) instead of name</p>
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
<p>These are shown using the icon Unicode code point (ex. <code>U+F42B</code>) instead of name</p>
${
    [
        'U+F42B',
        'U+F2AC',
        'U+F444',
        'U+E73F',
        'U+EC1B',
        'U+F543',
        'U+E9AA',
        'U+E9AB',
        'U+EB6B',
        'U+EF8D',
        'U+E8F8'
    ].reduce((content, iconCode) => content += `<i-con from="office-ui-fabric" code="${ iconCode }"></i-con>`, "")
}
`;
    };

    // If we need to first add the name-to-codepoint mapping, then defer setup
    if (!uiFrabricNameMapDone) {
        customElements.whenDefined("i-con").then(() => {
            uiFrabricNameMapDone = true;
            const OfficeUIFabricIconSource = customElements.get("i-con").sources["office-ui-fabric"];

            Object.assign(
                OfficeUIFabricIconSource.iconMap,
                {
                    twelvePointStar: 'U+F505',
                    sixPointStar: 'U+F504',
                    AADLogo: 'U+ED68',
                    Accept: 'U+E8FB',
                    AccessLogo: 'U+ED69',
                    AccessLogoFill: 'U+F1DB',
                    AccountManagement: 'U+F55C',
                    Accounts: 'U+E910',
                    ActivateOrders: 'U+EFE0',
                    ActivityFeed: 'U+F056',
                    Add: 'U+E710'
                }
            );

            // Insert alias
            Object.assign(
                OfficeUIFabricIconSource.iconAliases,
                {
                    "12PointStar": OfficeUIFabricIconSource.iconMap.twelvePointStar,
                    "6PointStar": OfficeUIFabricIconSource.iconMap.sixPointStar
                }
            );

            insertIcons();
        });
    } else {
        insertIcons();
    }
}

// Setup for Twenmoji
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
    ].reduce((content, emojiHexCode) => content += `<i-con from="twemoji" code="${ emojiHexCode }"></i-con>`, "")
}
`;
    $cntr.appendChild(div);
}
