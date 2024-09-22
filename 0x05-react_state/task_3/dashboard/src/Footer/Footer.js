import React, { useContext } from 'react';
import './Footer.css';
import AppContext from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className='footer'>
      <p>Copyright {new Date().getFullYear()} - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href='/contact'>Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
