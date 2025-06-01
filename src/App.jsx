import { useEffect, useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const controller = new AbortController(); // <- for cancel req
    const signal = controller.signal;

    async function fetchPhotos() {
      if (!accessKey) {
        console.error("Access Key tidak ditemukan! Pastikan .env sudah benar.");
        return;
      }

      if (searchTerm.trim() === "") {
        setPhotos([]);
        return;
      }

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=9&client_id=${accessKey}`,
          { signal } // <- pass signal to fetch
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        if (error.name === "AbortError") {
          // fetch will cancel, do nothing
          return;
        }
        console.error("Error fetching from Unsplash:", error.message);
      }
    }

    fetchPhotos();

    return () => {
      // cleanup: batalkan request sebelumnya jika searchTerm berubah
      controller.abort();
    };
  }, [searchTerm, accessKey]);

  return (
    <>
      <header>
        <h1>Unsplash Photo Gallery</h1>
        <p>Explore beautiful nature photos from Unsplash</p>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari foto..."
        />
      </header>

      <div
        style={{
          width: "800px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {photos.length > 0 &&
          photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: "200px", borderRadius: "10px" }}
            />
          ))}
      </div>
    </>
  );
}
