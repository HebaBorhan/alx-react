import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('default displayDrawer state is false', () => {
    const { queryByText } = render(<App />);
    const notification = queryByText('Your notifications');
    expect(notification).not.toBeInTheDocument();
  });

  it('displayDrawer is true after calling handleDisplayDrawer', () => {
    const { getByText, queryByText } = render(<App />);
    const notificationButton = getByText('Your notifications');
    
    // Simulate displaying the drawer
    fireEvent.click(notificationButton);
    const drawer = queryByText('Close');
    expect(drawer).toBeInTheDocument();
  });

  it('displayDrawer is false after calling handleHideDrawer', () => {
    const { getByText, queryByText } = render(<App />);
    const notificationButton = getByText('Your notifications');
    
    // Open the drawer
    fireEvent.click(notificationButton);
    
    // Close the drawer
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
    
    expect(queryByText('Close')).not.toBeInTheDocument();
  });
});

describe('when isLoggedIn is true', () => {
  // Assuming you want to add tests for logged-in state
  it('renders the Login component when isLoggedIn is false', () => {
    const { getByText } = render(<App />);
    expect(getByText('Login to access the full dashboard')).toBeInTheDocument();
  });

  it('renders the CourseList component when isLoggedIn is true', () => {
    // Implement logic to set isLoggedIn to true, this could involve mocking state
  });
});

describe("Test <App /> with logOut function", () => {
  // Add tests for logout functionality here
});
