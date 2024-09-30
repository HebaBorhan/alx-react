import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

// Define the initial state used in the reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to true', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to false', () => {
    const modifiedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(modifiedState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS by setting isUserLoggedIn to true', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE by setting isUserLoggedIn to false even if it was true initially', () => {
    const modifiedState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(modifiedState, { type: LOGIN_FAILURE });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT by setting isUserLoggedIn to false', () => {
    const modifiedState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(modifiedState, { type: LOGOUT });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });
});
