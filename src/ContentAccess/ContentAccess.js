import {ComponentElement, STATE_SYMBOL, prop, bind} from "@purtuga/component-element/src/index.js"
import {domAddEventListener} from "@purtuga/common/src/domutils/domAddEventListener.js"
import {domInsertBefore} from "@purtuga/common/src/domutils/domInsertBefore.js"


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
 *
 * @example
 *
 *      <content-access block on-parent></content-access>
 */
export class ContentAccess extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static tagName = "content-access";

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
     * Attribute that when present on the element, will make this
     * element visible and content around it (same parent) non-accessible
     *
     * @property
     * @type Boolean
     */
    @prop({attr: true, boolean: true})
    get block() { return false; }


    /**
     * When attribute present on element, then the behaviour of this component
     * changes to making it `position:absolute` and to fill the parent's space.
     * The tab control is applied to all content of the parent element.
     * Also: Any content (elements) placed inside of the `content-access` will
     * be visible and accessible to the user - similar to how modal dialogs work.
     *
     * @property
     * @type Boolean
     */
    @prop({attr: true, boolean: true})
    get onParent() { return false; }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    didInit() {
        this[STATE_SYMBOL] = {
            [INTERCEPTOR_TOP_1]: null,
            [INTERCEPTOR_TOP_2]: null,
            [INTERCEPTOR_BOTTOM_1]: null,
            [INTERCEPTOR_BOTTOM_2]: null,
            isRefocusing: false
        };
        this.onPropsChange(this._handleBlock, "block");
        this.onPropsChange(this._handleBlock, "onParent");
        domAddEventListener(this, "click", this);
    }


    // called when element is attached to dom
    didMount() {
        this._handleBlock();
    }

    willRender() {
        return !this._renderDone;
    }

    render() {
        this._renderDone = true;

        return `
<style>
    :host {
        display: inline-block;
        box-sizing: border-box;
    }
    :host([on-parent]) {
        display: none;
    }
    :host([on-parent]) .content {
        position:relative;
        z-index: 1;
        max-height: 100%;
        max-width: 100%;
        overflow: auto;
    }
    :host([on-parent]),
    .modal {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
    }
    .modal {
        background: lightgrey;
        background: var(--theme-color-1, lightgrey);
        opacity: 0.6;
    }
    :host([block][on-parent]) {
        display: block;
    }
    /*:host([on-parent]) .modal,*/
    :host(:not([on-parent]):not([block])) .modal {
        display: none;
    }
    :host([block]:not([on-parent])) {
        position: relative;
    }
</style>
<div class="content">
    <slot></slot>
</div>
<div class="modal"></div>
`;
    }

    didDestroy() {
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

        } else if (ev.type === "click" && this.block && !this.onParent) {
            this[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1].focus();
        }
    }
}

function insertTabInterceptors (inst) {
    if (inst.parentNode) {
        if (!inst[STATE_SYMBOL][INTERCEPTOR_TOP_1]) {
            createTabInterceptorElements(inst);
        }

        if (inst.onParent) {
            domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_2], inst.parentNode.firstChild);
            domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_1], inst.parentNode.firstChild);

            inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_2]);
            inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1]);
        }
        else {
            domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_1], inst);
            domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_2], inst);

            if (inst.nextSibling) {
                domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1], inst.nextSibling);
                domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_2], inst.nextSibling);

            } else {
                inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_2]);
                inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1]);
            }
        }

    }
}

function removeTabInterceptors(inst) {
    if (inst[STATE_SYMBOL][INTERCEPTOR_TOP_1]) {
        INTERCEPTOR_LIST.forEach(interceptorEle => inst[STATE_SYMBOL][interceptorEle].parentNode && inst[STATE_SYMBOL][interceptorEle].parentNode.removeChild(inst[STATE_SYMBOL][interceptorEle]));
    }
}

function createTabInterceptorElements(inst) {
    if (!inst[STATE_SYMBOL][INTERCEPTOR_TOP_1]) {
        INTERCEPTOR_LIST.forEach(name => {
            inst[STATE_SYMBOL][name] = document.createElement("a");
            inst[STATE_SYMBOL][name].innerText = "-";
            inst[STATE_SYMBOL][name]._role = name;
            inst[STATE_SYMBOL][name].setAttribute("_role", name);
            inst[STATE_SYMBOL][name].setAttribute("tabindex", "0");
            inst[STATE_SYMBOL][name].setAttribute("style", INTERCEPTOR_STYLES);
            domAddEventListener(inst[STATE_SYMBOL][name], "focus", inst);
        });
    }
}

export default ContentAccess;
