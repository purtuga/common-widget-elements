import {ComponentElement, prop, bind} from "component-element"
import domPosition from "common-micro-libs/src/domutils/domPosition";
import domAddEventListener from "common-micro-libs/src/domutils/domAddEventListener";

//=====================================================================================
const removeBodyEvent = eleInst => {
    if (eleInst._bodyEv) {
        eleInst._bodyEv.remove();
        eleInst._bodyEv = null;
    }
};


// FIXME: Support for `show` and `hide` events
// FIXME: re-define configurable css var()'s



/**
 * A popup widget that will be displayed and position relative to a another element
 *
 * ## Styling
 * The following variables are used for styling:
 *
 *      --theme-box-shadow
 *      --theme-color-light
 *      --theme-spacing-2
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
    static get tagName() {
        return "pop-up";
    }


    static get template() {
        return `
<style>
:host {
    box-sizing: border-box;
    box-shadow: var(
        --theme-box-shadow, 
        0 8px 10px 1px rgba(0,0,0,0.14),
        0 3px 14px 2px rgba(0,0,0,0.12), 
        0 5px 5px -3px rgba(0,0,0,0.2)
    );

    background-color: var(--theme-color-light, white);
    color: var(--theme-color-dark, black);
    position: absolute;
    padding: var(--theme-spacing-2, 0.5em);
    min-height: 2em;
    width: 15em;
    max-height: 15em;
    z-index: 5000;
    overflow: auto;
    display: none;
}
:host::-webkit-scrollbar {
    width:              0.5em;
    background-color:   #F5F5F5;
}
:host::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color  : #555;
}
:host([show]) {
    display: block;
}
</style>
<div><slot></slot></div>`;
    }

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

    /**
     *
     * @param value
     * @returns {*}
     */
    @prop({required: true, attr: true})
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
    get show() {}


    /**
     * If Popup shuld be auto closed when user clicks outside of its content.
     *
     * @property {Boolean} autoClose
     */
    @prop({boolean: true})
    get autoClose() {};


    /**
     * The edge of the popup that should be used when position it next to the
     * `for` element. Default is `top left`.
     * See `common-micro-libs/src/domUtils/domPosition` for other possible values
     *
     * @property {string} my
     */
    @prop({attr: true})
    get my() { return "top left"; }


    /**
     * The edge of the `for` element that will be used to position the popup against.
     * Default is `bottom left`.
     * See `common-micro-libs/src/domUtils/domPosition` for other possible values
     *
     * @property {string} at
     */
    @prop({attr: true})
    get at() { return "bottom left"; }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    init() {
        // this._forPropWas = this.props.for;
        this._bodyEv = null;
        this.onPropsChange(this.position, "at");
        this.onPropsChange(this.position, "my");
    }

    // Called when all required `props` have been provided
    ready() {
        this.onPropsChange(this._handleShowProp);
        this._handleShowProp();
        this.onDestroy(() => removeBodyEvent(this));
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    @bind
    _handleShowProp(){
        if (this.for && this.show) {
            this.position();

            // Auto close? then setup body event
            if (this.autoClose && !this._bodyEv) {
                setTimeout(() => {
                    this._bodyEv = domAddEventListener(document.body, "click", ev => {
                        if (!this.$ui.contains(ev.target)) {
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

        // FIXME: Handle changing the `for` value - would reposition popup
        // this._forPropWas = this.for;
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
