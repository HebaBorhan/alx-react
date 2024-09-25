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

// Updated function without Object.keys or multiple loops
export default function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const result = [];

  for (let id in notifications) {
    if (notifications[id].author === userId) {
      result.push(messages[notifications[id].context]);
    }
  }

  return result;
}
