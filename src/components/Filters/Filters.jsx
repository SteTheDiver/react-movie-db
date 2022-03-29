import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";

import styles from "./Filters.module.scss";

function Filters() {
  const { movies, activeGenre, setActiveGenre, setFiltered } =
    useGlobalContext();

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre]);

  console.log(movies);
  return (
    <div>
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
      <button
        onClick={() => setActiveGenre(878)}
        className={activeGenre === 878 ? styles.ActiveButton : styles.Button}
      >
        Science Fiction
      </button>
      <button
        onClick={() => setActiveGenre(10402)}
        className={activeGenre === 10402 ? styles.ActiveButton : styles.Button}
      >
        Music
      </button>
      <button
        onClick={() => setActiveGenre(99)}
        className={activeGenre === 99 ? styles.ActiveButton : styles.Button}
      >
        Documentary
      </button>
    </div>
  );
}

export default Filters;
