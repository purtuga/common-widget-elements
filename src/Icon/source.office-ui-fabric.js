import {officeUiFabric} from "./base/source.office-ui-fabric"
import * as iconMap from "./source.office-ui-fabric-icon-codes"

officeUiFabric.iconMap = iconMap;
officeUiFabric.iconAliases = {
    "12PointStar": iconMap.twelvePointStar,
    "6PointStar": iconMap.sixPointStar
};

export { officeUiFabric };
