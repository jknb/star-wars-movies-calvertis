import { render, screen } from '@testing-library/react';
import StarWarsPage from './starWarsPage';

test('renders StarWarsPage', () => {
    render(<StarWarsPage movies={[]} />);

    const linkElement = screen.getByText(/Star Wars/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Search Bar', () => {
    render(<StarWarsPage movies={[]} />);

    const linkElement = screen.getByPlaceholderText(/Search.../i);
    expect(linkElement).toBeInTheDocument();
});

test('renders SortBy Button', () => {
    render(<StarWarsPage movies={[]} />);

    const linkElement = screen.getByText(/Sort By.../i);
    expect(linkElement).toBeInTheDocument();
});

test('renders initial message of "No Movie Selected"', () => {
    render(<StarWarsPage movies={[]} />);

    const linkElement = screen.getByText(/No Movie Selected/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders error message', () => {
    render(<StarWarsPage movies={[]} error={true} />);

    const linkElement = screen.getByText(/An error occurred.../i);
    expect(linkElement).toBeInTheDocument();
});

