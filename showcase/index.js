import {showcase} from "project-showcase"
import "css-vars-element/src/import"
import "../src/import"

// import other showcases now so that they register themselves.
import "./popup-showcase"
import "./content-access-showcase"
import "./icon-showcase"

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
