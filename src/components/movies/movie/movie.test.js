import { render, screen } from '@testing-library/react';
import Movie from './movie';

test('renders Movie "EPISODE #"', () => {
    render(<Movie episodeId={1} />);

    const linkElement = screen.getByText(/EPISODE 1/i);
    expect(linkElement).toBeInTheDocument();

});

test('renders Movie "Episode #(Latin)"', () => {
    render(<Movie episodeId={4} />);

    const linkElement = screen.getByText(/EPISODE IV/i);
    expect(linkElement).toBeInTheDocument();
});