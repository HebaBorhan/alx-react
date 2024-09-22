import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user as defaultUser } from './AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('renders the entire App component without crashing', () => {
    render(<App />);
  });

  it('renders a Notifications component', () => {
    render(<App />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  it('renders a Login component', () => {
    render(<App />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  it('renders a Footer component', () => {
    render(<App />);
    expect(screen.getByText(/holberton school/i)).toBeInTheDocument();
  });

  it('renders a Header component', () => {
    render(<App />);
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  it('does not render the CourseList component when not logged in', () => {
    render(<App />);
    expect(screen.queryByText(/course list/i)).not.toBeInTheDocument();
  });
});

describe('when isLoggedIn is true', () => {
  const loggedInUser = { email: 'test@example.com', password: 'password', isLoggedIn: true };

  it('does not render the Login component', () => {
    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/log in to continue/i)).not.toBeInTheDocument();
  });

  it('renders the CourseList component', () => {
    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
  });
});

describe('Test <App /> with logOut function', () => {
  it('calls the logOut function and displays the alert when ctrl+h is pressed', () => {
    const alertMock = jest.spyOn(global, 'alert').mockImplementation(() => {});
    const logOut = jest.fn();

    render(
      <AppContext.Provider value={{ user: { ...defaultUser, isLoggedIn: true }, logOut }}>
        <App />
      </AppContext.Provider>
    );

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
      document.dispatchEvent(event);
    });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();
    alertMock.mockRestore();
  });
});

describe('Test State of <App />', () => {
  it('checks initial displayDrawer state and changes after handleDisplayDrawer and handleHideDrawer are called', () => {
    const { container } = render(<App />);

    const component = container.firstChild;
    // Initial state check
    expect(component.displayDrawer).toBe(false);

    // Simulate opening drawer
    act(() => {
      component.handleDisplayDrawer();
    });
    expect(component.displayDrawer).toBe(true);

    // Simulate hiding drawer
    act(() => {
      component.handleHideDrawer();
    });
    expect(component.displayDrawer).toBe(false);
  });

  it('checks logIn changes user state', () => {
    const { container } = render(<App />);
    const appInstance = container.firstChild;

    act(() => {
      appInstance.logIn('test@example.com', 'password');
    });

    expect(appInstance.user).toEqual({ email: 'test@example.com', password: 'password', isLoggedIn: true });
  });

  it('checks logOut resets user state', () => {
    const { container } = render(<App />);
    const appInstance = container.firstChild;

    act(() => {
      appInstance.setState({ user: { email: 'test@example.com', password: 'password', isLoggedIn: true } });
    });

    act(() => {
      appInstance.logOut();
    });

    expect(appInstance.user).toEqual({ email: '', password: '', isLoggedIn: false });
  });
});
