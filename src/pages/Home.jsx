import React from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchBar/SearchBar";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "80%",
      }}
    >
      <SearchBar />
      <MoviesList />
    </div>
  );
}

export default Home;
