import React from "react";
import Filters from "../components/Filters/Filters";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "70%",
      }}
    >
      <SearchBar />
      <MoviesList />
    </div>
  );
}

export default Home;
