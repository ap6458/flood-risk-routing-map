type GeoResult = {
  lat: number;
  lon: number;
  source: "mapbox" | "osm";
};


export async function geocode(place: string): Promise<GeoResult> {
  try {
    
    return await geocodeWithMapbox(place);
  } catch (err) {
    console.warn("Mapbox failed, falling back to OSM:", err);
    
    return await geocodeWithOSM(place);
  }
}


async function geocodeWithMapbox(place: string): Promise<GeoResult> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) throw new Error("Mapbox token missing");

  // Mumbai bounding box
  const bbox = "72.75,18.88,73.05,19.30"; // west,south,east,north
  const proximity = "72.8777,19.076"; // Mumbai center

  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
    `${encodeURIComponent(place)}.json` +
    `?access_token=${token}` +
    `&limit=1` +
    `&country=IN` +
    `&bbox=${bbox}` +
    `&proximity=${proximity}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.features || data.features.length === 0) {
    throw new Error("Mapbox geocoding failed");
  }

  const [lon, lat] = data.features[0].center;

  return { lat, lon, source: "mapbox" };
}

/* =========================
   OSM NOMINATIM FALLBACK
   ========================= */
async function geocodeWithOSM(place: string): Promise<GeoResult> {
  const url =
    `https://nominatim.openstreetmap.org/search?` +
    `q=${encodeURIComponent(place + ", Mumbai")}` +
    `&format=json&limit=1`;

  const res = await fetch(url, {
    headers: {
      // REQUIRED by Nominatim usage policy
      "User-Agent": "FloodRiskRoutePlanner/1.0 (student-project)",
    },
  });

  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error("OSM geocoding failed");
  }

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
    source: "osm",
  };
}