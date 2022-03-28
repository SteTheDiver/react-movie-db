import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./MoviesList.module.scss";
import { Link } from "react-router-dom";

const url =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

function MoviesList() {
  const { movies, loading } = useGlobalContext();

  console.log(movies, "movies");

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
            <Link
              to={`movies/${id}`}
              key={id}
              className={styles.MovieContainer}
            >
              <article>
                <img
                  className={styles.Image}
                  src={poster === "N/A" ? url : poster}
                  alt={title}
                />

                <div className={styles.Info}>
                  <span className={styles.Text}>{title}</span>
                  <span className={styles.Text}>{year}</span>
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
