import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications component renders without crashing', () => {
        render(<Notifications />);
    });

    it('renders 3 NotificationItem components', () => {
        render(<Notifications />);
        const notificationItems = screen.getAllByRole('listitem');
        expect(notificationItems.length).toBe(3);
    });

    it('renders correct text', () => {
        render(<Notifications />);
        const paragraphElement = screen.getByText('Here is the list of notifications');
        expect(paragraphElement).toBeInTheDocument();
    });

    it('renders first NotificationItem properly', () => {
        render(<Notifications />);
        // Use a regex to match the text with any leading/trailing characters
        const firstNotificationItem = screen.getByText(/New course available/i);
        expect(firstNotificationItem).toBeInTheDocument();
    });
});
