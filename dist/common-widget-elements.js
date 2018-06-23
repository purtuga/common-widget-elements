!function(root, factory) {
    "object" === typeof exports && "object" === typeof module ? module.exports = factory() : "function" === typeof define && define.amd ? define([], factory) : "object" === typeof exports ? exports.CommonWidgetElements = factory() : root.CommonWidgetElements = factory();
}(window, function() {
    /******/
    return function(modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) 
            /******/ return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/            var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/            };
            /******/
            /******/ // Execute the module function
            /******/            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/            return module.exports;
            /******/        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/        __webpack_require__.d = function(exports, name, getter) {
            /******/ __webpack_require__.o(exports, name) || 
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            })
            /******/;
        };
        /******/
        /******/ // define __esModule on exports
        /******/        __webpack_require__.r = function(exports) {
            /******/ "undefined" !== typeof Symbol && Symbol.toStringTag && 
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            })
            /******/;
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            /******/        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/        __webpack_require__.t = function(value, mode) {
            /******/ 1 & mode && (value = __webpack_require__(value))
            /******/;
            if (8 & mode) return value;
            /******/            if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
            /******/            var ns = Object.create(null);
            /******/            __webpack_require__.r(ns);
            /******/            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            /******/            return ns;
            /******/        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/        __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? 
            /******/ function() {
                return module.default;
            } : 
            /******/ function() {
                return module;
            };
            /******/            __webpack_require__.d(getter, "a", getter);
            /******/            return getter;
            /******/        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/        __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/        return __webpack_require__(__webpack_require__.s = 1);
        /******/    }
    /************************************************************************/
    /******/ ([ 
    /* 0 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */        
        /* WEBPACK VAR INJECTION */ (function(global) {
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                return GLOBAL;
            });
            /* unused harmony export getGlobal */            var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
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
        }).call(this, __webpack_require__(2))
        /***/;
    }, 
    /* 1 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/objectExtend.js
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
        /* harmony default export */ var jsutils_objectExtend = function objectExtend(mergeIntoObj) {
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
        };
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/runtime-aliases.js
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
                var runtime_aliases_arr = [];
        var isArray = Array.isArray;
        functionBindCall(runtime_aliases_arr.forEach);
        var arrayIndexOf = functionBindCall(runtime_aliases_arr.indexOf);
        functionBindCall(runtime_aliases_arr.splice);
        // Logging
                var consoleLog = console.log;
        console.error;
        // Iterators
                var SymbolIterator = "undefined" !== typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        // EXTERNAL MODULE: ./node_modules/common-micro-libs/src/jsutils/getGlobal.js
                var getGlobal = __webpack_require__(0);
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/Iterator.js
        //-----------------------------------------------------------------------
        // Great reference: http://2ality.com/2015/02/es6-iteration.html
                function FakeIterator(keys, values) {
            objectDefineProperty(this, "_", {
                value: {
                    keys: keys.slice(0),
                    values: values ? values.slice(0) : null,
                    idx: 0,
                    total: keys.length
                }
            });
        }
        /* harmony default export */        objectDefineProperties(FakeIterator.prototype, {
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
        objectDefineProperty(FakeIterator.prototype, SymbolIterator, {
            value: function() {
                return this;
            }
        });
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/Set.js
                //============================================================
        var Set = getGlobal.a.Set && getGlobal.a.Set.prototype[SymbolIterator] ? getGlobal.a.Set : FakeSet;
        /* harmony default export */        var jsutils_Set = Set;
        function FakeSet() {
            // FIXME: support for iterable input
        }
        objectDefineProperties(FakeSet.prototype, function(obj, key, value) {
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
                    objectDefineProperty(this, "_", {
                        value: values
                    });
                    return values;
                }
            },
            add: {
                value: function(item) {
                    -1 === arrayIndexOf(this._, item) && this._.push(item);
                    return this;
                }
            },
            has: {
                value: function(item) {
                    return -1 !== arrayIndexOf(this._, item);
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
                    var idx = arrayIndexOf(this._, item);
                    if (-1 !== idx) {
                        this._.splice(idx, 1);
                        return true;
                    }
                    return false;
                }
            },
            values: {
                value: function() {
                    return new FakeIterator(this._);
                }
            },
            entries: {
                value: function() {
                    return new FakeIterator(this._, this._);
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
        }, SymbolIterator, {
            value: function() {
                return this.values();
            }
        }));
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/nextTick.js
                var reIsNativeCode = /native code/i;
        /**
 * Executes a function at the end of the current event Loop - during micro-task processing
 *
 * @param {Function} callback
 */        var nextTick = function() {
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
            return function(fn) {
                immediates.push(fn);
                if (!processing) {
                    processing = true;
                    !function processPending() {
                        setTimeout(function() {
                            immediates.shift()();
                            immediates.length ? processPending() : processing = false;
                        }, 0);
                    }();
                }
            };
        }();
        /* harmony default export */        var jsutils_nextTick = nextTick;
        // CONCATENATED MODULE: ./node_modules/observables/src/objectWatchProp.js
                //---------------------------------------------------------------------------
        var OBSERVABLE_IDENTIFIER = "___$observable$___";
 // FIXME: this should be a Symbol()
                var DEFAULT_PROP_DEFINITION = {
            configurable: true,
            enumerable: true
        };
        var TRACKERS = new jsutils_Set();
        var WATCHER_IDENTIFIER = "___$watching$___";
        var ARRAY_WATCHABLE_PROTO = "__$watchable$__";
        var HAS_ARRAY_WATCHABLE_PROTO = "__$is" + ARRAY_WATCHABLE_PROTO;
        var ARRAY_MUTATING_METHODS = [ "pop", "push", "shift", "splice", "unshift", "sort", "reverse" ];
        var isPureObject = function(obj) {
            return obj && "[object Object]" === Object.prototype.toString.call(obj);
        };
        var NOTIFY_QUEUE = new jsutils_Set();
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
 */        function objectWatchProp(obj, prop, callback) {
            obj[OBSERVABLE_IDENTIFIER] || setupObjState(obj);
            // Convert prop to observable?
                        if (prop && !obj[OBSERVABLE_IDENTIFIER].props[prop]) {
                setupPropState(obj, prop);
                setupPropInterceptors(obj, prop);
            }
            // Else: do we need to setup the interceptors (again)?
            // (Used by Computed props when they are created against a prop has
            // been setup as an observable)
             else prop && obj[OBSERVABLE_IDENTIFIER].props[prop].setupInterceptors && setupPropInterceptors(obj, prop);
            if (prop && callback) obj[OBSERVABLE_IDENTIFIER].props[prop].storeCallback(callback); else if (!prop) {
                makeObservable(obj, false);
                callback && obj[OBSERVABLE_IDENTIFIER].storeCallback(callback);
            }
            /**
     * Unwatch an object property or object.
     *
     * @typedef {Function} ObjectUnwatchProp
     * @property {Function} destroy Same as function returned.
     */            var unWatch = function(callback, propSetup) {
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
 * Sets a callback to be added to the list of watchers for any property
 * that is accessed after this function is called.
 *
 * @param {Function} callback
 *  The callback to be added to dependency list of watchers.
 *  NOTE: the callback will modified to include a new property
 *  `stopWatchingAll()` which can be used to remove the given callback
 *  from ALL dependencies that include it.
 *
 */ .bind(obj, callback, prop ? obj[OBSERVABLE_IDENTIFIER].props[prop] : obj[OBSERVABLE_IDENTIFIER]);
            unWatch.destroy = unWatch;
            return unWatch;
        }
        function setupObjState(obj) {
            if (!obj[OBSERVABLE_IDENTIFIER]) {
                objectDefineProperty(obj, OBSERVABLE_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    deep: false,
                    value: {
                        props: {},
                        dependents: new jsutils_Set(),
                        watchers: new jsutils_Set(),
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
                    dependents: new jsutils_Set(),
                    watchers: new jsutils_Set(),
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
            objectDefineProperty(obj, prop, {
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
 */        function makeObservable(obj) {
            var walk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            var force = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!isPureObject(obj) && !isArray(obj)) return obj;
            obj[OBSERVABLE_IDENTIFIER] || (
            // OBJECT
            isPureObject(obj) ? setupObjState(obj) : isArray(obj) && function(arr) {
                arr[OBSERVABLE_IDENTIFIER] || setupObjState(arr);
                // If array already has a watchable prototype, then exit
                                if (arr[HAS_ARRAY_WATCHABLE_PROTO]) return;
                var arrCurrentProto = arr.__proto__;
 // eslint-disable-line
                // Create prototype interceptors?
                                if (!arrCurrentProto[ARRAY_WATCHABLE_PROTO]) {
                    var arrProtoInterceptor = Object.create(arrCurrentProto);
                    ARRAY_MUTATING_METHODS.forEach(function(method) {
                        objectDefineProperty(arrProtoInterceptor, method, {
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
                                        objectDefineProperty(arrProtoInterceptor, "size", {
                        configurable: true,
                        get: function() {
                            TRACKERS.size && TRACKERS.forEach(this[OBSERVABLE_IDENTIFIER].storeCallback, this[OBSERVABLE_IDENTIFIER]);
                            return this.length;
                        }
                    });
                    // Add flag to new array interceptor prototype indicating its watchable
                                        objectDefineProperty(arrProtoInterceptor, HAS_ARRAY_WATCHABLE_PROTO, {
                        value: true
                    });
                    // Store the new interceptor prototype on the real prototype
                                        objectDefineProperty(arrCurrentProto, ARRAY_WATCHABLE_PROTO, {
                        configurable: true,
                        writable: true,
                        value: arrProtoInterceptor
                    });
                }
                arr.__proto__ = arrCurrentProto[ARRAY_WATCHABLE_PROTO];
 // eslint-disable-line
                        }
            /* harmony default export */ (obj));
            // If object is marked as "deep" and we are not forcing the walk,
            // then no need to do anything. Otherwise, mark this object as
            // being `deep` and keep going
                        if (!force && obj[OBSERVABLE_IDENTIFIER].deep) return;
            walk && (obj[OBSERVABLE_IDENTIFIER].deep = true);
            isArray(obj) ? function(arr, force) {
                for (var i = 0, t = arr.length; i < t; i++) makeObservable(arr[i], true, force);
            }(obj) : function(obj, force) {
                // make ALL props observable
                var keys = objectKeys(obj);
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
            }(obj);
            return obj;
        }
        function notify() {
            // this: new Set(). Set instance could have two additional attributes: async ++ isQueued
            if (!this.size) return;
            // If the watcher Set() is synchronous, then execute the callbacks now
                        this.async ? this.forEach(pushCallbacksToQueue) : this.forEach(execCallback);
            !function(cb) {
                cb && pushCallbacksToQueue(cb);
                if (isNotifyQueued || !NOTIFY_QUEUE.size) return;
                isNotifyQueued = true;
                jsutils_nextTick(flushQueue);
            }();
        }
        function pushCallbacksToQueue(callback) {
            NOTIFY_QUEUE.add(callback);
        }
        function execCallback(cb) {
            cb();
        }
        function flushQueue() {
            var queuedCallbacks = [].concat(function(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
                    return arr2;
                }
                return Array.from(arr);
            }(NOTIFY_QUEUE));
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
        /**
 * Store a reference to the Set instance provided on input, on the callback.
 * @private
 * @param {Function} callback
 * @param {Set} watchersSet
 */
        function setCallbackAsWatcherOf(callback, watchersSet) {
            if (!callback[WATCHER_IDENTIFIER]) {
                objectDefineProperty(callback, WATCHER_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    value: {
                        watching: new jsutils_Set()
                    }
                });
                objectDefineProperty(callback, "stopWatchingAll", {
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
 */        function unsetCallbackAsWatcherOf(callback, watchersSet) {
            callback[WATCHER_IDENTIFIER] && callback[WATCHER_IDENTIFIER].watching.delete(watchersSet);
        }
        var src_objectWatchProp = objectWatchProp;
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/domutils/domAddEventListener.js
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
 */        function domAddEventListener(ele, event, callback, capture) {
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
     */            return Object.create({
                listeners: evListeners,
                remove: function() {
                    events.forEach(function(evName) {
                        return evListeners[evName].remove();
                    });
                }
            });
        }
        /* harmony default export */        var domutils_domAddEventListener = domAddEventListener;
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/dataStore.js
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
 */        "undefined" === typeof WeakMap && function() {
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
        }()
        /* jshint ignore:end */
        /**
 * Returns an object that contains an initialized WeakMap (`stash` property)
 * where data can be stored.
 *
 * @namespace dataStore
 *
 */;
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
        /* harmony default export */        var jsutils_dataStore = dataStore;
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/jsutils/Symbol.js
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
        var _Symbol = getGlobal.a.Symbol || function FakeSymbol(description) {
            if (this instanceof FakeSymbol) throw new TypeError("FakeSymbol is not a constructor");
            return Object.create(SYMBOL_PROTOTYPE, {
                description: {
                    value: arguments.length ? description : ""
                },
                _id: {
                    value: UNIQUE + "." + COUNTER++
                }
            });
        };
        /* harmony default export */        FakeIterator.iterator = FakeIterator;
        // CONCATENATED MODULE: ./node_modules/component-element/src/utils.js
        //============================================================================
                var PRIVATE = jsutils_dataStore.create();
        var STATE_SYMBOL = _Symbol("state");
        /**
 * Checks if the element has an attribute set that matches any of the aliases for a prop
 *
 * @param {ComponentElement} ele
 * @param {ComponentElement~PropDefinition} propDef
 *
 * @return {Boolean}
 */        function elementHasAttributeForProp(ele, propDef) {
            return propDef.aliases.some(function(propAlias) {
                return ele.hasAttribute(propAlias);
            });
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
                var required = objectKeys(propDefintions).filter(function(propName) {
                    return !propDefintions[propName]._isAlias && propDefintions[propName].required;
                });
                var setReadyState = function() {
                    !required.length || required.every(function(propName) {
                        return !!state.props[propName];
                    }) ? state.ready = true : state.ready = false;
                };
                required.forEach(function(propName) {
                    return src_objectWatchProp(state.props, propName, setReadyState);
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
                                ComponentClass.propsDef && objectKeys(ComponentClass.propsDef).forEach(function(propName) {
                    state.propsDef[propName] = ComponentClass.propsDef[propName];
                    // expand aliases as well
                                        if (isArray(state.propsDef[propName].aliases)) {
                        var propAliasDef = jsutils_objectExtend({}, ComponentClass.propsDef[propName], {
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
 */        function getComponentClassState(ComponentClass) {
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
        // CONCATENATED MODULE: ./node_modules/component-element/src/polyfill-support.js
        //--------------------------------------------------------------
        // Utilities to work with polyfills like ShadyCSS
        //--------------------------------------------------------------
        //===========================================================================================
                var polyfill_support_supportsShadyCSS = function() {
            return !!getGlobal.a.ShadyCSS;
        };
        // FIXME: code below should check also for native support for CEs (protect against polyfills loaded in a native env?)
        /**
 * Prepares the component's styles for the given `define` tag name.
 * Method should be called at the time the Element is registered into CustomElementsRegistry
 *
 * @param {ComponentElement} Component
 * @param {String} tagName
 */        
        // CONCATENATED MODULE: ./node_modules/component-element/src/ComponentElement.js
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
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        var _fixBabelExtend = (O = Object, gPO = O.getPrototypeOf || function(o) {
            return o.__proto__;
        }, sPO = O.setPrototypeOf || function(o, p) {
            o.__proto__ = p;
            return o;
        }, construct = "object" === ("undefined" === typeof Reflect ? "undefined" : _typeof(Reflect)) ? Reflect.construct : function(Parent, args, Class) {
            var Constructor, a = [ null ];
            a.push.apply(a, args);
            Constructor = Parent.bind.apply(Parent, a);
            return sPO(new Constructor(), Class.prototype);
        }, function(Class) {
            var Parent = gPO(Class);
            return sPO(Class, sPO(function() {
                return construct(Parent, arguments, gPO(this).constructor);
            }, Parent));
        });
        //============================================================================
                var O, gPO, sPO, construct;
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
 */        var ComponentElement_ComponentElement = _fixBabelExtend(function(_HTMLElement) {
            !function(subClass, superClass) {
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
            }(ComponentElement, _HTMLElement);
            function ComponentElement() {
                var _ref;
                var _this, _ret;
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, ComponentElement);
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
     */            _createClass(ComponentElement, [ {
                key: "attributeChangedCallback",
                //==============================================================
                //  Instance Members
                //==============================================================
                // Reflects changed html attributes to state.props
                value: function(name, oldValue, newValue) {
                    var propsDef = getPropsDefinition(this.constructor);
                    propsDef[name] && (name = propsDef[name].name);
                    this.props[name] = newValue;
                }
                /**
         * Destroy the instance of the widget
         */            }, {
                key: "destroy",
                value: function() {
                    if (PRIVATE.has(this)) {
                        var state = getState(this);
                        PRIVATE.delete(this);
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
                /**
         * Adds a callback to be executed when Component is destroyed.
         * @param {Function} callback
         */            }, {
                key: "onDestroy",
                value: function(callback) {
                    getState(this).destroyCallbacks.push(callback);
                }
                /**
         * The Component's props.
         * @type {Object}
         */            }, {
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
                /**
         * Returns an array with matched set of DOM elements based on the given selector.
         * (alias for `querySelectorAll()`)
         *
         * @param {String} selector
         *
         * @returns {Array<HTMLElement>}
         */            }, {
                key: "$$",
                value: function(selector) {
                    var result = this.$ui.querySelectorAll(selector);
                    if (Array.isArray(result)) return;
                    return Array.prototype.slice.call(result, 0);
                }
                //~~~~~~~~~~~~~~~~~~~~~~ LIFE CYCLE HOOKS ~~~~~~~~~~~~~~~~~~~~~~
                /**
         * Called to initialize the component, but only after only after all required
         * props have been provided.  This method could be called multiple times, if component
         * has been destroyed, but then re-attached to the DOM Tree.
         *
         */            }, {
                key: "init",
                value: function() {}
                /**
         * Component is ready to be started. This means that all required props/param have been provided.
         */            }, {
                key: "ready",
                value: function() {}
                /**
         * Component is not ready, and if already stated, it might need adjusted. This means that not all
         * required props are currently defined.
         */            }, {
                key: "unready",
                value: function() {}
                /**
         * Called only after the component has been initialized (`init()` has been called).
         * This method could be called multiple times depending on whether the element is
         * added/removed from DOM.
         * This is a good place to setup global events and/or initiate retrieval of data.
         */            }, {
                key: "mounted",
                value: function() {}
                /**
         * Called if component has been initialized (`init()` has run).
         */            }, {
                key: "unmounted",
                value: function() {}
                //~~~~~~~~~~~~~~~~~~~~~~ EVENTEMITTER INTERFACE ~~~~~~~~~~~~~~~~~~~~~~
                /**
         * Dispatches a native `CustomEvent`. The `data` provided will be available
         * in the customEvent.detail property
         *
         * @param {String} eventName
         * @param {*} data
         * @param {EventInit} [eventInit=ComponentElement.eventInitOptions]
         *  Any other options for the CustomEvent initialization.
         *  See [Event.constructor]{@link http://devdocs.io/dom/event/event} for more.
         *
         * @example
         *
         * document.body.addEventListener("my-event", function (ev) { console.log(ev.detail); });
         *
         * // My component
         * myComponent.emit("my-event", { msg: "hello" });
         *
         */            }, {
                key: "emit",
                value: function(eventName, data, eventInit) {
                    this.dispatchEvent(new CustomEvent(eventName, jsutils_objectExtend({}, this.constructor.eventInitOptions, eventInit, {
                        detail: data
                    })));
                }
                /**
         * Set an event listener on the current component
         *
         * @param {String} eventNames
         *  One or more event names to listen for (space delimiter)
         *
         * @param {Function} callback
         *
         * @param {Boolean} [capture=false]
         *
         * @returns {DOMEventListener}
         */            }, {
                key: "on",
                value: function(eventNames, callback, capture) {
                    return domutils_domAddEventListener(this, eventNames, callback, capture);
                }
                /**
         * Add callback to be called when props change
         *
         * @param {Function} callback
         * @param {String} [propName]
         *  Optional. The specific prop to watch.
         *
         * @return {ObjectUnwatchProp}
         */            }, {
                key: "onPropsChange",
                value: function(callback, propName) {
                    return objectWatchProp(this.props, propName, callback);
                }
                //~~~~~~~~~~~~~~~~~~~~~~ BUITINS ~~~~~~~~~~~~~~~~~~~~~~
                        }, {
                key: "connectedCallback",
                value: function() {
                    componentInstance = this, polyfill_support_supportsShadyCSS() && getGlobal.a.ShadyCSS.styleElement(componentInstance);
                    // Cancel destroy if it is queued
                                        /**
 * Styles the instance of a custom element using ShadyCSS
 *
 * @param {HTMLElement} componentInstance
 */
                    var componentInstance;
                    /**
 * Restyles a component's sub-tree. Use it when DOM might have been altered dynamically
 * and polyfilled styles needs to be applied.
 *
 * @param {HTMLElement} componentInstance
 */                    if (PRIVATE.has(this)) {
                        var state = getState(this);
                        if (state.destroyQueued) {
                            clearTimeout(state.destroyQueued);
                            state.destroyQueued = null;
                        }
                        state.isMounted = true;
                        state.ready && this.mounted();
                    } else {
                        getState(this).isMounted = true;
                        setupComponent(this);
                    }
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    // Delay calling .destroy() by 60s, just in case user re-attaches component back to dom.
                    // This seems to be currently the only way to ensure attached `onDestroy` logic run when
                    // the element is no longer needed.
                    if (PRIVATE.has(this)) {
                        var state = getState(this);
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
                                        var propDefinitions = getPropsDefinition(this.constructor);
                    var props = {};
                    objectKeys(propDefinitions).forEach(function(propName) {
                        if (!propDefinitions[propName] || !propDefinitions[propName]._isAlias) {
                            var propValue = propDefinitions[propName].default.call(_this2);
                            propDefinitions[propName].attr && !propDefinitions[propName].boolean && elementHasAttributeForProp(_this2, propDefinitions[propName]) && (propValue = function(ele, propDef) {
                                var attrVal = "";
                                propDef.aliases.some(function(propAlias) {
                                    if (ele.hasAttribute(propAlias)) {
                                        attrVal = ele.getAttribute(propAlias);
                                        return true;
                                    }
                                });
                                return attrVal;
                            }(_this2, propDefinitions[propName]));
                            objectDefineProperty(props, propName, {
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
                    objectDefineProperty(this, "_$props", {
                        value: props
                    });
                    return props;
                }
                /**
         * Pointer to the UI of the Component. Value is will either be the `showdowRoot` or the element
         * itself.
         *
         * @returns {HTMLElement}
         */            }, {
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
                    Component = this, tagName = name || this.tagName, 
                    // FIXME: need additional checks here. ONly use shady if ShadowDom is not supported natively.
                    //              need to use: ShadyCSS.nativeShadow to check if shadowroot is supported
                    //              Also: should we check the Component's "useShadow" property?
                    polyfill_support_supportsShadyCSS() && getGlobal.a.ShadyCSS.prepareTemplate(getComponentTemplate(Component), tagName);
                    var Component, tagName;
                    window.customElements.define(name || this.tagName, this);
                }
                /**
         * The number of milliseconds to wait after an element has been detached from DOM before
         * the `.destroy()` method is auto executed.
         *
         * @type {Number}
         */            }, {
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
                    return componentInstance = eleInstance, componentInstance.ownerDocument.importNode(getComponentTemplate(componentInstance.constructor).content, true);
                    var componentInstance;
                }
                /**
         * The default initialization options for the `emit()` method.
         * See [Event.contructor]{@link http://devdocs.io/dom/event/event} for more.
         *
         * @type EventInit
         */            }, {
                key: "tagName",
                get: function() {
                    throw new Error("tagName not defined");
                }
            }, {
                key: "delayDestroy",
                get: function() {
                    return 250;
                }
                /**
         * If Shadow DOM should be used. Default `true`
         *
         * @type {Boolean}
         */            }, {
                key: "useShadow",
                get: function() {
                    return true;
                }
                /**
         * The value for the `mode` option that will be used on the `attachShadow` method.
         *
         * @type {string}
         */            }, {
                key: "shadowMode",
                get: function() {
                    return "open";
                }
                /**
         * Returns the HTML template for the component. Could also be a Template html element
         *
         * @type {String|HTMLTemplateElement}
         */            }, {
                key: "template",
                get: function() {
                    return "<div></div>";
                }
            }, {
                key: "eventInitOptions",
                get: function() {
                    return EV_DEFAULT_INIT;
                }
                // Returns the list (Array) of props that were marked as `@attr`
                        }, {
                key: "observedAttributes",
                get: function() {
                    var state = getComponentClassState(this);
                    if (!state.observedAttrs) {
                        var propList = getPropsDefinition(this);
                        state.observedAttrs = objectKeys(propList).filter(function(p) {
                            return propList[p].attr;
                        });
                    }
                    return state.observedAttrs;
                }
            } ]);
            return ComponentElement;
        }(HTMLElement));
        /* harmony default export */        function setupComponent(component) {
            var state = getState(component);
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
            state.readyWatcher = objectWatchProp(state, "ready", handleReadyChanges);
            component.onDestroy(state.readyWatcher);
            handleReadyChanges();
        }
        // CONCATENATED MODULE: ./node_modules/component-element/src/decorators/prop.js
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
 */        function prop_prop() {
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
                    return elementHasAttributeForProp(this, propDef);
                };
                setter = descriptor.set = function(value) {
                    // When setting the value of this attribute directly on the instance (or instance.props),
                    // ensure that element attribute is also adjusted to reflect value.
                    // Do this only if the `value` is boolean - because when an attribute is added to the
                    // element, its value should be empty string.
                    "boolean" === typeof value && (value && !elementHasAttributeForProp(this, propDef) ? this.setAttribute(prop, "") : !value && elementHasAttributeForProp(this, propDef) && this.removeAttribute(prop));
                    return elementHasAttributeForProp(this, propDef);
                };
            }
            propDef = jsutils_objectExtend(
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
            function(Proto, name, getter, setter) {
                var classProps = function(Proto) {
                    Proto.constructor.propsDef || objectDefineProperty(Proto.constructor, "propsDef", {
                        configurable: true,
                        writable: true,
                        value: {}
                    });
                    return Proto.constructor.propsDef;
                }(Proto);
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
                                        RE_UPPER_CASE_LETTERS.test(name) && classProps[name].aliases.push((str = name, 
                    str.replace(/([A-Z])/g, function(match, p1) {
                        return "-" + p1.toLowerCase();
                    })));
                }
                var str;
                /**
 * Given a string in kebab case (ex. paul-tavares), this will return a CamelCase
 * representation of that string.
 *
 * @param {String} str
 *
 * @return {String}
 */                return classProps[name];
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
 */ (Proto, prop, getter, setter), options);
            descriptor.get = descriptor.set = lazyProp(prop, getter, setter);
            // Create a instance property for each alias as well
                        propDef.aliases.length && propDef.aliases.forEach(function(propAliasName) {
                if (!(propAliasName in Proto)) {
                    var aliasPropGetterSetterSetup = lazyProp(propAliasName, getter, setter);
                    objectDefineProperty(Proto, propAliasName, {
                        configurable: true,
                        get: aliasPropGetterSetterSetup,
                        set: aliasPropGetterSetterSetup
                    });
                }
            });
            return descriptor;
        }
        function lazyProp(propName, getter, setter) {
            // FIXME: getter/setter not being used?
            var $propName = "_$" + propName;
            return function() {
                var isUpdateMode = 1 === arguments.length;
                if (-1 !== Object.getOwnPropertyNames(this).indexOf($propName)) return isUpdateMode ? this[$propName] = arguments[0] : this[$propName];
                // Ensure we write back to
                                var writeToPropName = getPropsDefinition(this.constructor)[propName].name;
                objectDefineProperty(this, $propName, {
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
        // CONCATENATED MODULE: ./node_modules/component-element/src/decorators/bind.js
        /**
 * Binds the given attributes to the Class instance on first `get`.
 *
 * @return {Function|Object}
 */        function bind(Proto, prop, descriptor) {
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
                    objectDefineProperty(this, prop, {
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
 // for when called explicitly with no params: `bind()`
                }
        // CONCATENATED MODULE: ./node_modules/component-element/src/index.js
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/domutils/domPosition.js
                var domPosition_typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
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
        /* harmony default export */ var domutils_domPosition = function(positionEle, anchorEle, options) {
            var positionEleStyles = positionEle.style;
            var anchorEleRect = anchorEle.getBoundingClientRect();
            var positionEleRect = positionEle.getBoundingClientRect();
            var opt = jsutils_objectExtend({
                my: "top left",
                at: "bottom left",
                viewport: WINDOW
            }, options);
            var _getViewportScrollInf = 
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
            function(viewport) {
                var response = {};
                if (viewport === WINDOW || viewport === DOCUMENT) if (domPosition_typeof(WINDOW[PAGE_Y_OFFSET]) !== UNDEFINED) {
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
            // CONCATENATED MODULE: ./src/Popup/Popup.js
            (opt.viewport), scrollTop = _getViewportScrollInf.scrollTop, scrollLeft = _getViewportScrollInf.scrollLeft;
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
        };
        var Popup_createClass = function() {
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
 */        var Popup_Popup = (_dec = prop_prop({
            required: true,
            attr: true
        }), _dec2 = prop_prop({
            boolean: true
        }), _dec3 = prop_prop({
            boolean: true
        }), _dec4 = prop_prop({
            attr: true
        }), _dec5 = prop_prop({
            attr: true
        }), _class = function(_ComponentElement) {
            !function(subClass, superClass) {
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
            }(Popup, _ComponentElement);
            function Popup() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, Popup);
                return function(self, call) {
                    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
                }(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
            }
            Popup_createClass(Popup, [ {
                key: "init",
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
                // Called from constructor
                value: function() {
                    // this._forPropWas = this.props.for;
                    this._bodyEv = null;
                    this.onPropsChange(this.position, "at");
                    this.onPropsChange(this.position, "my");
                }
                // Called when all required `props` have been provided
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
                // Called if required fields are removed
                // unready() {}
                // called when element is attached to dom
                // mounted() {}
                // called when element is removed from dom
                // unmounted() {}
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        }, {
                key: "_handleShowProp",
                value: function() {
                    var _this3 = this;
                    if (this.for && this.show) {
                        this.position();
                        // Auto close? then setup body event
                                                this.autoClose && !this._bodyEv && setTimeout(function() {
                            _this3._bodyEv = domutils_domAddEventListener(document.body, "click", function(ev) {
                                if (!_this3.contains(ev.target)) {
                                    // FIXME: support onHide callback? maybe event?
                                    removeBodyEvent(_this3);
                                    _this3.show = false;
                                }
                            });
                        }, 200);
                    } else removeBodyEvent(this);
                }
                /**
         * Positions the popup against the current `for` element.
         */            }, {
                key: "position",
                value: function() {
                    if (this.for && this.show) {
                        var options = {};
 // FIXME: move this to a computed prop
                                                this.my && (options.my = this.my);
                        this.at && (options.at = this.at);
                        domutils_domPosition(this, this.for, options);
                    }
                }
            }, {
                key: "for",
                set: function(value) {
                    if (value && "string" === typeof value) return document.querySelector(value);
                    return value;
                }
                /**
         * When set to `true`, popup will be made visible.
         *
         * @property {Boolean} show
         */            }, {
                key: "show",
                get: function() {}
                /**
         * If Popup should be auto closed when user clicks outside of its content.
         *
         * @property {Boolean} autoClose
         */            }, {
                key: "autoClose",
                get: function() {}
            }, {
                key: "my",
                get: function() {
                    return "top left";
                }
                /**
         * The edge of the `for` element that will be used to position the popup against.
         * Default is `bottom left`.
         * See `common-micro-libs/src/domUtils/domPosition` for other possible values
         *
         * @property {string} at
         */            }, {
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
         * The element that the popup is for. Could be a css selector (String)
         * or a HTML Element.
         * @property
         * @type {String|HTMLElement}
         */            } ]);
            return Popup;
        }(ComponentElement_ComponentElement), _applyDecoratedDescriptor(_class.prototype, "for", [ _dec ], Object.getOwnPropertyDescriptor(_class.prototype, "for"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "show", [ _dec2 ], Object.getOwnPropertyDescriptor(_class.prototype, "show"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "autoClose", [ _dec3 ], Object.getOwnPropertyDescriptor(_class.prototype, "autoClose"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "my", [ _dec4 ], Object.getOwnPropertyDescriptor(_class.prototype, "my"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "at", [ _dec5 ], Object.getOwnPropertyDescriptor(_class.prototype, "at"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "_handleShowProp", [ bind ], Object.getOwnPropertyDescriptor(_class.prototype, "_handleShowProp"), _class.prototype), 
        _applyDecoratedDescriptor(_class.prototype, "position", [ bind ], Object.getOwnPropertyDescriptor(_class.prototype, "position"), _class.prototype), 
        _class);
        /* harmony default export */        
        // CONCATENATED MODULE: ./node_modules/common-micro-libs/src/domutils/domInsertBefore.js
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
        /* harmony default export */        
        // CONCATENATED MODULE: ./src/ContentAccess/ContentAccess.js
        var ContentAccess_createClass = function() {
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
        var ContentAccess_dec, ContentAccess_dec2, ContentAccess_class;
        function ContentAccess_defineProperty(obj, key, value) {
            key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            }) : obj[key] = value;
            return obj;
        }
        function ContentAccess_applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
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
 */        var ContentAccess_ContentAccess = (ContentAccess_dec = prop_prop({
            attr: true,
            boolean: true
        }), ContentAccess_dec2 = prop_prop({
            attr: true,
            boolean: true
        }), ContentAccess_class = function(_ComponentElement) {
            !function(subClass, superClass) {
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
            }(ContentAccess, _ComponentElement);
            function ContentAccess() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, ContentAccess);
                return function(self, call) {
                    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
                }(this, (ContentAccess.__proto__ || Object.getPrototypeOf(ContentAccess)).apply(this, arguments));
            }
            ContentAccess_createClass(ContentAccess, [ {
                key: "init",
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
                // Called from constructor
                value: function() {
                    var _STATE_SYMBOL;
                    this[STATE_SYMBOL] = (_STATE_SYMBOL = {}, ContentAccess_defineProperty(_STATE_SYMBOL, INTERCEPTOR_TOP_1, null), 
                    ContentAccess_defineProperty(_STATE_SYMBOL, INTERCEPTOR_TOP_2, null), ContentAccess_defineProperty(_STATE_SYMBOL, INTERCEPTOR_BOTTOM_1, null), 
                    ContentAccess_defineProperty(_STATE_SYMBOL, INTERCEPTOR_BOTTOM_2, null), ContentAccess_defineProperty(_STATE_SYMBOL, "isRefocusing", false), 
                    _STATE_SYMBOL);
                    this.onPropsChange(this._handleBlock, "block");
                    this.onPropsChange(this._handleBlock, "onParent");
                    domAddEventListener(this, "click", this);
                }
                // Called when all required `props` have been provided
                // ready() {}
                // Called if required fields are removed
                // unready() {}
                // called when element is attached to dom
                        }, {
                key: "mounted",
                value: function() {
                    this._handleBlock();
                }
                // called when element is removed from dom
                // unmounted() {}
                        }, {
                key: "destroy",
                value: function() {
                    (function get(object, property, receiver) {
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
                    })(ContentAccess.prototype.__proto__ || Object.getPrototypeOf(ContentAccess.prototype), "destroy", this).call(this);
                    removeTabInterceptors(this);
                }
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        }, {
                key: "_handleBlock",
                value: function() {
                    this.block ? function(inst) {
                        if (inst.parentNode) {
                            inst[STATE_SYMBOL][INTERCEPTOR_TOP_1] || function(inst) {
                                inst[STATE_SYMBOL][INTERCEPTOR_TOP_1] || INTERCEPTOR_LIST.forEach(function(name) {
                                    inst[STATE_SYMBOL][name] = document.createElement("a");
                                    inst[STATE_SYMBOL][name].innerText = "-";
                                    inst[STATE_SYMBOL][name]._role = name;
                                    inst[STATE_SYMBOL][name].setAttribute("_role", name);
                                    inst[STATE_SYMBOL][name].setAttribute("tabindex", "0");
                                    inst[STATE_SYMBOL][name].setAttribute("style", INTERCEPTOR_STYLES);
                                    domAddEventListener(inst[STATE_SYMBOL][name], "focus", inst);
                                });
                            }
                            /* harmony default export */ (inst);
                            if (inst.onParent) {
                                domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_2], inst.parentNode.firstChild);
                                domInsertBefore(inst[STATE_SYMBOL][INTERCEPTOR_TOP_1], inst.parentNode.firstChild);
                                inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_2]);
                                inst.parentNode.appendChild(inst[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1]);
                            } else {
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
                    }(this) : removeTabInterceptors(this);
                }
            }, {
                key: "handleEvent",
                value: function(ev) {
                    if (this.block && "focus" === ev.type && ev.target._role && !this[STATE_SYMBOL].isRefocusing) {
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
                        }
                        this[STATE_SYMBOL].isRefocusing = false;
                    } else "click" === ev.type && this.block && !this.onParent && this[STATE_SYMBOL][INTERCEPTOR_BOTTOM_1].focus();
                }
            }, {
                key: "block",
                get: function() {}
                /**
         * When attribute present on element, then the behaviour of this component
         * changes to making it `position:absolute` and to fill the parent's space.
         * The tab control is applied to all content of the parent element.
         * Also: Any content (elements) placed inside of the `content-access` will
         * be visible and accessible to the user - similar to how modal dialogs work.
         *
         * @property
         * @type Boolean
         */            }, {
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
         * Attribute that when present on the element, will make this
         * element visible and content around it (same parent) non-accessible
         *
         * @property
         * @type Boolean
         */            } ]);
            return ContentAccess;
        }(ComponentElement_ComponentElement), ContentAccess_applyDecoratedDescriptor(ContentAccess_class.prototype, "block", [ ContentAccess_dec ], Object.getOwnPropertyDescriptor(ContentAccess_class.prototype, "block"), ContentAccess_class.prototype), 
        ContentAccess_applyDecoratedDescriptor(ContentAccess_class.prototype, "onParent", [ ContentAccess_dec2 ], Object.getOwnPropertyDescriptor(ContentAccess_class.prototype, "onParent"), ContentAccess_class.prototype), 
        ContentAccess_applyDecoratedDescriptor(ContentAccess_class.prototype, "_handleBlock", [ bind ], Object.getOwnPropertyDescriptor(ContentAccess_class.prototype, "_handleBlock"), ContentAccess_class.prototype), 
        ContentAccess_class);
        function removeTabInterceptors(inst) {
            inst[STATE_SYMBOL][INTERCEPTOR_TOP_1] && INTERCEPTOR_LIST.forEach(function(interceptorEle) {
                return inst[STATE_SYMBOL][interceptorEle].parentNode && inst[STATE_SYMBOL][interceptorEle].parentNode.removeChild(inst[STATE_SYMBOL][interceptorEle]);
            });
        }
        // CONCATENATED MODULE: ./src/index.js
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() {
            return VERSION;
        });
        /* concated harmony reexport */        __webpack_require__.d(__webpack_exports__, "Popup", function() {
            return Popup_Popup;
        });
        /* concated harmony reexport */        __webpack_require__.d(__webpack_exports__, "ContentAccess", function() {
            return ContentAccess_ContentAccess;
        });
        var VERSION = "1.0.0";
        /***/    }, 
    /* 2 */
    /***/ function(module, exports) {
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
        /***/    }
    /******/ ]);
});
//# sourceMappingURL=common-widget-elements.js.map