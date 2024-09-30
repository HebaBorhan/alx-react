import { Map } from 'immutable';
import uiReducer, { initialState } from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState.toJS());
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state.toJS()).toEqual(initialState.toJS());
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to true', () => {
        const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: true,
        });
    });

    it('should handle HIDE_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to false', () => {
        const modifiedState = initialState.set('isNotificationDrawerVisible', true);
        const state = uiReducer(modifiedState, { type: HIDE_NOTIFICATION_DRAWER });
        expect(state.toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: false,
        });
    });

    it('should handle LOGIN_SUCCESS by setting isUserLoggedIn to true', () => {
        const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
        expect(state.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: true,
        });
    });

    it('should handle LOGIN_FAILURE by setting isUserLoggedIn to false', () => {
        const modifiedState = initialState.set('isUserLoggedIn', true);
        const state = uiReducer(modifiedState, { type: LOGIN_FAILURE });
        expect(state.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: false,
        });
    });

    it('should handle LOGOUT by setting isUserLoggedIn to false', () => {
        const modifiedState = initialState.set('isUserLoggedIn', true);
        const state = uiReducer(modifiedState, { type: LOGOUT });
        expect(state.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: false,
        });
    });
});
