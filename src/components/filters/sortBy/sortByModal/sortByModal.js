import './sortByModal.css';
import { sortByTypes } from '../../../../constants/sortByConstants';

const SortByModal = ({ closeButtonModalClicked, setMovieAttribute }) => {
    return (
        <div className="modal">
            <div> Sort By </div>
            <span className="close" onClick={closeButtonModalClicked}>&times;</span>
            <div onClick={() => setMovieAttribute(sortByTypes.episode)}>Episode</div>
            <div onClick={() => setMovieAttribute(sortByTypes.year)}>Year</div>
        </div>
    );
}

export default SortByModal;