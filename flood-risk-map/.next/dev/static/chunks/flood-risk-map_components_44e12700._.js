(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/flood-risk-map/components/FloodZonesLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodZonesLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/GeoJSON.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FloodZonesLayer() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloodZonesLayer.useEffect": ()=>{
            fetch("/data/flood_zones_mumbai.geojson").then({
                "FloodZonesLayer.useEffect": (res)=>res.json()
            }["FloodZonesLayer.useEffect"]).then({
                "FloodZonesLayer.useEffect": (json)=>setData(json)
            }["FloodZonesLayer.useEffect"]).catch({
                "FloodZonesLayer.useEffect": (err)=>console.error(err)
            }["FloodZonesLayer.useEffect"]);
        }
    }["FloodZonesLayer.useEffect"], []);
    if (!data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
        data: data,
        style: (feature)=>{
            const risk = Number(feature?.properties?.ward_flood_risk_nn_risk_score ?? 0);
            let fillColor = "#2ecc71"; // green
            if (risk > 0.7) fillColor = "#e74c3c"; // red
            else if (risk > 0.4) fillColor = "#f39d34"; // orange
            else if (risk > 0.2) fillColor = "#f1c401"; // yellow
            else fillColor = "#2ecc71";
            return {
                color: "#000",
                weight: 0.5,
                fillColor,
                fillOpacity: 0.55
            };
        }
    }, void 0, false, {
        fileName: "[project]/flood-risk-map/components/FloodZonesLayer.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(FloodZonesLayer, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = FloodZonesLayer;
var _c;
__turbopack_context__.k.register(_c, "FloodZonesLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/components/FloodLegend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloodLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FloodLegend() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flood-legend",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Flood Risk Zones"
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "legend-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "box red"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    "High Risk"
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "legend-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "box orange"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    "Medium Risk"
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "legend-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "box yellow"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    "Low Risk"
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "legend-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "box green"
                    }, void 0, false, {
                        fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    "Safe"
                ]
            }, void 0, true, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Based on ML flood risk score"
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/flood-risk-map/components/FloodLegend.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = FloodLegend;
var _c;
__turbopack_context__.k.register(_c, "FloodLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/react-leaflet/lib/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodZonesLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/components/FloodZonesLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flood-risk-map/components/FloodLegend.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
delete __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});
function Map({ routes, selectedRoute, mode, floodReports }) {
    const center = [
        19.076,
        72.8777
    ];
    const activeRoute = routes.length > 0 ? routes[selectedRoute] : null;
    const source = activeRoute && activeRoute.path.length > 0 ? activeRoute.path[0] : null;
    const destination = activeRoute && activeRoute.path.length > 1 ? activeRoute.path[activeRoute.path.length - 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: center,
        zoom: 12,
        style: {
            height: "100%",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: "© OpenStreetMap contributors"
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/Map.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodZonesLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/flood-risk-map/components/Map.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$components$2f$FloodLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/flood-risk-map/components/Map.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            routes.map((route, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                    positions: route.path,
                    pathOptions: {
                        color: index === selectedRoute ? "#263978" : "#2e4462",
                        weight: index === selectedRoute ? 7 : 4,
                        opacity: index === selectedRoute ? 1 : 0.5
                    }
                }, index, false, {
                    fileName: "[project]/flood-risk-map/components/Map.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)),
            source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: source
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/Map.tsx",
                lineNumber: 101,
                columnNumber: 18
            }, this),
            destination && activeRoute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: destination,
                zIndexOffset: 1000,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minWidth: "150px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Destination"
                            }, void 0, false, {
                                fileName: "[project]/flood-risk-map/components/Map.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "📏",
                                    " ",
                                    (activeRoute.distance / 1000).toFixed(2),
                                    " ",
                                    "km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/flood-risk-map/components/Map.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "⏱",
                                    " ",
                                    (activeRoute.duration / 60).toFixed(0),
                                    " ",
                                    "mins"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/flood-risk-map/components/Map.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flood-risk-map/components/Map.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/flood-risk-map/components/Map.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/flood-risk-map/components/Map.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            floodReports.map((rep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flood$2d$risk$2d$map$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                    center: [
                        rep.lat,
                        rep.lon
                    ],
                    radius: 100,
                    pathOptions: {
                        color: "#e74c3c",
                        fillColor: "#ff4d4d",
                        fillOpacity: 0.4,
                        weight: 2
                    }
                }, `report-${i}`, false, {
                    fileName: "[project]/flood-risk-map/components/Map.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/flood-risk-map/components/Map.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=flood-risk-map_components_44e12700._.js.map