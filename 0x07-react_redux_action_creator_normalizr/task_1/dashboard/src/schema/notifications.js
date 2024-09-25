import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalizedData = normalize(notificationsData, [notification]);

export const getNormalizedData = () => normalizedData;

export default function getAllNotificationsByUser(userId) {
  const { notifications } = normalizedData.entities;

  return Object.keys(notifications)
    .filter((id) => notifications[id].author === userId)
    .map((id) => notifications[id].context);
}