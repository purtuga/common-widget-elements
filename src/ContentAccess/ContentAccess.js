import {ComponentElement, STATE_SYMBOL, prop, bind} from "component-element"
import {domAddEventListener} from "common-micro-libs/src/domutils/domAddEventListener"


//=========================================================================
const INTERCEPTOR_TOP_1 = "topTabInterceptor1";
const INTERCEPTOR_TOP_2 = "topTabInterceptor2";

const INTERCEPTOR_BOTTOM_1 = "bottomTabInterceptor1";
const INTERCEPTOR_BOTTOM_2 = "bottomTabInterceptor2";

const INTERCEPTOR_LIST = [
    INTERCEPTOR_TOP_1,
    INTERCEPTOR_TOP_2,
    INTERCEPTOR_BOTTOM_2,
    INTERCEPTOR_BOTTOM_1
];

const INTERCEPTOR_STYLES = "outline: none !important;display:block !important;height:1px !important;width:1px !important;color:transparent !important;position:absolute !important;left:-9999999px !important;top:-99999999px !important;z-index:-1 !important;";

/**
 * Custom Element that, when visible, makes its self as large as its parent content
 * (driven by the first positioned element) and prevents access to any element that
 * is a child of the same parent to this element.
 *
 * @extends ComponentElement
 */
export class ContentAccess extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static get tagName() {
        return "content-access";
    }

    static get template() {
        return `
<style>
    :host {
        display: none;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        background: lightgrey;
        background: var(--theme-color-1, lightgrey);
        opacity: 0.5;
    }
    :host([block]) {
        display: block;
    }
</style>
<slot></slot>
`;
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
    @prop({attr: true, boolean: true})
    get block() {}


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    init() {
        this[STATE_SYMBOL] = {
            [INTERCEPTOR_TOP_1]: null,
            [INTERCEPTOR_TOP_2]: null,
            [INTERCEPTOR_BOTTOM_1]: null,
            [INTERCEPTOR_BOTTOM_2]: null,
            isRefocusing: false
        };
        this.onPropsChange(this._handleBlock, "block");
        domAddEventListener(this, "click", this);
    }


    // Called when all required `props` have been provided
    // ready() {}

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    mounted() {
        this._handleBlock();
    }

    // called when element is removed from dom
    // unmounted() {}

    destroy() {
        super.destroy();
        removeTabInterceptors(this);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    @bind
    _handleBlock() {
        if (this.block) {
            insertTabInterceptors(this);
        } else {
            removeTabInterceptors(this);
        }
    }

    handleEvent(ev) {
        if (this.block && ev.type === "focus" && ev.target._role && !this[STATE_SYMBOL].isRefocusing) {
            this[STATE_SYMBOL].isRefocusing = true;
            switch (ev.target._role) {
                // Focusing from the top: send focus to bottom
                case INTERCEPTOR_TOP_1:
                case INTERCEPTOR_TOP_2:
                    this[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1].focus();
                    break;

                // Focusing from the bottom: send focus to top
                case INTERCEPTOR_BOTTOM_1:
                case INTERCEPTOR_BOTTOM_2:
                    this[STATE_SYMBOL][INTERCEPTOR_TOP_1].focus();
                    break;
            }
            this[STATE_SYMBOL].isRefocusing = false;

        } else if (ev.type === "click" && this.block) {
            this[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1].focus();
        }
    }
}

function insertTabInterceptors (inst) {
    if (inst.parentNode) {
        if (!inst[STATE_SYMBOL].topTabInterceptors) {
            createTabInterceptorElements(inst);
        }
        inst.parentNode.insertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_2], inst.parentNode.firstChild);
        inst.parentNode.insertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_1], inst.parentNode.firstChild);

        inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_2]);
        inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1]);
    }
}

function removeTabInterceptors(inst) {
    if (inst[STATE_SYMBOL].topTabInterceptor1) {
        INTERCEPTOR_LIST.forEach(interceptorEle => inst[STATE_SYMBOL][interceptorEle].parentNode && inst[STATE_SYMBOL][interceptorEle].parentNode.removeChild(inst[STATE_SYMBOL][interceptorEle]));
    }
}

function createTabInterceptorElements(inst) {
    if (!inst[STATE_SYMBOL].topTabInterceptor1) {
        INTERCEPTOR_LIST.forEach(name => {
            inst[STATE_SYMBOL][name] = document.createElement("a");
            inst[STATE_SYMBOL][name].innerText = "-";
            inst[STATE_SYMBOL][name]._role = name;
            inst[STATE_SYMBOL][name].setAttribute("tabindex", "0");
            inst[STATE_SYMBOL][name].setAttribute("style", INTERCEPTOR_STYLES);
            domAddEventListener(inst[STATE_SYMBOL][name], "focus", inst);
        });
    }
}


export default ContentAccess;
