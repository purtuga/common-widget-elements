import {showcase} from "@purtuga/project-showcase/src/index.js"
import "@purtuga/css-vars-element/src/import.js"
import "../src/import.js"

// import other showcases now so that they register themselves.
import "./popup-showcase.js"
import "./content-access-showcase.js"
import "./icon-showcase.js"
import "./confirm-action-showcase.js"

//========================================================

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
