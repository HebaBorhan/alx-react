export default function accessImmutableObject (object, array) {
  return array.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, object);
}
