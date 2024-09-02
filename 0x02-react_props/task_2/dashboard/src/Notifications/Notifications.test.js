import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const { container } = render(<Notifications />);
    const notificationItems = container.querySelectorAll('li');
    expect(notificationItems.length).toBe(3);
  });

  it('renders the first NotificationItem with correct html', () => {
    const { getByText } = render(<Notifications />);
    const firstNotification = getByText('New course available');
    expect(firstNotification).toBeTruthy();
  });
});
