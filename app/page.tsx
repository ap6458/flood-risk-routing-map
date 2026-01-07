"use client";

import { useState } from "react";
import Map from "../components/MapClient";
import RouteInput from "../components/RouteInput";
import { geocodeMapbox } from "../lib/geocodeMapbox";
import { getMapboxRoute } from "../lib/getMapboxRoute";

export default function Home() {
  const [routePath, setRoutePath] =
    useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number | null>(null);
  const [eta, setEta] = useState<number | null>(null);
  const [mode, setMode] =
    useState<"driving" | "walking" | "cycling">("driving");

  async function handleRoute(
    src: string,
    dest: string,
    selectedMode: "driving" | "walking" | "cycling"
  ) {
    try {
      setMode(selectedMode);

      const srcC = await geocodeMapbox(src);
      const destC = await geocodeMapbox(dest);

      const result = await getMapboxRoute(
        srcC,
        destC,
        selectedMode
      );

      setRoutePath(result.path);
      setDistance(result.distance / 1000);
      setEta(result.duration / 60);
    } catch (e) {
      console.error(e);
      alert("Route error. Try nearby roads or clearer locations.");
    }
  }

  return (
  <div className="page">
    <h2>Flood Risk Route Planner</h2>

    <RouteInput onRoute={handleRoute} />

    {(distance || eta) && (
      <div className="info-bar">
        {distance && (
          <span>📏 {distance.toFixed(2)} km</span>
        )}
        {eta && (
          <span>
            ⏱ {eta.toFixed(0)} mins ({mode})
          </span>
        )}
      </div>
    )}

    <Map routePath={routePath} mode={mode} />
  </div>
);

}
