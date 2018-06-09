import {showcase} from "project-showcase"
import Popup from "../src/Popup/Popup"

// import other showcases now so that they register themselves.

//========================================================
Popup.define();

showcase("About", function ($content) {
    $content.innerHTML = `
<h2>common-widget-elements</h2>
<p></p>
<p>
    <strong>License:</strong> MIT<br>
    <strong>Author:</strong> Paul Tavares<br>
</p>
`;
});

//----------------------------------------------------------------------------------
// show popup being used and attached to an element that is in ShadowRoot
//----------------------------------------------------------------------------------
showcase("Popup (in shadowRoot)", function ($content) {
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
            $content.append($popup)
        }

        if ($popup.hasAttribute("show")) {
            $popup.removeAttribute("show");
        }
        else {
            $popup.setAttribute("show", "");
        }
    });
});




//----------------------------------------------------------------------------------
// Show Popup being added to `document.body` but shown for an element that is in
// shadowRoot
//----------------------------------------------------------------------------------
showcase("Popup (in body)", function ($content) {
    $content.innerHTML = `
<h2>Popup inserted into <code>body</code>, but show for elemnet in shadowRoot</h2>
<p><a href="javascript:">Click to show</a></p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
`;
    const $a = $content.querySelector("a");
    let $popup;
    $a.addEventListener("click", () => {
        if (!$popup) {
            $popup = document.createElement("pop-up");
            $popup.innerHTML = `<div>my popup here</div>`;
            $popup.for = $a;
            document.body.append($popup)
        }

        if ($popup.hasAttribute("show")) {
            $popup.removeAttribute("show");
        }
        else {
            $popup.setAttribute("show", "");
        }
    });
});

