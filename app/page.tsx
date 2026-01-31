"use client";

import { useEffect, useState } from "react";
import Map from "../components/MapClient";
import RouteInput from "../components/RouteInput";
import FloodReportPanel from "@/components/FloodReportPanel";
import { geocode } from "../lib/geocode";
import { getMapboxRoute } from "../lib/getMapboxRoute";

type RouteOption = {
  path: [number, number][];
  distance: number;
  duration: number;
  risk: number;
};

type FloodReport = {
  _id?: string;
  lat: number;
  lon: number;
  severity: number;
};

function isCoords(val: string) {
  if (!val.includes(",")) return false;
  const [a, b] = val.split(",").map(Number);
  return !isNaN(a) && !isNaN(b);
}

export default function Home() {
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [mode, setMode] =
    useState<"driving" | "walking" | "cycling">("driving");

  const [floodReports, setFloodReports] =
    useState<FloodReport[]>([]);

  const [waterPoints, setWaterPoints] =
    useState<any[]>([]);

  /* ---------------- LOAD WATERLOGGING POINTS ---------------- */
  useEffect(() => {
    fetch("/data/waterlogging_points.geojson")
      .then((res) => res.json())
      .then((data) => {
        setWaterPoints(data.features);
      })
      .catch((err) =>
        console.error("Waterlogging load error", err)
      );
  }, []);

  /* ---------------- LOAD USER REPORTS ---------------- */
  async function loadReports() {
    try {
      const res = await fetch("/api/reports");

      if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        return;
      }

      const data = await res.json();
      setFloodReports(data);
    } catch (err) {
      console.error("Failed to load reports", err);
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  /* ---------------- HANDLE USER REPORT ---------------- */
  async function handleReport(report: {
    lat: number;
    lon: number;
    severity: number;
  }) {
    try {
      await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
      });

      loadReports();
    } catch (err) {
      console.error("Report failed", err);
    }
  }

  /* ---------------- ROUTE CALCULATION ---------------- */
  async function handleRoute(
    src: string,
    dest: string,
    selectedMode: "driving" | "walking" | "cycling"
  ) {
    try {
      setMode(selectedMode);

      const srcC = isCoords(src)
        ? (() => {
            const [lat, lon] = src.split(",").map(Number);
            return { lat, lon };
          })()
        : await geocode(src);

      const destC = isCoords(dest)
        ? (() => {
            const [lat, lon] = dest.split(",").map(Number);
            return { lat, lon };
          })()
        : await geocode(dest);

      const mapboxRoutes = await getMapboxRoute(
        srcC,
        destC,
        selectedMode
      );

      const formatted: RouteOption[] =
        mapboxRoutes.map((r) => {
          const path: [number, number][] =
            r.geometry.coordinates.map(
              ([lon, lat]: [number, number]) => [lat, lon]
            );

          /* -------- STATIC WATERLOGGING RISK -------- */
          let waterRisk = 0;

          waterPoints.forEach((feature) => {
            const [lon, lat] =
              feature.geometry.coordinates;

            const severity = Number(
              feature.properties.Severity
            );

            path.forEach(([rLat, rLon]) => {
              const dx = rLat - lat;
              const dy = rLon - lon;

              const distanceMeters =
                Math.sqrt(dx * dx + dy * dy) *
                111000;

              let severityWeight = 0;

              if (severity === 0)
                severityWeight = 2;
              if (severity === 1)
                severityWeight = 6;
              if (severity === 2)
                severityWeight = 5;

              let distanceFactor = 0;

              if (distanceMeters < 100)
                distanceFactor = 1;
              else if (distanceMeters < 200)
                distanceFactor = 0.6;
              else if (distanceMeters < 300)
                distanceFactor = 0.3;

              waterRisk +=
                severityWeight * distanceFactor;
            });
          });

          /* -------- LIVE USER REPORT RISK -------- */
          let reportRisk = 0;

          floodReports.forEach((rep) => {
            path.forEach(([lat, lon]) => {
              const dx = lat - rep.lat;
              const dy = lon - rep.lon;

              const distMeters =
                Math.sqrt(dx * dx + dy * dy) *
                111000;

              if (distMeters < 200) {
                reportRisk += (rep.severity + 1) ;
              }
              
            });
          });
             console.log(reportRisk);  
          return {
            path,
            distance: r.distance,
            duration: r.duration,
            risk: waterRisk + reportRisk,
          };
        });
      
      formatted.sort((a, b) => a.risk - b.risk);

      setRoutes(formatted);
      setSelectedRoute(0);
    } catch (e) {
      console.error(e);
      alert("Route not found.");
    }
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="title">
          🌊 Flood Risk Route Planner
        </h1>

        <RouteInput onRoute={handleRoute} />
        <FloodReportPanel onReport={handleReport} />

        {routes.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3>Available Routes</h3>

            {routes.map((r, i) => (
              <button
                key={i}
                onClick={() => setSelectedRoute(i)}
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "12px",
                  padding: "14px",
                  borderRadius: "14px",
                  border:
                    selectedRoute === i
                      ? "2px solid #452711"
                      : "1px solid #e5e7eb",
                  background:
                    selectedRoute === i
                      ? "#fff0e0"
                      : "#f9fafb",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <strong>
                  Route {i + 1}
                  {i === 0 && " ⭐ Safest"}
                </strong>

                <div>
                  📏 {(r.distance / 1000).toFixed(2)} km
                </div>

                <div>
                  ⏱ {(r.duration / 60).toFixed(0)} mins
                </div>

                <div>
                  ⚠️ Risk: {r.risk.toFixed(2)}
                </div>
              </button>
            ))}
          </div>
        )}
      </aside>

      <main className="map-area">
        <Map
          routes={routes}
          selectedRoute={selectedRoute}
          mode={mode}
          floodReports={floodReports}
        />
      </main>
    </div>
  );
}