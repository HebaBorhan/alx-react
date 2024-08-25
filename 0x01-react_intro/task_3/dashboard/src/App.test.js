import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App renders without crashing', () => {
  shallow(<App />);
});

test('App renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBe(true);
});

test('App renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').exists()).toBe(true);
});

test('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').exists()).toBe(true);
});
