import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";

import styles from "./Filters.module.scss";

function Filters() {
  const { popular, activeGenre, setActiveGenre, setFiltered} =
    useGlobalContext();

  useEffect(() => {
    if (activeGenre === 0 || !activeGenre) {
      setFiltered(popular);
      return;
    }
    const filteredMovie = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFiltered(filteredMovie);
  }, [activeGenre]);


  return (
    <div className={styles.Filters}>
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? styles.ActiveButton : styles.Button}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? styles.ActiveButton : styles.Button}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? styles.ActiveButton : styles.Button}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(18)}
        className={activeGenre === 18 ? styles.ActiveButton : styles.Button}
      >
        Drama
      </button>
    </div>
  );
}

export default Filters;
