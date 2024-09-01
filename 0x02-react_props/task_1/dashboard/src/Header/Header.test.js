import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders an img and an h1 tag', () => {
    const { getByAltText, getByText } = render(<Header />);
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText('School dashboard')).toBeInTheDocument();
  });
});
