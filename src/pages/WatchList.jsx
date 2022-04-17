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
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        margin: "0 auto",
        backgroundColor: "#071423",
        width:"80%",
        // height: "100vh"
      }}
    >
      {favourites.length === 0 ? <h1 style={{color:"white", fontSize:"50px"}}>No movies </h1> : <Favourites />}
    </div>
  );
}

export default WatchList;