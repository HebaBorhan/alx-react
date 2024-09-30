import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from '../actions/notificationActionTypes';
  import { fromJS } from 'immutable';
  import { notificationsNormalizer } from '../schema/notifications';
  
  const initialState = fromJS({
    notifications: {},
    filter: NotificationTypeFilters.DEFAULT,
  });
  
  const notificationReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS: {
        // Ensure that notifications have the `isRead` field set to false
        const notificationList = action.data.map(notification => ({
          ...notification,
          isRead: false,
        }));
        const normalizedData = notificationsNormalizer(notificationList);
        return state.mergeDeep({
          notifications: fromJS(normalizedData.entities.notifications),
        });
      }
  
      case MARK_AS_READ: {
        return state.setIn(
          ['notifications', String(action.index), 'isRead'],
          true
        );
      }
  
      case SET_TYPE_FILTER: {
        return state.set('filter', action.filter);
      }
  
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  