// App.js
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import TestComponent from '../TestComponent/TestComponent';

function App({ isLoggedIn = false, displayDrawer = false }) {
  return (
    <>
      <Notifications displayDrawer={displayDrawer} />
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
        <TestComponent />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

export default App;
