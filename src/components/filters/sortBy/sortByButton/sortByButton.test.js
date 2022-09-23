import { render, screen } from '@testing-library/react';
import SortByButton from './sortByButton';

test('renders SortBy Button', () => {
    render(<SortByButton />);

    const linkElement = screen.getByText(/Sort By.../i);
    expect(linkElement).toBeInTheDocument();
});