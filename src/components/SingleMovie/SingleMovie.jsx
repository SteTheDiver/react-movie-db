import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

import styles from "./SingleMovie.module.scss";

import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Modal from "../Modal/Modal";
import Carousel from "./Carousel/Carousel";

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

  useEffect(() => {
    const fetchCast = async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url);
  
        const data = await response.json();
        if (data) {
          setActors(data.cast);
          setError({ show: false, message: "" });
        } else {
          setError({ show: true, message: data.Error });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast(apiCast)
  }, [apiCast, setError]);

  useEffect(() => {
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
    fetchMovie(apiMovie)
  }, [apiMovie, setError]);



  const setTimer = () => {
    // clear any existing timer
    if (timer != null) {
      clearTimeout(timer);
    }

    // hide after `delay` milliseconds
    timer = setTimeout(() => {
      setShowModal(!showModal.show);
      timer = null;
    }, 3000);
  };

  useEffect(() => {
    setTimer();
  }, [showModal]);

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
        ClassName={styles.Video}
        opts={{ height: "500px", width: "100%"}}
      />
    );
  };

  return (
    <main className={styles.SingleMovie}>
      <section className={styles.Container}>
        <div className={styles.Video}>
          {movie.videos ? renderTrailer() : movie.backdrop_path}
        </div>
        <div className={styles.InfoContainer}>
          <header className={styles.Header}>
            <span className={styles.Title}>{movie.title}</span>
            <span className={styles.Text}>{movie.overview}</span>
            <div className={styles.Actors}>
              <Carousel
                actors={actors} id={id}
              />
            </div>
          </header>
          <footer className={styles.Footer}>
            <Link to="/">
              <button className={styles.Button}>Back to home</button>
            </Link>
            {btn}
            {showModal.show ? (
              <Modal message={showModal.message} show={showModal.show} />
            ) : null}
             <Link to="/watchlist">
              <button className={styles.Button}>Watch List</button>
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default SingleMovie;
