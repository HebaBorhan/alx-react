import React, { PureComponent, Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";


class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        {listNotifications.length === 0 ? (
          <p>No new notifications for now</p>
        ) : (
          <ul>
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                markAsRead={() => markNotificationAsRead(notification.id)}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
