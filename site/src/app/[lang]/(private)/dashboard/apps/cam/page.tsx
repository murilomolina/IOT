'use server';

import LivePhotoGrid from "./components/LivePhotosGrid";
import { list } from "@vercel/blob";

function extractTimestamp(pathname: string): number | null {
  const match = pathname.match(/photos\/(\d+)_/);
  return match ? parseInt(match[1]) : null;
}

export default async function PhotosPage() {
  const { blobs } = await list();

  const sorted = blobs
    .filter((b) => b.pathname.startsWith("esp_cam/photos/"))
    .sort((a, b) => {
      const t1 = extractTimestamp(b.pathname) || 0;
      const t2 = extractTimestamp(a.pathname) || 0;
      return t1 - t2;
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Fotos da ESP32-CAM</h1>
      <LivePhotoGrid initialImages={sorted} />
    </div>
  );
}
