"use client";

import { useState, useEffect, useRef } from "react";
import { searchMapbox } from "../lib/searchMapbox";
import { getUserLocation } from "@/lib/getUserLocation";

interface Props {
  onRoute: (
    src: string,
    dest: string,
    mode: "driving" | "walking" | "cycling"
  ) => void;
}

// Browser speech API
const SpeechRecognition =
  (typeof window !== "undefined" &&
    ((window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition)) ||
  null;

export default function RouteInput({ onRoute }: Props) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] =
    useState<"driving" | "walking" | "cycling">("driving");

  const [srcSuggestions, setSrcSuggestions] = useState<any[]>([]);
  const [destSuggestions, setDestSuggestions] = useState<any[]>([]);

  const srcRef = useRef<HTMLInputElement>(null);
  const destRef = useRef<HTMLInputElement>(null);

  /* ---------------- AUTOCOMPLETE ---------------- */

  useEffect(() => {
    if (source.length < 3) {
      setSrcSuggestions([]);
      return;
    }
    searchMapbox(source).then(setSrcSuggestions);
  }, [source]);

  useEffect(() => {
    if (destination.length < 3) {
      setDestSuggestions([]);
      return;
    }
    searchMapbox(destination).then(setDestSuggestions);
  }, [destination]);

  /*  GPS  */

  function useMyLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setSource(`${lat},${lon}`);
        setSrcSuggestions([]);
      },
      () => alert("Location permission denied"),
      { enableHighAccuracy: true }
    );
  }

  /*  VOICE INPUT  */

  function startVoiceInput(
    target: "source" | "destination"
  ) {
    if (!SpeechRecognition) {
      alert("Voice input not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;

      if (target === "source") {
        setSource(text);
        setSrcSuggestions([]);
      } else {
        setDestination(text);
        setDestSuggestions([]);
      }
    };

    recognition.onerror = () => {
      alert("Voice recognition failed. Try again.");
    };

    recognition.start();
  }

  /*UI*/

  return (
    <div className="route">

      
      <div style={{ position: "relative", display: "flex", gap: "8px" }}>
        <input
          ref={srcRef}
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setSrcSuggestions([]);
          }}
        />

        <button
          type="button"
          title="Voice input"
          onClick={() => startVoiceInput("source")}
          style={{ borderRadius: "8px", cursor: "pointer",backgroundColor: "#692f10" }}
        >
          🎤
        </button>

        {srcSuggestions.length > 0 &&
          document.activeElement === srcRef.current && (
            <div className="dropdown">
              {srcSuggestions.map((s) => (
                <div
                  key={s.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSource(s.place_name);
                    setSrcSuggestions([]);
                  }}
                >
                  {s.place_name}
                </div>
              ))}
            </div>
          )}
      </div>

      
      <button
        type="button"
        onClick={useMyLocation}
        style={{
          margin: "14px 0",
          backgroundColor: "#692f10",
          color: "white",
        }}
      >
        📍 Use My Location
      </button>

      
      <div style={{ position: "relative", display: "flex", gap: "8px" }}>
        <input
          ref={destRef}
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setDestSuggestions([]);
          }}
        />

        <button
          type="button"
          title="Voice input"
          onClick={() => startVoiceInput("destination")}
          style={{ borderRadius: "8px", cursor: "pointer" ,backgroundColor:" #692f10"}}
        >
          🎤
        </button>

        {destSuggestions.length > 0 &&
          document.activeElement === destRef.current && (
            <div className="dropdown">
              {destSuggestions.map((s) => (
                <div
                  key={s.id}
                  className="dropdown-item"
                  onClick={() => {
                    setDestination(s.place_name);
                    setDestSuggestions([]);
                  }}
                >
                  {s.place_name}
                </div>
              ))}
            </div>
          )}
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