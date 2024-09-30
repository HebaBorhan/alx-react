import { fromJS } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

// Mock the initial state using Immutable.js
const initialState = fromJS({
  courses: {},
});

// Test the course reducer
describe('courseReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
