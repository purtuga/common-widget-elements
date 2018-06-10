import {showcase} from "project-showcase"
import {getLoremIpsum} from "./utils";

//========================================================
const GROUP_NAME = "Popup";


//----------------------------------------------------------------------------------
// show popup being used and attached to an element that is in ShadowRoot
//----------------------------------------------------------------------------------
showcase({ name: "Inserted in shadowRoot", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<p><a href="javascript:">Click to show</a></p>
`;
    const $a = $content.querySelector("a");
    let $popup;
    $a.addEventListener("click", () => {
        if (!$popup) {
            $popup = document.createElement("pop-up");
            $popup.innerHTML = `<div>my popup here</div>`;
            $popup.for = $a;
            $content.appendChild($popup)
        }

        if ($popup.hasAttribute("show")) {
            $popup.removeAttribute("show");
        }
        else {
            $popup.setAttribute("show", "");
        }
    });
    $content.onDestroy(() => $popup && $popup.destroy());
});




//----------------------------------------------------------------------------------
// Show Popup being added to `document.body` but shown for an element that is in
// shadowRoot
//----------------------------------------------------------------------------------
showcase({ name: "Inserted in body", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Popup inserted into <code>body</code></h2>
<p>The popup is attached (<code>for</code> to an element in shadowRoot. Also, the <code>autoClose</code> is set to true</p>
<p><a href="javascript:">Click to show</a></p>
${ getLoremIpsum() }
`;
    const $a = $content.querySelector("a");
    let $popup;
    $a.addEventListener("click", () => {
        if (!$popup) {
            $popup = document.createElement("pop-up");
            $popup.innerHTML = `<div>my popup here</div>`;
            $popup.for = $a;
            $popup.autoClose = true;
            document.body.appendChild($popup)
        }

        if ($popup.hasAttribute("show")) {
            $popup.removeAttribute("show");
        }
        else {
            $popup.setAttribute("show", "");
        }
    });
    $content.onDestroy(() => $popup && $popup.destroy());
});




//----------------------------------------------------------------------------------
// Define popup in a declarative way
//----------------------------------------------------------------------------------
showcase({ name: "Declarative Init", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Popup inserted into <code>body</code> in a Declarative way</h2>
<p>The popup is attached (<code>for</code> to an element in shadowRoot. Also, the <code>autoClose</code> is set to true</p>
<p><a href="javascript:">Click to show</a></p>
${ getLoremIpsum() }
`;
    const $a = $content.querySelector("a");
    let $popup;
    $a.addEventListener("click", () => {
        if (!$popup) {
            const $div = document.createElement("div");
            $div.innerHTML = `<pop-up auto-close>
<p>my popup here</p>
${getLoremIpsum()}
</pop-up>`;
            $popup = $div.querySelector("pop-up");
            $popup.for = $a;
            document.body.appendChild($popup)
        }

        $popup.show = !$popup.show;
    });
    $content.onDestroy(() => $popup && $popup.destroy());
});





//----------------------------------------------------------------------------------
// Use the `my` and `at` attributes
//----------------------------------------------------------------------------------
showcase({ name: "positioning", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Popup positioning using <code>my</code> and <code>at</code></h2>
<p>The popup is attached (<code>for</code> to an element in shadowRoot. Also, the <code>autoClose</code> is set to true</p>
<p style="margin-top: 5em;text-align: center"><a href="javascript:">Click to show</a></p>
${ getLoremIpsum() }
`;
    const $a = $content.querySelector("a");
    let $popup;
    $a.addEventListener("click", () => {
        if (!$popup) {
            const $div = document.createElement("div");
            $div.innerHTML = `<pop-up auto-close my="top right" at="bottom left">
${getLoremIpsum(5, 1)}
</pop-up>`;
            $popup = $div.querySelector("pop-up");
            $popup.for = $a;
            document.body.appendChild($popup)
        }

        $popup.show = !$popup.show;
    });
    $content.onDestroy(() => $popup && $popup.destroy());
});

