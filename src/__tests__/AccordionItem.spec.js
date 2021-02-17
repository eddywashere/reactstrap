import React from 'react';
import { shallow } from 'enzyme';
import { AccordionItem } from '../';

describe('AccordionItem', () => {
  it('should render with "accordion-item" class', () => {
    const wrapper = shallow(<AccordionItem />);

    expect(wrapper.hasClass('accordion-item')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<AccordionItem className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('accordion-item')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<AccordionItem tag="li" />);

    expect(wrapper.hasClass('accordion-item')).toBe(true);
    expect(wrapper.find('li').length).toBe(1);
  });
});
