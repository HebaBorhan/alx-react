import { List } from 'immutable';

// Concatenate 2 arrays into an Immutable List
export function concatElements(page1, page2) {
  // Convert both arrays into Immutable Lists & concatenate them
  return List(page1).concat(List(page2));
}

// Merge 2 objects into an Immutable List
export function mergeElements(page1, page2) {
  // Convert both objects into Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.merge(map2);
}
