"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RouteLayer from "./RouteLayer";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Props {
  routePath: [number, number][];
  mode: "driving" | "walking" | "cycling";
}

export default function Map({ routePath, mode }: Props) {
  const center: [number, number] = [19.076, 72.8777];

  const source = routePath[0];
  const destination =
    routePath.length > 1
      ? routePath[routePath.length - 1]
      : null;

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {routePath.length > 0 && (
        <RouteLayer path={routePath} mode={mode} />
      )}

      {source && <Marker position={source} />}
      {destination && <Marker position={destination} />}
    </MapContainer>
  );
}
