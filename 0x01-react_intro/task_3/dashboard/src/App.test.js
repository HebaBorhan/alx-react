import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  render(<App />);
  const headerDiv = screen.getByRole('banner');
  expect(headerDiv).toHaveClass('App-header');
});

test('App renders a div with the class App-body', () => {
  render(<App />);
  const bodyDiv = screen.getByText(/Login to access the full dashboard/i).closest('div');
  expect(bodyDiv).toHaveClass('App-body');
});

test('App renders a div with the class App-footer', () => {
  render(<App />);
  const footerDiv = screen.getByText(/Copyright/i).closest('div');
  expect(footerDiv).toHaveClass('App-footer');
});
