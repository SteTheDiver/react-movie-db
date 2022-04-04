import React from "react";
import { useGlobalContext } from "../../context";
import styles from "./MoviesList.module.scss";
import { Link } from "react-router-dom";

const url =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

const imageUrl = "https://image.tmdb.org/t/p/w500";

function MoviesList() {
  const { movies, popular, loading, filtered } = useGlobalContext();

  const moviesArray = window.location.pathname == "/popular" ? filtered : movies;

  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={styles.MoviesList}>
      <section className={styles.Grid}>
        {moviesArray.map((movie) => {
          const {
            Id: id,
            backdrop_path,
            Poster,
            title,
            Title: tmdbTitle,
          } = movie;
          const customImage =
            window.location.pathname !== "/popular"
              ? Poster
              : imageUrl + backdrop_path;
          const customTitle =
            window.location.pathname !== "/popular" ? tmdbTitle : title;
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
                    Poster || (backdrop_path !== null && "N/A")
                      ? customImage
                      : url
                  }
                  alt={title}
                />

                <div className={styles.Info}>
                  <span className={styles.Text}>{customTitle}</span>
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
