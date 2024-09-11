export default function accessImmutableObject(object, array) {
  let result = object;

  for (let i = 0; i < array.length; i++) {
    if (result[array[i]] === undefined) {
      return undefined;
    }
    result = result[array[i]];
  }

  return result;
}
