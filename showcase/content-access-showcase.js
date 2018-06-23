import {showcase} from "project-showcase"
import {getLoremIpsum} from "./utils";

//========================================================
const GROUP_NAME = "Content Access";
const getTabedContent = () => (`
<p>
    <input type="text" name="name" value="not accessible when block" />
</p>
<p>
    <input type="text" name="name" value="" />
</p>
<p>
    <input type="text" name="name" value="" />
</p>`);



showcase({ name: "Parent element content", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Content of parent element</h2>
<p>Block all content of parent element that host this component</p>
<p>
    <a id="toggle" href="javascript:void(0);">Toggle Content Access</a>
</p>
<div style="position: relative">
    <content-access block on-parent></content-access>
    ${getTabedContent()}
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



showcase({ name: "Child elements content", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Inner Content</h2>
<p>Block all content of the content-access </p>
<p>
    <a id="toggle" href="javascript:void(0);">Toggle Content Access</a>
</p>
<div style="position: relative">
    <input type="text" name="name" value="This is ok" />
    <content-access block>
        ${getTabedContent()}
    </content-access>
    <input type="text" name="name" value="This is ok" />
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



showcase({ name: "on-parent with Child elements", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<h2>Set on parent element, but also includes child elements</h2>
 
<p>
    <a id="toggle" href="javascript:void(0);">Toggle Content Access</a>
</p>
<div style="position: relative">
    ${getLoremIpsum()}
    ${getTabedContent()}
    ${getLoremIpsum()}
    
    <content-access on-parent block>
        <div style="margin: 2em 5em; background:white; border: var(--theme-border);padding: 1em;">
            <h2>This is content inside content-access element - which should be "Tababble"</h2>
            
            ${getTabedContent()}
            ${getLoremIpsum(30, 100)}
        </div>
    </content-access>
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





