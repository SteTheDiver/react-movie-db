import React from "react";

import Filters from "../components/Filters/Filters";
import MoviesList from "../components/MoviesList/MoviesList";

function Upcoming() {
  return (
    <>
      <Filters />
      <MoviesList />
    </>
  );
}

export default Upcoming;
