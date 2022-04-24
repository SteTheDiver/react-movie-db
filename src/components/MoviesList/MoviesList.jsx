import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useGlobalContext } from "../../context";
import styles from "./MoviesList.module.scss";
import Loader from "../Loader/Loader";

const url =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

const imageUrl = "https://image.tmdb.org/t/p/w500";

function MoviesList() {
  const { movies, loading, filtered } = useGlobalContext();

  const moviesArray =
    window.location.pathname !== "/upcoming" ? movies : filtered;

  if (loading) {
    return <Loader />;
  }
  return (
    <main className={styles.MoviesList}>
      <motion.div layout className={styles.Grid}>
        {moviesArray.map((movie) => {
          const { id, backdrop_path, title, vote_average } = movie;

          const renderImage = () => {
            let cover = "";
            if (backdrop_path === null) {
              cover = url;
            } else {
              cover = `${imageUrl + backdrop_path} `;
            }
            return cover;
          };

          return (
            <motion.div
              layout
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              key={id}
            >
              <Link to={`movies/${id}`} className={styles.MovieContainer}>
                <img className={styles.Image} src={renderImage()} alt={title} />

                <div className={styles.Info}>
                  <span className={styles.Text}>{title}</span>
                  <span className={styles.Rate}>{vote_average}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}

export default MoviesList;
