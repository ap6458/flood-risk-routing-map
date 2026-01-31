(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/c9345_932df1c2._.js",
  "static/chunks/flood-risk-map_components_44e12700._.js",
  {
    "path": "static/chunks/c9345_leaflet_dist_leaflet_e0987e4f.css",
    "included": [
      "[project]/flood-risk-map/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/flood-risk-map_components_Map_tsx_8273037a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/flood-risk-map/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);