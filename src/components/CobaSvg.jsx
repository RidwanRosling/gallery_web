import { useEffect, useState } from "react";
import NavFilter from "./NavFilter";

export default function CobaSvg({ setSearchTerm, searchTerm }) {
  // const [state, setState] = useState("");

  useEffect(() => {
    const sm = window.simplemaps_countrymap;
    const data = window.simplemaps_countrymap_mapdata.state_specific;

    sm.hooks.click_state = function (stateID) {
      const stateName = data[stateID].name;
      console.log("Clicked state ID:", stateID);
      console.log("Clicked state Name:", stateName);
      // setState(stateName);
      setSearchTerm(stateName);
    };
  }, []);

  return (
    <>
      <div className="coba-svg-container">
        <h1 className="coba-svg-title">Explore Indonesia</h1>
        <p className="coba-svg-description">
          Click on the map to explore different regions of Indonesia.
        </p>
        <div id="map" style={{ width: "100%", height: "600px" }} />
      </div>
    </>
  );
}
