import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Events/i);
  expect(linkElement).toBeInTheDocument();
});
