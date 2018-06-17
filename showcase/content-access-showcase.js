import {showcase} from "project-showcase"
import {getLoremIpsum} from "./utils";

//========================================================
const GROUP_NAME = "Modal Backdrop";


showcase({ name: "Block UI", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Inner Content</h2>
<p>
    <a id="toggle" href="javascript:void(0);">Toggle Content Access</a>
</p>
<div style="position: relative">
    <content-access block></content-access>
    <p>
        <input type="text" name="name" value="" />
    </p>
    <p>
        <input type="text" name="name" value="" />
    </p>
    <p>
        <input type="text" name="name" value="" />
    </p>
</div>
<p>
    <a href="javascript:void(0);">Focus 2</a>
</p>
`;
    const contentAccess = $content.querySelector("content-access");
    $content.querySelector("#toggle").addEventListener("click", () => {
        if (contentAccess.hasAttribute("block")) {
            contentAccess.removeAttribute("block");
        } else {
            contentAccess.setAttribute("block", "");
        }
    });

});
