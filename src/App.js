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
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
      {
        // TODO: Use flex to make it responsive
      }
      <div style={{ float: 'left', width: '49%' }}>
        <Movies
          movies={movies}
          clicked={(movieId) => selectedMovieId === movieId ? setSelectedMovieId(null) : setSelectedMovieId(movieId)}
        />
      </div>
      {
        // TODO: Implement movieDescription component 
      }
      <div style={{ float: 'right', width: '49%' }}>
        {selectedMovieId ?
          <MovieDescription episodeId={selectedMovieId} title={movies[selectedMovieId - 1].title} openingCrawl={movies[selectedMovieId - 1].opening_crawl} />
          : <div>No Movie Selected</div>
        }
      </div>
    </div>
  );
}

export default App;
