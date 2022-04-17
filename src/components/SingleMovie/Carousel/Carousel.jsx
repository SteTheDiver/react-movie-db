import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styles from "./Carousel.module.scss";
const handleDragStart = (e) => e.preventDefault();

const imageUrl = "https://image.tmdb.org/t/p/w500";
const noPicture =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

const Carousel = (props) => {
  const items = props.actors.slice(0, 10).map((actor) => (
    <div className={styles.carouselItem}>
      <a href={`https://en.wikipedia.org/wiki/${actor.name}`} target="_blank" rel="noreferrer">
        <img
          src={
            actor.profile_path ? `${imageUrl}/${actor.profile_path}` : noPicture
          }
          alt={actor?.name}
          onDragStart={handleDragStart}
          className={styles.ActorImage}
        />
      </a>
      <b className={styles.ActorName}>{actor?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 4,
    },
    1300: {
      items: 5,
    },
  };

  return (
    <AliceCarousel
      autoPlay
      infinite
      responsive={responsive}
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={items}
    />
  );
};

export default Carousel;
