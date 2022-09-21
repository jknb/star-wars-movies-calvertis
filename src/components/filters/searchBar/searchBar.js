const SearchBar = ({ searchBarInputChanged }) => {

    return (
        <>
            <span>🔍</span>
            <input type="text" placeholder="Search..." onChange={e => searchBarInputChanged(e.target.value)} />
        </>

    );
}

export default SearchBar;