import './starWarsPage.css';
import { useState } from 'react';
import Movies from '../movies/movies';
import MovieDescription from '../movies/movieDescription/movieDescription';
import NoMovieSelected from '../movies/movieDescription/noMovieSelected';
import SearchBar from '../filters/searchBar/searchBar';
import Loading from '../loading/loading';
import SortByButton from '../filters/sortBy/sortByButton/sortByButton';
import SortByMenu from '../filters/sortBy/sortByMenu/sortByMenu';
import { sortByTypes } from '../../constants/sortByConstants';
import Error from '../error/error';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';

const StarWarsPage = ({ movies, pending, error }) => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const [searchBarText, setSearchBarText] = useState('');
    const [sortedBy, setSortedBy] = useState(sortByTypes.year);
    const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);

    const toggleSortByMenu = () => {
        if (pending || error) {
            setIsSortByMenuOpen(false);
        } else {
            setIsSortByMenuOpen(!isSortByMenuOpen);
        }
    }

    const sortMovies = movies => {
        if (!sortedBy) return movies;
        if (sortedBy === sortByTypes.episode) {
            return sortByEpisode(movies);
        } else if (sortedBy === sortByTypes.year) {
            return sortByYear(movies);
        }
    };

    const filterMovies = (movie) => (!!searchBarText ? movie.title.toLowerCase().includes(searchBarText.toLowerCase()) : true);
    const sortByEpisode = (movies) => movies.slice().sort((a, b) => a.episode_id - b.episode_id);
    const sortByYear = (movies) => movies.slice().sort((a, b) => a.release_date.localeCompare(b.release_date));

    return (
        <>
            <Stack spacing={2} direction="row">
                <SortByButton sortByButtonClicked={toggleSortByMenu} />
                <SearchBar searchBarInputChanged={(inputValue) => setSearchBarText(inputValue)} />
            </Stack>

            {isSortByMenuOpen && <SortByMenu closeButtonMenuClicked={toggleSortByMenu} sortedBy={sortedBy} setSortedBy={setSortedBy} />}

            <Typography className="header" variant="h3" gutterBottom mt={4}>Star Wars</Typography>

            <div className="moviesContainer">
                <div className="movies">
                    {pending ?
                        <div className="loadingIcon">
                            <Loading />
                        </div>
                        :
                        <Stack spacing={2} direction="column">
                            <Movies
                                movies={sortMovies(movies.filter(filterMovies))}
                                movieClicked={(movie) => selectedMovie.episode_id === movie.episode_id ? setSelectedMovie({}) : setSelectedMovie(movie)}
                            />
                        </Stack>
                    }
                    {error && <Error />}
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="selectedMovie">
                    {selectedMovie.episode_id ?
                        <MovieDescription episodeId={selectedMovie.episode_id} title={selectedMovie.title} openingCrawl={selectedMovie.opening_crawl} />
                        : <NoMovieSelected />
                    }
                </div>
            </div>
        </>
    );

}

export default StarWarsPage;