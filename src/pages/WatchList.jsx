import React from "react";
import Favourites from "../components/Favourites/Favourites";

import { useGlobalContext } from "../context";

function WatchList() {
  const { favourites } = useGlobalContext();

  console.log(favourites, "fav");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        backgroundColor: "#071423",
        height: "100vh"
      }}
    >
      <span>My Watch List</span>
      {favourites.length === 0 ? <span>No movies </span> : <Favourites />}
    </div>
  );
}

export default WatchList;