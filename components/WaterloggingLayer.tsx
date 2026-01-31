"use client";

import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";

export default function WaterloggingLayer() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/data/waterlogging_points.geojson")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      pointToLayer={(feature, latlng) => {
  console.log("Full feature:", feature);
  console.log("Properties:", feature.properties);
  console.log("Severity value:", feature.properties?.Severity);

  const severity = Number(feature.properties?.Severity);

        let color = "#ffb3b3";
        let radius = 6;

        if (severity === 1) {
          color = "#ff4d4d";
          radius = 8;
        }

        if (severity === 2) {
          color = "#990000";
          radius = 10;
        }

        return L.circleMarker(latlng, {
          radius,
          fillColor: color,
          color,
          weight: 1,
          fillOpacity: 0.7,
        });
      }}
    />
  );
}