import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';


    it('it should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1)

    });