import React from "react";

import { useGlobalContext } from "../context";

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
