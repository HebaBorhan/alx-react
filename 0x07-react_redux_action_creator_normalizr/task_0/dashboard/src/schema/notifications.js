// Import notifications data
import * as notificationsData from '../notifications.json';

/**
 * Get all notifications by specific userId
 * @param {string} userId - id of the author (user)
 * @returns {Array} - Array of notifications where author id matches userId.
 */
export default function getAllNotificationsByUser(userId) {
  // filter notifications by userId
  return notificationsData.default.filter((notification) => notification.author.id === userId);
}
