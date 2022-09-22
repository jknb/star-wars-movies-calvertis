import StarWarsPage from "./starWarsPage";
import { useEffect, useState } from "react";

const StarWarsPageContainer = () => {
    const [movies, setMovies] = useState([]);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            setPending(true);
            const res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setPending(false);

            setMovies(data.results);
        }
        fetchMovies().catch(error => setError(error));
    }, []);

    return (
        <StarWarsPage movies={movies} pending={pending} error={error} />
    );
};

export default StarWarsPageContainer;