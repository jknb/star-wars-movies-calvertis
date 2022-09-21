import magnifyingGlass from '../../../assets/magnifying-glass-solid.svg';

const SearchBar = ({ searchBarInputChanged }) => {

    return (
        <input style={{
            backgroundImage: `url(${magnifyingGlass})`,
            backgroundRepeat: 'no-repeat',
            textIndent: '16px'
        }}
            type="search"
            placeholder="Search..."
            onChange={e => searchBarInputChanged(e.target.value)}
        />

    );
}

export default SearchBar;