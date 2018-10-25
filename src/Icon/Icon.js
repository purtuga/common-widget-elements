import {ComponentElement, prop, bind} from "component-element"
import {boxicons} from "./source.boxicons";
import {officeUiFabric} from "./source.office-ui-fabric"

//=============================================================
const STATE = Symbol("STATE");
const SOURCES = {
    boxicons,
    "office-ui-fabric": officeUiFabric
};

/**
 * Display icons from various sources.
 *
 * Usage:
 *
 * ```html
 * <i-con
 *      from="source-name"
 *      name="icon-name"
 *      size="xs|sm|md|lg"
 *  ></i-con>
 * ```
 *
 * __Supported CSS Variables__
 *
 * -    `--icon-size`: set custom icon size
 *
 * @extends ComponentElement
 */
export class Icon extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static get tagName() {
        return "i-con";
    }

    static get template() {
        return `
<style>
    :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        contain: content;
        font-size: initial;
        width: 24px;
        height: 24px;
        
        /* -- var support -- */
        width: var(--icon-size, 24px);
        height: var(--icon-size, 24px);
    }
    
    .i-con-font {
        font-size: 24px;
        font-size: var(--icon-size, 24px);
    }
    
    /* -------------------------------------------
            SIZES
       ------------------------------------------- */
    :host([size=xs]) {
        width: 0.8rem;
        height: 0.8rem;
    }
    :host([size=xs]) .i-con-font {
        font-size: 0.8rem;
    }
    
    :host([size=sm]) {
        width: 1.55rem;
        height: 1.55rem;
    }
    :host([size=sm]) .i-con-font {
        font-size: 1.55rem;
    }
    
    :host([size=md]) {
        width: 2.25rem;
        height: 2.25rem;
    }
    :host([size=md]) .i-con-font {
        font-size: 2.25rem;
    }
    
    :host([size=lg]) {
        width: 3.0rem;
        height: 3.0rem;
    }
    :host([size=lg]) .i-con-font {
        font-size: 3.0rem;
    }
    
    .i-con,
    svg {
      width: 100%;
      height: 100%;
    }
    .i-con {
        box-sizing: border-box;
    } 
</style>
`;
    }

    /**
     * An array of icons sources. Object key is the value that should be used in
     * the `from` attribute.
     *
     * @returns {Object<String, IconSource>}
     */
    static sources = SOURCES;

    // static get delayDestroy() {}
    // static get useShadow() {}
    // static get shadowMode() {}
    // static getEventInitOptions(){}
    // static get observedAttributes() {}

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC METHODS ~~~~~

    // static renderTemplate(ele) {}
    // static define(name) {}


    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~

    @prop({ attr: true })
    from = "";

    @prop({ attr: true })
    name = "";


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        if (!this[STATE]) {
            this[STATE] = {
                $icon: null,
                from: null,
                name: null
            };
            this.onPropsChange(this._handlePropChanges);
            this._handlePropChanges();
        }
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    @bind
    _handlePropChanges() {
        const state = this[STATE];
        const props = this.props;

        // Reset current state
        if (
            props.name !== state.name ||
            props.from !== state.from
        ) {
            state.name = state.from = null;

            if (state.$icon) {
                if (state.$icon.parentNode) {
                    state.$icon.parentNode.removeChild(state.$icon);
                }
                state.$icon = null;
            }
        }

        if (props.name && props.from) {
            state.name = props.name;
            state.from = props.from;

            if (this.constructor.sources[props.from]) {
                this.constructor.sources[props.from].getIcon(this.props, this).then(this._showIconElement);
            }
        }
    }

    @bind
    _showIconElement(iconEle) {
        if (iconEle && this.props.name === this[STATE].name) {
            this[STATE].$icon = iconEle;
            this.$ui.appendChild(iconEle);
        }
    }
}


/**
 * An Icon Source definition
 *
 * @typedef {Object} IconSource
 * @property {Function} getIcon
 *  Must return a promise that resolves to an Element that represents the icon.
 *  This icon, if not an SVG, should have a CSS class name of `i-con`
 */

export default Icon;
