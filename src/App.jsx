import { useEffect, useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    async function fetchPhotos() {
      if (!accessKey) {
        console.error("Access Key tidak ditemukan! Pastikan .env sudah benar.");
        return;
      }

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=nature&per_page=9&client_id=${accessKey}`
        );
        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        console.error("Error fetching from Unsplash:", error);
      }
    }

    fetchPhotos();
  }, []); // [] = dijalankan sekali saat komponen dimuat

  return (
    <div
      style={{ width: "800px", display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
          style={{ width: "200px", borderRadius: "10px" }}
        />
      ))}
    </div>
  );
}
