import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Favorite } from "@mui/icons-material";

import styles from "./SingleMovie.module.scss";

import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Modal from "../Modal/Modal";

function SingleMovie() {
  const {
    apiKey,
    error,
    setError,
    addToList,
    favourites,
    removeFromList,
    showModal,
    setShowModal,
  } = useGlobalContext();

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  let timer = null;

  const apiMovie = `https://api.themoviedb.org/3/movie/${id}?${apiKey}&append_to_response=videos`;
  const apiCast = `https://api.themoviedb.org/3/movie/${id}/credits?${apiKey}`;
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const url =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setMovie(data);
        // setFiltered(data.results);
        setError({ show: false, message: "" });
        // console.log(error);
      } else {
        setError({ show: true, message: data.Error });
        console.log(error);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCast = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      if (data) {
        setActors(data);
        console.log(data);
        // setFiltered(data.results);
        setError({ show: false, message: "" });
        // console.log(data);
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(actors);
  console.log(movie);

  useEffect(() => {
    // fetchMovie(apiMovie);
    fetchCast(apiCast);
  }, [apiCast]);

  useEffect(() => {
    fetchMovie(apiMovie);
    // fetchCast(apiCast);
  }, [apiMovie]);

  useEffect(() => {
    setTimer();
  }, [favourites]);

  const setTimer = () => {
    // clear any existing timer
    if (timer != null) {
      clearTimeout(timer);
    }

    // hide after `delay` milliseconds
    timer = setTimeout(() => {
      setShowModal(!showModal);
      timer = null;
    }, 3000);
  };

  if (loading) {
    return <div>This is loading</div>;
  }

  let btn;

  if (favourites.length > 0 && favourites.find((el) => el.id === movie.id)) {
    btn = (
      <button
        className={styles.Button}
        style={{ background: "red" }}
        onClick={() => removeFromList(movie)}
      >
        Remove from watching list
      </button>
    );
  } else {
    btn = (
      <button className={styles.Button} onClick={() => addToList(movie)}>
        Add to Watching List
      </button>
    );
  }

  const renderTrailer = () => {
    const officialTrailer = movie.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    const trailer = movie.videos.results[0];

    const key = officialTrailer ? officialTrailer.key : trailer.key;

    return (
      <YouTube
        videoId={key}
        containerClassName={styles.Video}
        opts={{ width: "100%", height: "100%" }}
      />
    );
  };

  console.log(favourites, "favourite");

  return (
    <main className={styles.SingleMovie}>
      <section className={styles.Container}>
        {movie.videos ? renderTrailer() : movie.backdrop_path}
        <div className={styles.InfoContainer}>
          <header className={styles.Header}>
            <span className={styles.Title}>{movie.title}</span>
            <span className={styles.Text}>{movie.overview}</span>
            <div className={styles.Actors}>
              {actors.cast.slice(0, 5).map((actor) => {
                return (
                  <div className={styles.ActorContainer} key={actor.id}>
                    <img
                      className={styles.ActorImage}
                      src={
                        (actor.profile_path === null
                          ? url
                          : imageUrl + actor.profile_path)
                      }
                      alt={actor.name}
                    />
                    <span className={styles.ActorName}>{actor.name}</span>
                  </div>
                );
              })}{" "}
            </div>
          </header>
          <footer className={styles.Footer}>
            <Link to="/">
              <button className={styles.Button}>Back to home</button>
            </Link>
            {btn}
          </footer>
        </div>
        {showModal.show ? (
          <Modal message={showModal.message} show={showModal.show} />
        ) : null}
      </section>
    </main>
  );
}

export default SingleMovie;
