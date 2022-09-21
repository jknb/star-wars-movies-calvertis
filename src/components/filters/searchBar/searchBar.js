const SearchBar = ({ changed }) => {

    return (
        <>
            <span>🔍</span>
            <input type="text" placeholder="Search..." onChange={(e) => changed(e.target.value)} />
        </>

    );
}

export default SearchBar;