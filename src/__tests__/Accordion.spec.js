import React from 'react';
import { mount } from 'enzyme';
import { Accordion } from '../';

describe('Accordion', () => {
  it('should render with "accordion" class', () => {
    const wrapper = mount(<Accordion open="this accordion" toggle={() => {}} />);

    expect(wrapper.find('.accordion').length).toBe(1);
  });

  it('should render with "accordion-flush" class', () => {
    const wrapper = mount(<Accordion flush open="this accordion" toggle={() => {}} />);

    expect(wrapper.find('.accordion-flush').length).toBe(1);
  });

  it('should render additional classes', () => {
    const wrapper = mount(<Accordion className="other" open="this accordion" toggle={() => {}} />);

    expect(wrapper.find('.accordion').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<Accordion tag="main" open="this accordion" toggle={() => {}} />);

    expect(wrapper.find('main.accordion').length).toBe(1);
  });
});
