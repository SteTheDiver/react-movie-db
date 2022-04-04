import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");
  const [popular, setPopular] = useState([]);

  const api = `&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

  // const url = `${API_ENDPOINT}&s=${query}`;

  const fetchPopular = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setPopular(data.results);
        // setFiltered(data.results);
        setError({ show: false, message: "" });
        console.log(data.results);
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const apiOmdb = `http://www.omdbapi.com/?apikey=48050f69&s=${query}`;
  const endpoint = `https://api.themoviedb.org/3/movie/popular?${api}`;

  useEffect(() => {
    fetchMovies(apiOmdb);
  }, [query]);

  useEffect(()=> {
    fetchPopular(endpoint)
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        popular,
        query,
        setQuery,
        activeGenre,
        setActiveGenre,
        filtered,
        setFiltered,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
