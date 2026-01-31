import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

/* ---------------- GET REPORTS ---------------- */

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("floodDB");
    const collection = db.collection("reports");

    const now = new Date();

    // Only return non-expired reports
    const reports = await collection
      .find({ expiresAt: { $gt: now } })
      .toArray();

    return NextResponse.json(reports);
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json(
      { error: "GET failed" },
      { status: 500 }
    );
  }
}

/* ---------------- POST REPORT ---------------- */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { lat, lon, severity } = body;

    const client = await clientPromise;
    const db = client.db("floodDB");
    const collection = db.collection("reports");

    const now = new Date();

    // Expiry based on severity
    let hoursToAdd = 0.5;

    if (severity === 2) hoursToAdd = 1;
    if (severity === 3) hoursToAdd = 2;

    const expiresAt = new Date(
      now.getTime() + hoursToAdd * 60 * 60 * 1000
    );

    await collection.insertOne({
      lat,
      lon,
      severity,
      createdAt: now,
      expiresAt
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST ERROR:", error);
    return NextResponse.json(
      { error: "Insert failed" },
      { status: 500 }
    );
  }
}