import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  // Existing styles...
  hiddenMenuItem: {
    display: "none",
  },
  menuItem: {
    position: "fixed",
    right: "20px",
    top: "20px",
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
    },
  },
  notifications: {
    // Existing styles...
  },
  ul: {
    // Existing styles...
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(newProps) {
    return newProps.listNotifications.length > this.props.listNotifications.length ||
           newProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    return (
      <>
        <div
          className={css(styles.menuItem, this.props.displayDrawer ? styles.hiddenMenuItem : '')}
          onClick={this.props.handleDisplayDrawer} // Calls handleDisplayDrawer
        >
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer &&
          <div className={css(styles.notifications)}>
            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type='default' value="No new notification for now" />
              ) : (
                <>
                  <p>Here is the list of notifications</p>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </>
              )}
            </ul>
            <button
              style={{
                marginRight: '10px',
                backgroundColor: 'white',
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '3px',
                position: 'absolute',
                right: '30px',
                top: '15px',
              }}
              aria-label='close'
              onClick={this.props.handleHideDrawer} // Calls handleHideDrawer
            >
              <img width="10px" src={closeIcon} alt="close button"></img>
            </button>
          </div>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,  // Added PropType validation
  handleHideDrawer: PropTypes.func,  // Added PropType validation
};

export default Notifications;
