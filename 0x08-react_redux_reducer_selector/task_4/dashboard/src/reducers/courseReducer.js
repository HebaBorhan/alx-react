import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: {},
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = coursesNormalizer(action.data).entities.courses;
      
      // Add the `isSelected` field to each course
      const updatedCourses = Object.keys(normalizedCourses).reduce((acc, key) => {
        acc[key] = { ...normalizedCourses[key], isSelected: false };
        return acc;
      }, {});

      return state.merge({
        courses: fromJS(updatedCourses),
      });

    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
}
