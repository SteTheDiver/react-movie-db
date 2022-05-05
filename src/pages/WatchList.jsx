import React from "react";
import Favourites from "../components/Favourites/Favourites";

import { useGlobalContext } from "../context";

function WatchList() {
  const { favourites } = useGlobalContext();

  console.log(favourites, "fav");
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "50px",
      height:"100%"
    }}>
      {favourites.length === 0 ? (
        <span
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   color: "white",
          //   fontSize: "50px",
          //   marginTop:"30px",
          // }}
        >
          No movies{" "}
        </span>
      ) : (
        <Favourites />
      )}
    </div>
  );
}

export default WatchList;
