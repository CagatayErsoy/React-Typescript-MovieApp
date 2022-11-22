import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import { MovieServices } from "./services/MovieServices";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar";
import MoviesList from "./components/moviesList/moviesList";
import Dropdown from "./components/dropdown/dropdown";
import Movies from "./interfaces/Movies";
import Modal from "./components/modal/modal";
import useModal from "./hooks/modal";
const App: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [allMovies, setAllMovies] = useState<Movies[]>([]);
  const { isOpen, toggle } = useModal();
  const [movieDetail, setMovieDetail] = useState<any>();
  const [movieId, setMovieId] = useState<string>();
 
  useEffect(() => {
    MovieServices.getMovies().then((res) => setMovies(res.data));
    MovieServices.getMovies().then((res) => setAllMovies(res.data));
 
    
  }, []);
  useEffect(() => {
  
    if(movieId){
      MovieServices.searchMovieById(movieId).then((res) => {
        setMovieDetail(res.data);
        
      });
    }
  }, [ movieId]);
 
  
  const getGenre = (genre: string) => {
    let filtered = [...allMovies].filter((movie) => {
      if (genre === "All") {
        return movie;
      } else {
        return movie.genres.includes(genre);
      }
    });
    setMovies(filtered);
  };
  const getMovieDetails = (id: string) => {
    setMovieId(id)
  };

  return (
    <div className="App">
      <h1>Movies App</h1>
      <p>{}</p>
      <SearchBar movies={movies} setMovies={setMovies} allMovies={allMovies} />
      <Dropdown allMovies={allMovies} getGenre={getGenre} />
      <MoviesList
        movies={movies}
        handleClick={toggle}
        getMovieDetails={getMovieDetails}
      ></MoviesList>
      <Modal isOpen={isOpen} toggle={toggle} movieDetail={movieDetail}></Modal>
    </div>
  );
};

export default App;
