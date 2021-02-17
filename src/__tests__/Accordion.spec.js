import React from 'react';
import { mount } from 'enzyme';
import { Accordion } from '../';

describe('Accordion', () => {
  it('should render with "accordion" class', () => {
    const wrapper = mount(<Accordion />);

    expect(wrapper.find('.accordion').length).toBe(1);
  });

  it('should render additional classes', () => {
    const wrapper = mount(<Accordion className="other" />);

    expect(wrapper.find('.accordion').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<Accordion tag="main" />);

    expect(wrapper.find('main.accordion').length).toBe(1);
  });
});
