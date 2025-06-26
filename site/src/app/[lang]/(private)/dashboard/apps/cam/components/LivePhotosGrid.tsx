'use client';

import { useEffect, useState } from "react";

type BlobFile = {
  url: string;
  pathname: string;
};

function extractTimestamp(pathname: string): number | null {
  const match = pathname.match(/photos\/(\d+)_/);
  return match ? parseInt(match[1]) : null;
}

export default function LivePhotoGrid({ initialImages }: { initialImages: BlobFile[] }) {
  const [images, setImages] = useState<BlobFile[]>(initialImages);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/blob-list");
      const data = await res.json();

      const sorted = data.blobs
        .filter((b: BlobFile) => b.pathname.startsWith("esp_cam/photos/"))
        .sort((a: BlobFile, b: BlobFile) => {
          const t1 = extractTimestamp(b.pathname) || 0;
          const t2 = extractTimestamp(a.pathname) || 0;
          return t1 - t2;
        });

      setImages(sorted);
    } catch (e) {
      console.error("Erro ao buscar imagens:", e);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchImages, 1000); // a cada 1s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img) => {
        const timestamp = extractTimestamp(img.pathname);
        const label = timestamp ? new Date(timestamp).toLocaleString() : "Data desconhecida";

        return (
          <div key={img.url} className="border rounded shadow">
            <img src={img.url} alt="Foto da ESP32-CAM" className="w-full object-cover" />
            <p className="text-xs text-center p-1">{label}</p>
          </div>
        );
      })}
    </div>
  );
}
