import Icon from "./base/Icon";
import {boxicons} from "./source.boxicons";
import {officeUiFabric} from "./source.office-ui-fabric";
import {twenmoji} from "./source.twenmoji";

Icon.sources.boxicons = boxicons;
Icon.sources.twenmoji = twenmoji;
Icon.sources["office-ui-fabric"] = officeUiFabric;

export { Icon };
export default Icon;
