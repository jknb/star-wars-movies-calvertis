import Button from '@mui/material/Button';

const SortByButton = ({ sortByButtonClicked }) => {
    return (
        <Button size="small" variant="outlined" onClick={sortByButtonClicked}>Sort By...</Button>
    );
}

export default SortByButton;