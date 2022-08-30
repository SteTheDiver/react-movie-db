import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let favourites = localStorage.getItem("favourites");

  if (favourites) {
    return JSON.parse(localStorage.getItem("favourites"));
  } else {
    return [];
  }
};


const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [popular, setPopular] = useState([]);
  const [favourites, setFavourites] = useState(getLocalStorage());
  const [showModal, setShowModal] = useState({ show: false, message: "" });
  const apiKey = `&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

  const type = query ? "search" : "discover";
  const search = query ? `&query=${query}` : "";




  const fetchMovies = async (url) => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
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
    return () => {
      controller.abort();
    };
  };

  const fetchPopular = async (url) => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setPopular(data.results);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return () => {
      controller.abort();
    };
  };

  const endpoint = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}`;
  const secondEndPoint = `https://api.themoviedb.org/3/${type}/movie?${apiKey}${search}
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



  

  const addToList = (item) => {
    setFavourites([...favourites, item]);
    setShowModal({
      show: true,
      message: "The movie has been added to your list",
    });
  };

  const removeFromList = (item) => {
    let tempFav = favourites.filter((listItem) => listItem.id !== item.id);
    setFavourites(tempFav);
    setShowModal({
      show: true,
      message: "The movie has been removed from your list",
    });
  };

  const clearList = () => {
    setFavourites({});
  };


  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])
  

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        apiKey,
        popular,
        query,
        setQuery,
        activeGenre,
        setActiveGenre,
        filtered,
        setFiltered,
        searchMovies,
        setError,
        favourites,
        setFavourites,
        addToList,
        removeFromList,
        setShowModal,
        showModal,
        clearList,
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
