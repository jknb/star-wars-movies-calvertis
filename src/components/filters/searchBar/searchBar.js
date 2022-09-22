import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';

const SearchBar = ({ searchBarInputChanged }) => (
    <TextField
        className="searchField"
        type="search"
        placeholder="Search..."
        onChange={e => searchBarInputChanged(e.target.value)}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
    />
);

export default SearchBar;