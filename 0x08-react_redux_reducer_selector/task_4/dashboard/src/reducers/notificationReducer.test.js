import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

describe('notificationReducer test', () => {
  it("returns default state when action object isn't passed", () => {
    const returnedState = notificationReducer();
    const defaultState = fromJS({
      notifications: {},
      filter: NotificationTypeFilters.DEFAULT,
    });
    expect(returnedState).toEqual(defaultState);
  });

  it('handles FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    };

    const expectedState = fromJS({
      notifications: {
        1: { id: 1, type: "default", value: "New course available", isRead: false },
        2: { id: 2, type: "urgent", value: "New resume available", isRead: false },
        3: { id: 3, type: "urgent", value: "New data available", isRead: false }
      },
      filter: NotificationTypeFilters.DEFAULT,
    });

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it('handles SET_TYPE_FILTER', () => {
    const initialState = fromJS({
      notifications: {
        1: { id: 1, type: "default", value: "New course available", isRead: false },
        2: { id: 2, type: "urgent", value: "New resume available", isRead: false },
        3: { id: 3, type: "urgent", value: "New data available", isRead: false }
      },
      filter: NotificationTypeFilters.DEFAULT,
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };

    const newState = notificationReducer(initialState, action);
    expect(newState.get('filter')).toEqual(NotificationTypeFilters.URGENT);
  });
});
