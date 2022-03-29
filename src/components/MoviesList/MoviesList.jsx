import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./MoviesList.module.scss";
import { Link } from "react-router-dom";

const url =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

function MoviesList() {
  const { movies, loading, filtered } = useGlobalContext();

  console.log(movies, "movies");

  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={styles.MoviesList}>
      <section className={styles.Grid}>
        {filtered.map((movie) => {
          const {
            id,
            backdrop_path,
            title,
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
                  src={
                    backdrop_path !== null
                      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                      : url
                  }
                  alt={title}
                />

                <div className={styles.Info}>
                  <span className={styles.Text}>{title}</span>
                  {/* <span className={styles.Text}>{year}</span> */}
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
