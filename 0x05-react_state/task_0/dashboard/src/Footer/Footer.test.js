import React from "react";
import { shallow } from 'enzyme';
import Footer from "./Footer";
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders atleast Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text().includes('Copyright')).toBe(true);
    })
})