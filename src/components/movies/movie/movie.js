import { convertNumberToLatin } from "../../../utils/numberToLatin";

const Movie = ({ episodeId, title, releaseDate, movieClicked }) => {
    return (
        <div
            className="movie"
            style={{ display: 'flex', justifyContent: 'space-between' }}
            onClick={movieClicked}
        >
            <div>EPISODE {episodeId}</div>
            <div >Episode {convertNumberToLatin(episodeId)} - {title}</div>
            <div>{releaseDate}</div>
        </div>
    );
}

export default Movie;