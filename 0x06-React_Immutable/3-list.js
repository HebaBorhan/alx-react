import { List } from 'immutable';

// Convert array to an immutable List
export function getListObject (array) {
  return List(array);
}

// Add an element to an immutable List
export function addElementToList (list, element) {
  return list.push(element);
}