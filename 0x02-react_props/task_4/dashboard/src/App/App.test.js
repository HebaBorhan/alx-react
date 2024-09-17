import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    render(<App />);
    expect(screen.queryByText(/Available courses/i)).toBeNull();
  });

  it('displays CourseList and hides Login when isLoggedIn is true', () => {
    // Render App with isLoggedIn set to true
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [true, jest.fn()]);
    render(<App />);

    // Check CourseList is displayed
    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();

    // Check Login is not displayed
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/password/i)).toBeNull();
  });

  it('contains the Notifications component', () => {
    render(<App />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it('contains the Header component', () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it('contains the Login component', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('contains the Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
