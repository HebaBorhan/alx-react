import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('<Footer />', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  });

  test('does not display the "Contact us" link when the user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Contact us/)).not.toBeInTheDocument();
  });

  test('displays the "Contact us" link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Contact us/)).toBeInTheDocument();
  });
});
