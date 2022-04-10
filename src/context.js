import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [popular, setPopular] = useState([]);

  const api = `&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

  const type = query ? "search" : "discover";
  const search = query ? `&query=${query}` : "";

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPopular = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setPopular(data.results);
        // setFiltered(data.results);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const endpoint = `https://api.themoviedb.org/3/movie/upcoming?${api}`;
  const secondEndPoint = `https://api.themoviedb.org/3/${type}/movie?${api}${search}
  `;

  useEffect(() => {
    fetchMovies(secondEndPoint);
  }, [secondEndPoint]);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(secondEndPoint);
  };


  useEffect(() => {
    fetchPopular(endpoint);
  }, [endpoint]);

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
        searchMovies,
        setError,
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
