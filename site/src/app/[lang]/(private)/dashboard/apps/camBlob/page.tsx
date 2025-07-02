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
    <div className="p-6  items-center">
      <h1 className="text-2xl text-center font-semibold mb-4">Fotos da ESP32-CAM (atualizadas a cada 5 minutos)</h1>
      <h4 className="text-sm italic text-center mb-8">
        As fotos são tiradas e salvas no Blob a cada segundo, portanto basta atualizar a página quando quiser!
      </h4>
      <LivePhotoGrid initialImages={sorted} />
    </div>
  );
}
