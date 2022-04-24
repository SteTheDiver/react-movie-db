import React from "react";
import Favourites from "../components/Favourites/Favourites";

import { useGlobalContext } from "../context";

function WatchList() {
  const { favourites } = useGlobalContext();

  console.log(favourites, "fav");
  return (
    <>
      {favourites.length === 0 ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "50px",
            marginTop:"30px"
          }}
        >
          No movies{" "}
        </h1>
      ) : (
        <Favourites />
      )}
    </>
  );
}

export default WatchList;
