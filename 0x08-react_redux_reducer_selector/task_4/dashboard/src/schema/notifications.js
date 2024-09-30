import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(notificationsData, [notification]);

// Export normalized data for use elsewhere
export const getNormalizedData = () => normalizedData;

/**
 * Retrieves all notifications by a specific userId
 * @param {string} userId - The ID of the user whose notifications are needed
 * @returns {Array} - Array of message objects associated with the user's notifications
 */
export default function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  
  // Filter notifications by the userId and map them to the corresponding messages
  const userNotifications = Object.values(notifications).filter(
    (notification) => notification.author === userId
  ).map((notification) => messages[notification.context]);

  return userNotifications;
}
