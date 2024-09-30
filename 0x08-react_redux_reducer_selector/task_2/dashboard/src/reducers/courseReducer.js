import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Initial state for the course reducer is an empty array
export const initialState = [];

// Reducer function to handle course actions
export default function courseReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            // When fetching courses, ensure each course has isSelected set to false
            return action.data.map(course => ({
                ...course,
                isSelected: false,
            }));

        case SELECT_COURSE:
            // Set isSelected to true for the course with the matching id
            return state.map(course =>
                course.id === action.index
                    ? { ...course, isSelected: true }
                    : course
            );

        case UNSELECT_COURSE:
            // Set isSelected to false for the course with the matching id
            return state.map(course =>
                course.id === action.index
                    ? { ...course, isSelected: false }
                    : course
            );

        default:
            return state;
    }
}
