import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Binding action creators
export const bindCourseActions = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
