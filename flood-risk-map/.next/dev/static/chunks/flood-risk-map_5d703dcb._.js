(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/flood-risk-map/components/MapClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Map;
function MapClient(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Map, {
        ...props
    }, void 0, false, {
        fileName: "[project]/flood-risk-map/components/MapClient.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c1 = MapClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "Map");
__turbopack_context__.k.register(_c1, "MapClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/lib/searchMapbox.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchMapbox",
    ()=>searchMapbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function searchMapbox(query) {
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJ5YW4xNjExIiwiYSI6ImNtamtmcGFsNjBkeXEzbHF5Nmk5aDRjd2sifQ.zpzawqT5qi_uDEyMYEXiRg");
    if (!token || query.length < 3) return [];
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${token}&autocomplete=true&limit=5&country=IN`;
    const res = await fetch(url);
    const data = await res.json();
    return data.features || [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/components/RouteInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$searchMapbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/lib/searchMapbox.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Browser speech API
const SpeechRecognition = ("TURBOPACK compile-time value", "object") !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition) || null;
function RouteInput({ onRoute }) {
    _s();
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("driving");
    const [srcSuggestions, setSrcSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [destSuggestions, setDestSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const srcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------------- AUTOCOMPLETE ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteInput.useEffect": ()=>{
            if (source.length < 3) {
                setSrcSuggestions([]);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$searchMapbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchMapbox"])(source).then(setSrcSuggestions);
        }
    }["RouteInput.useEffect"], [
        source
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteInput.useEffect": ()=>{
            if (destination.length < 3) {
                setDestSuggestions([]);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$searchMapbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchMapbox"])(destination).then(setDestSuggestions);
        }
    }["RouteInput.useEffect"], [
        destination
    ]);
    /* ---------------- GPS ---------------- */ function useMyLocation() {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }
        navigator.geolocation.getCurrentPosition((pos)=>{
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            setSource(`${lat},${lon}`);
            setSrcSuggestions([]);
        }, ()=>alert("Location permission denied"), {
            enableHighAccuracy: true
        });
    }
    /* ---------------- VOICE INPUT ---------------- */ function startVoiceInput(target) {
        if (!SpeechRecognition) {
            alert("Voice input not supported in this browser");
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = (event)=>{
            const text = event.results[0][0].transcript;
            if (target === "source") {
                setSource(text);
                setSrcSuggestions([]);
            } else {
                setDestination(text);
                setDestSuggestions([]);
            }
        };
        recognition.onerror = ()=>{
            alert("Voice recognition failed. Try again.");
        };
        recognition.start();
    }
    /* ---------------- UI ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "route",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    display: "flex",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: srcRef,
                        placeholder: "Source",
                        value: source,
                        onChange: (e)=>setSource(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") setSrcSuggestions([]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        title: "Voice input",
                        onClick: ()=>startVoiceInput("source"),
                        style: {
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor: "#692f10"
                        },
                        children: "🎤"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    srcSuggestions.length > 0 && document.activeElement === srcRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown",
                        children: srcSuggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown-item",
                                onClick: ()=>{
                                    setSource(s.place_name);
                                    setSrcSuggestions([]);
                                },
                                children: s.place_name
                            }, s.id, false, {
                                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: useMyLocation,
                style: {
                    margin: "14px 0",
                    backgroundColor: "#692f10",
                    color: "white"
                },
                children: "📍 Use My Location"
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    display: "flex",
                    gap: "8px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: destRef,
                        placeholder: "Destination",
                        value: destination,
                        onChange: (e)=>setDestination(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") setDestSuggestions([]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        title: "Voice input",
                        onClick: ()=>startVoiceInput("destination"),
                        style: {
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor: " #692f10"
                        },
                        children: "🎤"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    destSuggestions.length > 0 && document.activeElement === destRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown",
                        children: destSuggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown-item",
                                onClick: ()=>{
                                    setDestination(s.place_name);
                                    setDestSuggestions([]);
                                },
                                children: s.place_name
                            }, s.id, false, {
                                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                                lineNumber: 188,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "route-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: mode,
                        onChange: (e)=>setMode(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "driving",
                                children: "Driving"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "walking",
                                children: "Walking"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "cycling",
                                children: "Cycling"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRoute(source, destination, mode),
                        children: "Find Route"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/flood-risk-map/components/RouteInput.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(RouteInput, "zClXmbHwJUkMDiLq7uL8+TvDjuc=");
_c = RouteInput;
var _c;
__turbopack_context__.k.register(_c, "RouteInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/lib/geocode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "geocode",
    ()=>geocode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function geocode(place) {
    try {
        return await geocodeWithMapbox(place);
    } catch (err) {
        console.warn("Mapbox failed, falling back to OSM:", err);
        return await geocodeWithOSM(place);
    }
}
async function geocodeWithMapbox(place) {
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJ5YW4xNjExIiwiYSI6ImNtamtmcGFsNjBkeXEzbHF5Nmk5aDRjd2sifQ.zpzawqT5qi_uDEyMYEXiRg");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Mumbai bounding box
    const bbox = "72.75,18.88,73.05,19.30"; // west,south,east,north
    const proximity = "72.8777,19.076"; // Mumbai center
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + `${encodeURIComponent(place)}.json` + `?access_token=${token}` + `&limit=1` + `&country=IN` + `&bbox=${bbox}` + `&proximity=${proximity}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.features || data.features.length === 0) {
        throw new Error("Mapbox geocoding failed");
    }
    const [lon, lat] = data.features[0].center;
    return {
        lat,
        lon,
        source: "mapbox"
    };
}
/* =========================
   OSM NOMINATIM FALLBACK
   ========================= */ async function geocodeWithOSM(place) {
    const url = `https://nominatim.openstreetmap.org/search?` + `q=${encodeURIComponent(place + ", Mumbai")}` + `&format=json&limit=1`;
    const res = await fetch(url, {
        headers: {
            // REQUIRED by Nominatim usage policy
            "User-Agent": "FloodRiskRoutePlanner/1.0 (student-project)"
        }
    });
    const data = await res.json();
    if (!data || data.length === 0) {
        throw new Error("OSM geocoding failed");
    }
    return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
        source: "osm"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/components/FloodReportPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodReportPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$geocode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/lib/geocode.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FloodReportPanel({ onReport }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [severity, setSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [manualLocation, setManualLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("gps");
    async function handleSubmit() {
        try {
            let lat;
            let lon;
            if (mode === "gps") {
                if (!navigator.geolocation) {
                    alert("Geolocation not supported");
                    return;
                }
                await new Promise((resolve, reject)=>{
                    navigator.geolocation.getCurrentPosition((pos)=>{
                        lat = pos.coords.latitude;
                        lon = pos.coords.longitude;
                        onReport({
                            lat,
                            lon,
                            severity,
                            note
                        });
                        resolve();
                    }, ()=>reject(), {
                        enableHighAccuracy: true
                    });
                });
            } else {
                if (!manualLocation.trim()) {
                    alert("Please enter a location");
                    return;
                }
                const coords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$geocode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geocode"])(manualLocation);
                lat = coords.lat;
                lon = coords.lon;
                onReport({
                    lat,
                    lon,
                    severity,
                    note
                });
            }
            alert("Flood reported successfully 🌊");
            setOpen(false);
            setNote("");
            setManualLocation("");
        } catch  {
            alert("Unable to fetch location");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "report-container",
        children: [
            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "report-btn",
                onClick: ()=>setOpen(true),
                children: "🌊 Report Flood"
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "report-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Report Flood"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        value: "gps",
                                        checked: mode === "gps",
                                        onChange: ()=>setMode("gps")
                                    }, void 0, false, {
                                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    "📍 Use My Location"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        value: "manual",
                                        checked: mode === "manual",
                                        onChange: ()=>setMode("manual")
                                    }, void 0, false, {
                                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    "🔎 Enter Location"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    mode === "manual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Enter location name",
                        value: manualLocation,
                        onChange: (e)=>setManualLocation(e.target.value),
                        style: {
                            padding: "8px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            marginBottom: "10px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Severity"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: severity,
                        onChange: (e)=>setSeverity(Number(e.target.value)),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 0.3,
                                children: "Low"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 0.6,
                                children: "Moderate"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 0.9,
                                children: "Severe"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Note (optional)"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Water level? Road blocked?",
                        value: note,
                        onChange: (e)=>setNote(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "report-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                children: "Submit"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cancel",
                                onClick: ()=>setOpen(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/flood-risk-map/components/FloodReportPanel.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(FloodReportPanel, "S3WMIHMRSd0GVcHWuzsrdHHGZKM=");
_c = FloodReportPanel;
var _c;
__turbopack_context__.k.register(_c, "FloodReportPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/lib/getMapboxRoute.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMapboxRoute",
    ()=>getMapboxRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function getMapboxRoute(src, dest, mode) {
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJ5YW4xNjExIiwiYSI6ImNtamtmcGFsNjBkeXEzbHF5Nmk5aDRjd2sifQ.zpzawqT5qi_uDEyMYEXiRg");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const url = `https://api.mapbox.com/directions/v5/mapbox/${mode}/` + `${src.lon},${src.lat};${dest.lon},${dest.lat}` + `?alternatives=true&geometries=geojson&overview=full&access_token=${token}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.routes || data.routes.length === 0) {
        throw new Error("No routes returned");
    }
    return data.routes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/lib/routeRisk.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRouteRisk",
    ()=>calculateRouteRisk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$length$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/length/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$split$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/line-split/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$within$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/boolean-within/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$midpoint$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/@turf/midpoint/dist/esm/index.js [app-client] (ecmascript)");
;
function calculateRouteRisk(routeCoords, floodZones) {
    try {
        // Route line
        const routeLine = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineString"](routeCoords.map(([lat, lon])=>[
                lon,
                lat
            ]));
        const routeLength = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$length$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["length"](routeLine, {
            units: "kilometers"
        });
        if (routeLength === 0) return 0;
        let weightedRiskSum = 0;
        for (const zone of floodZones.features){
            const score = Number(zone.properties?.ward_flood_risk_nn_risk_score ?? 0);
            if (score < 0.2) continue; // ignore safe zones
            // Severity weight
            let severity = 0.1;
            if (score > 0.8) severity = 1;
            else if (score > 0.6) severity = 0.8;
            else if (score > 0.4) severity = 0.6;
            else if (score > 0.2) severity = 0.3;
            // Intersect route with zone polygon
            const clipped = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$line$2d$split$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineSplit"](routeLine, zone.geometry);
            for (const segment of clipped.features){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$boolean$2d$within$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booleanWithin"](__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$midpoint$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["midpoint"](segment.geometry.coordinates[0], segment.geometry.coordinates[segment.geometry.coordinates.length - 1]), zone.geometry)) {
                    const segmentLength = __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f40$turf$2f$length$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["length"](segment, {
                        units: "kilometers"
                    });
                    weightedRiskSum += segmentLength / routeLength * severity;
                }
            }
        }
        return Number(Math.min(weightedRiskSum, 1).toFixed(2));
    } catch (err) {
        console.error("Risk calculation error:", err);
        return 0;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$MapClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/components/MapClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$RouteInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/components/RouteInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodReportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/components/FloodReportPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$geocode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/lib/geocode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$getMapboxRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/lib/getMapboxRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$routeRisk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/lib/routeRisk.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function isCoords(val) {
    if (!val.includes(",")) return false;
    const [a, b] = val.split(",").map(Number);
    return !isNaN(a) && !isNaN(b);
}
function Home() {
    _s();
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRoute, setSelectedRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("driving");
    const [floodZones, setFloodZones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [floodReports, setFloodReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /* ---------------- LOAD WARD FLOOD ZONES ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetch("/data/flood_zones_mumbai.geojson").then({
                "Home.useEffect": (res)=>res.json()
            }["Home.useEffect"]).then({
                "Home.useEffect": (data)=>setFloodZones(data)
            }["Home.useEffect"]).catch({
                "Home.useEffect": (err)=>console.error("Zone load error", err)
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    /* ---------------- LOAD REPORTS FROM DB ---------------- */ async function loadReports() {
        try {
            const res = await fetch("/api/reports");
            if (!res.ok) {
                const text = await res.text();
                console.error("API ERROR RESPONSE:", text);
                return;
            }
            const data = await res.json();
            setFloodReports(data);
        } catch (err) {
            console.error("Failed to load reports", err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loadReports();
            const interval = setInterval(loadReports, 30000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    /* ---------------- HANDLE USER REPORT ---------------- */ async function handleReport(report) {
        try {
            await fetch("/api/reports", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(report)
            });
            loadReports(); // refresh after saving
        } catch (err) {
            console.error("Report failed", err);
        }
    }
    /* ---------------- ROUTE CALCULATION ---------------- */ async function handleRoute(src, dest, selectedMode) {
        try {
            if (!floodZones) {
                alert("Flood data loading...");
                return;
            }
            setMode(selectedMode);
            const srcC = isCoords(src) ? (()=>{
                const [lat, lon] = src.split(",").map(Number);
                return {
                    lat,
                    lon
                };
            })() : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$geocode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geocode"])(src);
            const destC = isCoords(dest) ? (()=>{
                const [lat, lon] = dest.split(",").map(Number);
                return {
                    lat,
                    lon
                };
            })() : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$geocode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["geocode"])(dest);
            const mapboxRoutes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$getMapboxRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMapboxRoute"])(srcC, destC, selectedMode);
            const formatted = mapboxRoutes.map((r)=>{
                const path = r.geometry.coordinates.map(([lon, lat])=>[
                        lat,
                        lon
                    ]);
                const baseRisk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$lib$2f$routeRisk$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRouteRisk"])(path, floodZones);
                /* --- Add User Report Risk --- */ let reportRisk = 0;
                floodReports.forEach((rep)=>{
                    path.forEach(([lat, lon])=>{
                        const dist = Math.sqrt((lat - rep.lat) ** 2 + (lon - rep.lon) ** 2);
                        if (dist < 0.01) {
                            reportRisk += rep.severity * 3;
                        }
                    });
                });
                return {
                    path,
                    distance: r.distance,
                    duration: r.duration,
                    risk: baseRisk + reportRisk
                };
            });
            // Sort safest first
            formatted.sort((a, b)=>a.risk - b.risk);
            setRoutes(formatted);
            setSelectedRoute(0);
        } catch (e) {
            console.error(e);
            alert("Route not found. Try clearer locations.");
        }
    }
    /* ---------------- UI ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title",
                        children: "🌊 Flood Risk Route Planner"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$RouteInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onRoute: handleRoute
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodReportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onReport: handleReport
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/app/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    routes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "Available Routes"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/app/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            routes.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedRoute(i),
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "12px",
                                        padding: "14px",
                                        borderRadius: "14px",
                                        border: selectedRoute === i ? "2px solid #452711" : "1px solid #e5e7eb",
                                        background: selectedRoute === i ? "#fff0e0" : "#f9fafb",
                                        cursor: "pointer",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "Route ",
                                                i + 1,
                                                i === 0 && " ⭐ Safest"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flood-risk-map/app/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "📏 ",
                                                (r.distance / 1000).toFixed(2),
                                                " km"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flood-risk-map/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "⏱ ",
                                                (r.duration / 60).toFixed(0),
                                                " mins"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flood-risk-map/app/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "⚠️ Risk: ",
                                                r.risk.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flood-risk-map/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/flood-risk-map/app/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/app/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "map-area",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$MapClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    routes: routes,
                    selectedRoute: selectedRoute,
                    mode: mode,
                    floodReports: floodReports
                }, void 0, false, {
                    fileName: "[project]/flood-risk-map/app/page.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/app/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/flood-risk-map/app/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(Home, "KdgBFCQnoUnneNN3ZTyoqWxAOcE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=flood-risk-map_5d703dcb._.js.map