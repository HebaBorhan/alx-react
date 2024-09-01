import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('contains the Notifications component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it('contains the Header component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it('contains the Login component', () => {
    const { getByLabelText } = render(<App />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('contains the Footer component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Copyright/i)).toBeInTheDocument();
  });
});
