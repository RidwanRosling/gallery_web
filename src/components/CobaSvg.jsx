import { useEffect } from "react";

export default function CobaSvg() {
  useEffect(() => {
    console.log(window.simplemaps_countrymap_mapdata);
    // MapScript akan otomatis membaca ID ini
    // Pastikan script sudah termuat dari index.html
  }, []);

  return (
    <div>
      <h1>Peta Indonesia</h1>
      <div id="map" z></div>
    </div>
  );
}
