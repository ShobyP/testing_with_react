import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';


describe ('Header Component', () => {
    it('it should render without errors', () => {
        const component = shallow(<Header />);
        const header = component.find('.headerComponent');
        const wrap = component.find('.wrap');
        expect(header.length).toBe(1)
        expect(wrap.length).toBe(1);

    });
});

