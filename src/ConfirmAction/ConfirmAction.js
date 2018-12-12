import {ComponentElement, prop, bind} from "@purtuga/component-element/src/index.js"
import {domToggleClass} from "@purtuga/common/src/domutils/domToggleClass.js";
import {domAddClass} from "@purtuga/common/src/domutils/domAddClass.js";
import {domAddEventListener} from "@purtuga/common/src/domutils/domAddEventListener.js";
import {hasAttribute} from "@purtuga/common/src/jsutils/runtime-aliases.js";

//=============================================================

/**
 * Provides the user with a confirmation upon clicking the component that
 * allows them to either proceed or cancel
 *
 * __SUPPORTED CSS VARS__
 *
 * tbd...
 *
 * @extends ComponentElement
 *
 * @property disabled
 *
 * @fires ConfirmAction#confirmed
 */
class ConfirmAction extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static tagName = "confirm-action";

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

    @prop({ boolean: true }) disabled = false;

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~

    // didInit(){}
    // didMount(){}

    willRender(){
        return !this._renderDone;
    }

    render() {
        if (this._renderDone) {
            return;
        }

        return `
<style>
    :host {
        --yes-bg: var(--theme-color-accent-success-0, #b6eeb5);
        --yes-bg-hover: var(--theme-color-accent-success-1, #9ecf99);
        --no-bg: transparent;
        --no-bg-hover: var(--theme-color-1, #e8e8e8);
    
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        font-family: var(--theme-font-family, Arial);
        color: var(--theme-color-fg, black);
        padding: var(--theme-spacing-1, 0.2em);
    }
    .action {
        cursor: pointer;
    }
    .confirm {
        display: flex;
        align-content: space-between;
        position: absolute;
        white-space: nowrap;
        background-color: var(--theme-color-bg, white);
        color: var(--theme-color-fg);
        border: var(--theme-border-light, 1px solid lightgrey);
        left: -1px;
        top: -1px;
        height: 102%;
        min-width: 102%;
        max-width: var(--confirm-width, 300px);
        user-select: none;
        overflow: hidden;
    }
    .confirm > * {
        padding: var(--theme-spacing-1, 0.2em);
    }
    :host([confirm-align-right]) .confirm {
        left: auto;
        right: -1px;
    }
    .hide {
        display: none;
    }
    .msg {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .no,
    .yes {
        padding-left: var(--theme-spacing, 0.5em);
        padding-right: var(--theme-spacing, 0.5em);
        transition: background-color 0.3s;
    }
    .no {
        background-color: var(--no-bg);
    }
    .no:hover {
        background-color: var(--no-bg-hover);
    }
    .yes {
        background-color: var(--yes-bg);
    }
    .yes:hover {
        background-color: var(--yes-bg-hover);
    }

    :host([disabled]) {
        opacity: 0.3;
        pointer-events: none;
    }
    :host([disabled]) .action {
        cursor: auto;
    }
</style>
<span class="action"><slot>&#9654;</slot></span>
<div class="confirm hide">
    <span class="msg">
        <slot name="message">Proceed?</slot>
    </span>
    <span class="no action">
        <slot name="cancel">No</slot>
    </span>
    <span class="yes action">
        <slot name="confirm">Yes</slot>
    </span>
</div>`;
    }

    didRender() {
        if (!this._renderDone) {
            this._renderDone = true;
            this._$confirm = this.$(".confirm");
            domAddEventListener(this.$(".action"), "click", this._handleShowHideConfirm);
            domAddEventListener(this.$(".yes"), "click", this._handleConfirm);
            domAddEventListener(this.$(".no"), "click", this._handleShowHideConfirm);
            this.onPropsChange(this._handlePropsChange, "disabled");
        }
    }

    // didUnmount() {}
    // didDestroy() {}

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  INSTANCE METHODS  ~~~~

    @bind
    _handlePropsChange() {
        if (this.props.disabled) {
            domAddClass(this._$confirm, "hide");
        }
    }

    @bind
    _handleShowHideConfirm() {
        if (!hasAttribute(this, "disabled")) {
            domToggleClass(this._$confirm, "hide");
        }
    }

    @bind
    _handleConfirm() {
        /**
         * The action has been confirmed by the user
         *
         * @event ConfirmAction#confirmed
         */
        this.emit("confirmed");
        this._handleShowHideConfirm();
    }

}

//-------------------------------------------------------------
//
//                                       CLASS PRIVATE MEMBERS
//
//-------------------------------------------------------------

// Private functions here...

//------------------------------------------ EXPORTS ----------
export default ConfirmAction;
export {
    ConfirmAction
}
