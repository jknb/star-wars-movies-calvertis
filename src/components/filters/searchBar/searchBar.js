const SearchBar = ({ changed, clicked }) => {

    return (
        <>
            <span>🔍</span>
            <input type="text" placeholder="Search..." onClick={e => clicked(e.target.value)} onChange={e => changed(e.target.value)} />
        </>

    );
}

export default SearchBar;