import './starWarsPage.css';
import { useState, useEffect } from 'react';
import Movies from '../movies/movies';
import MovieDescription from '../movies/movieDescription/movieDescription';
import SearchBar from '../filters/searchBar/searchBar';
import Loading from '../loading/loading';
import SortByButton from '../filters/sortBy/sortByButton/sortByButton';
import SortByModal from '../filters/sortBy/sortByModal/sortByModal';
import { sortByTypes } from '../../constants/sortByConstants';
import Error from '../error/error';

const StarWarsPage = ({ movies, pending, error }) => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const [searchBarText, setSearchBarText] = useState('');
    const [movieAttribute, setMovieAttribute] = useState(null);
    const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);

    const toggleSortByModal = () => setIsSortByModalOpen(!isSortByModalOpen);

    const sortMovies = movies => {
        if (!movieAttribute) return movies;
        if (movieAttribute === sortByTypes.episode) {
            return sortByEpisode(movies);
        } else if (movieAttribute === sortByTypes.year) {
            return sortByYear(movies);
        }
    };

    const filterMovies = (movie) => (!!searchBarText ? movie.title.toLowerCase().includes(searchBarText.toLowerCase()) : true);

    const sortByEpisode = (movies) => movies.slice().sort((a, b) => a.episode_id - b.episode_id);

    const sortByYear = (movies) => movies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date));

    return (
        <>
            {
                // TODO: Use flex to make it responsive
            }
            <div className="filtersArea">
                <SortByButton sortByButtonClicked={toggleSortByModal} />
                {isSortByModalOpen ?
                    <SortByModal closeButtonModalClicked={toggleSortByModal} setMovieAttribute={setMovieAttribute} />
                    : null
                }
                <SearchBar searchBarInputChanged={(inputValue) => setSearchBarText(inputValue)} />
            </div>

            <div className="moviesContainer">
                <div className="movies">
                    {error ?
                        <Error />
                        :
                        pending ?
                            <Loading />
                            :
                            <Movies
                                movies={sortMovies(movies.filter(filterMovies))}
                                movieClicked={(movie) => selectedMovie.episode_id === movie.episode_id ? setSelectedMovie({}) : setSelectedMovie(movie)}
                            />
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
        </>
    );

}

export default StarWarsPage;