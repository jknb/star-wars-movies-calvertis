import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/movies/movies';
import MovieDescription from './components/movies/movieDescription/movieDescription';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();

      setMovies(data.results);
      setSelectedMovieId(5);
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
      {
        // TODO: Use flex to make it responsive
      }
      <div style={{ float: 'left', width: '49%' }}>
        <Movies movies={movies} />
      </div>
      {
        // TODO: Implement movieDescription component
      }
      <div style={{ float: 'right', width: '49%' }}>
        {selectedMovieId ?
          <MovieDescription openingCrawl={movies[selectedMovieId].opening_crawl} />
          : <div>No Movie Selected</div>
        }
      </div>
    </div>
  );
}

export default App;
