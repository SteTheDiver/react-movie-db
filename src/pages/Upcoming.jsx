import React from "react";

import { useGlobalContext } from "../context";


import Filters from "../components/Filters/Filters";
import MoviesList from "../components/MoviesList/MoviesList";

function Upcoming() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "80%",
      }}
    >
      {/* <h1 style={{ color: "white" }}>Popular</h1> */}
      <Filters />
      <MoviesList />
    </div>
  );
}
 
export default Upcoming;
