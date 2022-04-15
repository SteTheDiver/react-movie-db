import React, { useEffect } from "react";
import styles from "./Favourites.module.scss";

import CancelIcon from "@mui/icons-material/Cancel";

import { useGlobalContext } from "../../context";

function Favourites() {
  const { favourites, removeFromList, clearList } = useGlobalContext();

  // useEffect(() => {}, [favourites]);

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <main className={styles.Favourites}>
      {favourites.map((favourite) => {
        return (
          <article className={styles.Container} key={favourite.id}>
            <img
              src={imageUrl + favourite.backdrop_path}
              alt={favourite.title}
            />
            <span>{favourite.title}</span>
            <CancelIcon
              onClick={() => removeFromList(favourite)}
              className={styles.Icon}
            />
          </article>
        );
      })}
      {favourites.length > 0 ? (
        <button className={styles.Button} onClick={() => clearList()}>
          clear list
        </button>
      ) : null}
    </main>
  );
}

export default Favourites;
