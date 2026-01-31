(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/flood-risk-map/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/flood-risk-map/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/flood-risk-map/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/flood-risk-map/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/flood-risk-map/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areaFactors",
    ()=>areaFactors,
    "azimuthToBearing",
    ()=>azimuthToBearing,
    "bearingToAzimuth",
    ()=>bearingToAzimuth,
    "convertArea",
    ()=>convertArea,
    "convertLength",
    ()=>convertLength,
    "degreesToRadians",
    ()=>degreesToRadians,
    "earthRadius",
    ()=>earthRadius,
    "factors",
    ()=>factors,
    "feature",
    ()=>feature,
    "featureCollection",
    ()=>featureCollection,
    "geometry",
    ()=>geometry,
    "geometryCollection",
    ()=>geometryCollection,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "lengthToDegrees",
    ()=>lengthToDegrees,
    "lengthToRadians",
    ()=>lengthToRadians,
    "lineString",
    ()=>lineString,
    "lineStrings",
    ()=>lineStrings,
    "multiLineString",
    ()=>multiLineString,
    "multiPoint",
    ()=>multiPoint,
    "multiPolygon",
    ()=>multiPolygon,
    "point",
    ()=>point,
    "points",
    ()=>points,
    "polygon",
    ()=>polygon,
    "polygons",
    ()=>polygons,
    "radiansToDegrees",
    ()=>radiansToDegrees,
    "radiansToLength",
    ()=>radiansToLength,
    "round",
    ()=>round,
    "validateBBox",
    ()=>validateBBox,
    "validateId",
    ()=>validateId
]);
// index.ts
var earthRadius = 63710088e-1;
var factors = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: 360 / (2 * Math.PI),
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1e3,
    kilometres: earthRadius / 1e3,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1e3,
    millimetres: earthRadius * 1e3,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius * 1.0936
};
var areaFactors = {
    acres: 247105e-9,
    centimeters: 1e4,
    centimetres: 1e4,
    feet: 10.763910417,
    hectares: 1e-4,
    inches: 1550.003100006,
    kilometers: 1e-6,
    kilometres: 1e-6,
    meters: 1,
    metres: 1,
    miles: 386e-9,
    nauticalmiles: 29155334959812285e-23,
    millimeters: 1e6,
    millimetres: 1e6,
    yards: 1.195990046
};
function feature(geom, properties, options = {}) {
    const feat = {
        type: "Feature"
    };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
function geometry(type, coordinates, _options = {}) {
    switch(type){
        case "Point":
            return point(coordinates).geometry;
        case "LineString":
            return lineString(coordinates).geometry;
        case "Polygon":
            return polygon(coordinates).geometry;
        case "MultiPoint":
            return multiPoint(coordinates).geometry;
        case "MultiLineString":
            return multiLineString(coordinates).geometry;
        case "MultiPolygon":
            return multiPolygon(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
function point(coordinates, properties, options = {}) {
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    const geom = {
        type: "Point",
        coordinates
    };
    return feature(geom, properties, options);
}
function points(coordinates, properties, options = {}) {
    return featureCollection(coordinates.map((coords)=>{
        return point(coords, properties);
    }), options);
}
function polygon(coordinates, properties, options = {}) {
    for (const ring of coordinates){
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        if (ring[ring.length - 1].length !== ring[0].length) {
            throw new Error("First and last Position are not equivalent.");
        }
        for(let j = 0; j < ring[ring.length - 1].length; j++){
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    const geom = {
        type: "Polygon",
        coordinates
    };
    return feature(geom, properties, options);
}
function polygons(coordinates, properties, options = {}) {
    return featureCollection(coordinates.map((coords)=>{
        return polygon(coords, properties);
    }), options);
}
function lineString(coordinates, properties, options = {}) {
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    const geom = {
        type: "LineString",
        coordinates
    };
    return feature(geom, properties, options);
}
function lineStrings(coordinates, properties, options = {}) {
    return featureCollection(coordinates.map((coords)=>{
        return lineString(coords, properties);
    }), options);
}
function featureCollection(features, options = {}) {
    const fc = {
        type: "FeatureCollection"
    };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
function multiLineString(coordinates, properties, options = {}) {
    const geom = {
        type: "MultiLineString",
        coordinates
    };
    return feature(geom, properties, options);
}
function multiPoint(coordinates, properties, options = {}) {
    const geom = {
        type: "MultiPoint",
        coordinates
    };
    return feature(geom, properties, options);
}
function multiPolygon(coordinates, properties, options = {}) {
    const geom = {
        type: "MultiPolygon",
        coordinates
    };
    return feature(geom, properties, options);
}
function geometryCollection(geometries, properties, options = {}) {
    const geom = {
        type: "GeometryCollection",
        geometries
    };
    return feature(geom, properties, options);
}
function round(num, precision = 0) {
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
function radiansToLength(radians, units = "kilometers") {
    const factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
function lengthToRadians(distance, units = "kilometers") {
    const factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
function bearingToAzimuth(bearing) {
    let angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
function azimuthToBearing(angle) {
    angle = angle % 360;
    if (angle > 180) {
        return angle - 360;
    } else if (angle < -180) {
        return angle + 360;
    }
    return angle;
}
function radiansToDegrees(radians) {
    const normalisedRadians = radians % (2 * Math.PI);
    return normalisedRadians * 180 / Math.PI;
}
function degreesToRadians(degrees) {
    const normalisedDegrees = degrees % 360;
    return normalisedDegrees * Math.PI / 180;
}
function convertLength(length, originalUnit = "kilometers", finalUnit = "kilometers") {
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
function convertArea(area, originalUnit = "meters", finalUnit = "kilometers") {
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    const startFactor = areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    const finalFactor = areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return area / startFactor * finalFactor;
}
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
function isObject(input) {
    return input !== null && typeof input === "object" && !Array.isArray(input);
}
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach((num)=>{
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if ([
        "string",
        "number"
    ].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionOf",
    ()=>collectionOf,
    "containsNumber",
    ()=>containsNumber,
    "featureOf",
    ()=>featureOf,
    "geojsonType",
    ()=>geojsonType,
    "getCoord",
    ()=>getCoord,
    "getCoords",
    ()=>getCoords,
    "getGeom",
    ()=>getGeom,
    "getType",
    ()=>getType
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
            return [
                ...coord.geometry.coordinates
            ];
        }
        if (coord.type === "Point") {
            return [
                ...coord.coordinates
            ];
        }
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
        return [
            ...coord
        ];
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    } else {
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function containsNumber(coordinates) {
    if (coordinates.length > 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinates[0]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
    }
}
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (const feature of featureCollection.features){
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
        }
    }
}
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
function getType(geojson, _name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/distance/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "distance",
    ()=>distance
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
;
function distance(from, to, options = {}) {
    var coordinates1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(from);
    var coordinates2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(to);
    var dLat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates2[1] - coordinates1[1]);
    var dLon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates2[0] - coordinates1[0]);
    var lat1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates1[1]);
    var lat2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToLength"])(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
var index_default = distance;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coordAll",
    ()=>coordAll,
    "coordEach",
    ()=>coordEach,
    "coordReduce",
    ()=>coordReduce,
    "featureEach",
    ()=>featureEach,
    "featureReduce",
    ()=>featureReduce,
    "findPoint",
    ()=>findPoint,
    "findSegment",
    ()=>findSegment,
    "flattenEach",
    ()=>flattenEach,
    "flattenReduce",
    ()=>flattenReduce,
    "geomEach",
    ()=>geomEach,
    "geomReduce",
    ()=>geomReduce,
    "lineEach",
    ()=>lineEach,
    "lineReduce",
    ()=>lineReduce,
    "propEach",
    ()=>propEach,
    "propReduce",
    ()=>propReduce,
    "segmentEach",
    ()=>segmentEach,
    "segmentReduce",
    ()=>segmentReduce
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
function coordEach(geojson, callback, excludeWrapCoord) {
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords, geometryMaybeCollection, wrapShrink = 0, coordIndex = 0, isGeometryCollection, type = geojson.type, isFeatureCollection = type === "FeatureCollection", isFeature = type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    for(var featureIndex = 0; featureIndex < stop; featureIndex++){
        geometryMaybeCollection = isFeatureCollection ? // @ts-expect-error: Known type conflict
        geojson.features[featureIndex].geometry : isFeature ? // @ts-expect-error: Known type conflict
        geojson.geometry : geojson;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(var geomIndex = 0; geomIndex < stopG; geomIndex++){
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;
            wrapShrink = excludeWrapCoord && (geomType === "Polygon" || geomType === "MultiPolygon") ? 1 : 0;
            switch(geomType){
                case null:
                    break;
                case "Point":
                    if (// @ts-expect-error: Known type conflict
                    callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                    multiFeatureIndex++;
                    break;
                case "LineString":
                case "MultiPoint":
                    for(j = 0; j < coords.length; j++){
                        if (// @ts-expect-error: Known type conflict
                        callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                        coordIndex++;
                        if (geomType === "MultiPoint") multiFeatureIndex++;
                    }
                    if (geomType === "LineString") multiFeatureIndex++;
                    break;
                case "Polygon":
                case "MultiLineString":
                    for(j = 0; j < coords.length; j++){
                        for(k = 0; k < coords[j].length - wrapShrink; k++){
                            if (// @ts-expect-error: Known type conflict
                            callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                            coordIndex++;
                        }
                        if (geomType === "MultiLineString") multiFeatureIndex++;
                        if (geomType === "Polygon") geometryIndex++;
                    }
                    if (geomType === "Polygon") multiFeatureIndex++;
                    break;
                case "MultiPolygon":
                    for(j = 0; j < coords.length; j++){
                        geometryIndex = 0;
                        for(k = 0; k < coords[j].length; k++){
                            for(l = 0; l < coords[j][k].length - wrapShrink; l++){
                                if (// @ts-expect-error: Known type conflict
                                callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                                coordIndex++;
                            }
                            geometryIndex++;
                        }
                        multiFeatureIndex++;
                    }
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++)if (// @ts-expect-error: Known type conflict
                    coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
    }
}
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    coordEach(geojson, function(currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === void 0) previousValue = currentCoord;
        else previousValue = callback(// @ts-expect-error: Known type conflict
        previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}
function propEach(geojson, callback) {
    var i;
    switch(geojson.type){
        case "FeatureCollection":
            for(i = 0; i < geojson.features.length; i++){
                if (callback(geojson.features[i].properties, i) === false) break;
            }
            break;
        case "Feature":
            callback(geojson.properties, 0);
            break;
    }
}
function propReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    propEach(geojson, function(currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === void 0) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}
function featureEach(geojson, callback) {
    if (geojson.type === "Feature") {
        callback(geojson, 0);
    } else if (geojson.type === "FeatureCollection") {
        for(var i = 0; i < geojson.features.length; i++){
            if (callback(geojson.features[i], i) === false) break;
        }
    }
}
function featureReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    featureEach(geojson, function(currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === void 0) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}
function coordAll(geojson) {
    var coords = [];
    coordEach(geojson, function(coord) {
        coords.push(coord);
    });
    return coords;
}
function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = geojson.type === "FeatureCollection", isFeature = geojson.type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    for(i = 0; i < stop; i++){
        geometryMaybeCollection = isFeatureCollection ? // @ts-expect-error: Known type conflict
        geojson.features[i].geometry : isFeature ? // @ts-expect-error: Known type conflict
        geojson.geometry : geojson;
        featureProperties = isFeatureCollection ? // @ts-expect-error: Known type conflict
        geojson.features[i].properties : isFeature ? // @ts-expect-error: Known type conflict
        geojson.properties : {};
        featureBBox = isFeatureCollection ? // @ts-expect-error: Known type conflict
        geojson.features[i].bbox : isFeature ? // @ts-expect-error: Known type conflict
        geojson.bbox : void 0;
        featureId = isFeatureCollection ? // @ts-expect-error: Known type conflict
        geojson.features[i].id : isFeature ? // @ts-expect-error: Known type conflict
        geojson.id : void 0;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(g = 0; g < stopG; g++){
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
            if (geometry === null) {
                if (// @ts-expect-error: Known type conflict
                callback(// @ts-expect-error: Known type conflict
                null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch(geometry.type){
                case "Point":
                case "LineString":
                case "MultiPoint":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    {
                        if (// @ts-expect-error: Known type conflict
                        callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                        break;
                    }
                case "GeometryCollection":
                    {
                        for(j = 0; j < geometry.geometries.length; j++){
                            if (// @ts-expect-error: Known type conflict
                            callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                        }
                        break;
                    }
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
        featureIndex++;
    }
}
function geomReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    geomEach(geojson, function(currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === void 0) previousValue = currentGeometry;
        else previousValue = callback(// @ts-expect-error: Known type conflict
        previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}
function flattenEach(geojson, callback) {
    geomEach(geojson, function(geometry, featureIndex, properties, bbox, id) {
        var type = geometry === null ? null : geometry.type;
        switch(type){
            case null:
            case "Point":
            case "LineString":
            case "Polygon":
                if (// @ts-expect-error: Known type conflict
                callback((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(geometry, properties, {
                    bbox,
                    id
                }), featureIndex, 0) === false) return false;
                return;
        }
        var geomType;
        switch(type){
            case "MultiPoint":
                geomType = "Point";
                break;
            case "MultiLineString":
                geomType = "LineString";
                break;
            case "MultiPolygon":
                geomType = "Polygon";
                break;
        }
        for(var multiFeatureIndex = 0; // @ts-expect-error: Known type conflict
        multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++){
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            if (// @ts-expect-error: Known type conflict
            callback((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
        }
    });
}
function flattenReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    flattenEach(geojson, function(currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === void 0) previousValue = currentFeature;
        else previousValue = callback(// @ts-expect-error: Known type conflict
        previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}
function segmentEach(geojson, callback) {
    flattenEach(geojson, function(feature2, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;
        if (!feature2.geometry) return;
        var type = feature2.geometry.type;
        if (type === "Point" || type === "MultiPoint") return;
        var previousCoords;
        var previousFeatureIndex = 0;
        var previousMultiIndex = 0;
        var prevGeomIndex = 0;
        if (// @ts-expect-error: Known type conflict
        coordEach(feature2, function(currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            if (// @ts-expect-error: Known type conflict
            previousCoords === void 0 || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
                previousCoords = currentCoord;
                previousFeatureIndex = featureIndex;
                previousMultiIndex = multiPartIndexCoord;
                prevGeomIndex = geometryIndex;
                segmentIndex = 0;
                return;
            }
            var currentSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])(// @ts-expect-error: Known type conflict
            [
                previousCoords,
                currentCoord
            ], feature2.properties);
            if (// @ts-expect-error: Known type conflict
            callback(// @ts-expect-error: Known type conflict
            currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
        }) === false) return false;
    });
}
function segmentReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    segmentEach(geojson, function(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === void 0) previousValue = currentSegment;
        else previousValue = callback(previousValue, // @ts-expect-error: Known type conflict
        currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}
function lineEach(geojson, callback) {
    if (!geojson) throw new Error("geojson is required");
    flattenEach(geojson, function(feature2, featureIndex, multiFeatureIndex) {
        if (feature2.geometry === null) return;
        var type = feature2.geometry.type;
        var coords = feature2.geometry.coordinates;
        switch(type){
            case "LineString":
                if (callback(feature2, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
                break;
            case "Polygon":
                for(var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++){
                    if (// @ts-expect-error: Known type conflict
                    callback(// @ts-expect-error: Known type conflict
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])(coords[geometryIndex], feature2.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                }
                break;
        }
    });
}
function lineReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    lineEach(geojson, function(currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === void 0) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}
function findSegment(geojson, options) {
    options = options || {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var segmentIndex = options.segmentIndex || 0;
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
            if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])(// @ts-expect-error: Known type conflict
            [
                coords[segmentIndex],
                coords[segmentIndex + 1]
            ], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])([
                // @ts-expect-error: Known type conflict
                coords[geometryIndex][segmentIndex],
                // @ts-expect-error: Known type conflict
                coords[geometryIndex][segmentIndex + 1]
            ], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])([
                // @ts-expect-error: Known type conflict
                coords[multiFeatureIndex][segmentIndex],
                // @ts-expect-error: Known type conflict
                coords[multiFeatureIndex][segmentIndex + 1]
            ], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])([
                // @ts-expect-error: Known type conflict
                coords[multiFeatureIndex][geometryIndex][segmentIndex],
                // @ts-expect-error: Known type conflict
                coords[multiFeatureIndex][geometryIndex][segmentIndex + 1]
            ], properties, options);
    }
    throw new Error("geojson is invalid");
}
function findPoint(geojson, options) {
    options = options || {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(options)) throw new Error("options is invalid");
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var coordIndex = options.coordIndex || 0;
    var properties = options.properties;
    var geometry;
    switch(geojson.type){
        case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
        case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
        case "Point":
        case "MultiPoint":
            return null;
        case "LineString":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon":
            geometry = geojson;
            break;
        default:
            throw new Error("geojson is invalid");
    }
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch(geometry.type){
        case "Point":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords, properties, options);
        case "MultiPoint":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[multiFeatureIndex], properties, options);
        case "LineString":
            if (coordIndex < 0) coordIndex = coords.length + coordIndex;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[coordIndex], properties, options);
        case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[geometryIndex][coordIndex], properties, options);
        case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[multiFeatureIndex][coordIndex], properties, options);
        case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
    }
    throw new Error("geojson is invalid");
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/length/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "length",
    ()=>length
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/distance/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
;
;
function length(geojson, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["segmentReduce"])(geojson, (previousValue, segment)=>{
        const coords = segment.geometry.coordinates;
        return previousValue + (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"])(coords[0], coords[1], options);
    }, 0);
}
var index_default = length;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/rbush/rbush.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    function t(t, r, e, a, h) {
        !function t(n, r, e, a, h) {
            for(; a > e;){
                if (a - e > 600) {
                    var o = a - e + 1, s = r - e + 1, l = Math.log(o), f = .5 * Math.exp(2 * l / 3), u = .5 * Math.sqrt(l * f * (o - f) / o) * (s - o / 2 < 0 ? -1 : 1), m = Math.max(e, Math.floor(r - s * f / o + u)), c = Math.min(a, Math.floor(r + (o - s) * f / o + u));
                    t(n, r, m, c, h);
                }
                var p = n[r], d = e, x = a;
                for(i(n, e, r), h(n[a], p) > 0 && i(n, e, a); d < x;){
                    for(i(n, d, x), d++, x--; h(n[d], p) < 0;)d++;
                    for(; h(n[x], p) > 0;)x--;
                }
                0 === h(n[e], p) ? i(n, e, x) : i(n, ++x, a), x <= r && (e = x + 1), r <= x && (a = x - 1);
            }
        }(t, r, e || 0, a || t.length - 1, h || n);
    }
    function i(t, i, n) {
        var r = t[i];
        t[i] = t[n], t[n] = r;
    }
    function n(t, i) {
        return t < i ? -1 : t > i ? 1 : 0;
    }
    var r = function(t) {
        void 0 === t && (t = 9), this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear();
    };
    function e(t, i, n) {
        if (!n) return i.indexOf(t);
        for(var r = 0; r < i.length; r++)if (n(t, i[r])) return r;
        return -1;
    }
    function a(t, i) {
        h(t, 0, t.children.length, i, t);
    }
    function h(t, i, n, r, e) {
        e || (e = p(null)), e.minX = 1 / 0, e.minY = 1 / 0, e.maxX = -1 / 0, e.maxY = -1 / 0;
        for(var a = i; a < n; a++){
            var h = t.children[a];
            o(e, t.leaf ? r(h) : h);
        }
        return e;
    }
    function o(t, i) {
        return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t;
    }
    function s(t, i) {
        return t.minX - i.minX;
    }
    function l(t, i) {
        return t.minY - i.minY;
    }
    function f(t) {
        return (t.maxX - t.minX) * (t.maxY - t.minY);
    }
    function u(t) {
        return t.maxX - t.minX + (t.maxY - t.minY);
    }
    function m(t, i) {
        return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
    }
    function c(t, i) {
        return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
    }
    function p(t) {
        return {
            children: t,
            height: 1,
            leaf: !0,
            minX: 1 / 0,
            minY: 1 / 0,
            maxX: -1 / 0,
            maxY: -1 / 0
        };
    }
    function d(i, n, r, e, a) {
        for(var h = [
            n,
            r
        ]; h.length;)if (!((r = h.pop()) - (n = h.pop()) <= e)) {
            var o = n + Math.ceil((r - n) / e / 2) * e;
            t(i, o, n, r, a), h.push(n, o, o, r);
        }
    }
    return r.prototype.all = function() {
        return this._all(this.data, []);
    }, r.prototype.search = function(t) {
        var i = this.data, n = [];
        if (!c(t, i)) return n;
        for(var r = this.toBBox, e = []; i;){
            for(var a = 0; a < i.children.length; a++){
                var h = i.children[a], o = i.leaf ? r(h) : h;
                c(t, o) && (i.leaf ? n.push(h) : m(t, o) ? this._all(h, n) : e.push(h));
            }
            i = e.pop();
        }
        return n;
    }, r.prototype.collides = function(t) {
        var i = this.data;
        if (!c(t, i)) return !1;
        for(var n = []; i;){
            for(var r = 0; r < i.children.length; r++){
                var e = i.children[r], a = i.leaf ? this.toBBox(e) : e;
                if (c(t, a)) {
                    if (i.leaf || m(t, a)) return !0;
                    n.push(e);
                }
            }
            i = n.pop();
        }
        return !1;
    }, r.prototype.load = function(t) {
        if (!t || !t.length) return this;
        if (t.length < this._minEntries) {
            for(var i = 0; i < t.length; i++)this.insert(t[i]);
            return this;
        }
        var n = this._build(t.slice(), 0, t.length - 1, 0);
        if (this.data.children.length) if (this.data.height === n.height) this._splitRoot(this.data, n);
        else {
            if (this.data.height < n.height) {
                var r = this.data;
                this.data = n, n = r;
            }
            this._insert(n, this.data.height - n.height - 1, !0);
        }
        else this.data = n;
        return this;
    }, r.prototype.insert = function(t) {
        return t && this._insert(t, this.data.height - 1), this;
    }, r.prototype.clear = function() {
        return this.data = p([]), this;
    }, r.prototype.remove = function(t, i) {
        if (!t) return this;
        for(var n, r, a, h = this.data, o = this.toBBox(t), s = [], l = []; h || s.length;){
            if (h || (h = s.pop(), r = s[s.length - 1], n = l.pop(), a = !0), h.leaf) {
                var f = e(t, h.children, i);
                if (-1 !== f) return h.children.splice(f, 1), s.push(h), this._condense(s), this;
            }
            a || h.leaf || !m(h, o) ? r ? (n++, h = r.children[n], a = !1) : h = null : (s.push(h), l.push(n), n = 0, r = h, h = h.children[0]);
        }
        return this;
    }, r.prototype.toBBox = function(t) {
        return t;
    }, r.prototype.compareMinX = function(t, i) {
        return t.minX - i.minX;
    }, r.prototype.compareMinY = function(t, i) {
        return t.minY - i.minY;
    }, r.prototype.toJSON = function() {
        return this.data;
    }, r.prototype.fromJSON = function(t) {
        return this.data = t, this;
    }, r.prototype._all = function(t, i) {
        for(var n = []; t;)t.leaf ? i.push.apply(i, t.children) : n.push.apply(n, t.children), t = n.pop();
        return i;
    }, r.prototype._build = function(t, i, n, r) {
        var e, h = n - i + 1, o = this._maxEntries;
        if (h <= o) return a(e = p(t.slice(i, n + 1)), this.toBBox), e;
        r || (r = Math.ceil(Math.log(h) / Math.log(o)), o = Math.ceil(h / Math.pow(o, r - 1))), (e = p([])).leaf = !1, e.height = r;
        var s = Math.ceil(h / o), l = s * Math.ceil(Math.sqrt(o));
        d(t, i, n, l, this.compareMinX);
        for(var f = i; f <= n; f += l){
            var u = Math.min(f + l - 1, n);
            d(t, f, u, s, this.compareMinY);
            for(var m = f; m <= u; m += s){
                var c = Math.min(m + s - 1, u);
                e.children.push(this._build(t, m, c, r - 1));
            }
        }
        return a(e, this.toBBox), e;
    }, r.prototype._chooseSubtree = function(t, i, n, r) {
        for(; r.push(i), !i.leaf && r.length - 1 !== n;){
            for(var e = 1 / 0, a = 1 / 0, h = void 0, o = 0; o < i.children.length; o++){
                var s = i.children[o], l = f(s), u = (m = t, c = s, (Math.max(c.maxX, m.maxX) - Math.min(c.minX, m.minX)) * (Math.max(c.maxY, m.maxY) - Math.min(c.minY, m.minY)) - l);
                u < a ? (a = u, e = l < e ? l : e, h = s) : u === a && l < e && (e = l, h = s);
            }
            i = h || i.children[0];
        }
        var m, c;
        return i;
    }, r.prototype._insert = function(t, i, n) {
        var r = n ? t : this.toBBox(t), e = [], a = this._chooseSubtree(r, this.data, i, e);
        for(a.children.push(t), o(a, r); i >= 0 && e[i].children.length > this._maxEntries;)this._split(e, i), i--;
        this._adjustParentBBoxes(r, e, i);
    }, r.prototype._split = function(t, i) {
        var n = t[i], r = n.children.length, e = this._minEntries;
        this._chooseSplitAxis(n, e, r);
        var h = this._chooseSplitIndex(n, e, r), o = p(n.children.splice(h, n.children.length - h));
        o.height = n.height, o.leaf = n.leaf, a(n, this.toBBox), a(o, this.toBBox), i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
    }, r.prototype._splitRoot = function(t, i) {
        this.data = p([
            t,
            i
        ]), this.data.height = t.height + 1, this.data.leaf = !1, a(this.data, this.toBBox);
    }, r.prototype._chooseSplitIndex = function(t, i, n) {
        for(var r, e, a, o, s, l, u, m = 1 / 0, c = 1 / 0, p = i; p <= n - i; p++){
            var d = h(t, 0, p, this.toBBox), x = h(t, p, n, this.toBBox), v = (e = d, a = x, o = void 0, s = void 0, l = void 0, u = void 0, o = Math.max(e.minX, a.minX), s = Math.max(e.minY, a.minY), l = Math.min(e.maxX, a.maxX), u = Math.min(e.maxY, a.maxY), Math.max(0, l - o) * Math.max(0, u - s)), M = f(d) + f(x);
            v < m ? (m = v, r = p, c = M < c ? M : c) : v === m && M < c && (c = M, r = p);
        }
        return r || n - i;
    }, r.prototype._chooseSplitAxis = function(t, i, n) {
        var r = t.leaf ? this.compareMinX : s, e = t.leaf ? this.compareMinY : l;
        this._allDistMargin(t, i, n, r) < this._allDistMargin(t, i, n, e) && t.children.sort(r);
    }, r.prototype._allDistMargin = function(t, i, n, r) {
        t.children.sort(r);
        for(var e = this.toBBox, a = h(t, 0, i, e), s = h(t, n - i, n, e), l = u(a) + u(s), f = i; f < n - i; f++){
            var m = t.children[f];
            o(a, t.leaf ? e(m) : m), l += u(a);
        }
        for(var c = n - i - 1; c >= i; c--){
            var p = t.children[c];
            o(s, t.leaf ? e(p) : p), l += u(s);
        }
        return l;
    }, r.prototype._adjustParentBBoxes = function(t, i, n) {
        for(var r = n; r >= 0; r--)o(i[r], t);
    }, r.prototype._condense = function(t) {
        for(var i = t.length - 1, n = void 0; i >= 0; i--)0 === t[i].children.length ? i > 0 ? (n = t[i - 1].children).splice(n.indexOf(t[i]), 1) : this.clear() : a(t[i], this.toBBox);
    }, r;
});
}),
"[project]/flood-risk-map/node_modules/@turf/bbox/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bbox",
    ()=>bbox,
    "default",
    ()=>index_default
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
;
function bbox(geojson, options = {}) {
    if (geojson.bbox != null && true !== options.recompute) {
        return geojson.bbox;
    }
    const result = [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordEach"])(geojson, (coord)=>{
        if (result[0] > coord[0]) {
            result[0] = coord[0];
        }
        if (result[1] > coord[1]) {
            result[1] = coord[1];
        }
        if (result[2] < coord[0]) {
            result[2] = coord[0];
        }
        if (result[3] < coord[1]) {
            result[3] = coord[1];
        }
    });
    return result;
}
var index_default = bbox;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/geojson-rbush/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "geojsonRbush",
    ()=>geojsonRbush
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$rbush$2f$rbush$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/rbush/rbush.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/bbox/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
function toBBox(geojson) {
    var bbox;
    if (geojson.bbox) bbox = geojson.bbox;
    else if (Array.isArray(geojson) && geojson.length === 4) bbox = geojson;
    else if (Array.isArray(geojson) && geojson.length === 6) bbox = [
        geojson[0],
        geojson[1],
        geojson[3],
        geojson[4]
    ];
    else if (geojson.type === "Feature") bbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(geojson);
    else if (geojson.type === "FeatureCollection") bbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(geojson);
    else throw new Error("invalid geojson");
    return {
        minX: bbox[0],
        minY: bbox[1],
        maxX: bbox[2],
        maxY: bbox[3]
    };
}
var RBush = class {
    constructor(maxEntries = 9){
        this.tree = new __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$rbush$2f$rbush$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](maxEntries);
        this.tree.toBBox = toBBox;
    }
    /**
   * [insert](https://github.com/mourner/rbush#data-format)
   *
   * @memberof rbush
   * @param {Feature} feature insert single GeoJSON Feature
   * @returns {RBush} GeoJSON RBush
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   * tree.insert(poly)
   */ insert(feature) {
        if (feature.type !== "Feature") throw new Error("invalid feature");
        feature.bbox = feature.bbox ? feature.bbox : (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(feature);
        this.tree.insert(feature);
        return this;
    }
    /**
   * [load](https://github.com/mourner/rbush#bulk-inserting-data)
   *
   * @memberof rbush
   * @param {FeatureCollection|Array<Feature>} features load entire GeoJSON FeatureCollection
   * @returns {RBush} GeoJSON RBush
   * @example
   * var polys = turf.polygons([
   *     [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]],
   *     [[[-93, 32], [-83, 32], [-83, 39], [-93, 39], [-93, 32]]]
   * ]);
   * tree.load(polys);
   */ load(features) {
        var load = [];
        if (Array.isArray(features)) {
            features.forEach(function(feature) {
                if (feature.type !== "Feature") throw new Error("invalid features");
                feature.bbox = feature.bbox ? feature.bbox : (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(feature);
                load.push(feature);
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureEach"])(features, function(feature) {
                if (feature.type !== "Feature") throw new Error("invalid features");
                feature.bbox = feature.bbox ? feature.bbox : (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(feature);
                load.push(feature);
            });
        }
        this.tree.load(load);
        return this;
    }
    /**
   * [remove](https://github.com/mourner/rbush#removing-data)
   *
   * @memberof rbush
   * @param {Feature} feature remove single GeoJSON Feature
   * @param {Function} equals Pass a custom equals function to compare by value for removal.
   * @returns {RBush} GeoJSON RBush
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.remove(poly);
   */ remove(feature, equals) {
        if (feature.type !== "Feature") throw new Error("invalid feature");
        feature.bbox = feature.bbox ? feature.bbox : (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(feature);
        this.tree.remove(feature, equals);
        return this;
    }
    /**
   * [clear](https://github.com/mourner/rbush#removing-data)
   *
   * @memberof rbush
   * @returns {RBush} GeoJSON Rbush
   * @example
   * tree.clear()
   */ clear() {
        this.tree.clear();
        return this;
    }
    /**
   * [search](https://github.com/mourner/rbush#search)
   *
   * @memberof rbush
   * @param {BBox|FeatureCollection|Feature} geojson search with GeoJSON
   * @returns {FeatureCollection} all features that intersects with the given GeoJSON.
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.search(poly);
   */ search(geojson) {
        var features = this.tree.search(toBBox(geojson));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(features);
    }
    /**
   * [collides](https://github.com/mourner/rbush#collisions)
   *
   * @memberof rbush
   * @param {BBox|FeatureCollection|Feature} geojson collides with GeoJSON
   * @returns {boolean} true if there are any items intersecting the given GeoJSON, otherwise false.
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.collides(poly);
   */ collides(geojson) {
        return this.tree.collides(toBBox(geojson));
    }
    /**
   * [all](https://github.com/mourner/rbush#search)
   *
   * @memberof rbush
   * @returns {FeatureCollection} all the features in RBush
   * @example
   * tree.all()
   */ all() {
        const features = this.tree.all();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(features);
    }
    /**
   * [toJSON](https://github.com/mourner/rbush#export-and-import)
   *
   * @memberof rbush
   * @returns {any} export data as JSON object
   * @example
   * var exported = tree.toJSON()
   */ toJSON() {
        return this.tree.toJSON();
    }
    /**
   * [fromJSON](https://github.com/mourner/rbush#export-and-import)
   *
   * @memberof rbush
   * @param {any} json import previously exported data
   * @returns {RBush} GeoJSON RBush
   * @example
   * var exported = {
   *   "children": [
   *     {
   *       "type": "Feature",
   *       "geometry": {
   *         "type": "Point",
   *         "coordinates": [110, 50]
   *       },
   *       "properties": {},
   *       "bbox": [110, 50, 110, 50]
   *     }
   *   ],
   *   "height": 1,
   *   "leaf": true,
   *   "minX": 110,
   *   "minY": 50,
   *   "maxX": 110,
   *   "maxY": 50
   * }
   * tree.fromJSON(exported)
   */ fromJSON(json) {
        this.tree.fromJSON(json);
        return this;
    }
};
function geojsonRbush(maxEntries) {
    return new RBush(maxEntries);
}
var index_default = geojsonRbush;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/truncate/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "truncate",
    ()=>truncate
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
;
function truncate(geojson, options) {
    options = options != null ? options : {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(options)) throw new Error("options is invalid");
    var precision = options.precision;
    var coordinates = options.coordinates;
    var mutate = options.mutate;
    precision = precision === void 0 || precision === null || isNaN(precision) ? 6 : precision;
    coordinates = coordinates === void 0 || coordinates === null || isNaN(coordinates) ? 3 : coordinates;
    if (!geojson) throw new Error("<geojson> is required");
    if (typeof precision !== "number") throw new Error("<precision> must be a number");
    if (typeof coordinates !== "number") throw new Error("<coordinates> must be a number");
    if (mutate === false || mutate === void 0) geojson = JSON.parse(JSON.stringify(geojson));
    var factor = Math.pow(10, precision);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordEach"])(geojson, function(coords) {
        truncateCoords(coords, factor, coordinates);
    });
    return geojson;
}
function truncateCoords(coords, factor, coordinates) {
    if (coords.length > coordinates) coords.splice(coordinates, coords.length);
    for(var i = 0; i < coords.length; i++){
        coords[i] = Math.round(coords[i] * factor) / factor;
    }
    return coords;
}
var index_default = truncate;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/line-segment/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "lineSegment",
    ()=>lineSegment
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
function lineSegment(geojson) {
    if (!geojson) {
        throw new Error("geojson is required");
    }
    const results = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenEach"])(geojson, (feature)=>{
        lineSegmentFeature(feature, results);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(results);
}
function lineSegmentFeature(geojson, results) {
    let coords = [];
    const geometry = geojson.geometry;
    if (geometry !== null) {
        switch(geometry.type){
            case "Polygon":
                coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(geometry);
                break;
            case "LineString":
                coords = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(geometry)
                ];
        }
        coords.forEach((coord)=>{
            const segments = createSegments(coord, geojson.properties);
            segments.forEach((segment)=>{
                segment.id = results.length;
                results.push(segment);
            });
        });
    }
}
function createSegments(coords, properties) {
    const segments = [];
    coords.reduce((previousCoords, currentCoords)=>{
        const segment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])([
            previousCoords,
            currentCoords
        ], properties);
        segment.bbox = bbox(previousCoords, currentCoords);
        segments.push(segment);
        return currentCoords;
    });
    return segments;
}
function bbox(coords1, coords2) {
    const x1 = coords1[0];
    const y1 = coords1[1];
    const x2 = coords2[0];
    const y2 = coords2[1];
    const west = x1 < x2 ? x1 : x2;
    const south = y1 < y2 ? y1 : y2;
    const east = x1 > x2 ? x1 : x2;
    const north = y1 > y2 ? y1 : y2;
    return [
        west,
        south,
        east,
        north
    ];
}
var index_default = lineSegment;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/sweepline-intersections/dist/sweeplineIntersections.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
class TinyQueue {
    constructor(data = [], compare = defaultCompare){
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;
        if (this.length > 0) {
            for(let i = (this.length >> 1) - 1; i >= 0; i--)this._down(i);
        }
    }
    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }
    pop() {
        if (this.length === 0) return undefined;
        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;
        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }
        return top;
    }
    peek() {
        return this.data[0];
    }
    _up(pos) {
        const { data, compare } = this;
        const item = data[pos];
        while(pos > 0){
            const parent = pos - 1 >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }
        data[pos] = item;
    }
    _down(pos) {
        const { data, compare } = this;
        const halfLength = this.length >> 1;
        const item = data[pos];
        while(pos < halfLength){
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;
            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;
            data[pos] = best;
            pos = left;
        }
        data[pos] = item;
    }
}
function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function checkWhichEventIsLeft(e1, e2) {
    if (e1.p.x > e2.p.x) return 1;
    if (e1.p.x < e2.p.x) return -1;
    if (e1.p.y !== e2.p.y) return e1.p.y > e2.p.y ? 1 : -1;
    return 1;
}
function checkWhichSegmentHasRightEndpointFirst(seg1, seg2) {
    if (seg1.rightSweepEvent.p.x > seg2.rightSweepEvent.p.x) return 1;
    if (seg1.rightSweepEvent.p.x < seg2.rightSweepEvent.p.x) return -1;
    if (seg1.rightSweepEvent.p.y !== seg2.rightSweepEvent.p.y) return seg1.rightSweepEvent.p.y < seg2.rightSweepEvent.p.y ? 1 : -1;
    return 1;
}
class Event {
    constructor(p, featureId, ringId, eventId){
        this.p = {
            x: p[0],
            y: p[1]
        };
        this.featureId = featureId;
        this.ringId = ringId;
        this.eventId = eventId;
        this.otherEvent = null;
        this.isLeftEndpoint = null;
    }
    isSamePoint(eventToCheck) {
        return this.p.x === eventToCheck.p.x && this.p.y === eventToCheck.p.y;
    }
}
function fillEventQueue(geojson, eventQueue) {
    if (geojson.type === 'FeatureCollection') {
        const features = geojson.features;
        for(let i = 0; i < features.length; i++){
            processFeature(features[i], eventQueue);
        }
    } else {
        processFeature(geojson, eventQueue);
    }
}
let featureId = 0;
let ringId = 0;
let eventId = 0;
function processFeature(featureOrGeometry, eventQueue) {
    const geom = featureOrGeometry.type === 'Feature' ? featureOrGeometry.geometry : featureOrGeometry;
    let coords = geom.coordinates;
    // standardise the input
    if (geom.type === 'Polygon' || geom.type === 'MultiLineString') coords = [
        coords
    ];
    if (geom.type === 'LineString') coords = [
        [
            coords
        ]
    ];
    for(let i = 0; i < coords.length; i++){
        for(let ii = 0; ii < coords[i].length; ii++){
            let currentP = coords[i][ii][0];
            let nextP = null;
            ringId = ringId + 1;
            for(let iii = 0; iii < coords[i][ii].length - 1; iii++){
                nextP = coords[i][ii][iii + 1];
                const e1 = new Event(currentP, featureId, ringId, eventId);
                const e2 = new Event(nextP, featureId, ringId, eventId + 1);
                e1.otherEvent = e2;
                e2.otherEvent = e1;
                if (checkWhichEventIsLeft(e1, e2) > 0) {
                    e2.isLeftEndpoint = true;
                    e1.isLeftEndpoint = false;
                } else {
                    e1.isLeftEndpoint = true;
                    e2.isLeftEndpoint = false;
                }
                eventQueue.push(e1);
                eventQueue.push(e2);
                currentP = nextP;
                eventId = eventId + 1;
            }
        }
    }
    featureId = featureId + 1;
}
class Segment {
    constructor(event){
        this.leftSweepEvent = event;
        this.rightSweepEvent = event.otherEvent;
    }
}
function testSegmentIntersect(seg1, seg2) {
    if (seg1 === null || seg2 === null) return false;
    if (seg1.leftSweepEvent.ringId === seg2.leftSweepEvent.ringId && (seg1.rightSweepEvent.isSamePoint(seg2.leftSweepEvent) || seg1.rightSweepEvent.isSamePoint(seg2.leftSweepEvent) || seg1.rightSweepEvent.isSamePoint(seg2.rightSweepEvent) || seg1.leftSweepEvent.isSamePoint(seg2.leftSweepEvent) || seg1.leftSweepEvent.isSamePoint(seg2.rightSweepEvent))) return false;
    const x1 = seg1.leftSweepEvent.p.x;
    const y1 = seg1.leftSweepEvent.p.y;
    const x2 = seg1.rightSweepEvent.p.x;
    const y2 = seg1.rightSweepEvent.p.y;
    const x3 = seg2.leftSweepEvent.p.x;
    const y3 = seg2.leftSweepEvent.p.y;
    const x4 = seg2.rightSweepEvent.p.x;
    const y4 = seg2.rightSweepEvent.p.y;
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    const numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    if (denom === 0) {
        if (numeA === 0 && numeB === 0) return false;
        return false;
    }
    const uA = numeA / denom;
    const uB = numeB / denom;
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        const x = x1 + uA * (x2 - x1);
        const y = y1 + uA * (y2 - y1);
        return [
            x,
            y
        ];
    }
    return false;
}
// import {debugEventAndSegments, debugRemovingSegment} from './debug'
function runCheck(eventQueue, ignoreSelfIntersections) {
    ignoreSelfIntersections = ignoreSelfIntersections ? ignoreSelfIntersections : false;
    const intersectionPoints = [];
    const outQueue = new TinyQueue([], checkWhichSegmentHasRightEndpointFirst);
    while(eventQueue.length){
        const event = eventQueue.pop();
        if (event.isLeftEndpoint) {
            // debugEventAndSegments(event.p, outQueue.data)
            const segment = new Segment(event);
            for(let i = 0; i < outQueue.data.length; i++){
                const otherSeg = outQueue.data[i];
                if (ignoreSelfIntersections) {
                    if (otherSeg.leftSweepEvent.featureId === event.featureId) continue;
                }
                const intersection = testSegmentIntersect(segment, otherSeg);
                if (intersection !== false) intersectionPoints.push(intersection);
            }
            outQueue.push(segment);
        } else if (event.isLeftEndpoint === false) {
            outQueue.pop();
        // const seg = outQueue.pop()
        // debugRemovingSegment(event.p, seg)
        }
    }
    return intersectionPoints;
}
function sweeplineIntersections(geojson, ignoreSelfIntersections) {
    const eventQueue = new TinyQueue([], checkWhichEventIsLeft);
    fillEventQueue(geojson, eventQueue);
    return runCheck(eventQueue, ignoreSelfIntersections);
}
const __TURBOPACK__default__export__ = sweeplineIntersections;
}),
"[project]/flood-risk-map/node_modules/@turf/line-intersect/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "lineIntersect",
    ()=>lineIntersect
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
// lib/sweepline-intersections-export.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$sweepline$2d$intersections$2f$dist$2f$sweeplineIntersections$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/sweepline-intersections/dist/sweeplineIntersections.esm.js [app-client] (ecmascript)");
;
;
var sweeplineIntersections = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$sweepline$2d$intersections$2f$dist$2f$sweeplineIntersections$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// index.ts
function lineIntersect(line1, line2, options = {}) {
    const { removeDuplicates = true, ignoreSelfIntersections = true } = options;
    let features = [];
    if (line1.type === "FeatureCollection") features = features.concat(line1.features);
    else if (line1.type === "Feature") features.push(line1);
    else if (line1.type === "LineString" || line1.type === "Polygon" || line1.type === "MultiLineString" || line1.type === "MultiPolygon") {
        features.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(line1));
    }
    if (line2.type === "FeatureCollection") features = features.concat(line2.features);
    else if (line2.type === "Feature") features.push(line2);
    else if (line2.type === "LineString" || line2.type === "Polygon" || line2.type === "MultiLineString" || line2.type === "MultiPolygon") {
        features.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(line2));
    }
    const intersections = sweeplineIntersections((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(features), ignoreSelfIntersections);
    let results = [];
    if (removeDuplicates) {
        const unique = {};
        intersections.forEach((intersection)=>{
            const key = intersection.join(",");
            if (!unique[key]) {
                unique[key] = true;
                results.push(intersection);
            }
        });
    } else {
        results = intersections;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(results.map((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(r)));
}
var index_default = lineIntersect;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/nearest-point-on-line/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "nearestPointOnLine",
    ()=>nearestPointOnLine
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/distance/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
;
;
;
;
function nearestPointOnLine(lines, inputPoint, options = {}) {
    if (!lines || !inputPoint) {
        throw new Error("lines and inputPoint are required arguments");
    }
    const inputPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(inputPoint);
    let closestPt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])([
        Infinity,
        Infinity
    ], {
        lineStringIndex: -1,
        segmentIndex: -1,
        totalDistance: -1,
        lineDistance: -1,
        segmentDistance: -1,
        pointDistance: Infinity,
        // deprecated properties START
        multiFeatureIndex: -1,
        index: -1,
        location: -1,
        dist: Infinity
    });
    let totalDistance = 0;
    let lineDistance = 0;
    let currentLineStringIndex = -1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenEach"])(lines, function(line, _featureIndex, lineStringIndex) {
        if (currentLineStringIndex !== lineStringIndex) {
            currentLineStringIndex = lineStringIndex;
            lineDistance = 0;
        }
        const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(line);
        const maxSegmentIndex = coords.length - 2;
        for(let i = 0; i < coords.length - 1; i++){
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[i]);
            const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(start);
            const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(coords[i + 1]);
            const stopPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(stop);
            const segmentLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"])(start, stop, options);
            let intersectPos;
            let wasEnd;
            if (stopPos[0] === inputPos[0] && stopPos[1] === inputPos[1]) {
                [intersectPos, wasEnd] = [
                    stopPos,
                    true
                ];
            } else if (startPos[0] === inputPos[0] && startPos[1] === inputPos[1]) {
                [intersectPos, wasEnd] = [
                    startPos,
                    false
                ];
            } else {
                [intersectPos, wasEnd] = nearestPointOnSegment(startPos, stopPos, inputPos);
            }
            const pointDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"])(inputPoint, intersectPos, options);
            if (pointDistance < closestPt.properties.pointDistance) {
                const segmentDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"])(start, intersectPos, options);
                closestPt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])(intersectPos, {
                    lineStringIndex,
                    // Legacy behaviour where index progresses to next segment if we
                    // went with the end point this iteration. Though make sure we
                    // only progress to the beginning of the next segment if one
                    // actually exists.
                    segmentIndex: wasEnd && i + 1 <= maxSegmentIndex ? i + 1 : i,
                    totalDistance: totalDistance + segmentDistance,
                    lineDistance: lineDistance + segmentDistance,
                    segmentDistance,
                    pointDistance,
                    // deprecated properties START
                    multiFeatureIndex: -1,
                    index: -1,
                    location: -1,
                    dist: Infinity
                });
                closestPt.properties = __spreadProps(__spreadValues({}, closestPt.properties), {
                    multiFeatureIndex: closestPt.properties.lineStringIndex,
                    index: closestPt.properties.segmentIndex,
                    location: closestPt.properties.totalDistance,
                    dist: closestPt.properties.pointDistance
                });
            }
            totalDistance += segmentLength;
            lineDistance += segmentLength;
        }
    });
    return closestPt;
}
function dot(v1, v2) {
    const [v1x, v1y, v1z] = v1;
    const [v2x, v2y, v2z] = v2;
    return v1x * v2x + v1y * v2y + v1z * v2z;
}
function cross(v1, v2) {
    const [v1x, v1y, v1z] = v1;
    const [v2x, v2y, v2z] = v2;
    return [
        v1y * v2z - v1z * v2y,
        v1z * v2x - v1x * v2z,
        v1x * v2y - v1y * v2x
    ];
}
function magnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2));
}
function normalize(v) {
    const mag = magnitude(v);
    return [
        v[0] / mag,
        v[1] / mag,
        v[2] / mag
    ];
}
function lngLatToVector(a) {
    const lat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(a[1]);
    const lng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(a[0]);
    return [
        Math.cos(lat) * Math.cos(lng),
        Math.cos(lat) * Math.sin(lng),
        Math.sin(lat)
    ];
}
function vectorToLngLat(v) {
    const [x, y, z] = v;
    const zClamp = Math.min(Math.max(z, -1), 1);
    const lat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"])(Math.asin(zClamp));
    const lng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"])(Math.atan2(y, x));
    return [
        lng,
        lat
    ];
}
function nearestPointOnSegment(posA, posB, posC) {
    const A = lngLatToVector(posA);
    const B = lngLatToVector(posB);
    const C = lngLatToVector(posC);
    const segmentAxis = cross(A, B);
    if (segmentAxis[0] === 0 && segmentAxis[1] === 0 && segmentAxis[2] === 0) {
        if (dot(A, B) > 0) {
            return [
                [
                    ...posB
                ],
                true
            ];
        } else {
            return [
                [
                    ...posC
                ],
                false
            ];
        }
    }
    const targetAxis = cross(segmentAxis, C);
    if (targetAxis[0] === 0 && targetAxis[1] === 0 && targetAxis[2] === 0) {
        return [
            [
                ...posB
            ],
            true
        ];
    }
    const intersectionAxis = cross(targetAxis, segmentAxis);
    const I1 = normalize(intersectionAxis);
    const I2 = [
        -I1[0],
        -I1[1],
        -I1[2]
    ];
    const I = dot(C, I1) > dot(C, I2) ? I1 : I2;
    const segmentAxisNorm = normalize(segmentAxis);
    const cmpAI = dot(cross(A, I), segmentAxisNorm);
    const cmpIB = dot(cross(I, B), segmentAxisNorm);
    if (cmpAI >= 0 && cmpIB >= 0) {
        return [
            vectorToLngLat(I),
            false
        ];
    }
    if (dot(A, C) > dot(B, C)) {
        return [
            [
                ...posA
            ],
            false
        ];
    } else {
        return [
            [
                ...posB
            ],
            true
        ];
    }
}
var index_default = nearestPointOnLine;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/line-split/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "lineSplit",
    ()=>lineSplit
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$geojson$2d$rbush$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/geojson-rbush/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$truncate$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/truncate/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$segment$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/line-segment/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$intersect$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/line-intersect/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$nearest$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/nearest-point-on-line/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/meta/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function lineSplit(line, splitter) {
    if (!line) throw new Error("line is required");
    if (!splitter) throw new Error("splitter is required");
    const lineType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getType"])(line);
    const splitterType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getType"])(splitter);
    if (lineType !== "LineString") throw new Error("line must be LineString");
    if (splitterType === "FeatureCollection") throw new Error("splitter cannot be a FeatureCollection");
    if (splitterType === "GeometryCollection") throw new Error("splitter cannot be a GeometryCollection");
    var truncatedSplitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$truncate$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(splitter, {
        precision: 7
    });
    if (line.type !== "Feature") {
        line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(line);
    }
    switch(splitterType){
        case "Point":
            return splitLineWithPoint(line, truncatedSplitter);
        case "MultiPoint":
            return splitLineWithPoints(line, truncatedSplitter);
        case "LineString":
        case "MultiLineString":
        case "Polygon":
        case "MultiPolygon":
            return splitLineWithPoints(line, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$intersect$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineIntersect"])(line, truncatedSplitter, {
                ignoreSelfIntersections: true
            }));
    }
}
function splitLineWithPoints(line, splitter) {
    var results = [];
    var tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$geojson$2d$rbush$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geojsonRbush"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenEach"])(splitter, // this cast should be unnecessary (and is wrong, it could contain MultiPoints), but is a workaround for bad flattenEach typings
    function(point) {
        results.forEach(function(feature2, index) {
            feature2.id = index;
        });
        if (!results.length) {
            results = splitLineWithPoint(line, point).features;
            tree.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(results));
        } else {
            var search = tree.search(point);
            if (search.features.length) {
                var closestLine = findClosestFeature(point, search);
                results = results.filter(function(feature2) {
                    return feature2.id !== closestLine.id;
                });
                tree.remove(closestLine);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureEach"])(splitLineWithPoint(closestLine, point), function(line2) {
                    results.push(line2);
                    tree.insert(line2);
                });
            }
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(results);
}
function splitLineWithPoint(line, splitter) {
    var results = [];
    var startPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(line)[0];
    var endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(line)[line.geometry.coordinates.length - 1];
    if (pointsEquals(startPoint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(splitter)) || pointsEquals(endPoint, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(splitter))) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])([
        line
    ]);
    var tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$geojson$2d$rbush$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geojsonRbush"])();
    var segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$segment$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineSegment"])(line);
    tree.load(segments);
    var search = tree.search(splitter);
    if (!search.features.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])([
        line
    ]);
    var closestSegment = findClosestFeature(splitter, search);
    var initialValue = [
        startPoint
    ];
    var lastCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureReduce"])(segments, function(previous, current, index) {
        var currentCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(current)[1];
        var splitterCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(splitter);
        if (index === closestSegment.id) {
            previous.push(splitterCoords);
            results.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])(previous));
            if (pointsEquals(splitterCoords, currentCoords)) return [
                splitterCoords
            ];
            return [
                splitterCoords,
                currentCoords
            ];
        } else {
            previous.push(currentCoords);
            return previous;
        }
    }, initialValue);
    if (lastCoords.length > 1) {
        results.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])(lastCoords));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(results);
}
function findClosestFeature(point, lines) {
    if (!lines.features.length) throw new Error("lines must contain features");
    if (lines.features.length === 1) return lines.features[0];
    var closestFeature;
    var closestDistance = Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$meta$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureEach"])(lines, function(segment) {
        var pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$nearest$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nearestPointOnLine"])(segment, point);
        var dist = pt.properties.dist;
        if (dist < closestDistance) {
            closestFeature = segment;
            closestDistance = dist;
        }
    });
    return closestFeature;
}
function pointsEquals(pt1, pt2) {
    return pt1[0] === pt2[0] && pt1[1] === pt2[1];
}
var index_default = lineSplit;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/boolean-point-on-line/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booleanPointOnLine",
    ()=>booleanPointOnLine,
    "default",
    ()=>index_default
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
;
function booleanPointOnLine(pt, line, options = {}) {
    const ptCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(pt);
    const lineCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoords"])(line);
    for(let i = 0; i < lineCoords.length - 1; i++){
        let ignoreBoundary = false;
        if (options.ignoreEndVertices) {
            if (i === 0) {
                ignoreBoundary = "start";
            }
            if (i === lineCoords.length - 2) {
                ignoreBoundary = "end";
            }
            if (i === 0 && i + 1 === lineCoords.length - 1) {
                ignoreBoundary = "both";
            }
        }
        if (isPointOnLineSegment(lineCoords[i], lineCoords[i + 1], ptCoords, ignoreBoundary, typeof options.epsilon === "undefined" ? null : options.epsilon)) {
            return true;
        }
    }
    return false;
}
function isPointOnLineSegment(lineSegmentStart, lineSegmentEnd, pt, excludeBoundary, epsilon) {
    const x = pt[0];
    const y = pt[1];
    const x1 = lineSegmentStart[0];
    const y1 = lineSegmentStart[1];
    const x2 = lineSegmentEnd[0];
    const y2 = lineSegmentEnd[1];
    const dxc = pt[0] - x1;
    const dyc = pt[1] - y1;
    const dxl = x2 - x1;
    const dyl = y2 - y1;
    const cross = dxc * dyl - dyc * dxl;
    if (epsilon !== null) {
        if (Math.abs(cross) > epsilon) {
            return false;
        }
    } else if (cross !== 0) {
        return false;
    }
    if (Math.abs(dxl) === Math.abs(dyl) && Math.abs(dxl) === 0) {
        if (excludeBoundary) {
            return false;
        }
        if (pt[0] === lineSegmentStart[0] && pt[1] === lineSegmentStart[1]) {
            return true;
        } else {
            return false;
        }
    }
    if (!excludeBoundary) {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 <= x && x <= x2 : x2 <= x && x <= x1;
        }
        return dyl > 0 ? y1 <= y && y <= y2 : y2 <= y && y <= y1;
    } else if (excludeBoundary === "start") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 < x && x <= x2 : x2 <= x && x < x1;
        }
        return dyl > 0 ? y1 < y && y <= y2 : y2 <= y && y < y1;
    } else if (excludeBoundary === "end") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 <= x && x < x2 : x2 < x && x <= x1;
        }
        return dyl > 0 ? y1 <= y && y < y2 : y2 < y && y <= y1;
    } else if (excludeBoundary === "both") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 < x && x < x2 : x2 < x && x < x1;
        }
        return dyl > 0 ? y1 < y && y < y2 : y2 < y && y < y1;
    }
    return false;
}
var index_default = booleanPointOnLine;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "epsilon",
    ()=>epsilon,
    "estimate",
    ()=>estimate,
    "negate",
    ()=>negate,
    "resulterrbound",
    ()=>resulterrbound,
    "scale",
    ()=>scale,
    "splitter",
    ()=>splitter,
    "sum",
    ()=>sum,
    "sum_three",
    ()=>sum_three,
    "vec",
    ()=>vec
]);
const epsilon = 1.1102230246251565e-16;
const splitter = 134217729;
const resulterrbound = (3 + 8 * epsilon) * epsilon;
function sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if (fnow > enow === fnow > -enow) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if (fnow > enow === fnow > -enow) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        while(eindex < elen && findex < flen){
            if (fnow > enow === fnow > -enow) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) {
                h[hindex++] = hh;
            }
        }
    }
    while(eindex < elen){
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    while(findex < flen){
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}
function sum_three(alen, a, blen, b, clen, c, tmp, out) {
    return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}
function scale(elen, e, b, h) {
    let Q, sum, hh, product1, product0;
    let bvirt, c, ahi, alo, bhi, blo;
    c = splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    let enow = e[0];
    Q = enow * b;
    c = splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex = 0;
    if (hh !== 0) {
        h[hindex++] = hh;
    }
    for(let i = 1; i < elen; i++){
        enow = e[i];
        product1 = enow * b;
        c = splitter * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum = Q + product0;
        bvirt = sum - Q;
        hh = Q - (sum - bvirt) + (product0 - bvirt);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        Q = product1 + sum;
        hh = sum - (Q - product1);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}
function negate(elen, e) {
    for(let i = 0; i < elen; i++)e[i] = -e[i];
    return elen;
}
function estimate(elen, e) {
    let Q = e[0];
    for(let i = 1; i < elen; i++)Q += e[i];
    return Q;
}
function vec(n) {
    return new Float64Array(n);
}
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient2d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orient2d",
    ()=>orient2d,
    "orient2dfast",
    ()=>orient2dfast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js [app-client] (ecmascript)");
;
const ccwerrboundA = (3 + 16 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const ccwerrboundB = (2 + 12 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const ccwerrboundC = (9 + 64 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"] * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const C1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const C2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(12);
const D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(16);
const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;
    s1 = acx * bcy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    B[3] = u3;
    let det = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimate"])(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);
    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
        return det;
    }
    errbound = ccwerrboundC * detsum + __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resulterrbound"] * Math.abs(det);
    det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;
    s1 = acxtail * bcy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C1len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(4, B, 4, u, C1);
    s1 = acx * bcytail;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C2len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(C1len, C1, 4, u, C2);
    s1 = acxtail * bcytail;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const Dlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(C2len, C2, 4, u, D);
    return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;
    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;
    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
function orient2dfast(ax, ay, bx, by, cx, cy) {
    return (ay - cy) * (bx - cx) - (ax - cx) * (by - cy);
}
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient3d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orient3d",
    ()=>orient3d,
    "orient3dfast",
    ()=>orient3dfast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js [app-client] (ecmascript)");
;
const o3derrboundA = (7 + 56 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const o3derrboundB = (3 + 28 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const o3derrboundC = (26 + 288 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"] * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const bc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const at_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const at_c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bt_c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bt_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ct_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ct_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const cat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const abt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const _8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _8b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(12);
let fin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(192);
let fin2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(192);
function finadd(finlen, alen, a) {
    finlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(finlen, fin, alen, a, fin2);
    const tmp = fin;
    fin = fin2;
    fin2 = tmp;
    return finlen;
}
function tailinit(xtail, ytail, ax, ay, bx, by, a, b) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3, negate;
    if (xtail === 0) {
        if (ytail === 0) {
            a[0] = 0;
            b[0] = 0;
            return 1;
        } else {
            negate = -ytail;
            s1 = negate * ax;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            s1 = ytail * bx;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        }
    } else {
        if (ytail === 0) {
            s1 = xtail * ay;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            negate = -xtail;
            s1 = negate * by;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
            bhi = c - (c - by);
            blo = by - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        } else {
            s1 = xtail * ay;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = ytail * ax;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            a[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            a[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            a[2] = _j - (u3 - bvirt) + (_i - bvirt);
            a[3] = u3;
            s1 = ytail * bx;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = xtail * by;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
            bhi = c - (c - by);
            blo = by - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            b[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            b[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            b[2] = _j - (u3 - bvirt) + (_i - bvirt);
            b[3] = u3;
            return 4;
        }
    }
}
function tailadd(finlen, a, b, k, z) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, u3;
    s1 = a * b;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * a;
    ahi = c - (c - a);
    alo = a - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * b;
    bhi = c - (c - b);
    blo = b - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * k;
    bhi = c - (c - k);
    blo = k - bhi;
    _i = s0 * k;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * s0;
    ahi = c - (c - s0);
    alo = s0 - ahi;
    u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
    _j = s1 * k;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * s1;
    ahi = c - (c - s1);
    alo = s1 - ahi;
    _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
    _k = _i + _0;
    bvirt = _k - _i;
    u[1] = _i - (_k - bvirt) + (_0 - bvirt);
    u3 = _j + _k;
    u[2] = _k - (u3 - _j);
    u[3] = u3;
    finlen = finadd(finlen, 4, u);
    if (z !== 0) {
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * z;
        bhi = c - (c - z);
        blo = z - bhi;
        _i = s0 * z;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * s0;
        ahi = c - (c - s0);
        alo = s0 - ahi;
        u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
        _j = s1 * z;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * s1;
        ahi = c - (c - s1);
        alo = s1 - ahi;
        _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
        _k = _i + _0;
        bvirt = _k - _i;
        u[1] = _i - (_k - bvirt) + (_0 - bvirt);
        u3 = _j + _k;
        u[2] = _k - (u3 - _j);
        u[3] = u3;
        finlen = finadd(finlen, 4, u);
    }
    return finlen;
}
function orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail;
    let adytail, bdytail, cdytail;
    let adztail, bdztail, cdztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3;
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    s1 = bdx * cdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;
    finlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, adz, _8), _8, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdz, _8b), _8b, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdz, _8), _8, fin);
    let det = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimate"])(finlen, fin);
    let errbound = o3derrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    bvirt = az - adz;
    adztail = az - (adz + bvirt) + (bvirt - dz);
    bvirt = bz - bdz;
    bdztail = bz - (bdz + bvirt) + (bvirt - dz);
    bvirt = cz - cdz;
    cdztail = cz - (cdz + bvirt) + (bvirt - dz);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0 && adztail === 0 && bdztail === 0 && cdztail === 0) {
        return det;
    }
    errbound = o3derrboundC * permanent + __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resulterrbound"] * Math.abs(det);
    det += adz * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + adztail * (bdx * cdy - bdy * cdx) + bdz * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + bdztail * (cdx * ady - cdy * adx) + cdz * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + cdztail * (adx * bdy - ady * bdx);
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    const at_len = tailinit(adxtail, adytail, bdx, bdy, cdx, cdy, at_b, at_c);
    const bt_len = tailinit(bdxtail, bdytail, cdx, cdy, adx, ady, bt_c, bt_a);
    const ct_len = tailinit(cdxtail, cdytail, adx, ady, bdx, bdy, ct_a, ct_b);
    const bctlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(bt_len, bt_c, ct_len, ct_b, bct);
    finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bctlen, bct, adz, _16), _16);
    const catlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(ct_len, ct_a, at_len, at_c, cat);
    finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(catlen, cat, bdz, _16), _16);
    const abtlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(at_len, at_b, bt_len, bt_a, abt);
    finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abtlen, abt, cdz, _16), _16);
    if (adztail !== 0) {
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, adztail, _12), _12);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bctlen, bct, adztail, _16), _16);
    }
    if (bdztail !== 0) {
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdztail, _12), _12);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(catlen, cat, bdztail, _16), _16);
    }
    if (cdztail !== 0) {
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdztail, _12), _12);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abtlen, abt, cdztail, _16), _16);
    }
    if (adxtail !== 0) {
        if (bdytail !== 0) {
            finlen = tailadd(finlen, adxtail, bdytail, cdz, cdztail);
        }
        if (cdytail !== 0) {
            finlen = tailadd(finlen, -adxtail, cdytail, bdz, bdztail);
        }
    }
    if (bdxtail !== 0) {
        if (cdytail !== 0) {
            finlen = tailadd(finlen, bdxtail, cdytail, adz, adztail);
        }
        if (adytail !== 0) {
            finlen = tailadd(finlen, -bdxtail, adytail, cdz, cdztail);
        }
    }
    if (cdxtail !== 0) {
        if (adytail !== 0) {
            finlen = tailadd(finlen, cdxtail, adytail, bdz, bdztail);
        }
        if (bdytail !== 0) {
            finlen = tailadd(finlen, -cdxtail, bdytail, adz, adztail);
        }
    }
    return fin[finlen - 1];
}
function orient3d(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const det = adz * (bdxcdy - cdxbdy) + bdz * (cdxady - adxcdy) + cdz * (adxbdy - bdxady);
    const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) + (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) + (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);
    const errbound = o3derrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }
    return orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent);
}
function orient3dfast(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    return adx * (bdy * cdz - bdz * cdy) + bdx * (cdy * adz - cdz * ady) + cdx * (ady * bdz - adz * bdy);
}
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/incircle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "incircle",
    ()=>incircle,
    "incirclefast",
    ()=>incirclefast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js [app-client] (ecmascript)");
;
const iccerrboundA = (10 + 96 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const iccerrboundB = (4 + 48 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const iccerrboundC = (44 + 576 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"] * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const bc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const aa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const cc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const axtbc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const aytbc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const bxtca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const bytca = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const cxtab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const cytab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const abt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const bct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const cat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const abtt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bctt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const catt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const _8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(16);
const _16b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(16);
const _16c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(16);
const _32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(32);
const _32b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(32);
const _48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(48);
const _64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(64);
let fin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
let fin2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
function finadd(finlen, a, alen) {
    finlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(finlen, fin, a, alen, fin2);
    const tmp = fin;
    fin = fin2;
    fin2 = tmp;
    return finlen;
}
function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
    let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
    let abtlen, bctlen, catlen;
    let abttlen, bcttlen, cattlen;
    let n1, n0;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    s1 = bdx * cdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;
    finlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, adx, _8), _8, adx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, ady, _8), _8, ady, _16b), _16b, _32), _32, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdx, _8), _8, bdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdy, _8), _8, bdy, _16b), _16b, _32b), _32b, _64), _64, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdx, _8), _8, cdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdy, _8), _8, cdy, _16b), _16b, _32), _32, fin);
    let det = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimate"])(finlen, fin);
    let errbound = iccerrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) {
        return det;
    }
    errbound = iccerrboundC * permanent + __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resulterrbound"] * Math.abs(det);
    det += (adx * adx + ady * ady) * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + 2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx) + ((bdx * bdx + bdy * bdy) * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + 2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) + ((cdx * cdx + cdy * cdy) * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + 2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
        s1 = adx * adx;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
        ahi = c - (c - adx);
        alo = adx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = ady * ady;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
        ahi = c - (c - ady);
        alo = ady - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
        aa[3] = u3;
    }
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
        s1 = bdx * bdx;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
        ahi = c - (c - bdx);
        alo = bdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = bdy * bdy;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
        ahi = c - (c - bdy);
        alo = bdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
        bb[3] = u3;
    }
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
        s1 = cdx * cdx;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
        ahi = c - (c - cdx);
        alo = cdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = cdy * cdy;
        c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
        ahi = c - (c - cdy);
        alo = cdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
        cc[3] = u3;
    }
    if (adxtail !== 0) {
        axtbclen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, adxtail, axtbc);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(axtbclen, axtbc, 2 * adx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, adxtail, _8), _8, bdy, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, adxtail, _8), _8, -cdy, _16c), _16c, _32, _48), _48);
    }
    if (adytail !== 0) {
        aytbclen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bc, adytail, aytbc);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(aytbclen, aytbc, 2 * ady, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, adytail, _8), _8, cdx, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, adytail, _8), _8, -bdx, _16c), _16c, _32, _48), _48);
    }
    if (bdxtail !== 0) {
        bxtcalen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdxtail, bxtca);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bxtcalen, bxtca, 2 * bdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, bdxtail, _8), _8, cdy, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, bdxtail, _8), _8, -ady, _16c), _16c, _32, _48), _48);
    }
    if (bdytail !== 0) {
        bytcalen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ca, bdytail, bytca);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bytcalen, bytca, 2 * bdy, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, bdytail, _8), _8, adx, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, bdytail, _8), _8, -cdx, _16c), _16c, _32, _48), _48);
    }
    if (cdxtail !== 0) {
        cxtablen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdxtail, cxtab);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cxtablen, cxtab, 2 * cdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, cdxtail, _8), _8, ady, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, cdxtail, _8), _8, -bdy, _16c), _16c, _32, _48), _48);
    }
    if (cdytail !== 0) {
        cytablen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, ab, cdytail, cytab);
        finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cytablen, cytab, 2 * cdy, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, cdytail, _8), _8, bdx, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, cdytail, _8), _8, -adx, _16c), _16c, _32, _48), _48);
    }
    if (adxtail !== 0 || adytail !== 0) {
        if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
            s1 = bdxtail * cdy;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdy;
            bhi = c - (c - cdy);
            blo = cdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * cdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            s1 = cdxtail * -bdy;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * -bdy;
            bhi = c - (c - -bdy);
            blo = -bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * -bdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * -bdytail;
            bhi = c - (c - -bdytail);
            blo = -bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            bctlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(4, u, 4, v, bct);
            s1 = bdxtail * cdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdxtail * bdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            bctt[3] = u3;
            bcttlen = 4;
        } else {
            bct[0] = 0;
            bctlen = 1;
            bctt[0] = 0;
            bcttlen = 1;
        }
        if (adxtail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bctlen, bct, adxtail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(axtbclen, axtbc, adxtail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * adx, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bcttlen, bctt, adxtail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * adx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, adxtail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, adxtail, _32), _32, _32b, _64), _64);
            if (bdytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, adxtail, _8), _8, bdytail, _16), _16);
            }
            if (cdytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, -adxtail, _8), _8, cdytail, _16), _16);
            }
        }
        if (adytail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bctlen, bct, adytail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(aytbclen, aytbc, adytail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * ady, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bcttlen, bctt, adytail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * ady, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, adytail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, adytail, _32), _32, _32b, _64), _64);
        }
    }
    if (bdxtail !== 0 || bdytail !== 0) {
        if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
            s1 = cdxtail * ady;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ady;
            bhi = c - (c - ady);
            blo = ady - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * adytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -cdy;
            n0 = -cdytail;
            s1 = adxtail * n1;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * n0;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            catlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(4, u, 4, v, cat);
            s1 = cdxtail * adytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adxtail * cdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            catt[3] = u3;
            cattlen = 4;
        } else {
            cat[0] = 0;
            catlen = 1;
            catt[0] = 0;
            cattlen = 1;
        }
        if (bdxtail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(catlen, cat, bdxtail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bxtcalen, bxtca, bdxtail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * bdx, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cattlen, catt, bdxtail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * bdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, bdxtail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, bdxtail, _32), _32, _32b, _64), _64);
            if (cdytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, bdxtail, _8), _8, cdytail, _16), _16);
            }
            if (adytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, cc, -bdxtail, _8), _8, adytail, _16), _16);
            }
        }
        if (bdytail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(catlen, cat, bdytail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(bytcalen, bytca, bdytail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * bdy, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cattlen, catt, bdytail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * bdy, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, bdytail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, bdytail, _32), _32, _32b, _64), _64);
        }
    }
    if (cdxtail !== 0 || cdytail !== 0) {
        if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
            s1 = adxtail * bdy;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdy;
            bhi = c - (c - bdy);
            blo = bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * bdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -ady;
            n0 = -adytail;
            s1 = bdxtail * n1;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * n0;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            abtlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(4, u, 4, v, abt);
            s1 = adxtail * bdytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdxtail * adytail;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            abtt[3] = u3;
            abttlen = 4;
        } else {
            abt[0] = 0;
            abtlen = 1;
            abtt[0] = 0;
            abttlen = 1;
        }
        if (cdxtail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abtlen, abt, cdxtail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cxtablen, cxtab, cdxtail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * cdx, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abttlen, abtt, cdxtail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * cdx, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, cdxtail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, cdxtail, _32), _32, _32b, _64), _64);
            if (adytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, bb, cdxtail, _8), _8, adytail, _16), _16);
            }
            if (bdytail !== 0) {
                finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, aa, -cdxtail, _8), _8, bdytail, _16), _16);
            }
        }
        if (cdytail !== 0) {
            const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abtlen, abt, cdytail, _16c);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(cytablen, cytab, cdytail, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, 2 * cdy, _32), _32, _48), _48);
            const len2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(abttlen, abtt, cdytail, _8);
            finlen = finadd(finlen, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, 2 * cdy, _16), _16, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len2, _8, cdytail, _16b), _16b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _16c, cdytail, _32), _32, _32b, _64), _64);
        }
    }
    return fin[finlen - 1];
}
function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const alift = adx * adx + ady * ady;
    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const blift = bdx * bdx + bdy * bdy;
    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const clift = cdx * cdx + cdy * cdy;
    const det = alift * (bdxcdy - cdxbdy) + blift * (cdxady - adxcdy) + clift * (adxbdy - bdxady);
    const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift + (Math.abs(cdxady) + Math.abs(adxcdy)) * blift + (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;
    const errbound = iccerrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }
    return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}
function incirclefast(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const ady = ay - dy;
    const bdx = bx - dx;
    const bdy = by - dy;
    const cdx = cx - dx;
    const cdy = cy - dy;
    const abdet = adx * bdy - bdx * ady;
    const bcdet = bdx * cdy - cdx * bdy;
    const cadet = cdx * ady - adx * cdy;
    const alift = adx * adx + ady * ady;
    const blift = bdx * bdx + bdy * bdy;
    const clift = cdx * cdx + cdy * cdy;
    return alift * bcdet + blift * cadet + clift * abdet;
}
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/insphere.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insphere",
    ()=>insphere,
    "inspherefast",
    ()=>inspherefast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/util.js [app-client] (ecmascript)");
;
const isperrboundA = (16 + 224 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const isperrboundB = (5 + 72 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const isperrboundC = (71 + 1408 * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"]) * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"] * __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["epsilon"];
const ab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const cd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const bd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const da = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const eb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(4);
const abc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const bcd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const cde = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const dea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const eab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const abd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const bce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const cda = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const deb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const eac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const adet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
const bdet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
const cdet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
const ddet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
const edet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
const abdet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(2304);
const cddet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(2304);
const cdedet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(3456);
const deter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(5760);
const _8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _8b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _8c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(8);
const _16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(16);
const _24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(24);
const _48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(48);
const _48b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(48);
const _96 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(96);
const _192 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(192);
const _384x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(384);
const _384y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(384);
const _384z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(384);
const _768 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(768);
function sum_three_scale(a, b, c, az, bz, cz, out) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, a, az, _8), _8, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, b, bz, _8b), _8b, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(4, c, cz, _8c), _8c, _16, out);
}
function liftexact(alen, a, blen, b, clen, c, dlen, d, x, y, z, out) {
    const len = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(alen, a, blen, b, _48), _48, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["negate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(clen, c, dlen, d, _48b), _48b), _48b, _96);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _96, x, _192), _192, x, _384x), _384x, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _96, y, _192), _192, y, _384y), _384y, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _96, z, _192), _192, z, _384z), _384z, _768, out);
}
function insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    s1 = ax * by;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ay;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;
    s1 = bx * cy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * by;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cx * dy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * cy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    cd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    cd[3] = u3;
    s1 = dx * ey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * dy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    de[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    de[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    de[2] = _j - (u3 - bvirt) + (_i - bvirt);
    de[3] = u3;
    s1 = ex * ay;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * ey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ea[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ea[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ea[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ea[3] = u3;
    s1 = ax * cy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * ay;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ac[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ac[3] = u3;
    s1 = bx * dy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * by;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bd[3] = u3;
    s1 = cx * ey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * cy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ce[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ce[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ce[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ce[3] = u3;
    s1 = dx * ay;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * dy;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    da[2] = _j - (u3 - bvirt) + (_i - bvirt);
    da[3] = u3;
    s1 = ex * by;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    eb[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    eb[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    eb[2] = _j - (u3 - bvirt) + (_i - bvirt);
    eb[3] = u3;
    const abclen = sum_three_scale(ab, bc, ac, cz, az, -bz, abc);
    const bcdlen = sum_three_scale(bc, cd, bd, dz, bz, -cz, bcd);
    const cdelen = sum_three_scale(cd, de, ce, ez, cz, -dz, cde);
    const dealen = sum_three_scale(de, ea, da, az, dz, -ez, dea);
    const eablen = sum_three_scale(ea, ab, eb, bz, ez, -az, eab);
    const abdlen = sum_three_scale(ab, bd, da, dz, az, bz, abd);
    const bcelen = sum_three_scale(bc, ce, eb, ez, bz, cz, bce);
    const cdalen = sum_three_scale(cd, da, ac, az, cz, dz, cda);
    const deblen = sum_three_scale(de, eb, bd, bz, dz, ez, deb);
    const eaclen = sum_three_scale(ea, ac, ce, cz, ez, az, eac);
    const deterlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])(liftexact(cdelen, cde, bcelen, bce, deblen, deb, bcdlen, bcd, ax, ay, az, adet), adet, liftexact(dealen, dea, cdalen, cda, eaclen, eac, cdelen, cde, bx, by, bz, bdet), bdet, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])(liftexact(eablen, eab, deblen, deb, abdlen, abd, dealen, dea, cx, cy, cz, cdet), cdet, liftexact(abclen, abc, eaclen, eac, bcelen, bce, eablen, eab, dx, dy, dz, ddet), ddet, liftexact(bcdlen, bcd, abdlen, abd, cdalen, cda, abclen, abc, ex, ey, ez, edet), edet, cddet, cdedet), cdedet, abdet, deter);
    return deter[deterlen - 1];
}
const xdet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(96);
const ydet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(96);
const zdet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(96);
const fin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vec"])(1152);
function liftadapt(a, b, c, az, bz, cz, x, y, z, out) {
    const len = sum_three_scale(a, b, c, az, bz, cz, _24);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum_three"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _24, x, _48), _48, x, xdet), xdet, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _24, y, _48), _48, y, ydet), ydet, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(len, _24, z, _48), _48, z, zdet), zdet, _192, out);
}
function insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent) {
    let ab3, bc3, cd3, da3, ac3, bd3;
    let aextail, bextail, cextail, dextail;
    let aeytail, beytail, ceytail, deytail;
    let aeztail, beztail, ceztail, deztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0;
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;
    s1 = aex * bey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bex * aey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ab3 = _j + _i;
    bvirt = ab3 - _j;
    ab[2] = _j - (ab3 - bvirt) + (_i - bvirt);
    ab[3] = ab3;
    s1 = bex * cey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * bey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bc3 = _j + _i;
    bvirt = bc3 - _j;
    bc[2] = _j - (bc3 - bvirt) + (_i - bvirt);
    bc[3] = bc3;
    s1 = cex * dey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * cey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    cd3 = _j + _i;
    bvirt = cd3 - _j;
    cd[2] = _j - (cd3 - bvirt) + (_i - bvirt);
    cd[3] = cd3;
    s1 = dex * aey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = aex * dey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    da3 = _j + _i;
    bvirt = da3 - _j;
    da[2] = _j - (da3 - bvirt) + (_i - bvirt);
    da[3] = da3;
    s1 = aex * cey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * aey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ac3 = _j + _i;
    bvirt = ac3 - _j;
    ac[2] = _j - (ac3 - bvirt) + (_i - bvirt);
    ac[3] = ac3;
    s1 = bex * dey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * bey;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitter"] * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bd3 = _j + _i;
    bvirt = bd3 - _j;
    bd[2] = _j - (bd3 - bvirt) + (_i - bvirt);
    bd[3] = bd3;
    const finlen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["negate"])(liftadapt(bc, cd, bd, dez, bez, -cez, aex, aey, aez, adet), adet), adet, liftadapt(cd, da, ac, aez, cez, dez, bex, bey, bez, bdet), bdet, abdet), abdet, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["negate"])(liftadapt(da, ab, bd, bez, dez, aez, cex, cey, cez, cdet), cdet), cdet, liftadapt(ab, bc, ac, cez, aez, -bez, dex, dey, dez, ddet), ddet, cddet), cddet, fin);
    let det = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimate"])(finlen, fin);
    let errbound = isperrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    bvirt = ax - aex;
    aextail = ax - (aex + bvirt) + (bvirt - ex);
    bvirt = ay - aey;
    aeytail = ay - (aey + bvirt) + (bvirt - ey);
    bvirt = az - aez;
    aeztail = az - (aez + bvirt) + (bvirt - ez);
    bvirt = bx - bex;
    bextail = bx - (bex + bvirt) + (bvirt - ex);
    bvirt = by - bey;
    beytail = by - (bey + bvirt) + (bvirt - ey);
    bvirt = bz - bez;
    beztail = bz - (bez + bvirt) + (bvirt - ez);
    bvirt = cx - cex;
    cextail = cx - (cex + bvirt) + (bvirt - ex);
    bvirt = cy - cey;
    ceytail = cy - (cey + bvirt) + (bvirt - ey);
    bvirt = cz - cez;
    ceztail = cz - (cez + bvirt) + (bvirt - ez);
    bvirt = dx - dex;
    dextail = dx - (dex + bvirt) + (bvirt - ex);
    bvirt = dy - dey;
    deytail = dy - (dey + bvirt) + (bvirt - ey);
    bvirt = dz - dez;
    deztail = dz - (dez + bvirt) + (bvirt - ez);
    if (aextail === 0 && aeytail === 0 && aeztail === 0 && bextail === 0 && beytail === 0 && beztail === 0 && cextail === 0 && ceytail === 0 && ceztail === 0 && dextail === 0 && deytail === 0 && deztail === 0) {
        return det;
    }
    errbound = isperrboundC * permanent + __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resulterrbound"] * Math.abs(det);
    const abeps = aex * beytail + bey * aextail - (aey * bextail + bex * aeytail);
    const bceps = bex * ceytail + cey * bextail - (bey * cextail + cex * beytail);
    const cdeps = cex * deytail + dey * cextail - (cey * dextail + dex * ceytail);
    const daeps = dex * aeytail + aey * dextail - (dey * aextail + aex * deytail);
    const aceps = aex * ceytail + cey * aextail - (aey * cextail + cex * aeytail);
    const bdeps = bex * deytail + dey * bextail - (bey * dextail + dex * beytail);
    det += (bex * bex + bey * bey + bez * bez) * (cez * daeps + dez * aceps + aez * cdeps + (ceztail * da3 + deztail * ac3 + aeztail * cd3)) + (dex * dex + dey * dey + dez * dez) * (aez * bceps - bez * aceps + cez * abeps + (aeztail * bc3 - beztail * ac3 + ceztail * ab3)) - ((aex * aex + aey * aey + aez * aez) * (bez * cdeps - cez * bdeps + dez * bceps + (beztail * cd3 - ceztail * bd3 + deztail * bc3)) + (cex * cex + cey * cey + cez * cez) * (dez * abeps + aez * bdeps + bez * daeps + (deztail * ab3 + aeztail * bd3 + beztail * da3))) + 2 * ((bex * bextail + bey * beytail + bez * beztail) * (cez * da3 + dez * ac3 + aez * cd3) + (dex * dextail + dey * deytail + dez * deztail) * (aez * bc3 - bez * ac3 + cez * ab3) - ((aex * aextail + aey * aeytail + aez * aeztail) * (bez * cd3 - cez * bd3 + dez * bc3) + (cex * cextail + cey * ceytail + cez * ceztail) * (dez * ab3 + aez * bd3 + bez * da3)));
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    return insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez);
}
function insphere(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;
    const aexbey = aex * bey;
    const bexaey = bex * aey;
    const ab = aexbey - bexaey;
    const bexcey = bex * cey;
    const cexbey = cex * bey;
    const bc = bexcey - cexbey;
    const cexdey = cex * dey;
    const dexcey = dex * cey;
    const cd = cexdey - dexcey;
    const dexaey = dex * aey;
    const aexdey = aex * dey;
    const da = dexaey - aexdey;
    const aexcey = aex * cey;
    const cexaey = cex * aey;
    const ac = aexcey - cexaey;
    const bexdey = bex * dey;
    const dexbey = dex * bey;
    const bd = bexdey - dexbey;
    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;
    const det = clift * (dez * ab + aez * bd + bez * da) - dlift * (aez * bc - bez * ac + cez * ab) + (alift * (bez * cd - cez * bd + dez * bc) - blift * (cez * da + dez * ac + aez * cd));
    const aezplus = Math.abs(aez);
    const bezplus = Math.abs(bez);
    const cezplus = Math.abs(cez);
    const dezplus = Math.abs(dez);
    const aexbeyplus = Math.abs(aexbey) + Math.abs(bexaey);
    const bexceyplus = Math.abs(bexcey) + Math.abs(cexbey);
    const cexdeyplus = Math.abs(cexdey) + Math.abs(dexcey);
    const dexaeyplus = Math.abs(dexaey) + Math.abs(aexdey);
    const aexceyplus = Math.abs(aexcey) + Math.abs(cexaey);
    const bexdeyplus = Math.abs(bexdey) + Math.abs(dexbey);
    const permanent = (cexdeyplus * bezplus + bexdeyplus * cezplus + bexceyplus * dezplus) * alift + (dexaeyplus * cezplus + aexceyplus * dezplus + cexdeyplus * aezplus) * blift + (aexbeyplus * dezplus + bexdeyplus * aezplus + dexaeyplus * bezplus) * clift + (bexceyplus * aezplus + aexceyplus * bezplus + aexbeyplus * cezplus) * dlift;
    const errbound = isperrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }
    return -insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent);
}
function inspherefast(pax, pay, paz, pbx, pby, pbz, pcx, pcy, pcz, pdx, pdy, pdz, pex, pey, pez) {
    const aex = pax - pex;
    const bex = pbx - pex;
    const cex = pcx - pex;
    const dex = pdx - pex;
    const aey = pay - pey;
    const bey = pby - pey;
    const cey = pcy - pey;
    const dey = pdy - pey;
    const aez = paz - pez;
    const bez = pbz - pez;
    const cez = pcz - pez;
    const dez = pdz - pez;
    const ab = aex * bey - bex * aey;
    const bc = bex * cey - cex * bey;
    const cd = cex * dey - dex * cey;
    const da = dex * aey - aex * dey;
    const ac = aex * cey - cex * aey;
    const bd = bex * dey - dex * bey;
    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;
    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;
    return clift * dab - dlift * abc + (alift * bcd - blift * cda);
}
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$orient2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$orient3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient3d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$incircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/incircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$insphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/insphere.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/flood-risk-map/node_modules/point-in-polygon-hao/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pointInPolygon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$orient2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/node_modules/robust-predicates/esm/orient2d.js [app-client] (ecmascript)");
;
function pointInPolygon(p, polygon) {
    var i;
    var ii;
    var k = 0;
    var f;
    var u1;
    var v1;
    var u2;
    var v2;
    var currentP;
    var nextP;
    var x = p[0];
    var y = p[1];
    var numContours = polygon.length;
    for(i = 0; i < numContours; i++){
        ii = 0;
        var contour = polygon[i];
        var contourLen = contour.length - 1;
        currentP = contour[0];
        if (currentP[0] !== contour[contourLen][0] && currentP[1] !== contour[contourLen][1]) {
            throw new Error('First and last coordinates in a ring must be the same');
        }
        u1 = currentP[0] - x;
        v1 = currentP[1] - y;
        for(ii; ii < contourLen; ii++){
            nextP = contour[ii + 1];
            u2 = nextP[0] - x;
            v2 = nextP[1] - y;
            if (v1 === 0 && v2 === 0) {
                if (u2 <= 0 && u1 >= 0 || u1 <= 0 && u2 >= 0) {
                    return 0;
                }
            } else if (v2 >= 0 && v1 <= 0 || v2 <= 0 && v1 >= 0) {
                f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$node_modules$2f$robust$2d$predicates$2f$esm$2f$orient2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orient2d"])(u1, u2, v1, v2, 0, 0);
                if (f === 0) {
                    return 0;
                }
                if (f > 0 && v2 > 0 && v1 <= 0 || f < 0 && v2 <= 0 && v1 > 0) {
                    k++;
                }
            }
            currentP = nextP;
            v1 = v2;
            u1 = u2;
        }
    }
    if (k % 2 === 0) {
        return false;
    }
    return true;
}
;
}),
"[project]/flood-risk-map/node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booleanPointInPolygon",
    ()=>booleanPointInPolygon,
    "default",
    ()=>index_default
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/point-in-polygon-hao/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
;
;
function booleanPointInPolygon(point, polygon, options = {}) {
    if (!point) {
        throw new Error("point is required");
    }
    if (!polygon) {
        throw new Error("polygon is required");
    }
    const pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(point);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGeom"])(polygon);
    const type = geom.type;
    const bbox = polygon.bbox;
    let polys = geom.coordinates;
    if (bbox && inBBox(pt, bbox) === false) {
        return false;
    }
    if (type === "Polygon") {
        polys = [
            polys
        ];
    }
    let result = false;
    for(var i = 0; i < polys.length; ++i){
        const polyResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$point$2d$in$2d$polygon$2d$hao$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pt, polys[i]);
        if (polyResult === 0) return options.ignoreBoundary ? false : true;
        else if (polyResult) result = true;
    }
    return result;
}
function inBBox(pt, bbox) {
    return bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1];
}
var index_default = booleanPointInPolygon;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/boolean-within/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booleanWithin",
    ()=>booleanWithin,
    "default",
    ()=>index_default
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/bbox/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/boolean-point-on-line/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$split$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/line-split/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
function booleanWithin(feature1, feature2) {
    var geom1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGeom"])(feature1);
    var geom2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGeom"])(feature2);
    var type1 = geom1.type;
    var type2 = geom2.type;
    switch(type1){
        case "Point":
            switch(type2){
                case "MultiPoint":
                    return isPointInMultiPoint(geom1, geom2);
                case "LineString":
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointOnLine"])(geom1, geom2, {
                        ignoreEndVertices: true
                    });
                case "Polygon":
                case "MultiPolygon":
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(geom1, geom2, {
                        ignoreBoundary: true
                    });
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "MultiPoint":
            switch(type2){
                case "MultiPoint":
                    return isMultiPointInMultiPoint(geom1, geom2);
                case "LineString":
                    return isMultiPointOnLine(geom1, geom2);
                case "Polygon":
                case "MultiPolygon":
                    return isMultiPointInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "LineString":
            switch(type2){
                case "LineString":
                    return isLineOnLine(geom1, geom2);
                case "Polygon":
                case "MultiPolygon":
                    return isLineInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "Polygon":
            switch(type2){
                case "Polygon":
                case "MultiPolygon":
                    return isPolyInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        default:
            throw new Error("feature1 " + type1 + " geometry not supported");
    }
}
function isPointInMultiPoint(point, multiPoint) {
    var i;
    var output = false;
    for(i = 0; i < multiPoint.coordinates.length; i++){
        if (compareCoords(multiPoint.coordinates[i], point.coordinates)) {
            output = true;
            break;
        }
    }
    return output;
}
function isMultiPointInMultiPoint(multiPoint1, multiPoint2) {
    for(var i = 0; i < multiPoint1.coordinates.length; i++){
        var anyMatch = false;
        for(var i2 = 0; i2 < multiPoint2.coordinates.length; i2++){
            if (compareCoords(multiPoint1.coordinates[i], multiPoint2.coordinates[i2])) {
                anyMatch = true;
            }
        }
        if (!anyMatch) {
            return false;
        }
    }
    return true;
}
function isMultiPointOnLine(multiPoint, lineString2) {
    var foundInsidePoint = false;
    for(var i = 0; i < multiPoint.coordinates.length; i++){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointOnLine"])(multiPoint.coordinates[i], lineString2)) {
            return false;
        }
        if (!foundInsidePoint) {
            foundInsidePoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointOnLine"])(multiPoint.coordinates[i], lineString2, {
                ignoreEndVertices: true
            });
        }
    }
    return foundInsidePoint;
}
function isMultiPointInPoly(multiPoint, polygon) {
    var output = true;
    var oneInside = false;
    var isInside = false;
    for(var i = 0; i < multiPoint.coordinates.length; i++){
        isInside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(multiPoint.coordinates[i], polygon);
        if (!isInside) {
            output = false;
            break;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            isInside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(multiPoint.coordinates[i], polygon, {
                ignoreBoundary: true
            });
        }
    }
    return output && isInside;
}
function isLineOnLine(lineString1, lineString2) {
    for(var i = 0; i < lineString1.coordinates.length; i++){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$on$2d$line$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointOnLine"])(lineString1.coordinates[i], lineString2)) {
            return false;
        }
    }
    return true;
}
function splitLineIntoSegmentsOnPolygon(linestring, polygon) {
    const coords = linestring.coordinates;
    const outputSegments = [];
    for(let i = 0; i < coords.length - 1; i++){
        const seg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"])([
            coords[i],
            coords[i + 1]
        ]);
        const split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$split$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineSplit"])(seg, (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feature"])(polygon));
        if (split.features.length === 0) {
            outputSegments.push(seg);
        } else {
            outputSegments.push(...split.features);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureCollection"])(outputSegments);
}
function isLineInPoly(linestring, polygon) {
    const polyBbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(polygon);
    const lineBbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(linestring);
    if (!doBBoxOverlap(polyBbox, lineBbox)) {
        return false;
    }
    for (const coord of linestring.coordinates){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(coord, polygon)) {
            return false;
        }
    }
    let isContainedByPolygonBoundary = false;
    const lineSegments = splitLineIntoSegmentsOnPolygon(linestring, polygon);
    for (const lineSegment of lineSegments.features){
        const midpoint = getMidpoint(lineSegment.geometry.coordinates[0], lineSegment.geometry.coordinates[1]);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(midpoint, polygon)) {
            return false;
        }
        if (!isContainedByPolygonBoundary && (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(midpoint, polygon, {
            ignoreBoundary: true
        })) {
            isContainedByPolygonBoundary = true;
        }
    }
    return isContainedByPolygonBoundary;
}
function isPolyInPoly(geometry1, geometry2) {
    var poly1Bbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(geometry1);
    var poly2Bbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bbox$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bbox"])(geometry2);
    if (!doBBoxOverlap(poly2Bbox, poly1Bbox)) {
        return false;
    }
    for(var i = 0; i < geometry1.coordinates[0].length; i++){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanPointInPolygon"])(geometry1.coordinates[0][i], geometry2)) {
            return false;
        }
    }
    return true;
}
function doBBoxOverlap(bbox1, bbox2) {
    if (bbox1[0] > bbox2[0]) return false;
    if (bbox1[2] < bbox2[2]) return false;
    if (bbox1[1] > bbox2[1]) return false;
    if (bbox1[3] < bbox2[3]) return false;
    return true;
}
function compareCoords(pair1, pair2) {
    return pair1[0] === pair2[0] && pair1[1] === pair2[1];
}
function getMidpoint(pair1, pair2) {
    return [
        (pair1[0] + pair2[0]) / 2,
        (pair1[1] + pair2[1]) / 2
    ];
}
var index_default = booleanWithin;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/bearing/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bearing",
    ()=>bearing,
    "default",
    ()=>index_default
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
;
;
function bearing(start, end, options = {}) {
    if (options.final === true) {
        return calculateFinalBearing(start, end);
    }
    const coordinates1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(start);
    const coordinates2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(end);
    const lon1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates1[0]);
    const lon2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates2[0]);
    const lat1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates1[1]);
    const lat2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates2[1]);
    const a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const b = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"])(Math.atan2(a, b));
}
function calculateFinalBearing(start, end) {
    let bear = bearing(end, start);
    bear = (bear + 180) % 360;
    return bear;
}
var index_default = bearing;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/destination/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "destination",
    ()=>destination
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/invariant/dist/esm/index.js [app-client] (ecmascript)");
;
;
function destination(origin, distance, bearing, options = {}) {
    const coordinates1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$invariant$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoord"])(origin);
    const longitude1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates1[0]);
    const latitude1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(coordinates1[1]);
    const bearingRad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degreesToRadians"])(bearing);
    const radians = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lengthToRadians"])(distance, options.units);
    const latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) + Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad));
    const longitude2 = longitude1 + Math.atan2(Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    const lng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"])(longitude2);
    const lat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiansToDegrees"])(latitude2);
    if (coordinates1[2] !== void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])([
            lng,
            lat,
            coordinates1[2]
        ], options.properties);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])([
        lng,
        lat
    ], options.properties);
}
var index_default = destination;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/flood-risk-map/node_modules/@turf/midpoint/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default,
    "midpoint",
    ()=>midpoint
]);
// index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bearing$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/bearing/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$destination$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/destination/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/distance/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
function midpoint(point1, point2) {
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$distance$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"])(point1, point2);
    const heading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$bearing$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bearing"])(point1, point2);
    const midpoint2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$destination$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destination"])(point1, dist / 2, heading);
    return midpoint2;
}
var index_default = midpoint;
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=c9345_0ae1bc13._.js.map