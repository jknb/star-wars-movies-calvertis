import { render, screen } from '@testing-library/react';
import SortByMenu from './sortByMenu';

test('renders SortBy Menu', () => {
    render(<SortByMenu />);

    const linkElement = screen.getByText(/Episode/i);
    expect(linkElement).toBeInTheDocument();
});