import {ComponentElement, prop, bind} from "component-element"
import {boxicons} from "./source.boxicons";

//=============================================================
const STATE = Symbol("STATE");
const SOURCES = {
    boxicons
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
    
    /* -------------------------------------------
            SIZES
       ------------------------------------------- */
    :host([size=xs]) {
        width: 0.8rem;
        height: 0.8rem;
    }
    :host([size=sm]) {
        width: 1.55rem;
        height: 1.55rem;
    }
    :host([size=md]) {
        width: 2.25rem;
        height: 2.25rem;
    }
    :host([size=lg]) {
        width: 3.0rem;
        height: 3.0rem;
    }
    
    .icon,
    svg {
      width: 100%;
      height: 100%;
    }
    .icon {
        box-sizing: border-box;
    } 
</style>
`;
    }

    /**
     * An array of icons sources
     *
     * @returns {Object<String, Object>}
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

        if (props.name) {
            if (this.constructor.sources[props.from]) {
                this.constructor.sources[props.from].getIcon(this.props, this).then(this._showIconElement);
            }
        }
    }

    @bind
    _showIconElement(iconEle) {
        if (iconEle) {
            this[STATE].$icon = iconEle;
            this.$ui.appendChild(iconEle);
        }
    }
}


/**
 * An Icons Source definition
 *
 * @typedef {Object} IconSource
 * @property {Function} getIcon
 *  Must return a promise that resolves to an Element that represents the icon
 */

export default Icon;
