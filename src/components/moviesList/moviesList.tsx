import React from "react";
import MovieCard from "../movieCard/movieCard";
import styles from "./moviesList.module.css";
const moviesList = (props: any) => {
  const listItems = props.movies.map((movieItem: any) => {
    return (
      <MovieCard
        movie={movieItem}
        key={movieItem.id}
        handleClick={props.handleClick}
        getMovieDetails={props.getMovieDetails}
      />
    );
  });
  return <div className={styles.moviesList}>{listItems}</div>;
};

export default moviesList;
