import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [query, setQuery] = useState("Batman");
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");


  const api = `&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

  // const url = `${API_ENDPOINT}&s=${query}`;

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
        setFiltered(data.results);
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

  const endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}${api}`;

  useEffect(() => {
    fetchMovies(endpoint);
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery, activeGenre, setActiveGenre, filtered, setFiltered }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
