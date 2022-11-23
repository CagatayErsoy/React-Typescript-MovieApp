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
  const [genreMovies, setGenreMovies] = useState<Movies[]>([]);
  const [inputMovies, setInputMovies] = useState<Movies[]>([]);
  const { isOpen, toggle } = useModal();
  const [movieDetail, setMovieDetail] = useState<any>("");
  const [movieId, setMovieId] = useState<string>("");

  useEffect(() => {
    MovieServices.getMovies().then((res) => setMovies(res.data));
    MovieServices.getMovies().then((res) => setAllMovies(res.data));
    

  }, []);
  useEffect(() => {
    
    
    if (isOpen) {
      console.log("worked")
      MovieServices.searchMovieById(movieId).then((res) => {
        setMovieDetail(res.data);
        
      });
    }
    
  }, [movieId,isOpen]);



  let searchResult: any = []

  const getGenre = (genre: string) => {
    let filtered = [...allMovies].filter((movie) => {
      if (genre === "All") {
        return movie;
      } else {
        return movie.genres.includes(genre);
      }
    });
    setInputMovies(filtered);
  };

  const handleChange = (event: any) => {
    searchResult = [...allMovies].filter(movie => {
      return movie.title.toLowerCase().includes(event.target.value)
    })
    setGenreMovies(searchResult)
  }
  const getMovieDetails = (id: string) => {
    setMovieId(id)
  };
  useEffect(() => {
    if (inputMovies.length > 0 && genreMovies.length < 1) {
      setMovies(inputMovies)
    }
    else if (inputMovies.length < 1 && genreMovies.length > 0) {
      setMovies(genreMovies)
    } else if (
      inputMovies.length > 0 && genreMovies.length > 0
    ) {
      let temp = [...inputMovies].concat(genreMovies)
      let res = temp.filter((c, index) => {
        return temp.indexOf(c) !== index;
      });

      setMovies(res)
    }

    

  }, [inputMovies, genreMovies],);





  return (
    <div className="App">
      <h1>Movies App</h1>
      <SearchBar handleChange={handleChange} />
      <Dropdown allMovies={allMovies} getGenre={getGenre} />
      <MoviesList
        movies={movies}
        handleClick={toggle}
        getMovieDetails={getMovieDetails}
      ></MoviesList>
      {isOpen&&<Modal isOpen={isOpen} toggle={toggle} movieDetail={movieDetail}></Modal>}
    </div>
  );
};

export default App;
