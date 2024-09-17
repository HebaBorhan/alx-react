import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('Notifications component renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders 3 NotificationItem components', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(3);
  });

  it('renders correct text', () => {
    render(<Notifications displayDrawer={true} />);
    const paragraphElement = screen.getByText('Here is the list of notifications');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders first NotificationItem properly', () => {
    render(<Notifications displayDrawer={true} />);
    // Use a regex to match the text with any leading/trailing characters
    const firstNotificationItem = screen.getByText(/New course available/i);
    expect(firstNotificationItem).toBeInTheDocument();
  });

  it('hides Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText('Here is the list of notifications')).toBeNull();
  });

  it('shows Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });
});
