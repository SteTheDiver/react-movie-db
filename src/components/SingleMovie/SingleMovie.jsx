import React, { useState, useEffect } from "react";
import styles from "./SingleMovie.module.scss";

import { useParams, Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

function SingleMovie() {
  const { error, setError } = useGlobalContext();

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = `https://api.themoviedb.org/3/movie/${id}?api_key=125cdf047b457b4b189f4cbbe5b40acf`;
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.overview);
      if (data) {
        setMovie(data);
        console.log(data);
        // setFiltered(data.results);
        setError({ show: false, message: "" });
        console.log(data);
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(api);
  }, [api]);

  return (
    <main className={styles.SingleMovie}>
      <section className={styles.Container}>
        <img src={imageUrl + movie.backdrop_path} />
        <div className={styles.InfoContainer}>
          <header className={styles.Header}>
            <span className={styles.Title}>{movie.title}</span>
            <span className={styles.Text}>{movie.overview}</span>
          </header>
          <button className={styles.Button}>Back to home</button>
        </div>
      </section>
    </main>
  );
}

export default SingleMovie;
