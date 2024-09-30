import courseReducer, { initialState } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ],
    };
    const state = courseReducer(initialState, action);

    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
  });

  it('should handle SELECT_COURSE and mark the course as selected', () => {
    const action = { type: SELECT_COURSE, index: 2 };
    const state = courseReducer(fromJS({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: false },
        3: { id: 3, isSelected: false }
      }
    }), action);

    expect(state.toJS().courses[2].isSelected).toEqual(true);
  });

  it('should handle UNSELECT_COURSE and mark the course as unselected', () => {
    const action = { type: UNSELECT_COURSE, index: 2 };
    const state = courseReducer(fromJS({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: true },
        3: { id: 3, isSelected: false }
      }
    }), action);

    expect(state.toJS().courses[2].isSelected).toEqual(false);
  });
});
