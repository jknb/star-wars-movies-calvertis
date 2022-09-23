import { render, screen } from '@testing-library/react';
import StarWarsPageContainer from './components/starWarsPage/starWarsPageContainer';

test('renders StarWarsPageContainer', () => {
  render(<StarWarsPageContainer />);
  const linkElement = screen.getByText(/star wars/i);
  expect(linkElement).toBeInTheDocument();
});
