import React from "react";
import MovieCard from "../movieCard/movieCard";
import styles from "./moviesList.module.css";
const moviesList = (props: any) => {
  const listItems = props.movies.map((movieItem: any) => {
    return (
      <>
      <MovieCard
        movie={movieItem}
        key={movieItem.id}
        handleClick={props.handleClick}
        getMovieDetails={props.getMovieDetails}
      />
      </>
    );
  });
  return <div className={styles.moviesList}>{listItems.length>0?listItems:<h3>Result Not Found</h3>}</div>;
};

export default moviesList;
