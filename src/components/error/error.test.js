import { render, screen } from '@testing-library/react';
import Error from './error';

test('renders error message', () => {
    render(<Error />);

    const linkElement = screen.getByText(/An error occurred.../i);
    expect(linkElement).toBeInTheDocument();
});