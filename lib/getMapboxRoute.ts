type LatLng = { lat: number; lon: number };

export async function getMapboxRoute(
  src: LatLng,
  dest: LatLng,
  mode: "driving" | "walking" | "cycling"
) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) throw new Error("Mapbox token missing");

  const url =
    `https://api.mapbox.com/directions/v5/mapbox/${mode}/` +
    `${src.lon},${src.lat};${dest.lon},${dest.lat}` +
    `?geometries=geojson&overview=full&radiuses=1000;1000&access_token=${token}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.routes || data.routes.length === 0) {
    throw new Error("No route returned by Mapbox");
  }

  const route = data.routes[0];

  return {
    path: route.geometry.coordinates.map(
      ([lon, lat]: [number, number]) => [lat, lon]
    ),
    distance: route.distance,
    duration: route.duration,
  };
}
