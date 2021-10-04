import React from 'react';
import { render, screen } from '../../../node_modules/@testing-library/react';
import EventForm from './EventForm';

test('renders learn react link', () => {
  render(<EventForm />);
  const linkElement = screen.getByText(/Events/i);
  expect(linkElement).toBeInTheDocument();
});
