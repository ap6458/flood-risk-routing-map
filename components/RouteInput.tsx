"use client";

import { useState } from "react";

interface Props {
  onRoute: (
    src: string,
    dest: string,
    mode: "driving" | "walking" | "cycling"
  ) => void;
}

export default function RouteInput({ onRoute }: Props) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] =
    useState<"driving" | "walking" | "cycling">("driving");

  return (
    <div className="route card">
      <div className="route row">
        <input
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="route-row">
        <select
          value={mode}
          onChange={(e) =>
            setMode(e.target.value as any)
          }
        >
          <option value="driving">Driving</option>
          <option value="walking">Walking</option>
          <option value="cycling">Cycling</option>
        </select>

        <button
          onClick={() => onRoute(source, destination, mode)}
        >
          Find Route
        </button>
      </div>
    </div>
  );
}
