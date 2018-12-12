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



showcase({ name: "With Slotted Content", group: GROUP_NAME}, function ($cntr) {
    const $div = document.createElement("div");
    $div.innerHTML = `
<confirm-action>
    You will get a prompt before continuing...
    <i-con slot="cancel" from="boxicons" name="x"></i-con>
    <i-con slot="confirm" from="boxicons" name="check-double"></i-con>
</confirm-action>
`;
    $cntr.appendChild($div);
});




showcase({ name: "Disabled", group: GROUP_NAME}, function ($cntr) {
    const $div = document.createElement("div");
    $div.innerHTML = `
<confirm-action disabled>
    You can't click me
    <i-con slot="cancel" from="boxicons" name="x"></i-con>
    <i-con slot="confirm" from="boxicons" name="check-double"></i-con>
</confirm-action>
`;
    $cntr.appendChild($div);
});



showcase({ name: "Float confirm to the left", group: GROUP_NAME}, function ($cntr) {
    const $div = document.createElement("div");
    $div.innerHTML = `
<p style="text-align: center">
    <confirm-action confirm-align-right style="color: red;">
        <i-con from="boxicons" name="trash" size="xs" style="fill: red;"></i-con> Delete
        
        <i-con slot="cancel" from="boxicons" name="x"></i-con>
        <i-con slot="confirm" from="boxicons" name="check-double"></i-con>
    </confirm-action>
</p>
`;
    $cntr.appendChild($div);
});

