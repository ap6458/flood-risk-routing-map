"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import WaterloggingLayer from "./WaterloggingLayer";
import FloodLegend from "./FloodLegend";
import RouteLayer from "./RouteLayer";



delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface RouteOption {
  path: [number, number][];
  distance: number;
  duration: number;
  risk: number;
}

interface Props {
  routes: RouteOption[];
  selectedRoute: number;
  mode: "driving" | "walking" | "cycling";
  floodReports: {
    lat: number;
    lon: number;
    severity: number;
  }[];
}

export default function Map({
  routes,
  selectedRoute,
  mode,
  floodReports,
}: Props) {
  const center: [number, number] = [19.076, 72.8777];

  const activeRoute =
    routes.length > 0 ? routes[selectedRoute] : null;

  const source =
    activeRoute && activeRoute.path.length > 0
      ? activeRoute.path[0]
      : null;

  const destination =
    activeRoute && activeRoute.path.length > 1
      ? activeRoute.path[
          activeRoute.path.length - 1
        ]
      : null;

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Base Map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {/* Ward Flood Zones */}
      
      <FloodLegend />
      <WaterloggingLayer />
      {/* Routes */}
      {routes.map((route, index) => (
  <RouteLayer
    key={index}
    path={route.path}
    mode={mode}
    selected={index === selectedRoute}
  />
))}
        

        

      {/* Source Marker */}
      {source && <Marker position={source} />}

      {/* Destination Marker with Info Box */}
      {destination && activeRoute && (
        <Marker
          position={destination}
          zIndexOffset={1000}
        >
          <Popup>
            <div style={{ minWidth: "150px" }}>
              <strong>Destination</strong>
              <div>
                📏{" "}
                {(activeRoute.distance / 1000).toFixed(
                  2
                )}{" "}
                km
              </div>
              <div>
                ⏱{" "}
                {(activeRoute.duration / 60).toFixed(
                  0
                )}{" "}
                mins
              </div>
            </div>
          </Popup>
        </Marker>
      )}

      {/* 🔴 Temporary Flood Report Circles (100m radius) */}
      {/* 🔴 Flood Report Circles with Severity Based Color + Radius */}
{floodReports.map((rep, i) => {
  let color = "#ff9999";
  let fill = "#ffb3b3";
  let radius = 100;

  if (rep.severity === 1) {
    color = "#ff4d4d";
    fill = "#ff6666";
    radius = 120;
  }

  if (rep.severity === 2) {
    color = "#990000";
    fill = "#cc0000";
    radius = 150;
  }

  return (
    <Circle
      key={`report-${i}`}
      center={[rep.lat, rep.lon]}
      radius={radius}
      pathOptions={{
        color: color,
        fillColor: fill,
        fillOpacity: 0.5,
        weight: 2,
      }}
    />
  );
})}
    </MapContainer>
  );
}