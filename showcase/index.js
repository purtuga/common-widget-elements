import {showcase} from "project-showcase"
import Popup from "../src/Popup/Popup"

// import other showcases now so that they register themselves.
import "./popup-showcase"

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
