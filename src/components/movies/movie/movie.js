import { convertNumberToLatin } from "../../../utils/numberToLatin";
import './movie.css';

const Movie = ({ episodeId, title, releaseDate, movieClicked }) => (
    <div
        className="movie"
        onClick={movieClicked}
    >
        <div>EPISODE {episodeId}</div>
        <div >Episode {convertNumberToLatin(episodeId)} - {title}</div>
        <div>{releaseDate}</div>
    </div>
);

export default Movie;