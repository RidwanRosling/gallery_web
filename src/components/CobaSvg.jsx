import { useEffect } from "react";

export default function CobaSvg() {
  useEffect(() => {
    const sm = window.simplemaps_countrymap;
    const data = window.simplemaps_countrymap_mapdata.state_specific;

    sm.hooks.click_state = function (stateID) {
      const stateName = data[stateID].name;
      console.log("Clicked state ID:", stateID);
      console.log("Clicked state Name:", stateName);
      alert(`You clicked: ${stateName}`);
    };
  }, []);

  return (
    <div>
      <h1>Peta Indonesia</h1>
      <div id="map" style={{ width: "100%", height: "600px" }} />
    </div>
  );
}
