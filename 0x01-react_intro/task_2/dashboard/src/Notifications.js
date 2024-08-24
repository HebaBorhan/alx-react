import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>

      <button
        aria-label='close' onClick={() => { console.log("Close button has been clicked") }}
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
        style={{ width: '25px', height: '20px' }}></img>
      </button>
      
    </div>
  );
}
