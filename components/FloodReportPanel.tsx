"use client";

import { useState } from "react";
import { geocode } from "@/lib/geocode";

interface Props {
  onReport: (data: {
    lat: number;
    lon: number;
    severity: number;
    note?: string;
  }) => void;
}

export default function FloodReportPanel({ onReport }: Props) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(0.5);
  const [note, setNote] = useState("");
  const [manualLocation, setManualLocation] = useState("");
  const [mode, setMode] = useState<"gps" | "manual">("gps");

  async function handleSubmit() {
    try {
      let lat: number;
      let lon: number;

      if (mode === "gps") {
        if (!navigator.geolocation) {
          alert("Geolocation not supported");
          return;
        }

        await new Promise<void>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              lat = pos.coords.latitude;
              lon = pos.coords.longitude;

              onReport({ lat, lon, severity, note });
              resolve();
            },
            () => reject(),
            { enableHighAccuracy: true }
          );
        });
      } else {
        if (!manualLocation.trim()) {
          alert("Please enter a location");
          return;
        }

        const coords = await geocode(manualLocation);
        lat = coords.lat;
        lon = coords.lon;

        onReport({ lat, lon, severity, note });
      }

      alert("Flood reported successfully 🌊");
      setOpen(false);
      setNote("");
      setManualLocation("");
    } catch {
      alert("Unable to fetch location");
    }
  }

  return (
    <div className="report-container">
      {!open && (
        <button
          className="report-btn"
          onClick={() => setOpen(true)}
        >
          🌊 Report Flood
        </button>
      )}

      {open && (
        <div className="report-card">
          <h3>Report Flood</h3>

          
          <div style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="radio"
                value="gps"
                checked={mode === "gps"}
                onChange={() => setMode("gps")}
              />
              📍 Use My Location
            </label>

            <br />

            <label>
              <input
                type="radio"
                value="manual"
                checked={mode === "manual"}
                onChange={() => setMode("manual")}
              />
              🔎 Enter Location
            </label>
          </div>

          
          {mode === "manual" && (
            <input
              placeholder="Enter location name"
              value={manualLocation}
              onChange={(e) =>
                setManualLocation(e.target.value)
              }
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "10px",
              }}
            />
          )}

          <label>Severity</label>
          <select
            value={severity}
            onChange={(e) =>
              setSeverity(Number(e.target.value))
            }
          >
            <option value={0}>Low</option>
            <option value={1}>Moderate</option>
            <option value={2}>Severe</option>
          </select>

          <label>Note (optional)</label>
          <textarea
            placeholder="Water level? Road blocked?"
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
          />

          <div className="report-actions">
            <button onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="cancel"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}