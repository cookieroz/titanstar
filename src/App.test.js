import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders TitanStar Legends title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TitanStar Legends/i);
  expect(linkElement).toBeInTheDocument();
});
