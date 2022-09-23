import { render, screen } from '@testing-library/react';
import MovieDescription from './movieDescription';

test('renders Movie Description', () => {
    render(<MovieDescription />);

    const linkElement = screen.getByText(/Episode/i);
    expect(linkElement).toBeInTheDocument();
});