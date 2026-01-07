"use client";

import { Polyline } from "react-leaflet";

interface Props {
  path: [number, number][];
  mode: "driving" | "walking" | "cycling";
}

export default function RouteLayer({ path, mode }: Props) {
  const color =
    mode === "driving"
      ? "blue"
      : mode === "walking"
      ? "green"
      : "orange";

  return <Polyline positions={path} color={color} weight={5} />;
}
