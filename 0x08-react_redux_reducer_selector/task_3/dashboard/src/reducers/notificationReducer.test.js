import notificationReducer, { initialState } from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the correct state', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" },
            ],
        };

        const expectedState = {
            filter: NotificationTypeFilters.DEFAULT,
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ and mark the correct notification as read', () => {
        const initialState = {
            filter: NotificationTypeFilters.DEFAULT,
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const action = { type: MARK_AS_READ, index: 2 };

        const expectedState = {
            filter: NotificationTypeFilters.DEFAULT,
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: true, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        };

        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER and change the filter correctly', () => {
        const action = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };

        const expectedState = {
            filter: NotificationTypeFilters.URGENT,
            notifications: [],
        };

        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
