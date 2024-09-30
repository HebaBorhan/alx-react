import { normalize, schema } from 'normalizr';
import * as notificationObjects from '../../notifications.json';

// Define schemas
const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

// Normalize notificationObjects for default data
const normalizedData = normalize(notificationObjects.default, [notification]);

// Normalize passed data (used in reducers)
export const notificationsNormalizer = (data) => normalize(data, [notification]);

// Function to get notifications by user
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  return Object.values(notifications)
    .filter(notification => notification.author === userId)
    .map(notification => messages[notification.context]);
};

export { normalizedData };
