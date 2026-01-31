"use client";

import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

export default function FloodLegend() {
  const map = useMap();

  useEffect(() => {
    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend");

      div.innerHTML = `
        <div style="
          background:white;
          padding:12px;
          border-radius:12px;
          box-shadow:0 4px 10px rgba(0,0,0,0.15);
          font-size:14px;
          line-height:1.6;
        ">
          <strong>Flood Points</strong><br/><br/>

          <span style="display:inline-block;width:14px;height:14px;background:#ff9999;border-radius:50%;margin-right:8px;"></span>
          Low<br/>

          <span style="display:inline-block;width:14px;height:14px;background:#ff4d4d;border-radius:50%;margin-right:8px;"></span>
          Moderate<br/>

          <span style="display:inline-block;width:14px;height:14px;background:#990000;border-radius:50%;margin-right:8px;"></span>
          High<br/><br/>

          
        </div>
      `;

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}