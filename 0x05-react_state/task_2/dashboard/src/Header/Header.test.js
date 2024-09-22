import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { AppContext } from '../App/AppContext'; // Adjust the import based on your context file location

describe('<Header />', () => {
  const defaultUser = { email: '', password: '', isLoggedIn: false };
  const user = { email: 'test@example.com', password: 'password', isLoggedIn: true };

  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('does not display logout section when not logged in', () => {
    const { queryByTestId } = render(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Header />
      </AppContext.Provider>
    );
    expect(queryByTestId('logoutSection')).not.toBeInTheDocument();
  });

  it('displays logout section when logged in', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user }}>
        <Header />
      </AppContext.Provider>
    );
    expect(getByText(/welcome/i)).toBeInTheDocument();
  });

  it('calls logOut when logout link is clicked', () => {
    const logOut = jest.fn();
    const { getByText } = render(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    fireEvent.click(getByText(/logout/i));
    expect(logOut).toHaveBeenCalled();
  });
});
