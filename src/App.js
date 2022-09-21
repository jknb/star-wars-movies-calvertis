import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/movies/movies';
import MovieDescription from './components/movies/movieDescription/movieDescription';
import SearchBar from './components/filters/searchBar/searchBar';
import Loading from './components/loading/loading';
import SortByButton from './components/filters/sortBy/sortByButton/sortByButton';
import SortByModal from './components/filters/sortBy/sortByModal/sortByModal';
import { sortByTypes } from './constants/sortByConstants';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();

      setMovies(data.results);
      setFilteredMovies(data.results);
    }
    fetchMovies().catch(console.error);
  }, []);

  const handleSearchBarInput = inputValue => setFilteredMovies(movies.filter(movie => movie['title'].toLowerCase().includes(inputValue.toLowerCase())));

  const toggleSortByModal = () => setIsSortByModalOpen(!isSortByModalOpen);

  const sortMoviesBy = movieAttribute => {
    if (movieAttribute === sortByTypes.episode) {
      sortByEpisode();
    } else if (movieAttribute === sortByTypes.year) {
      sortByYear();
    }
  };

  const sortByEpisode = () => {
    setMovies(movies.slice().sort((a, b) => a.episode_id - b.episode_id));
    setFilteredMovies(filteredMovies.slice().sort((a, b) => a.episode_id - b.episode_id));
  }

  const sortByYear = () => {
    setMovies(movies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date)));
    setFilteredMovies(filteredMovies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date)));
  }

  return (
    <div className="App">
      {
        // TODO: Use flex to make it responsive
      }
      <div>
        <SortByButton sortByButtonClicked={toggleSortByModal} />
        {isSortByModalOpen ?
          <SortByModal closeButtonModalClicked={toggleSortByModal} sortMoviesBy={sortMoviesBy} />
          : null
        }
        <SearchBar searchBarInputChanged={(inputValue) => handleSearchBarInput(inputValue)} />
      </div>

      <div className="moviesContainer">
        <div className="movies">
          {movies.length ?
            <Movies
              movies={filteredMovies}
              movieClicked={(movie) => selectedMovie.episode_id === movie.episode_id ? setSelectedMovie({}) : setSelectedMovie(movie)}
            />
            :
            <Loading />
          }
        </div>
        <hr />
        <div className="selectedMovie">
          {selectedMovie.episode_id ?
            <MovieDescription episodeId={selectedMovie.episode_id} title={selectedMovie.title} openingCrawl={selectedMovie.opening_crawl} />
            : <div className="noMovieSelected">No Movie Selected</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
