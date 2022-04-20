import React from "react";
import { Link } from "react-router-dom";

import styles from "./Favourites.module.scss";

import CancelIcon from "@mui/icons-material/Cancel";

import { useGlobalContext } from "../../context";

function Favourites() {
  const { favourites, removeFromList, clearList } = useGlobalContext();

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <main className={styles.Favourites}>
      <div className={styles.Grid}>
        {favourites.map((favourite) => {
          console.log(favourite);
          return (
            <article className={styles.Container} key={favourite.id}>
              <Link to={`movies/${favourite.id}`}>
                <img
                  src={imageUrl + favourite.backdrop_path}
                  alt={favourite.title}
                />
              </Link>
              <footer className={styles.Footer}>
                <div className={styles.FooterWrapper}>
                  <section className={styles.Info}>
                    <span>{favourite.title}</span>
                    <span> Released: {favourite.release_date}</span>
                  </section>
                  <CancelIcon
                    onClick={() => removeFromList(favourite)}
                    className={styles.Icon}
                  />
                </div>
              </footer>
            </article>
          );
        })}
      </div>
      {favourites.length > 0 ? (
        <button className={styles.Button} onClick={() => clearList()}>
          clear list
        </button>
      ) : null}
    </main>
  );
}

export default Favourites;