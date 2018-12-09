//--------------------------------------------------------------------------------
// Exports `Icon` with all currently available sources.
// If wanting to avoid the "bulk", use the `Icon/Base/Icon` class instead
// add your own custom sources to that.
//--------------------------------------------------------------------------------
import Icon from "./base/Icon.js";
import {boxicons} from "./source.boxicons.js";
import {officeUiFabric} from "./source.office-ui-fabric.js";
import {twemoji} from "./source.twemoji.js";

Icon.sources.boxicons = boxicons;
Icon.sources.twemoji = twemoji;
Icon.sources["office-ui-fabric"] = officeUiFabric;


export { Icon };
export default Icon;
