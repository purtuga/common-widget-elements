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


/**
 * A popup widget that will be displayed and position relative to a another element
 *
 * @property {Boolean} show
 * @property {String|Element} for
 * @property {Boolean} autoClose
 *  When set to `true` and a click event is detected outside of the popup,
 *  the popup will be automatically closed
 *
 * @example
 *
 * const popup = document.createElement("pop-up");
 * popup.innerHTML = `<h1>Hello</h1>`;
 * popup.for = document.querySelector("a#show");
 * document.body.appendChild(popup);
 * popup.show = true;
 *
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
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

    background-color: white;
    position: absolute;
    padding: 0.5em;
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
    @prop({required: true, attr: true})
    set for(value) {
        if (value && "string" === typeof value) {
            return document.querySelector(value);
        }
        return value;
    }


    @prop({boolean: true})
    get show() {}


    @prop({boolean: true})
    get autoClose() {};


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    init() {
        this._showPropWas = this.props.show;
        this._bodyEv = null;
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
            domPosition(this, this.for/*, options */);

            // Auto close?
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

        this._showPropWas = this.show;
    }
}

export default Popup;
