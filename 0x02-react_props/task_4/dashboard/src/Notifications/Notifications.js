import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer = false }) => {
  console.log('displayDrawer:', displayDrawer);
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && 
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="&#8226; New course available" />
            <NotificationItem type="urgent" value="&#8226; New resume available" />
            <NotificationItem type="urgent" html={{ __html: `&#8226; ${getLatestNotification()}` }} />
          </ul>
          <button
            aria-label='close'
            onClick={() => { console.log("Close button has been clicked") }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'transparent',
            }}
          >
            <img 
              src={closeIcon} 
              alt="Close Icon"
              style={{ width: '25px', height: '20px' }}
            />
          </button>
        </div>
      }
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notifications;
