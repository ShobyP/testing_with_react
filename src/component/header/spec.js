import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe ('Header Component', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Header/>);
    });

    it('it should render without errors', () => {
        const header = wrapper.find(`[data-test='headerComponent']`);
        const wrap = wrapper.find(`[data-test='wrap']`);
        expect(header.length).toBe(1)
        expect(wrap.length).toEqual(1);
    });

    it('should render a logo', () => {
       const logo = wrapper.find('.logo');
       expect(logo.length).toEqual(1);
    });

});

