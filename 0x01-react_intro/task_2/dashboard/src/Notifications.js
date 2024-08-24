import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">
          <span className="bullet">&#8226;</span> New course available
        </li>
        <li data="urgent">
          <span className="bullet">&#8226;</span> New resume available
        </li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: `<span class='bullet'>&#8226;</span> ${getLatestNotification()}` }} />
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
