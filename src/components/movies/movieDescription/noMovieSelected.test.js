import { render, screen } from '@testing-library/react';
import NoMovieSelected from './noMovieSelected';

test('renders NoMovieSelected', () => {
    render(<NoMovieSelected />);

    const linkElement = screen.getByText(/no movie selected/i);
    expect(linkElement).toBeInTheDocument();
});