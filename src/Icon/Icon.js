import {ComponentElement, prop, bind} from "component-element"
import {appendChild, createElement, createTextNode, setAttribute, doc} from "common-micro-libs";
import {boxicons} from "./source.boxicons";
import {officeUiFabric} from "./source.office-ui-fabric"

//=============================================================
const SOURCE_SETUP = Symbol("SOURCE_SETUP");
const SOURCE_STYLES = Symbol("SOURCE_STYLES");
const STATE = Symbol("STATE");
const SOURCES = {
    boxicons,
    "office-ui-fabric": officeUiFabric
};
const CACHE = Object.create(null);

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

    /**
     * Fetches a given svg Icon from the given url, unless its already cached,
     * in which case, the cached value is returned
     *
     * @param {String} iconUrl
     * @returns {Promise<String, Error>}
     */
    static fetchSvg(iconUrl) {
        if (!CACHE[iconUrl]) {
            CACHE[iconUrl] = new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('load', function () {
                    if (this.status < 200 || this.status >= 300) {
                        reject(new Error(`${this.status} ${this.responseText}`));
                        return;
                    }
                    resolve(this.responseText);
                });
                request.onerror = reject;
                request.onabort = reject;
                request.open("GET", iconUrl);
                request.send();
            });
        }

        return CACHE[iconUrl];
    }

    /**
     * Sets up a Font for use in Font icons.
     *
     * @param {String} fontFaceCss
     *  The css `@font-face` definition.
     */
    static setupFont(fontFaceCss) {
        doc.head.appendChild(getStyleEle(fontFaceCss));
    }

    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~

    /**
     * The source from where the icon should be served
     * @type {string}
     */
    @prop({ attr: true })
    from = "";

    /**
     * The icons name. Source should know how ot deal with this value
     * @type {string}
     */
    @prop({ attr: true })
    name = "";

    /**
     * The icon code. Optional approach to defining an icon when using Font based icons.
     * @type {string}
     */
    @prop({ attr: true })
    code = "";

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
            this[SOURCE_STYLES] = {};
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
            props.code !== state.code ||
            props.from !== state.from
        ) {
            // If there is a source currently in use, and that source has a custom stylesheet,
            // then remove it from DOM.
            if (
                state.from &&
                this[SOURCE_STYLES][state.from]
            ) {
                this[SOURCE_STYLES][state.from].remove();
            }

            state.name = state.from = state.code = state.source = null;

            if (state.$icon) {
                if (state.$icon.parentNode) {
                    state.$icon.parentNode.removeChild(state.$icon);
                }
                state.$icon = null;
            }
        }

        if ((props.name || props.code) && props.from) {
            state.name = props.name;
            state.code = props.code;
            state.from = props.from;

            const iconSource = this.constructor.sources[props.from];

            if (iconSource) {
                state.source = iconSource;

                // If this source needs setup, do it now
                if (!iconSource[SOURCE_SETUP]) {
                    iconSource[SOURCE_SETUP] = true;

                    if ("doSetup" in iconSource) {
                        iconSource.doSetup(this.constructor);
                    }
                }

                // If this source has Styles, then set them up now for this instance
                if (!this[SOURCE_STYLES][state.from] && "getStyles" in iconSource) {
                    this[SOURCE_STYLES][state.from] = getStyleEle(iconSource.getStyles());
                }

                iconSource
                    .getIcon(this.props, this)
                    .then(this._showIconElement);
            }
        }
    }

    @bind
    _showIconElement(iconEle) {
        if (iconEle && this.props.name === this[STATE].name) {
            // If this source requires some styles to be injected, do it now
            if (this[SOURCE_STYLES][this[STATE].from]) {
                this.$ui.insertBefore(
                    this[SOURCE_STYLES][this[STATE].from],
                    this[STATE].$icon
                );
            }

            this[STATE].$icon = iconEle;
            appendChild(this.$ui, iconEle);
        }
    }
}


function getStyleEle(cssCode, id) {
    const styleEle = createElement("style");
    styleEle.type = "text/css";
    appendChild(styleEle, createTextNode(cssCode));
    if (id) {
        setAttribute(styleEle, "data-id", id);
    }
    return styleEle;
}


/**
 * An Icon Source definition
 *
 * @typedef {Object} IconSource
 *
 * @property {Function} getIcon
 *  Must return a promise that resolves to an Element that represents the icon.
 *  This icon, if not an SVG, should have a CSS class name of `i-con`
 *
 * @property {Function} doSetup
 *  Called only once to do global setup. Example: to load font-face for font icons
 *
 * @property {Function} getStyles
 *  Called to get styles for the icon.
 */

export default Icon;
