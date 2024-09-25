import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  test('displays the correct list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];

    const markNotificationAsRead = jest.fn();
    const { getByText } = render(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    expect(getByText(/new course available/i)).toBeInTheDocument();
  });

  test('calls markNotificationAsRead when a notification is clicked', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];

    const markNotificationAsRead = jest.fn();
    const { getByText } = render(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    fireEvent.click(getByText(/new course available/i));
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
