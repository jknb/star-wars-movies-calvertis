import './sortByModal.css';
import { sortByTypes } from '../../../../constants/sortByConstants';

const SortByModal = ({ closeButtonModalClicked, sortMoviesBy }) => {
    return (
        <div className="modal">
            <div> Sort By </div>
            <span className="close" onClick={closeButtonModalClicked}>&times;</span>
            <div onClick={() => sortMoviesBy(sortByTypes.episode)}>Episode</div>
            <div onClick={() => sortMoviesBy(sortByTypes.year)}>Year</div>
        </div>
    );
}

export default SortByModal;