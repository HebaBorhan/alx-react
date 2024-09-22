import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { AppContext } from './AppContext'; // Adjust the import based on your context file location
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  const defaultUser = { email: '', password: '', isLoggedIn: false };
  const user = { email: 'test@example.com', password: 'password', isLoggedIn: true };

  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <App />
      </AppContext.Provider>
    );
  });

  it('displays notifications drawer correctly', () => {
    const { getByText, queryByText } = render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <App />
      </AppContext.Provider>
    );

    const notificationButton = getByText('Your notifications');
    fireEvent.click(notificationButton);
    expect(queryByText('Close')).toBeInTheDocument();

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
    expect(queryByText('Close')).not.toBeInTheDocument();
  });

  it('renders Login component when not logged in', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <App />
      </AppContext.Provider>
    );
    expect(getByText('Login to access the full dashboard')).toBeInTheDocument();
  });

  it('renders CourseList component when logged in', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user }}>
        <App />
      </AppContext.Provider>
    );
    expect(getByText('Course list')).toBeInTheDocument();
  });

  it('updates state correctly when logIn is called', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <App />
      </AppContext.Provider>
    );

    // Simulate logging in (you'll need to implement the login functionality)
  });

  it('updates state correctly when logOut is called', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user }}>
        <App />
      </AppContext.Provider>
    );

    // Simulate logging out (you'll need to implement the logout functionality)
  });
});
