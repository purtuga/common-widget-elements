import {ComponentElement, prop, bind} from "@purtuga/component-element/src/index.js"
import domPosition from "@purtuga/common/src/domutils/domPosition.js";
import domAddEventListener from "@purtuga/common/src/domutils/domAddEventListener.js";

//=====================================================================================
const removeBodyEvent = eleInst => {
    if (eleInst._docEv && eleInst._docEv.remove) {
        eleInst._docEv.remove();
    }
    eleInst._docEv = null;
};


// FIXME: Support for `show` and `hide` events


/**
 * A popup widget that will be displayed and position relative to a another element
 *
 * ### Styling
 * The following variables are used for styling:
 *
 *      --theme-box-shadow
 *      --theme-color-bg    (background)
 *      --theme-color-fg    (forground color for text)
 *      --theme-spacing-2   (all round padding)
 *      --theme-color-1     (scrollbar background)
 *      --theme-color-6     (scrollbar thumb)
 *
 * @example
 *
 * const popup = document.createElement("pop-up");
 * popup.innerHTML = `<h1>Hello</h1>`;
 * popup.for = document.querySelector("a#show");
 * document.body.appendChild(popup);
 * popup.show = true;
 */
export class Popup extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static tagName = "pop-up";

    // static get delayDestroy() {}
    // static get useShadow() {}
    // static get shadowMode() {}
    // static getEventInitOptions(){}

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC METHODS ~~~~~

    // static define(name) {}


    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~

    /**
     * The element that the popup is for. Could be a css selector (String)
     * or a HTML Element.
     * @property
     * @type {String|HTMLElement}
     */
    @prop({attr: true})
    set for(value) {
        if (value && "string" === typeof value) {
            return document.querySelector(value);
        }
        return value;
    }

    /**
     * When set to `true`, popup will be made visible.
     *
     * @property {Boolean} show
     */
    @prop({boolean: true})
    get show() { return false; }


    /**
     * If Popup should be auto closed when user clicks outside of its content.
     *
     * @property {Boolean} autoClose
     */
    @prop({boolean: true})
    get autoClose() { return false; }


    /**
     * The edge of the popup that should be used when position it next to the
     * `for` element. Default is `top left`.
     * See `@purtuga/common/src/domUtils/domPosition` for other possible values
     *
     * @property {string} my
     */
    @prop({attr: true})
    get my() { return "top left"; }


    /**
     * The edge of the `for` element that will be used to position the popup against.
     * Default is `bottom left`.
     * See `@purtuga/common/src/domUtils/domPosition` for other possible values
     *
     * @property {string} at
     */
    @prop({attr: true})
    get at() { return "bottom left"; }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    didInit() {
        this._docEv = null;
        this.onPropsChange(this.position, "at");
        this.onPropsChange(this.position, "my");
        this.onPropsChange(this._handleShowProp);
    }

    willRender() {
        return !this._renderDone;
    }

    render() {
        this._renderDone = true;

        return `
<style>
:host {
    box-sizing: border-box;
    position: absolute;
    min-height: 2em;
    width: 15em;
    max-height: 15em;
    z-index: 5000;
    overflow: auto;
    display: none;

    border: var(--theme-border, 1px solid);
    border-color: var(--theme-color-1, #ECECEC);

    box-shadow: var(--theme-box-shadow, 
        0 8px 10px 1px rgba(0,0,0,0.14),
        0 3px 14px 2px rgba(0,0,0,0.12),
        0 5px 5px -3px rgba(0,0,0,0.2));

    background-color: white;
    background-color: var(--theme-color-bg, white);

    color: black;
    color: var(--theme-color-fg, black);

    padding: 0.5em;
    padding: var(--theme-spacing-2, 0.5em);
}
:host::-webkit-scrollbar {
    width:              0.5em;
    background-color:   var(--theme-color-1, #F5F5F5);
}
:host::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color  : var(--theme-color-6, #555);
}
:host([show]) {
    display: block;
}
</style>
<div><slot></slot></div>`;
    }

    didRender() {
        this._handleShowProp();
    }

    didUnmount() {
        removeBodyEvent(this);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    @bind
    _handleShowProp(){
        if (this.for && this.show) {
            this.position();

            // Auto close? then setup body event
            if (this.autoClose && !this._docEv) {
                this._docEv = true;
                setTimeout(() => {
                    this._docEv = domAddEventListener(document, "click", ev => {
                        if (!this.contains(ev.target)) {
                            // FIXME: support onHide callback? maybe event?

                            removeBodyEvent(this);
                            this.show = false;
                        }
                    });
                }, 200);
            }
        }
        else {
            removeBodyEvent(this);
        }
    }

    /**
     * Positions the popup against the current `for` element.
     */
    @bind
    position() {
        if (this.for && this.show) {
            const options = {}; // FIXME: move this to a computed prop
            if (this.my) {
                options.my = this.my
            }
            if (this.at) {
                options.at = this.at;
            }
            domPosition(this, this.for, options);
        }
    }
}

export default Popup;
