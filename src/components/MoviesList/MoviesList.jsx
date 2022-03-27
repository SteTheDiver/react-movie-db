import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./MoviesList.module.scss";
import { Link } from "react-router-dom";

function MoviesList() {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={styles.MoviesList}>
      <section className={styles.Grid}>
        {movies.map((movie) => {
          const {
            Title: title,
            Poster: poster,
            Year: year,
            imdbID: id,
          } = movie;
          return (
            <Link to={`movies/${id}`} key={id}>
              <article className={styles.MovieContainer}>
                <img className={styles.Image} src={poster} alt={title} />
                <div className={styles.Info}>
                  <span>{title}</span>
                  {/* <span>{year}</span> */}
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default MoviesList;
