import { render, screen } from '@testing-library/react';
import SearchBar from './searchBar';

test('renders Search Bar', () => {
    render(<SearchBar />);

    const linkElement = screen.getByPlaceholderText(/Search.../i);
    expect(linkElement).toBeInTheDocument();
});