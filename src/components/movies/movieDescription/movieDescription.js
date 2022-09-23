import { convertNumberToLatin } from "../../../utils/numberToLatin";

const MovieDescription = ({ episodeId, title, openingCrawl }) => (
    <>
        <h2>Episode {convertNumberToLatin(episodeId)} - {title}</h2>
        <div> {openingCrawl} </div>
    </>

);

export default MovieDescription;