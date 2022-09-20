const Movie = ({ episodeId, title, releaseDate }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>EPISODE {episodeId}</div>
            <div>{title}</div>
            <div>{releaseDate}</div>
        </div>
    );
}

export default Movie;