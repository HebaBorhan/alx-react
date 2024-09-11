import { List } from 'immutable';

// Concatenate 2 arrays into an Immutable List
export function concatElements(page1, page2) {
  // Convert both arrays into Immutable Lists & concatenate them
  return List(page1).concat(List(page2));
}
