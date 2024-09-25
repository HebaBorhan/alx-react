import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../App/AppContext';
import { user as defaultUser, logOut as defaultLogOut } from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header/>', () => {
  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('renders logo and title', () => {
    render(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByAltText(/holberton school logo/i)).toBeInTheDocument();
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  it('does not render logout section when user is not logged in', () => {
    render(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('logoutSection')).not.toBeInTheDocument();
  });

  it('renders logout section when user is logged in', () => {
    const loggedInUser = { email: 'test', password: 'test', isLoggedIn: true };
    
    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    
    expect(screen.getByTestId('logoutSection')).toBeInTheDocument();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('calls logOut when the logout span is clicked', () => {
    const logOutMock = jest.fn();
    const loggedInUser = { email: 'test', password: 'test', isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSpan = screen.getByText(/\(logout\)/i);
    fireEvent.click(logoutSpan);
    expect(logOutMock).toHaveBeenCalledTimes(1);

    jest.restoreAllMocks();
  });
});
