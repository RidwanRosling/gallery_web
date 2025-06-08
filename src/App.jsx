import { useEffect, useState } from "react";
import NavFilter from "./components/NavFilter";
import GalleryImages from "./components/GalleryImages";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import CobaSvg from "./components/CobaSvg";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("mountain");
  const [photos, setPhotos] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const controller = new AbortController(); // <- for cancel req
    const signal = controller.signal;

    async function fetchPhotos() {
      if (!accessKey) {
        console.error("Access Key tidak ditemukan!");
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
        const allPhotos = data.results;

        if (allPhotos.length === 0) {
          setPhotos([]);
          return;
        }
        const largePhotos = allPhotos.filter((p) => p.width > 700);
        const first = largePhotos[0];
        const last = largePhotos[1];

        // Ambil 7 foto lainnya (bebas)
        const middle = allPhotos
          .filter(
            (p) => p.width > 400 && p.id !== first?.id && p.id !== last?.id
          )
          .slice(0, 7);

        setPhotos([first, ...middle, last]);
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
      // cleanup
      controller.abort();
    };
  }, [searchTerm, accessKey]);

  return (
    <>
      <CobaSvg />
      {/* <Navbar setSearchTerm={setSearchTerm} /> */}
      {/* <CobaSvg /> */}
      {/* <HeroSection /> */}
      {/* filter navbar */}
      {/* <NavFilter searchTerm={searchTerm} changeSearchTerm={setSearchTerm} /> */}
      {/* <hr className="line" /> */}
      {/* result from the filter or search */}
      {/* <GalleryImages photos={photos} /> */}
    </>
  );
}
