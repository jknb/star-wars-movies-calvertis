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
  const [selectedMovieId, setSelectedMovieId] = useState(null);

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
    setFilteredMovies(filteredMovies.slice().sort((a, b) => a.episode_id - b.episode_id));
  }

  const sortByYear = () => {
    setFilteredMovies(filteredMovies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date)));
  }

  return (
    <div className="App">
      {
        // TODO: Use flex to make it responsive
      }
      <div>
        <SortByButton sortByButtonClicked={toggleSortByModal} />
        {isSortByModalOpen ? <SortByModal closeButtonModalClicked={toggleSortByModal} sortMoviesBy={sortMoviesBy} /> : null}
        <SearchBar clicked={(inputValue) => handleSearchBarInput(inputValue)} changed={(inputValue) => handleSearchBarInput(inputValue)} />
      </div>

      <div>
        <div style={{ float: 'left', width: '49%' }}>
          {movies.length ?
            <Movies
              movies={filteredMovies}
              clicked={(movieId) => selectedMovieId === movieId ? setSelectedMovieId(null) : setSelectedMovieId(movieId)}
            />
            :
            <Loading />
          }
        </div>
        <div style={{ float: 'right', width: '49%' }}>
          {selectedMovieId ?
            <MovieDescription episodeId={selectedMovieId} title={movies[selectedMovieId - 1].title} openingCrawl={movies[selectedMovieId - 1].opening_crawl} />
            : <div>No Movie Selected</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
