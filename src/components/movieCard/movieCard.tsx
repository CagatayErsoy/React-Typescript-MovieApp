import React from "react";
import styles from "./movieCard.module.css";

const movieCard = (props: any) => {
  let imgUrl = `/Images/${props.movie.id}.jpeg`;
  let defaulImgUrl = `/Images/defaultImage.jpeg`;
  function addDefaultSrc(ev: any) {
    ev.target.src = defaulImgUrl;
  }

  return (
    <div
      className={styles.movieCard}
      onClick={() => {
        props.handleClick();
        props.getMovieDetails(props.movie.id)
      }}
    >
      <h3 className={styles.movieTitle}>{props.movie.title}</h3>
      <p>{props.movie.id}</p>
      <img
        className={styles.moviePoster}
        src={imgUrl}
        onError={addDefaultSrc}
        alt={props.movie.title}
      />
    </div>
  );
};

export default movieCard;
