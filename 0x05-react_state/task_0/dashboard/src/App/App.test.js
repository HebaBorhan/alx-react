// Existing imports...
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  // Existing tests...

  it('default displayDrawer state is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('displayDrawer is true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('displayDrawer is false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('when isLoggedIn is true', () => {
  // Existing tests...
});

describe("Test <App /> with logOut function", () => {
  // Existing tests...
});
