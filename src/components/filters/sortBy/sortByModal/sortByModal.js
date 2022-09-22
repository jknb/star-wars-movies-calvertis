import './sortByModal.css';
import { sortByTypes } from '../../../../constants/sortByConstants';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

const SortByModal = ({ closeButtonModalClicked, setMovieAttribute }) => {
    const [sortBy, setSortBy] = useState(sortByTypes.year);

    const handleSortBy = (event, newSortBy) => {
        if (newSortBy !== null) {
            setSortBy(newSortBy);
        }
    };

    return (
        <div className="modal">
            <div> Sort By </div>
            <span className="close" onClick={closeButtonModalClicked}>&times;</span>
            <ToggleButtonGroup value={sortBy} exclusive onChange={handleSortBy} orientation="vertical" aria-label="sortby button" variant="text">
                <ToggleButton size="small" value={sortByTypes.episode} onClick={() => setMovieAttribute(sortByTypes.episode)}>Episode</ToggleButton>
                <ToggleButton size="small" value={sortByTypes.year} onClick={() => setMovieAttribute(sortByTypes.year)}>Year</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default SortByModal;