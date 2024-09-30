import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationSelector tests', () => {
  let state;

  beforeEach(() => {
    state = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        entities: Map({
          notifications: Map({
            1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
            2: Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
            3: Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' })
          })
        })
      })
    });
  });

  it('should return the correct filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toBe(NotificationTypeFilters.DEFAULT);
  });

  it('should return all notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications.size).toBe(3);
    expect(notifications.get('1').get('value')).toBe('New course available');
    expect(notifications.get('2').get('isRead')).toBe(true);
    expect(notifications.get('3').get('type')).toBe('urgent');
  });

  it('should return unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.size).toBe(2);
    expect(unreadNotifications.has('1')).toBe(true);
    expect(unreadNotifications.has('3')).toBe(true);
    expect(unreadNotifications.has('2')).toBe(false);
  });
});
