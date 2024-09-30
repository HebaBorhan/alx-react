import fetchMock from 'fetch-mock';  // For mocking fetch API requests
import configureMockStore from 'redux-mock-store';  // Correctly import redux-mock-store
import thunk from 'redux-thunk';  // Thunk middleware
import {
  loginRequest,
  login,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';  // Your action creators

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);  // Correctly configure store with middleware

describe('Async Action Creators Test', () => {
  afterEach(() => {
    fetchMock.restore();  // Restore fetchMock after each test
  });

  it('loginRequest dispatches correct actions on success', () => {
    const store = mockStore({});  // Initialize store with empty state

    // Mock a successful fetch request
    fetchMock.getOnce('/login-success.json', {
      status: 200,
    });

    return store.dispatch(loginRequest('email@example.com', 'password')).then(() => {
      const actions = store.getActions();  // Get all dispatched actions
      expect(actions[0]).toEqual(login('email@example.com', 'password'));  // First action is login
      expect(actions[1]).toEqual(loginSuccess());  // Second action is loginSuccess
    });
  });

  it('loginRequest dispatches correct actions on failure', () => {
    const store = mockStore({});  // Initialize store with empty state

    // Mock a failed fetch request
    fetchMock.getOnce('/login-success.json', {
      status: 404,  // Simulate failure with a 404 response
    });

    return store.dispatch(loginRequest('email@example.com', 'password')).then(() => {
      const actions = store.getActions();  // Get all dispatched actions
      expect(actions[0]).toEqual(login('email@example.com', 'password'));  // First action is login
      expect(actions[1]).toEqual(loginFailure());  // Second action is loginFailure
    });
  });
});
