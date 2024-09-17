import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('Notifications component renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders 3 NotificationItem components when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(3);
  });

  it('renders correct text when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const paragraphElement = screen.getByText('Here is the list of notifications');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders first NotificationItem with correct text', () => {
    render(<Notifications displayDrawer={true} />);
    const firstNotificationItem = screen.getByText(/New course available/i);
    expect(firstNotificationItem).toBeInTheDocument();
  });

  it('hides Notifications content when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText('Here is the list of notifications')).toBeNull();
  });

  it('shows Notifications content when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('renders menuItem div', () => {
    render(<Notifications />);
    const menuItemDiv = screen.getByText('Your notifications');
    expect(menuItemDiv).toBeInTheDocument();
  });
});
