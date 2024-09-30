import { createSelector } from 'reselect';

// Get filter type
export const filterTypeSelected = (state) => state.get('filter');

// Get all notifications
export const getNotifications = (state) => state.getIn(['notifications', 'entities', 'notifications']);

// Get unread notifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => {
    return notifications.filter((notification) => !notification.get('isRead'));
  }
);
