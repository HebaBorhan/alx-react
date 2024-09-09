import { Map } from 'immutable';

export default function accessImmutableObject(object, path) {
  let currentValue = object;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (currentValue instanceof Map) {
      currentValue = currentValue.get(key);
    } else {
      currentValue = currentValue[key];
    }
    if (currentValue === undefined) {
      return undefined;
    }
  }
  return currentValue;
}