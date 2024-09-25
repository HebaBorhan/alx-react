import * as notificationsData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    const { default: notifications } = notificationsData;

    // Only return the context part of the notifications
    return notifications
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}