!function(root, factory) {
    "object" === typeof exports && "object" === typeof module ? module.exports = factory() : "function" === typeof define && define.amd ? define([], factory) : "object" === typeof exports ? exports.CommonWidgetElements = factory() : root.CommonWidgetElements = factory();
}("undefined" !== typeof self ? self : this, function() {
    /******/
    return function(modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;
        }
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
            });
        };
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            __webpack_require__.d(getter, "a", getter);
            /******/
            return getter;
        };
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 9);
    }([ /* 0 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export functionBind */
        /* unused harmony export functionBindCall */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return objectDefineProperty;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return objectDefineProperties;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "f", function() {
            return objectKeys;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return isArray;
        });
        /* unused harmony export arrayForEach */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return arrayIndexOf;
        });
        /* unused harmony export arraySplice */
        /* unused harmony export consoleLog */
        /* unused harmony export consoleError */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return SymbolIterator;
        });
        // Function
        // functionBind(fn, fnParent)
        var functionBind = Function.bind.call.bind(Function.bind);
        // usage: functionBindCall(Array.prototype.forEach) // generates a bound function to Array.prototype.forEach.call
        var functionBindCall = functionBind(Function.call.bind, Function.call);
        // Object
        var objectDefineProperty = Object.defineProperty;
        var objectDefineProperties = Object.defineProperties;
        var objectKeys = Object.keys;
        // Array
        var arr = [];
        var isArray = Array.isArray;
        functionBindCall(arr.forEach);
        var arrayIndexOf = functionBindCall(arr.indexOf);
        functionBindCall(arr.splice);
        // Logging
        var consoleLog = console.log;
        console.error;
        // Iterators
        var SymbolIterator = "undefined" !== typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }, /* 1 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export objectExtend */
        var OBJECT_TYPE = "[object Object]";
        var _toString = Function.call.bind(Object.prototype.toString);
        //============================================================
        /**
 * Extends an object with the properties of another.
 *
 * @param {Object|Boolean} mergeIntoObj
 *  The object that will have the properties of every other object provided
 *  on input merged into. This can also be a `Boolean`, in which case,
 *  a deep merge of objects will be done - argument number 2 will
 *  become the `mergeIntoObj`.
 * @param {...Object} mergeObjects
 *
 * @return {Object}
 */
        function objectExtend(mergeIntoObj) {
            var response = mergeIntoObj || {};
            for (var _len = arguments.length, mergeObjects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) mergeObjects[_key - 1] = arguments[_key];
            var total = mergeObjects.length;
            var deepMerge = false;
            var i = void 0;
            var key = void 0;
            if ("boolean" === typeof mergeIntoObj) {
                deepMerge = mergeIntoObj;
                response = mergeObjects.shift() || {};
                total = mergeObjects.length;
            }
            for (i = 0; i < total; i++) {
                if (!mergeObjects[i]) continue;
                for (key in mergeObjects[i]) mergeObjects[i].hasOwnProperty(key) && (deepMerge && _toString(response[key]) === OBJECT_TYPE && _toString(mergeObjects[i][key]) === OBJECT_TYPE ? response[key] = objectExtend(true, response[key], mergeObjects[i][key]) : response[key] = mergeObjects[i][key]);
            }
            return response;
        }
        /* harmony default export */
        __webpack_exports__.a = objectExtend;
    }, /* 2 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return PRIVATE;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return STATE_SYMBOL;
        });
        /* harmony export (immutable) */
        __webpack_exports__.c = elementHasAttributeForProp;
        /* harmony export (immutable) */
        __webpack_exports__.d = geAttributeValueForProp;
        /* harmony export (immutable) */
        __webpack_exports__.j = getState;
        /* harmony export (immutable) */
        __webpack_exports__.h = getKebabCase;
        /* unused harmony export getCamelCase */
        /* harmony export (immutable) */
        __webpack_exports__.i = getPropsDefinition;
        /* harmony export (immutable) */
        __webpack_exports__.e = getComponentClassState;
        /* harmony export (immutable) */
        __webpack_exports__.f = getComponentInstanceTemplate;
        /* harmony export (immutable) */
        __webpack_exports__.g = getComponentTemplate;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_dataStore__ = __webpack_require__(14);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__ = __webpack_require__(7);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_common_micro_libs_src_jsutils_Symbol__ = __webpack_require__(15);
        //============================================================================
        var PRIVATE = __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_dataStore__.a.create();
        var STATE_SYMBOL = Object(__WEBPACK_IMPORTED_MODULE_4_common_micro_libs_src_jsutils_Symbol__.a)("state");
        /**
 * Checks if the element has an attribute set that matches any of the aliases for a prop
 *
 * @param {ComponentElement} ele
 * @param {ComponentElement~PropDefinition} propDef
 *
 * @return {Boolean}
 */
        function elementHasAttributeForProp(ele, propDef) {
            return propDef.aliases.some(function(propAlias) {
                return ele.hasAttribute(propAlias);
            });
        }
        function geAttributeValueForProp(ele, propDef) {
            var attrVal = "";
            propDef.aliases.some(function(propAlias) {
                if (ele.hasAttribute(propAlias)) {
                    attrVal = ele.getAttribute(propAlias);
                    return true;
                }
            });
            return attrVal;
        }
        function getState(instance) {
            if (!PRIVATE.has(instance)) {
                var state = {
                    ready: false,
                    // We have all required params
                    readyWatcher: null,
                    props: instance.props,
                    destroyCallbacks: [],
                    destroyQueued: null,
                    isMounted: false,
                    hasTemplate: false
                };
                // Create all props
                var propDefintions = getPropsDefinition(instance.constructor);
                var required = Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.f)(propDefintions).filter(function(propName) {
                    return !propDefintions[propName]._isAlias && propDefintions[propName].required;
                });
                var setReadyState = function() {
                    !required.length || required.every(function(propName) {
                        return !!state.props[propName];
                    }) ? state.ready = true : state.ready = false;
                };
                required.forEach(function(propName) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.a)(state.props, propName, setReadyState);
                });
                setReadyState();
                PRIVATE.set(instance, state);
            }
            return PRIVATE.get(instance);
        }
        /**
 * Returns a kebab-case representation of the given string on input. Essentially, replaces
 * each Capital letter with a `-` followed by that letter in lower case.
 *
 * @param {String} str
 *
 * @return {String}
 *
 * @example
 *
 * getKebabCase("Paul"); // => -paul
 * getKebabCase("paulTavares"); // => paul-tavares
 */
        function getKebabCase(str) {
            return str.replace(/([A-Z])/g, function(match, p1) {
                return "-" + p1.toLowerCase();
            });
        }
        /**
 *
 * @param ComponentClass
 * @returns {Object<String,ComponentElement~PropDefinition>}
 */
        function getPropsDefinition(ComponentClass) {
            var state = getComponentClassState(ComponentClass);
            if (!state.propsDef) {
                state.propsDef = {};
                // The props are stored internally (weakmap) once for the Component Class.
                // The internal definition has the "aliases" expanded as well.
                ComponentClass.propsDef && Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.f)(ComponentClass.propsDef).forEach(function(propName) {
                    state.propsDef[propName] = ComponentClass.propsDef[propName];
                    // expand aliases as well
                    if (Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.c)(state.propsDef[propName].aliases)) {
                        var propAliasDef = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)({}, ComponentClass.propsDef[propName], {
                            _isAlias: true
                        });
                        state.propsDef[propName].aliases.forEach(function(propNameAlias) {
                            return !state.propsDef[propNameAlias] && (state.propsDef[propNameAlias] = propAliasDef);
                        });
                    }
                });
            }
            return state.propsDef;
        }
        /**
 * Returns the internal state for the Component Class
 *
 * @param {ComponentElement} ComponentClass
 *
 * @return {Object}
 */
        function getComponentClassState(ComponentClass) {
            PRIVATE.has(ComponentClass) || PRIVATE.set(ComponentClass, {
                propsDef: null,
                template: null,
                observedAttrs: null
            });
            return PRIVATE.get(ComponentClass);
        }
        /**
 * Returns a clone of the Class's template - ready to be used/inserted
 * into a instance of the class
 *
 * @param {ComponentElement} componentInstance
 *
 * @return {HTMLElement}
 */
        function getComponentInstanceTemplate(componentInstance) {
            return componentInstance.ownerDocument.importNode(getComponentTemplate(componentInstance.constructor).content, true);
        }
        /**
 * Returns a `HTMLTemplateElement` that holds the ComponentElement's template
 *
 * @param {ComponentElement} Component
 *  The ComponentElement class
 *
 * @return {HTMLTemplateElement}
 */
        function getComponentTemplate(Component) {
            if ("string" === typeof Component.template) {
                var classState = getComponentClassState(Component);
                if (!classState.template) {
                    classState.template = document.createElement("template");
                    classState.template.innerHTML = Component.template;
                }
                return classState.template;
            }
            return Component.template;
        }
    }, /* 3 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                return GLOBAL;
            });
            /* unused harmony export getGlobal */
            var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var GLOBAL = function() {
                /* global self, window, global */
                if ("undefined" !== ("undefined" === typeof window ? "undefined" : _typeof(window))) return window;
                if ("undefined" !== ("undefined" === typeof global ? "undefined" : _typeof(global))) return global;
                if ("undefined" !== ("undefined" === typeof self ? "undefined" : _typeof(self))) return self;
                return Function("return this;")();
            }();
        }).call(__webpack_exports__, __webpack_require__(12));
    }, /* 4 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.b = domAddEventListener;
        /**
 * Adds an event handler to a DOM element and returns back an
 * object that allows for removal of the event.
 *
 * @function domAddEventListener
 *
 * @param {HTMLElement} ele
 * @param {String} event
 *  The event to listen to (ex. `click`). Multiple events can be defined
 *  by separating them with whitespace
 * @param {Function} callback
 * @param {Boolean} [capture]
 *
 * @return DOMEventListener
 *
 * @example
 *
 * var listener = domAddEventHandler(myEle, "click", function(){});
 * ...
 * listener.remove();
 */
        function domAddEventListener(ele, event, callback, capture) {
            var events = event.split(/\s+/);
            var evListeners = {};
            events.forEach(function(evName) {
                ele.addEventListener(evName, callback, capture);
                evListeners[evName] = {
                    remove: function() {
                        return ele.removeEventListener(evName, callback, capture);
                    }
                };
            });
            /**
     * A DOM Event listener.
     *
     * @typedef {Object} DOMEventListener
     *
     * @property {Function} remove
     * @property {Object} listeners
     *  List of listeners that were bound to the DOM element. Each listeners has a
     *  corresponding `.remove()` method.
     */
            return Object.create({
                listeners: evListeners,
                remove: function() {
                    events.forEach(function(evName) {
                        return evListeners[evName].remove();
                    });
                }
            });
        }
        /* harmony default export */
        __webpack_exports__.a = domAddEventListener;
    }, /* 5 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__ComponentElement__ = __webpack_require__(6);
        /* harmony namespace reexport (by used) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return __WEBPACK_IMPORTED_MODULE_0__ComponentElement__.a;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__decorators_prop__ = __webpack_require__(17);
        /* harmony namespace reexport (by used) */
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return __WEBPACK_IMPORTED_MODULE_1__decorators_prop__.a;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__decorators_bind__ = __webpack_require__(18);
        /* harmony namespace reexport (by used) */
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return __WEBPACK_IMPORTED_MODULE_2__decorators_bind__.a;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
        /* unused harmony reexport getState */
        /* unused harmony reexport getComponentTemplate */
        /* unused harmony reexport getComponentInstanceTemplate */
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return __WEBPACK_IMPORTED_MODULE_3__utils__.b;
        });
    }, /* 6 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return ComponentElement;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__ = __webpack_require__(7);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_domutils_domAddEventListener__ = __webpack_require__(4);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__polyfill_support__ = __webpack_require__(16);
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    "value" in descriptor && (descriptor.writable = true);
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                protoProps && defineProperties(Constructor.prototype, protoProps);
                staticProps && defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        var _fixBabelExtend = function(O) {
            var gPO = O.getPrototypeOf || function(o) {
                return o.__proto__;
            }, sPO = O.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            }, construct = "object" === ("undefined" === typeof Reflect ? "undefined" : _typeof(Reflect)) ? Reflect.construct : function(Parent, args, Class) {
                var Constructor, a = [ null ];
                a.push.apply(a, args);
                Constructor = Parent.bind.apply(Parent, a);
                return sPO(new Constructor(), Class.prototype);
            };
            return function(Class) {
                var Parent = gPO(Class);
                return sPO(Class, sPO(function() {
                    return construct(Parent, arguments, gPO(this).constructor);
                }, Parent));
            };
        }(Object);
        //============================================================================
        var SHADOW_DOM_SUPPORTED = document.head.createShadowRoot || document.head.attachShadow;
        var EV_DEFAULT_INIT = {
            bubbles: false,
            cancelable: false,
            composed: false
        };
        /**
 * A generic class for building widgets based on HTML Custom Elements.
 *
 * @extends HTMLElement
 *
 */
        var ComponentElement = _fixBabelExtend(function(_HTMLElement) {
            _inherits(ComponentElement, _HTMLElement);
            function ComponentElement() {
                var _ref;
                var _this, _ret;
                _classCallCheck(this, ComponentElement);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                var self = (_this = _possibleConstructorReturn(this, (_ref = ComponentElement.__proto__ || Object.getPrototypeOf(ComponentElement)).call.apply(_ref, [ this ].concat(args))), 
                _this) || _this;
                setupComponent(self);
                return _ret = self, _possibleConstructorReturn(_this, _ret);
            }
            //==============================================================
            //  Static Members
            //==============================================================
            /**
     * The Component's props definition
     * @name propsDef
     * @type {Object<String,ComponentElement~PropDefinition>}
     */
            /**
     * Return default registration tag name
     *
     * @type {String}
     */
            _createClass(ComponentElement, [ {
                key: "attributeChangedCallback",
                //==============================================================
                //  Instance Members
                //==============================================================
                // Reflects changed html attributes to state.props
                value: function(name, oldValue, newValue) {
                    var propsDef = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this.constructor);
                    propsDef[name] && (name = propsDef[name].name);
                    this.props[name] = newValue;
                }
            }, {
                key: "destroy",
                value: function() {
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(this);
                        __WEBPACK_IMPORTED_MODULE_4__utils__.a.delete(this);
                        if (state.destroyQueued) {
                            clearTimeout(state.destroyQueued);
                            state.destroyQueued = null;
                        }
                        state.destroyCallbacks.splice(0).forEach(function(cb) {
                            return cb();
                        });
                    }
                    this.parentNode && this.parentNode.removeChild(this);
                }
            }, {
                key: "onDestroy",
                value: function(callback) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(this).destroyCallbacks.push(callback);
                }
            }, {
                key: "$",
                /**
         * Find an element in the `$ui` (alias for `querySelector()`)
         *
         * @param {String} selector
         *
         * @return {HTMLElement}
         */
                value: function(selector) {
                    return this.$ui.querySelector(selector);
                }
            }, {
                key: "$$",
                value: function(selector) {
                    var result = this.$ui.querySelectorAll(selector);
                    if (Array.isArray(result)) return;
                    return Array.prototype.slice.call(result, 0);
                }
            }, {
                key: "init",
                value: function() {}
            }, {
                key: "ready",
                value: function() {}
            }, {
                key: "unready",
                value: function() {}
            }, {
                key: "mounted",
                value: function() {}
            }, {
                key: "unmounted",
                value: function() {}
            }, {
                key: "emit",
                value: function(eventName, data, eventInit) {
                    this.dispatchEvent(new CustomEvent(eventName, Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)({}, this.constructor.eventInitOptions, eventInit, {
                        detail: data
                    })));
                }
            }, {
                key: "on",
                value: function(eventNames, callback, capture) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_domutils_domAddEventListener__.a)(this, eventNames, callback, capture);
                }
            }, {
                key: "onPropsChange",
                value: function(callback, propName) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.b)(this.props, propName, callback);
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_support__.b)(this);
                    // Cancel destroy if it is queued
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(this);
                        if (state.destroyQueued) {
                            clearTimeout(state.destroyQueued);
                            state.destroyQueued = null;
                        }
                        state.isMounted = true;
                        state.ready && this.mounted();
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(this).isMounted = true;
                        setupComponent(this);
                    }
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    // Delay calling .destroy() by 60s, just in case user re-attaches component back to dom.
                    // This seems to be currently the only way to ensure attached `onDestroy` logic run when
                    // the element is no longer needed.
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(this);
                        state.destroyQueued || (state.destroyQueued = setTimeout(this.destroy.bind(this), this.constructor.delayDestroy));
                        state.isMounted = false;
                        state.ready && this.unmounted();
                    }
                }
            }, {
                key: "props",
                get: function() {
                    var _this2 = this;
                    if (this.constructor.prototype === this) throw new Error("can't be used on own prototype");
                    if (this._$props) return this._$props;
                    // On first call - setup the property on the instance
                    var propDefinitions = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this.constructor);
                    var props = {};
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(propDefinitions).forEach(function(propName) {
                        if (!propDefinitions[propName] || !propDefinitions[propName]._isAlias) {
                            var propValue = propDefinitions[propName].default.call(_this2);
                            propDefinitions[propName].attr && !propDefinitions[propName].boolean && Object(__WEBPACK_IMPORTED_MODULE_4__utils__.c)(_this2, propDefinitions[propName]) && (propValue = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.d)(_this2, propDefinitions[propName]));
                            Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(props, propName, {
                                configurable: true,
                                enumerable: true,
                                get: function() {
                                    return propValue;
                                },
                                set: function(newValue) {
                                    newValue = propDefinitions[propName].filter.call(_this2, newValue);
                                    return propValue = newValue;
                                }
                            });
                        }
                    });
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(this, "_$props", {
                        value: props
                    });
                    return props;
                }
            }, {
                key: "$ui",
                get: function() {
                    return this._$ui;
                }
            } ], [ {
                key: "define",
                /**
         * Registers the web component. Uses tagName as default input param
         */
                value: function(name) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_support__.a)(this, name || this.tagName);
                    window.customElements.define(name || this.tagName, this);
                }
            }, {
                key: "renderTemplate",
                /**
         * Renderer for the template and return what should be inserted into shadowDom.
         * By default, this base class will simply clone the `template` defined in the
         * static property above. This method will called prior to doing that, and if
         * it returns a `truthy` value, then its assume to be either an HTMLElement or
         * DocumentFragment with the element's instance UI (which will be inserted into
         * shadowDom).
         *
         * **NOTE**: Should always use `getComponentInstanceTemplate` or `getComponentTemplate`
         * to retrieve the template or its content, since it is manipulated in browsers that
         * use the polyfills to make the template compatible in those platforms.
         *
         * @param {ComponentElement} eleInstance
         *  The `ComponentElement` instance being initialized
         *
         * @return {HTMLElement|DocumentFragment}
         */
                value: function(eleInstance) {
                    // FIXME: should two additional params be provided - one to get templateInstance and another to get templateElement?
                    return Object(__WEBPACK_IMPORTED_MODULE_4__utils__.f)(eleInstance);
                }
            }, {
                key: "tagName",
                get: function() {
                    throw new Error("tagName not defined");
                }
            }, {
                key: "delayDestroy",
                get: function() {
                    return 250;
                }
            }, {
                key: "useShadow",
                get: function() {
                    return true;
                }
            }, {
                key: "shadowMode",
                get: function() {
                    return "open";
                }
            }, {
                key: "template",
                get: function() {
                    return "<div></div>";
                }
            }, {
                key: "eventInitOptions",
                get: function() {
                    return EV_DEFAULT_INIT;
                }
            }, {
                key: "observedAttributes",
                get: function() {
                    var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.e)(this);
                    if (!state.observedAttrs) {
                        var propList = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this);
                        state.observedAttrs = Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(propList).filter(function(p) {
                            return propList[p].attr;
                        });
                    }
                    return state.observedAttrs;
                }
            } ]);
            return ComponentElement;
        }(HTMLElement));
        function setupComponent(component) {
            var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.j)(component);
            var lastReadyState = null;
            var handleReadyChanges = function() {
                if (lastReadyState === state.ready) return;
                lastReadyState = state.ready;
                if (state.ready) {
                    if (!state.hasTemplate) {
                        // component._$ui.innerHTML = component.constructor.template;
                        component._$ui.appendChild(component.constructor.renderTemplate(component));
                        state.hasTemplate = true;
                    }
                    component.ready();
                    state.isMounted && component.mounted();
                } else state.hasTemplate && component.unready();
            };
            component.constructor.useShadow && SHADOW_DOM_SUPPORTED ? component.shadowRoot ? component._$ui = component.shadowRoot : component._$ui = component.attachShadow({
                mode: component.constructor.shadowMode
            }) : component._$ui = component;
            component.init();
            state.readyWatcher = Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.b)(state, "ready", handleReadyChanges);
            component.onDestroy(state.readyWatcher);
            handleReadyChanges();
        }
    }, /* 7 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export OBSERVABLE_IDENTIFIER */
        /* harmony export (immutable) */
        __webpack_exports__.b = objectWatchProp;
        /* unused harmony export setupObjState */
        /* unused harmony export makeObservable */
        /* unused harmony export queueCallbackAndScheduleRun */
        /* unused harmony export destroyWatcher */
        /* unused harmony export setDependencyTracker */
        /* unused harmony export unsetDependencyTracker */
        /* unused harmony export stopTrackerNotification */
        /* unused harmony export makeArrayWatchable */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__ = __webpack_require__(11);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_jsutils_nextTick__ = __webpack_require__(13);
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
                return arr2;
            }
            return Array.from(arr);
        }
        //---------------------------------------------------------------------------
        var OBSERVABLE_IDENTIFIER = "___$observable$___";
        // FIXME: this should be a Symbol()
        var DEFAULT_PROP_DEFINITION = {
            configurable: true,
            enumerable: true
        };
        var TRACKERS = new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a();
        var WATCHER_IDENTIFIER = "___$watching$___";
        var ARRAY_WATCHABLE_PROTO = "__$watchable$__";
        var HAS_ARRAY_WATCHABLE_PROTO = "__$is" + ARRAY_WATCHABLE_PROTO;
        var ARRAY_MUTATING_METHODS = [ "pop", "push", "shift", "splice", "unshift", "sort", "reverse" ];
        var isPureObject = function(obj) {
            return obj && "[object Object]" === Object.prototype.toString.call(obj);
        };
        var NOTIFY_QUEUE = new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a();
        var isNotifyQueued = false;
        /**
 * A lightweight utility to Watch an object's properties and get notified when it changes.
 *
 * @param {Object} obj
 *
 * @param {String} [prop]
 *  the property to be watched. If left undefined, then all existing properties are watched.
 *
 * @param {Function} [callback]
 *  The callback to be executed when property or object changes. If left undefined, then
 *  `obj` is only made observable (internal structure created and all current enumerable'
 *  properties are made "watchable")
 *
 *  __NOTE:__
 *  The callback will include a new non-enumerable property named `stopWatchingAll` of
 *  type `Function` that can be used to remove the given callback from all places where
 *  it is being used to watch a property. example:
 *
 *      const obj1 = { first: "john" };
 *      const obj2 = { last: "smith" };
 *      const watcher = () => console.log("changed");
 *
 *      objectWatchProp(obj, "first", watcher);
 *      objectWatchProp(obj1, "last", watcher);
 *
 *      watcher.stopWatchingAll(); // removes callback from all objects that it is watching
 *
 *
 * @return {ObjectUnwatchProp}
 * Return a function to unwatch the property. Function also has a static property named
 * `destroy` that will do the same thing (ex. `unwatch.destroy()` is same as `unwatch()`)
 *
 * @example
 *
 * const oo = {};
 * const notifyNameChanged =() => console.log(`name changed: ${oo.name}`);
 * const unWatchName = objectWatchProp(oo, "name", notifyNameChanged);
 *
 * oo.name = "paul"; // console outputs: name changed: paul
 * unWatchName(); // stop watching
 * notifyNameChanged.stopWatchingAll(); // callback's `stopWatchingAll()` can also be called.
 *
 * @example
 *
 * const oo = {
 *      name: "paul",
 *      country: "usa"
 * };
 *
 * // watch all changes to object
 * objectWatchProp(oo, null, () => console.log("Something changed in object"));
 *
 * // OR: make all properties of object observable
 * objectWatchProp(oo);
 *
 */
        function objectWatchProp(obj, prop, callback) {
            obj[OBSERVABLE_IDENTIFIER] || setupObjState(obj);
            // Convert prop to observable?
            if (prop && !obj[OBSERVABLE_IDENTIFIER].props[prop]) {
                setupPropState(obj, prop);
                setupPropInterceptors(obj, prop);
            } else prop && obj[OBSERVABLE_IDENTIFIER].props[prop].setupInterceptors && setupPropInterceptors(obj, prop);
            if (prop && callback) obj[OBSERVABLE_IDENTIFIER].props[prop].storeCallback(callback); else if (!prop) {
                makeObservable(obj, false);
                callback && obj[OBSERVABLE_IDENTIFIER].storeCallback(callback);
            }
            /**
     * Unwatch an object property or object.
     *
     * @typedef {Function} ObjectUnwatchProp
     * @property {Function} destroy Same as function returned.
     */
            var unWatch = destroyWatcher.bind(obj, callback, prop ? obj[OBSERVABLE_IDENTIFIER].props[prop] : obj[OBSERVABLE_IDENTIFIER]);
            unWatch.destroy = unWatch;
            return unWatch;
        }
        function setupObjState(obj) {
            if (!obj[OBSERVABLE_IDENTIFIER]) {
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(obj, OBSERVABLE_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    deep: false,
                    value: {
                        props: {},
                        dependents: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                        watchers: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                        storeCallback: storeCallback
                    }
                });
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].dependents, false);
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].watchers, true);
            }
        }
        function setupCallbackStore(store) {
            var async = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            store.async = async;
            store.isQueued = false;
            store.notify = notify;
        }
        function setupPropState(obj, prop) {
            if (!obj[OBSERVABLE_IDENTIFIER].props[prop]) {
                obj[OBSERVABLE_IDENTIFIER].props[prop] = {
                    val: void 0,
                    dependents: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                    watchers: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                    parent: obj[OBSERVABLE_IDENTIFIER],
                    storeCallback: storeCallback,
                    setupInterceptors: true,
                    deep: obj[OBSERVABLE_IDENTIFIER].deep
                };
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].props[prop].dependents, false);
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].props[prop].watchers, true);
            }
            return obj[OBSERVABLE_IDENTIFIER].props[prop];
        }
        function setupPropInterceptors(obj, prop) {
            var propOldDescriptor = Object.getOwnPropertyDescriptor(obj, prop) || DEFAULT_PROP_DEFINITION;
            if (!propOldDescriptor.get) {
                obj[OBSERVABLE_IDENTIFIER].props[prop].val = obj[prop];
                // If prop is marked as `deep` then walk the value and convert it to observables
                obj[OBSERVABLE_IDENTIFIER].props[prop].deep && makeObservable(obj[OBSERVABLE_IDENTIFIER].props[prop].val);
            }
            Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(obj, prop, {
                configurable: propOldDescriptor.configurable || false,
                enumerable: propOldDescriptor.enumerable || false,
                get: function() {
                    TRACKERS.size && TRACKERS.forEach(obj[OBSERVABLE_IDENTIFIER].props[prop].storeCallback, obj[OBSERVABLE_IDENTIFIER].props[prop]);
                    if (propOldDescriptor.get) return propOldDescriptor.get.call(obj);
                    return obj[OBSERVABLE_IDENTIFIER].props[prop].val;
                },
                set: function(newVal) {
                    var priorVal = obj[prop];
                    propOldDescriptor.set ? newVal = propOldDescriptor.set.call(obj, newVal) : obj[OBSERVABLE_IDENTIFIER].props[prop].val = newVal;
                    // If this `deep` is true and the new value is an object,
                    // then ensure its observable
                    obj[OBSERVABLE_IDENTIFIER].props[prop].deep && makeObservable(newVal);
                    if (newVal !== priorVal) {
                        obj[OBSERVABLE_IDENTIFIER].props[prop].watchers.notify();
                        obj[OBSERVABLE_IDENTIFIER].props[prop].dependents.notify();
                        obj[OBSERVABLE_IDENTIFIER].watchers.notify();
                    }
                    return newVal;
                }
            });
            obj[OBSERVABLE_IDENTIFIER].props[prop].setupInterceptors = false;
            // Notify object watchers that a new prop was added
            propOldDescriptor === DEFAULT_PROP_DEFINITION && obj[OBSERVABLE_IDENTIFIER].watchers.notify();
        }
        /**
 * Makes an object (deep) observable.
 *
 * @param {Object|Array} obj
 * @param {Boolean} [walk=true]
 *  If `true` (default), the object's property values are walked and
 *  also make observable.
 * @param {Boolean} [force=false]
 *  if true, then even if object looks like it might have already been
 *  converted to an observable, it will still be walked
 *  (if `walk` is `true`)
 *
 * @return {Object|Array} Original `obj` is returned
 */
        function makeObservable(obj) {
            var walk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            var force = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!isPureObject(obj) && !Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj)) return obj;
            obj[OBSERVABLE_IDENTIFIER] || (// OBJECT
            isPureObject(obj) ? setupObjState(obj, force) : Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj) && makeArrayWatchable(obj));
            // If object is marked as "deep" and we are not forcing the walk,
            // then no need to do anything. Otherwise, mark this object as
            // being `deep` and keep going
            if (!force && obj[OBSERVABLE_IDENTIFIER].deep) return;
            walk && (obj[OBSERVABLE_IDENTIFIER].deep = true);
            Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj) ? walkArray(obj) : walkObject(obj);
            return obj;
        }
        function walkArray(arr, force) {
            for (var i = 0, t = arr.length; i < t; i++) makeObservable(arr[i], true, force);
        }
        function walkObject(obj, force) {
            // make ALL props observable
            var keys = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.f)(obj);
            for (var i = 0, t = keys.length; i < t; i++) {
                if (!obj[OBSERVABLE_IDENTIFIER].props[keys[i]]) {
                    setupPropState(obj, keys[i]);
                    setupPropInterceptors(obj, keys[i]);
                }
                // Do we need to walk this property's value?
                if (!obj[OBSERVABLE_IDENTIFIER].props[keys[i]].deep || force) {
                    obj[OBSERVABLE_IDENTIFIER].props[keys[i]].deep = true;
                    isPureObject(obj[keys[i]]) && makeObservable(obj[keys[i]], true, force);
                }
            }
        }
        function notify() {
            // this: new Set(). Set instance could have two additional attributes: async ++ isQueued
            if (!this.size) return;
            // If the watcher Set() is synchronous, then execute the callbacks now
            this.async ? this.forEach(pushCallbacksToQueue) : this.forEach(execCallback);
            queueCallbackAndScheduleRun();
        }
        function queueCallbackAndScheduleRun(cb) {
            cb && pushCallbacksToQueue(cb);
            if (isNotifyQueued || !NOTIFY_QUEUE.size) return;
            isNotifyQueued = true;
            Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_jsutils_nextTick__.a)(flushQueue);
        }
        function pushCallbacksToQueue(callback) {
            NOTIFY_QUEUE.add(callback);
        }
        function execCallback(cb) {
            cb();
        }
        function flushQueue() {
            var queuedCallbacks = [].concat(_toConsumableArray(NOTIFY_QUEUE));
            NOTIFY_QUEUE.clear();
            isNotifyQueued = false;
            for (var x = 0, total = queuedCallbacks.length; x < total; x++) queuedCallbacks[x]();
            queuedCallbacks.length = 0;
        }
        function storeCallback(callback) {
            // this === PropState
            if (callback.asDependent && this.dependents) {
                setCallbackAsWatcherOf(callback, this.dependents);
                this.dependents.add(callback);
            } else {
                setCallbackAsWatcherOf(callback, this.watchers);
                this.watchers.add(callback);
            }
        }
        function destroyWatcher(callback, propSetup) {
            // this == obj
            if (callback) {
                // Object state does not have dependents
                if (propSetup.dependents) {
                    propSetup.dependents.delete(callback);
                    unsetCallbackAsWatcherOf(callback, propSetup.dependents);
                }
                propSetup.watchers.delete(callback);
                unsetCallbackAsWatcherOf(callback, propSetup.watchers);
            }
        }
        /**
 * Store a reference to the Set instance provided on input, on the callback.
 * @private
 * @param {Function} callback
 * @param {Set} watchersSet
 */
        function setCallbackAsWatcherOf(callback, watchersSet) {
            if (!callback[WATCHER_IDENTIFIER]) {
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(callback, WATCHER_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    value: {
                        watching: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a()
                    }
                });
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(callback, "stopWatchingAll", {
                    configurable: true,
                    writable: true,
                    value: function() {
                        callback[WATCHER_IDENTIFIER].watching.forEach(function(watcherList) {
                            return watcherList.delete(callback);
                        });
                        callback[WATCHER_IDENTIFIER].watching.clear();
                    }
                });
            }
            callback[WATCHER_IDENTIFIER].watching.add(watchersSet);
        }
        /**
 * Removes the reference to the given Set instance from the callback function provided
 * @private
 * @param {Function} callback
 * @param {Set} watchersSet
 */
        function unsetCallbackAsWatcherOf(callback, watchersSet) {
            callback[WATCHER_IDENTIFIER] && callback[WATCHER_IDENTIFIER].watching.delete(watchersSet);
        }
        function makeArrayWatchable(arr) {
            arr[OBSERVABLE_IDENTIFIER] || setupObjState(arr);
            // If array already has a watchable prototype, then exit
            if (arr[HAS_ARRAY_WATCHABLE_PROTO]) return;
            var arrCurrentProto = arr.__proto__;
            // eslint-disable-line
            // Create prototype interceptors?
            if (!arrCurrentProto[ARRAY_WATCHABLE_PROTO]) {
                var arrProtoInterceptor = Object.create(arrCurrentProto);
                ARRAY_MUTATING_METHODS.forEach(function(method) {
                    Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, method, {
                        configurable: true,
                        writable: true,
                        value: function() {
                            var _arrCurrentProto$meth;
                            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                            var response = (_arrCurrentProto$meth = arrCurrentProto[method]).call.apply(_arrCurrentProto$meth, [ this ].concat(args));
                            this[OBSERVABLE_IDENTIFIER].dependents.notify();
                            this[OBSERVABLE_IDENTIFIER].watchers.notify();
                            return response;
                        }
                    });
                });
                // VALUE ADD: include a `size` read only attribute
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, "size", {
                    configurable: true,
                    get: function() {
                        TRACKERS.size && TRACKERS.forEach(this[OBSERVABLE_IDENTIFIER].storeCallback, this[OBSERVABLE_IDENTIFIER]);
                        return this.length;
                    }
                });
                // Add flag to new array interceptor prototype indicating its watchable
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, HAS_ARRAY_WATCHABLE_PROTO, {
                    value: true
                });
                // Store the new interceptor prototype on the real prototype
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrCurrentProto, ARRAY_WATCHABLE_PROTO, {
                    configurable: true,
                    writable: true,
                    value: arrProtoInterceptor
                });
            }
            arr.__proto__ = arrCurrentProto[ARRAY_WATCHABLE_PROTO];
        }
        /* harmony default export */
        __webpack_exports__.a = objectWatchProp;
    }, /* 8 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = FakeIterator;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__runtime_aliases__ = __webpack_require__(0);
        //-----------------------------------------------------------------------
        // Great reference: http://2ality.com/2015/02/es6-iteration.html
        function FakeIterator(keys, values) {
            Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.e)(this, "_", {
                value: {
                    keys: keys.slice(0),
                    values: values ? values.slice(0) : null,
                    idx: 0,
                    total: keys.length
                }
            });
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.d)(FakeIterator.prototype, {
            constructor: {
                value: FakeIterator
            },
            next: {
                enumerable: true,
                configurable: true,
                value: function() {
                    var response = {
                        done: this._.idx === this._.total
                    };
                    if (response.done) {
                        response.value = void 0;
                        return response;
                    }
                    var nextIdx = this._.idx++;
                    response.value = this._.keys[nextIdx];
                    this._.values && (response.value = [ response.value, this._.values[nextIdx] ]);
                    return response;
                }
            }
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.e)(FakeIterator.prototype, __WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.a, {
            value: function() {
                return this;
            }
        });
    }, /* 9 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "VERSION", function() {
            return VERSION;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Popup_Popup__ = __webpack_require__(10);
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "Popup", function() {
            return __WEBPACK_IMPORTED_MODULE_0__Popup_Popup__.a;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__ContentAccess_ContentAccess__ = __webpack_require__(20);
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "ContentAccess", function() {
            return __WEBPACK_IMPORTED_MODULE_1__ContentAccess_ContentAccess__.a;
        });
        var VERSION = "1.0.0";
    }, /* 10 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return Popup;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_component_element__ = __webpack_require__(5);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_domutils_domPosition__ = __webpack_require__(19);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domAddEventListener__ = __webpack_require__(4);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    "value" in descriptor && (descriptor.writable = true);
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                protoProps && defineProperties(Constructor.prototype, protoProps);
                staticProps && defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _dec, _dec2, _dec3, _dec4, _dec5, _class;
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
            var desc = {};
            Object.keys(descriptor).forEach(function(key) {
                desc[key] = descriptor[key];
            });
            desc.enumerable = !!desc.enumerable;
            desc.configurable = !!desc.configurable;
            ("value" in desc || desc.initializer) && (desc.writable = true);
            desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc);
            if (context && void 0 !== desc.initializer) {
                desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                desc.initializer = void 0;
            }
            if (void 0 === desc.initializer) {
                Object.defineProperty(target, property, desc);
                desc = null;
            }
            return desc;
        }
        //=====================================================================================
        var removeBodyEvent = function(eleInst) {
            if (eleInst._bodyEv) {
                eleInst._bodyEv.remove();
                eleInst._bodyEv = null;
            }
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
        var Popup = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            required: true,
            attr: true
        }), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            boolean: true
        }), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            boolean: true
        }), _dec4 = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            attr: true
        }), _dec5 = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            attr: true
        }), _class = function(_ComponentElement) {
            _inherits(Popup, _ComponentElement);
            function Popup() {
                _classCallCheck(this, Popup);
                return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
            }
            _createClass(Popup, [ {
                key: "init",
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
                // Called from constructor
                value: function() {
                    // this._forPropWas = this.props.for;
                    this._bodyEv = null;
                    this.onPropsChange(this.position, "at");
                    this.onPropsChange(this.position, "my");
                }
            }, {
                key: "ready",
                value: function() {
                    var _this2 = this;
                    this.onPropsChange(this._handleShowProp);
                    this._handleShowProp();
                    this.onDestroy(function() {
                        return removeBodyEvent(_this2);
                    });
                }
            }, {
                key: "_handleShowProp",
                value: function() {
                    var _this3 = this;
                    if (this.for && this.show) {
                        this.position();
                        // Auto close? then setup body event
                        this.autoClose && !this._bodyEv && setTimeout(function() {
                            _this3._bodyEv = Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domAddEventListener__.a)(document.body, "click", function(ev) {
                                if (!_this3.contains(ev.target)) {
                                    // FIXME: support onHide callback? maybe event?
                                    removeBodyEvent(_this3);
                                    _this3.show = false;
                                }
                            });
                        }, 200);
                    } else removeBodyEvent(this);
                }
            }, {
                key: "position",
                value: function() {
                    if (this.for && this.show) {
                        var options = {};
                        // FIXME: move this to a computed prop
                        this.my && (options.my = this.my);
                        this.at && (options.at = this.at);
                        Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_domutils_domPosition__.a)(this, this.for, options);
                    }
                }
            }, {
                key: "for",
                set: function(value) {
                    if (value && "string" === typeof value) return document.querySelector(value);
                    return value;
                }
            }, {
                key: "show",
                get: function() {}
            }, {
                key: "autoClose",
                get: function() {}
            }, {
                key: "my",
                get: function() {
                    return "top left";
                }
            }, {
                key: "at",
                get: function() {
                    return "bottom left";
                }
            } ], [ {
                key: "tagName",
                //-------------------------------------------------------------
                //
                //                                              STATIC MEMBERS
                //
                //-------------------------------------------------------------
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
                get: function() {
                    return "pop-up";
                }
            }, {
                key: "template",
                get: function() {
                    return "\n<style>\n:host {\n    box-sizing: border-box;\n    position: absolute;\n    min-height: 2em;\n    width: 15em;\n    max-height: 15em;\n    z-index: 5000;\n    overflow: auto;\n    display: none;\n\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14),\n        0 3px 14px 2px rgba(0,0,0,0.12),\n        0 5px 5px -3px rgba(0,0,0,0.2);\n    box-shadow: var(--theme-box-shadow);\n\n    background-color: white;\n    background-color: var(--theme-color-bg, white);\n\n    color: black;\n    color: var(--theme-color-fg, black);\n\n    padding: 0.5em;\n    padding: var(--theme-spacing-2, 0.5em);\n}\n:host::-webkit-scrollbar {\n    width:              0.5em;\n    background-color:   var(--theme-color-1, #F5F5F5);\n}\n:host::-webkit-scrollbar-thumb {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color  : var(--theme-color-6, #555);\n}\n:host([show]) {\n    display: block;\n}\n</style>\n<div><slot></slot></div>";
                }
            } ]);
            return Popup;
        }(__WEBPACK_IMPORTED_MODULE_0_component_element__.a), _applyDecoratedDescriptor(_class.prototype, "for", [ _dec ], Object.getOwnPropertyDescriptor(_class.prototype, "for"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "show", [ _dec2 ], Object.getOwnPropertyDescriptor(_class.prototype, "show"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "autoClose", [ _dec3 ], Object.getOwnPropertyDescriptor(_class.prototype, "autoClose"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "my", [ _dec4 ], Object.getOwnPropertyDescriptor(_class.prototype, "my"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "at", [ _dec5 ], Object.getOwnPropertyDescriptor(_class.prototype, "at"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "_handleShowProp", [ __WEBPACK_IMPORTED_MODULE_0_component_element__.c ], Object.getOwnPropertyDescriptor(_class.prototype, "_handleShowProp"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "position", [ __WEBPACK_IMPORTED_MODULE_0_component_element__.c ], Object.getOwnPropertyDescriptor(_class.prototype, "position"), _class.prototype), 
        _class);
    }, /* 11 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export Set */
        /* unused harmony export FakeSet */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Iterator__ = __webpack_require__(8);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__runtime_aliases__ = __webpack_require__(0);
        //============================================================
        var Set = __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set && __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set.prototype[__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.a] ? __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set : FakeSet;
        /* harmony default export */
        __webpack_exports__.a = Set;
        function FakeSet() {}
        Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.d)(FakeSet.prototype, function(obj, key, value) {
            key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            }) : obj[key] = value;
            return obj;
        }({
            constructor: {
                value: FakeSet,
                configurable: true
            },
            _: {
                get: function() {
                    var values = [];
                    Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.e)(this, "_", {
                        value: values
                    });
                    return values;
                }
            },
            add: {
                value: function(item) {
                    -1 === Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item) && this._.push(item);
                    return this;
                }
            },
            has: {
                value: function(item) {
                    return -1 !== Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item);
                }
            },
            size: {
                get: function() {
                    return this._.length;
                }
            },
            clear: {
                value: function() {
                    this._.splice(0);
                }
            },
            delete: {
                value: function(item) {
                    var idx = Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item);
                    if (-1 !== idx) {
                        this._.splice(idx, 1);
                        return true;
                    }
                    return false;
                }
            },
            values: {
                value: function() {
                    return new __WEBPACK_IMPORTED_MODULE_1__Iterator__.a(this._);
                }
            },
            entries: {
                value: function() {
                    return new __WEBPACK_IMPORTED_MODULE_1__Iterator__.a(this._, this._);
                }
            },
            forEach: {
                value: function(cb, thisArg) {
                    var _this = this;
                    this._.forEach(function(item) {
                        return cb(item, item, _this);
                    }, thisArg);
                }
            }
        }, __WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.a, {
            value: function() {
                return this.values();
            }
        }));
    }, /* 12 */
    /***/
    function(module, exports) {
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var g;
        // This works in non-strict mode
        g = function() {
            return this;
        }();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            "object" === ("undefined" === typeof window ? "undefined" : _typeof(window)) && (g = window);
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
        module.exports = g;
    }, /* 13 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export nextTick */
        var reIsNativeCode = /native code/i;
        /**
 * Executes a function at the end of the current event Loop - during micro-task processing
 *
 * @param {Function} callback
 */
        var nextTick = function() {
            if ("undefined" !== typeof setImediate && reIsNativeCode.test(setImediate.toString())) return setImediate;
            // Native Promsie? Use it.
            if ("function" === typeof Promise && reIsNativeCode.test(Promise.toString())) {
                var resolved = Promise.resolve();
                return function(fn) {
                    resolved.then(fn).catch(function(e) {
                        return console.log(e);
                    });
                };
            }
            // fallback to setTimeout
            // From: https://bugzilla.mozilla.org/show_bug.cgi?id=686201#c68
            var immediates = [];
            var processing = false;
            function processPending() {
                setTimeout(function() {
                    immediates.shift()();
                    immediates.length ? processPending() : processing = false;
                }, 0);
            }
            return function(fn) {
                immediates.push(fn);
                if (!processing) {
                    processing = true;
                    processPending();
                }
            };
        }();
        /* harmony default export */
        __webpack_exports__.a = nextTick;
    }, /* 14 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export dataStore */
        // POLYFILL FOR WEAKMAP
        //  [pt] changed how "delete" is defined so that it can work in IE8
        /* jshint ignore:start */
        /**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
        "undefined" === typeof WeakMap && function() {
            var defineProperty = Object.defineProperty;
            var counter = Date.now() % 1e9;
            var WeakMap = function() {
                this.name = "__st" + (1e9 * Math.random() >>> 0) + counter++ + "__";
            };
            WeakMap.prototype = {
                set: function(key, value) {
                    var entry = key[this.name];
                    entry && entry[0] === key ? entry[1] = value : defineProperty(key, this.name, {
                        value: [ key, value ],
                        writable: true
                    });
                    return this;
                },
                get: function(key) {
                    var entry;
                    return (entry = key[this.name]) && entry[0] === key ? entry[1] : void 0;
                },
                // [pt] Quotes around the delete property needed for IE8
                delete: function(key) {
                    var entry = key[this.name];
                    if (!entry || entry[0] !== key) return false;
                    entry[0] = entry[1] = void 0;
                    return true;
                },
                has: function(key) {
                    var entry = key[this.name];
                    if (!entry) return false;
                    return entry[0] === key;
                }
            };
            window.WeakMap = WeakMap;
        }();
        /* jshint ignore:end */
        /**
 * Returns an object that contains an initialized WeakMap (`stash` property)
 * where data can be stored.
 *
 * @namespace dataStore
 *
 */
        var dataStore = /** @lends dataStore */ {
            /**
   * Stash data here.
   * @type WeakMap
   */
            stash: new WeakMap(),
            /**
   * Create a private data store and return it.
   * @return {WeakMap}
   */
            create: function() {
                return new WeakMap();
            }
        };
        /* harmony default export */
        __webpack_exports__.a = dataStore;
    }, /* 15 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return _Symbol;
        });
        /* unused harmony export FakeSymbol */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Iterator__ = __webpack_require__(8);
        //============================================================
        var UNIQUE = Math.random().toString(36).substring(7);
        var COUNTER = 1;
        var SYMBOL_PROTOTYPE = {
            toString: function() {
                return "Symbol(" + this.description + ")." + this._id;
            },
            valueOf: function() {
                return this.toString();
            }
        };
        var _Symbol = __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Symbol || FakeSymbol;
        function FakeSymbol(description) {
            if (this instanceof FakeSymbol) throw new TypeError("FakeSymbol is not a constructor");
            return Object.create(SYMBOL_PROTOTYPE, {
                description: {
                    value: arguments.length ? description : ""
                },
                _id: {
                    value: UNIQUE + "." + COUNTER++
                }
            });
        }
        __WEBPACK_IMPORTED_MODULE_1__Iterator__.a.iterator = __WEBPACK_IMPORTED_MODULE_1__Iterator__.a;
    }, /* 16 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = prepareComponentTemplate;
        /* harmony export (immutable) */
        __webpack_exports__.b = styleComponentInstanceElement;
        /* unused harmony export reStyleComponentInstanceSubtree */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
        //--------------------------------------------------------------
        // Utilities to work with polyfills like ShadyCSS
        //--------------------------------------------------------------
        //===========================================================================================
        var supportsShadyCSS = function() {
            return !!__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS;
        };
        // FIXME: code below should check also for native support for CEs (protect against polyfills loaded in a native env?)
        /**
 * Prepares the component's styles for the given `define` tag name.
 * Method should be called at the time the Element is registered into CustomElementsRegistry
 *
 * @param {ComponentElement} Component
 * @param {String} tagName
 */
        function prepareComponentTemplate(Component, tagName) {
            // FIXME: need additional checks here. ONly use shady if ShadowDom is not supported natively.
            //              need to use: ShadyCSS.nativeShadow to check if shadowroot is supported
            //              Also: should we check the Component's "useShadow" property?
            supportsShadyCSS() && __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS.prepareTemplate(Object(__WEBPACK_IMPORTED_MODULE_1__utils__.g)(Component), tagName);
        }
        /**
 * Styles the instance of a custom element using ShadyCSS
 *
 * @param {HTMLElement} componentInstance
 */
        function styleComponentInstanceElement(componentInstance) {
            supportsShadyCSS() && __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS.styleElement(componentInstance);
        }
    }, /* 17 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = prop;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
        //===============================================================================
        var RE_UPPER_CASE_LETTERS = /[A-Z]/;
        var NOOP = function(val) {
            return val;
        };
        /**
 * Create a ComponentElement property.
 *
 * @param {Object} [options]
 * @param {Object} [Proto]
 * @param {String} [prop]
 * @param {Object} [descriptor]
 *
 * @returns {Function}
 */
        function prop() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            // Called with options? Return Design function
            if (args.length < 2) return setupProp.bind(null, args[0]);
            return setupProp.apply(void 0, [ null ].concat(args));
        }
        function setupProp(options, Proto, prop, descriptor) {
            var getter = descriptor.get;
            var setter = descriptor.set;
            var propDef = void 0;
            // If prop is defined as `boolean` then ensure that the value stored is
            // always a boolean based upon whether the prop is on the element or not
            // In this case, defined getter/setter is ignored/discarded
            // TODO: is there a use case where calling the real getter/setter is valid?
            if (options && options.boolean) {
                options.attr = true;
                getter = descriptor.get = function() {
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__.c)(this, propDef);
                };
                setter = descriptor.set = function(value) {
                    // When setting the value of this attribute directly on the instance (or instance.props),
                    // ensure that element attribute is also adjusted to reflect value.
                    // Do this only if the `value` is boolean - because when an attribute is added to the
                    // element, its value should be empty string.
                    "boolean" === typeof value && (value && !Object(__WEBPACK_IMPORTED_MODULE_2__utils__.c)(this, propDef) ? this.setAttribute(prop, "") : !value && Object(__WEBPACK_IMPORTED_MODULE_2__utils__.c)(this, propDef) && this.removeAttribute(prop));
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__.c)(this, propDef);
                };
            }
            propDef = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)(getPropDef(Proto, prop, getter, setter), options);
            descriptor.get = descriptor.set = lazyProp(prop, getter, setter);
            // Create a instance property for each alias as well
            propDef.aliases.length && propDef.aliases.forEach(function(propAliasName) {
                if (!(propAliasName in Proto)) {
                    var aliasPropGetterSetterSetup = lazyProp(propAliasName, getter, setter);
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(Proto, propAliasName, {
                        configurable: true,
                        get: aliasPropGetterSetterSetup,
                        set: aliasPropGetterSetterSetup
                    });
                }
            });
            return descriptor;
        }
        function getClassProps(Proto) {
            Proto.constructor.propsDef || Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(Proto.constructor, "propsDef", {
                configurable: true,
                writable: true,
                value: {}
            });
            return Proto.constructor.propsDef;
        }
        /**
 * Returns the PropDefinition
 *
 * @private
 *
 * @param Proto
 * @param name
 * @param getter
 * @param setter
 * @returns ComponentElement~PropDefinition
 */
        function getPropDef(Proto, name, getter, setter) {
            var classProps = getClassProps(Proto);
            if (!classProps[name]) {
                /**
         * A Class prop definition
         *
         * @typedef {Object} ComponentElement~PropDefinition
         * @property {String} name              Then name of the prop
         * @property {Boolean} attr             Can the prop be set via an HTML attribute
         * @property {Boolean} required         Is the prop required
         * @property {Boolean} boolean          Is the prop value mean to be a boolean (note: also forces `attr` to true)
         * @property {Function} default         Function that returns default value (the `getter` when decorator is used)
         * @property {Function} filter          Function that filters the value being set (the `setter` when decorator is used)
         * @property {Array<String>} aliases    An array of aliases for the prop
         */
                classProps[name] = {
                    name: name,
                    attr: false,
                    required: false,
                    boolean: false,
                    default: getter || NOOP,
                    filter: setter || NOOP,
                    aliases: [ name.toLowerCase() ]
                };
                // If the prop name has upper case letters, then its possible that it is
                // defined as camelCase - create ka-bab alias.
                RE_UPPER_CASE_LETTERS.test(name) && classProps[name].aliases.push(Object(__WEBPACK_IMPORTED_MODULE_2__utils__.h)(name));
            }
            return classProps[name];
        }
        /**
 * Return a getter/setter function to be used in a Property descriptor. When invoked first time as
 * part of an instance, it will setup the actually get/set function that will persist Props to the
 * instance `instance.props`
 *
 * @private
 *
 * @param propName
 * @param getter
 * @param setter
 *
 * @returns {Function}
 */
        function lazyProp(propName, getter, setter) {
            // FIXME: getter/setter not being used?
            var $propName = "_$" + propName;
            return function() {
                var isUpdateMode = 1 === arguments.length;
                if (-1 !== Object.getOwnPropertyNames(this).indexOf($propName)) return isUpdateMode ? this[$propName] = arguments[0] : this[$propName];
                // Ensure we write back to
                var writeToPropName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__.i)(this.constructor)[propName].name;
                Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(this, $propName, {
                    configurable: true,
                    get: function() {
                        return this.props[writeToPropName];
                    },
                    set: function(newValue) {
                        return this.props[writeToPropName] = newValue;
                    }
                });
                // update mode
                if (isUpdateMode) return this[$propName] = arguments[0];
                return this[$propName];
            };
        }
    }, /* 18 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = bind;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /**
 * Binds the given attributes to the Class instance on first `get`.
 *
 * @return {Function|Object}
 */
        function bind(Proto, prop, descriptor) {
            if (Proto && prop && descriptor && "function" === typeof descriptor.value) {
                var propFn = descriptor.value;
                var writable = descriptor.writable;
                delete descriptor.value;
                delete descriptor.writable;
                descriptor.get = function() {
                    if (this["__settingUp:" + prop]) return;
                    this["__settingUp:" + prop] = true;
                    // Fuck you IE!
                    var fn = propFn.bind(this);
                    Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(this, prop, {
                        configurable: descriptor.configurable,
                        enumerable: descriptor.enumerable,
                        writable: writable,
                        value: fn
                    });
                    delete this["__settingUp:" + prop];
                    return fn;
                };
                return descriptor;
            }
            return bind;
        }
    }, /* 19 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export domPosition */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__jsutils_objectExtend__ = __webpack_require__(1);
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var WINDOW = window;
        var DOCUMENT = WINDOW.document;
        var SCROLL_TOP = "scrollTop";
        var SCROLL_LEFT = "scrollLeft";
        var PAGE_Y_OFFSET = "pageYOffset";
        var PAGE_X_OFFSET = "pageXOffset";
        var UNDEFINED = "undefined";
        var PX = "px";
        //const isTop     = /top/i;
        //const isBottom  = /bottom/i;
        var isLeft = /left/i;
        //const isRight   = /right/i;
        /**
 * Positions an element against another. Elements (both `positionEle` and
 * `anchorEle` should already be visible in dom (ex. call this method right
 * after adding them to DOM).
 *
 * @function domPosition
 *
 * @param {HTMLElement} positionEle
 *
 * @param {HTMLElement} anchorEle
 *
 * @param {Object} [options]
 * 
 * @param {String} [options.my]
 *  Which area of the `positionEle` should be used to position it against the
 *  `anchorEle`. Default is `top left`. Possible values:
 *  -   `top left`
 *  -   `top right`
 *
 * @param {String} [options.at]
 *  The `anchorEle` position where the `positionEle` should be displayed. Default
 *  is `bottom left` (so right below the `anchorEle`, left aligned).
 *
 * @param {HTMLElement} [options.viewport=window]
 *  The viewport to be used in detecting collision. (NOTE: currently,
 *  only window is supported)
 *
 */
        function domPosition(positionEle, anchorEle, options) {
            var positionEleStyles = positionEle.style;
            var anchorEleRect = anchorEle.getBoundingClientRect();
            var positionEleRect = positionEle.getBoundingClientRect();
            var opt = Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_objectExtend__.a)({
                my: "top left",
                at: "bottom left",
                viewport: WINDOW
            }, options);
            var _getViewportScrollInf = getViewportScrollInfo(opt.viewport), scrollTop = _getViewportScrollInf.scrollTop, scrollLeft = _getViewportScrollInf.scrollLeft;
            // FIXME: support for non-window viewport
            // FIXME: support for non window viewport
            // var viewportTop     = 0;
            var viewportBottom = opt.viewport.innerHeight;
            var viewportRight = opt.viewport.innerWidth;
            var isMyLeft = isLeft.test(opt.my);
            var isMyRight = !isMyLeft;
            var isAtLeft = isLeft.test(opt.at);
            var isAtRight = !isAtLeft;
            // Set default coordinates based o above position defaults
            var posLeft = anchorEleRect.left;
            var posTop = anchorEleRect.bottom + scrollTop;
            //------------------------------------------
            // CALCULATE: TOP
            // Top side of position ele
            //------------------------------------------
            // FIXME: support for "my" === bottom as well as "at" top
            //------------------------------------------
            // CALCULATE: LEFT
            // Left side of the position el
            //------------------------------------------
            // my === left  &&  at === right
            isMyLeft && isAtRight ? posLeft = anchorEleRect.right : isMyRight && isAtRight ? posLeft = anchorEleRect.right - positionEleRect.width : isMyRight && isAtLeft && (posLeft = anchorEleRect.left - positionEleRect.width);
            //------------------------------------------------------
            // Adjust positions based on viewport collisions
            //------------------------------------------------------
            //--- LEFT --\\
            // If the Right side of the position element goes beyound
            // the right side of the viewport, flip the horizontal position...
            posLeft + positionEleRect.width > viewportRight + scrollLeft && (posLeft -= positionEleRect.width);
            //--- TOP --\\
            // If it the position of the element goes beyond the bottom of
            // the viewport, flip it up...
            posTop + positionEleRect.height > viewportBottom + scrollTop && (posTop -= positionEleRect.height + anchorEleRect.height);
            positionEleStyles.left = posLeft + PX;
            positionEleStyles.top = posTop + PX;
        }
        /* harmony default export */
        __webpack_exports__.a = domPosition;
        /**
 * returns the `scrollTop` and `scrollLeft` for a given element
 *
 * @param {HTMLElement|Window|Document} viewport
 * @returns {Object}
 *
 * @example
 *
 * // return object:
 *
 * {
 *      scrollTop:      222,
 *      scrollLeft:     11
 * }
 *
 */
        function getViewportScrollInfo(viewport) {
            var response = {};
            if (viewport === WINDOW || viewport === DOCUMENT) if (_typeof(WINDOW[PAGE_Y_OFFSET]) !== UNDEFINED) {
                response[SCROLL_TOP] = WINDOW[PAGE_Y_OFFSET];
                response[SCROLL_LEFT] = WINDOW[PAGE_X_OFFSET];
            } else if (DOCUMENT.documentElement) {
                response[SCROLL_TOP] = DOCUMENT.documentElement[SCROLL_TOP];
                response[SCROLL_LEFT] = DOCUMENT.documentElement[SCROLL_LEFT];
            } else {
                response[SCROLL_TOP] = DOCUMENT.body[SCROLL_TOP];
                response[SCROLL_LEFT] = DOCUMENT.body[SCROLL_LEFT];
            } else {
                response[SCROLL_TOP] = viewport[SCROLL_TOP];
                response[SCROLL_LEFT] = viewport[SCROLL_LEFT];
            }
            return response;
        }
    }, /* 20 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return ContentAccess;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_component_element__ = __webpack_require__(5);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_domutils_domAddEventListener__ = __webpack_require__(4);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__ = __webpack_require__(21);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    "value" in descriptor && (descriptor.writable = true);
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                protoProps && defineProperties(Constructor.prototype, protoProps);
                staticProps && defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver);
            }
            if ("value" in desc) return desc.value;
            var getter = desc.get;
            if (void 0 === getter) return;
            return getter.call(receiver);
        };
        var _dec, _dec2, _class;
        function _defineProperty(obj, key, value) {
            key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            }) : obj[key] = value;
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
            var desc = {};
            Object.keys(descriptor).forEach(function(key) {
                desc[key] = descriptor[key];
            });
            desc.enumerable = !!desc.enumerable;
            desc.configurable = !!desc.configurable;
            ("value" in desc || desc.initializer) && (desc.writable = true);
            desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc);
            if (context && void 0 !== desc.initializer) {
                desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                desc.initializer = void 0;
            }
            if (void 0 === desc.initializer) {
                Object.defineProperty(target, property, desc);
                desc = null;
            }
            return desc;
        }
        //=========================================================================
        var INTERCEPTOR_TOP_1 = "topTabInterceptor1";
        var INTERCEPTOR_TOP_2 = "topTabInterceptor2";
        var INTERCEPTOR_BOTTOM_1 = "bottomTabInterceptor1";
        var INTERCEPTOR_BOTTOM_2 = "bottomTabInterceptor2";
        var INTERCEPTOR_LIST = [ INTERCEPTOR_TOP_1, INTERCEPTOR_TOP_2, INTERCEPTOR_BOTTOM_2, INTERCEPTOR_BOTTOM_1 ];
        var INTERCEPTOR_STYLES = "outline: none !important;display:block !important;height:1px !important;width:1px !important;color:transparent !important;position:absolute !important;left:-9999999px !important;top:-99999999px !important;z-index:-1 !important;";
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
        var ContentAccess = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            attr: true,
            boolean: true
        }), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_component_element__.d)({
            attr: true,
            boolean: true
        }), _class = function(_ComponentElement) {
            _inherits(ContentAccess, _ComponentElement);
            function ContentAccess() {
                _classCallCheck(this, ContentAccess);
                return _possibleConstructorReturn(this, (ContentAccess.__proto__ || Object.getPrototypeOf(ContentAccess)).apply(this, arguments));
            }
            _createClass(ContentAccess, [ {
                key: "init",
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
                // Called from constructor
                value: function() {
                    var _STATE_SYMBOL;
                    this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b] = (_STATE_SYMBOL = {}, _defineProperty(_STATE_SYMBOL, INTERCEPTOR_TOP_1, null), 
                    _defineProperty(_STATE_SYMBOL, INTERCEPTOR_TOP_2, null), _defineProperty(_STATE_SYMBOL, INTERCEPTOR_BOTTOM_1, null), 
                    _defineProperty(_STATE_SYMBOL, INTERCEPTOR_BOTTOM_2, null), _defineProperty(_STATE_SYMBOL, "isRefocusing", false), 
                    _STATE_SYMBOL);
                    this.onPropsChange(this._handleBlock, "block");
                    this.onPropsChange(this._handleBlock, "onParent");
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_domutils_domAddEventListener__.b)(this, "click", this);
                }
            }, {
                key: "mounted",
                value: function() {
                    this._handleBlock();
                }
            }, {
                key: "destroy",
                value: function() {
                    _get(ContentAccess.prototype.__proto__ || Object.getPrototypeOf(ContentAccess.prototype), "destroy", this).call(this);
                    removeTabInterceptors(this);
                }
            }, {
                key: "_handleBlock",
                value: function() {
                    this.block ? insertTabInterceptors(this) : removeTabInterceptors(this);
                }
            }, {
                key: "handleEvent",
                value: function(ev) {
                    if (this.block && "focus" === ev.type && ev.target._role && !this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b].isRefocusing) {
                        this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b].isRefocusing = true;
                        switch (ev.target._role) {
                          // Focusing from the top: send focus to bottom
                            case INTERCEPTOR_TOP_1:
                          case INTERCEPTOR_TOP_2:
                            this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_1].focus();
                            break;

                          // Focusing from the bottom: send focus to top
                            case INTERCEPTOR_BOTTOM_1:
                          case INTERCEPTOR_BOTTOM_2:
                            this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1].focus();
                        }
                        this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b].isRefocusing = false;
                    } else "click" === ev.type && this.block && !this.onParent && this[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_1].focus();
                }
            }, {
                key: "block",
                get: function() {}
            }, {
                key: "onParent",
                get: function() {}
            } ], [ {
                key: "tagName",
                //-------------------------------------------------------------
                //
                //                                              STATIC MEMBERS
                //
                //-------------------------------------------------------------
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
                get: function() {
                    return "content-access";
                }
            }, {
                key: "template",
                get: function() {
                    return '\n<style>\n    :host {\n        display: inline-block;\n        box-sizing: border-box;\n    }\n    :host([on-parent]) {\n        display: none;\n    }\n    :host([on-parent]) .content {\n        position:relative;\n        z-index: 1;\n        max-height: 100%;\n        max-width: 100%;\n        overflow: auto;\n    }\n    :host([on-parent]),\n    .modal {\n        position: absolute;\n        box-sizing: border-box;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        bottom: 0;\n        right: 0;\n    }\n    .modal {\n        background: lightgrey;\n        background: var(--theme-color-1, lightgrey);\n        opacity: 0.6;\n    }\n    :host([block][on-parent]) {\n        display: block;\n    }\n    /*:host([on-parent]) .modal,*/\n    :host(:not([on-parent]):not([block])) .modal {\n        display: none;\n    }\n    :host([block]:not([on-parent])) {\n        position: relative;\n    }\n</style>\n<div class="content">\n    <slot></slot>\n</div>\n<div class="modal"></div>\n';
                }
            } ]);
            return ContentAccess;
        }(__WEBPACK_IMPORTED_MODULE_0_component_element__.a), _applyDecoratedDescriptor(_class.prototype, "block", [ _dec ], Object.getOwnPropertyDescriptor(_class.prototype, "block"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "onParent", [ _dec2 ], Object.getOwnPropertyDescriptor(_class.prototype, "onParent"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "_handleBlock", [ __WEBPACK_IMPORTED_MODULE_0_component_element__.c ], Object.getOwnPropertyDescriptor(_class.prototype, "_handleBlock"), _class.prototype), 
        _class);
        function insertTabInterceptors(inst) {
            if (inst.parentNode) {
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1] || createTabInterceptorElements(inst);
                if (inst.onParent) {
                    Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_2], inst.parentNode.firstChild);
                    Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1], inst.parentNode.firstChild);
                    inst.parentNode.appendChild(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_2]);
                    inst.parentNode.appendChild(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_1]);
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1], inst);
                    Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_2], inst);
                    if (inst.nextSibling) {
                        Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_1], inst.nextSibling);
                        Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_domutils_domInsertBefore__.a)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_2], inst.nextSibling);
                    } else {
                        inst.parentNode.appendChild(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_2]);
                        inst.parentNode.appendChild(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_BOTTOM_1]);
                    }
                }
            }
        }
        function removeTabInterceptors(inst) {
            inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1] && INTERCEPTOR_LIST.forEach(function(interceptorEle) {
                return inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][interceptorEle].parentNode && inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][interceptorEle].parentNode.removeChild(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][interceptorEle]);
            });
        }
        function createTabInterceptorElements(inst) {
            inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][INTERCEPTOR_TOP_1] || INTERCEPTOR_LIST.forEach(function(name) {
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name] = document.createElement("a");
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name].innerText = "-";
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name]._role = name;
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name].setAttribute("_role", name);
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name].setAttribute("tabindex", "0");
                inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name].setAttribute("style", INTERCEPTOR_STYLES);
                Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_domutils_domAddEventListener__.b)(inst[__WEBPACK_IMPORTED_MODULE_0_component_element__.b][name], "focus", inst);
            });
        }
    }, /* 21 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = domInsertBefore;
        /**
 * Shortcut/Functional alias to `Node.insertBefore` method.
 *
 * @param {Node|DocumentFragment} newNode
 * @param {Node} referenceNode
 *
 * @returns {Node|DocumentFragment}
 */
        function domInsertBefore(newNode, referenceNode) {
            referenceNode && referenceNode.parentNode && referenceNode.parentNode.insertBefore && referenceNode.parentNode.insertBefore(newNode, referenceNode);
            return newNode;
        }
    } ]);
});
//# sourceMappingURL=common-widget-elements.js.map