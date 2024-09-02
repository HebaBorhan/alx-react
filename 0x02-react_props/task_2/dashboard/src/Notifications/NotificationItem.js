import React from 'react';

function NotificationItem({ type, html, value }) {
    return (
        <li data={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}

export default NotificationItem;
