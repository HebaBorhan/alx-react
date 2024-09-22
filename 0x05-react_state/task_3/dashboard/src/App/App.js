import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext, { user, logOut } from './AppContext';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'Server is down' },
      ],
    };
  }

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  };

  render() {
    const { user, listNotifications } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="App">
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          {!user.isLoggedIn ? <Login /> : <p>Welcome back!</p>}
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
