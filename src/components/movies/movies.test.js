import { render, screen } from '@testing-library/react';
import Movies from './movies';

test('renders Movies', () => {
    const movies = [
        {
            episode_id: 1,
            title: 'Movie 1',
            release_date: null,
        },
    ];
    render(<Movies movies={movies} />);

    const linkElement = screen.getByText(/Movie 1/i);
    expect(linkElement).toBeInTheDocument();
});