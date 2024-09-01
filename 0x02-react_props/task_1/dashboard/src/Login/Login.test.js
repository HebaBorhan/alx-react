import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const { getAllByLabelText, getAllByRole } = render(<Login />);
    expect(getAllByLabelText(/email/i).length).toBe(1); // For email label
    expect(getAllByLabelText(/password/i).length).toBe(1); // For password label
    expect(getAllByRole('textbox').length).toBe(1); // Email input
    expect(getAllByLabelText(/password/i).length).toBe(1); // Password input
  });
});
