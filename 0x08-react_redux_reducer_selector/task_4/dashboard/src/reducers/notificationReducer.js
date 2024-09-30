import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT,
});

// Reducer function
export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeIn(['notifications'], normalizedData.entities.notifications);

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
