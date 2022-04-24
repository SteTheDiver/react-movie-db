import React from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <MoviesList />
    </>
  );
}

export default Home;
