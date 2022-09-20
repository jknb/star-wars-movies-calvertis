import { convertNumberToLatin } from "../../../utils/numberToLatin";

const Movie = ({ episodeId, title, releaseDate, clicked }) => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            onClick={() => clicked(episodeId)}
        >
            <div>EPISODE {episodeId}</div>
            <div >Episode {convertNumberToLatin(episodeId)} - {title}</div>
            <div>{releaseDate}</div>
        </div>
    );
}

export default Movie;