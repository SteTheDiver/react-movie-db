import React from "react";

import Filters from "../components/Filters/Filters";
import MoviesList from "../components/MoviesList/MoviesList";

function Popular() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "70%",
      }}
    >
      <h1 style={{ color: "white" }}>Popular</h1>
      <Filters />
      <MoviesList />
    </div>
  );
}
 
export default Popular;
