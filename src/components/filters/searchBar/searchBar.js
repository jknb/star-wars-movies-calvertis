const SearchBar = ({ searchBarInputChanged }) => {

    return (
        <>
            <span>🔍</span>
            <input type="search" placeholder="Search..." onChange={e => searchBarInputChanged(e.target.value)} />
        </>
    );
}

export default SearchBar;