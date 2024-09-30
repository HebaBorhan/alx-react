import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Binding action creators
export const bindNotificationActions = (dispatch) =>
  bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);
