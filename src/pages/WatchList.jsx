import React from "react";
import Favourites from "../components/Favourites/Favourites";

import { useGlobalContext } from "../context";

function WatchList() {
  const { favourites } = useGlobalContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "50px",
        height: "100%",
      }}
    >
      {favourites.length === 0 ? <span>No movies </span> : <Favourites />}
    </div>
  );
}

export default WatchList;
