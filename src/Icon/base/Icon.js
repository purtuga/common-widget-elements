import {
    ComponentElement,
    prop,
    bind
} from "@purtuga/component-element/src/index.js"
import {
    appendChild,
    createElement,
    createTextNode,
    setAttribute,
    doc
} from "@purtuga/common/src/jsutils/runtime-aliases.js";

//=============================================================
const SOURCE_SETUP = Symbol("SOURCE_SETUP");
const SOURCE_STYLES = Symbol("SOURCE_STYLES");
const STATE = Symbol("STATE");
const SOURCES = {};
const CACHE = Object.create(null);

// Aliases
const fromCharCode = String.fromCharCode;

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
    static tagName = "i-con";

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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC METHODS ~~~~~

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

    /**
     * Given an HEX Unicode codepoint, returns UTF16 surrogate pairs.
     *
     * @param   string  generic codepoint, i.e. '1F4A9'
     * @return  string  codepoint transformed into utf16 surrogates pair,
     *          i.e. \uD83D\uDCA9
     *
     * @link https://unpkg.com/twemoji@11.2.0/2/twemoji.js
     *
     * @example
     *  twemoji.convert.fromCodePoint('1f1e8');
     *  // "\ud83c\udde8"
     *
     *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
     *  // "\ud83c\udde8\ud83c\uddf3"
     */
    static fromCodePoint(codepoint) {
        // From: https://unpkg.com/twemoji@11.2.0/2/twemoji.js
        //       But changed to string up `U+` if its present in the given value

        // TODO: should we momoize?
        var code = typeof codepoint === 'string' ?
            parseInt(codepoint.replace(/U\+/i, ""), 16) : codepoint;
        if (code < 0x10000) {
            return fromCharCode(code);
        }
        code -= 0x10000;
        return fromCharCode(
            0xD800 + (code >> 10),
            0xDC00 + (code & 0x3FF)
        );
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

    didInit() {
        if (!this[STATE]) {
            this[STATE] = {
                $icon: null,
                from: null,
                name: null
            };
            this[SOURCE_STYLES] = {};
            this.onPropsChange(this._handlePropChanges);
        }
    }

    willRender() {
        return this._renderDone;
    }

    render() {
        this._renderDone = true;

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
    :host([size=xl]) {
        width: 3.75rem;
        height: 3.75rem;
    }
    :host([size=xl]) .i-con-font {
        font-size: 3.75rem;
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

    didRender() {
        this._handlePropChanges();
    }

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
            // If iconEle is a documentFragment, then use only its first element
            // TODO: maybe in the future support everything in the fagment
            if (iconEle.nodeType === 11) {
                iconEle = iconEle.firstChild;

                if (!iconEle) {
                    return;
                }
            }

            this[STATE].$icon = iconEle;
            appendChild(this.$ui, iconEle);

            // If this source requires some styles to be injected, do it now
            if (this[SOURCE_STYLES][this[STATE].from]) {
                this.$ui.insertBefore(
                    this[SOURCE_STYLES][this[STATE].from],
                    this[STATE].$icon
                );
            }
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
