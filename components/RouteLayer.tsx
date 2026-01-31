"use client";

import { Polyline } from "react-leaflet";

interface Props {
  path: [number, number][];
  mode: "driving" | "walking" | "cycling";
  selected?: boolean;
}

export default function RouteLayer({ path, mode, selected }: Props) {
  const color =
    mode === "driving"
      ? "#1f6feb" // blue
      : mode === "walking"
      ? "#2ecc71" // green
      : "#f39c12"; // orange

  return (
    <Polyline
      positions={path}
      pathOptions={{
        color,
        weight: selected ? 7 : 4,   // 👈 bold selected
        opacity: selected ? 1:0.5, // 👈 fade others
        dashArray: undefined,
        
      }}
    />
  );
}