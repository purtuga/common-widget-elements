import {showcase} from "project-showcase"
import Popup from "../src/Popup/Popup"

// import other showcases now so that they register themselves.

//========================================================
const getLoremIpsum = (wordCount = 30, paragraphs = 5) => {
    let response = "";
    while (paragraphs) {
        --paragraphs;
        response += `<p>${(function(){
            let cc = wordCount || 1;
            let words = "";
            while (cc) {
                --cc;
                words += " lorem ipsum";
            }
            return words;
        })()}</p>`
    }
    return response;
};


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
showcase("Popup (in body)", function ($content) {
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
showcase("Popup (Declarative Init)", function ($content) {
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
showcase("Popup (positioning)", function ($content) {
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






