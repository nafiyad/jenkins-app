import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jenkins App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/This is my Jenkins App/i);
  expect(headingElement).toBeInTheDocument();
});
