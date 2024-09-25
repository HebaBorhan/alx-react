import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// selecting a course
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

// unselecting a course
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
