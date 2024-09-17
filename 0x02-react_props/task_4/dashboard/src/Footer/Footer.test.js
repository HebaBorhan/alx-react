import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Copyright/i)).toBeInTheDocument();
  });
});
