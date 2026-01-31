type LatLng = { lat: number; lon: number };

export type RawRoute = {
  geometry: {
    coordinates: [number, number][];
  };
  distance: number;
  duration: number;
};

export async function getMapboxRoute(
  src: LatLng,
  dest: LatLng,
  mode: "driving" | "walking" | "cycling"
): Promise<RawRoute[]> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) throw new Error("Mapbox token missing");

  const url =
    `https://api.mapbox.com/directions/v5/mapbox/${mode}/` +
    `${src.lon},${src.lat};${dest.lon},${dest.lat}` +
    `?alternatives=true&geometries=geojson&overview=full&access_token=${token}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.routes || data.routes.length === 0) {
    throw new Error("No routes returned");
  }

  return data.routes;
}