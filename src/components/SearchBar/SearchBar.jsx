import React from "react";
import { useGlobalContext } from "../../context";

import styles from "./SearchBar.module.scss";

function SearchBar() {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <main className={styles.SearchBar}>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className={styles.Form}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className={styles.Input}
        />
        {error.show && <span>{error.message}</span>}
      </form>
    </main>
  );
}

export default SearchBar;
