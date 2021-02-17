import React from 'react';
import { mount } from 'enzyme';
import { AccordionHeader, AccordionContext } from '../';

describe('AccordionHeader', () => {
  it('should render with "accordion-header" class', () => {
    const wrapper = mount(<AccordionHeader targetId="cool-accordion" />);

    expect(wrapper.find('.accordion-header').find('.accordion-button.collapsed').length).toBe(1);
  });

  it('should render additional classes', () => {
    const wrapper = mount(<AccordionHeader targetId="cool-accordion" className="other" />);

    expect(wrapper.find('.accordion-header').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<AccordionHeader targetId="cool-accordion" tag="div" />);

    expect(wrapper.find('div.accordion-header').length).toBe(1);
  });

  it('should be open if openId == targetId', () => {
    const wrapper = mount(
      <AccordionContext.Provider value={{ openId: 'cool-accordion' }}>
        <AccordionHeader targetId="cool-accordion" />
      </AccordionContext.Provider>
    );

    expect(wrapper.find('.accordion-header').find('.accordion-button.collapsed').length).toBe(0);
  });

  it('should toggle collapse if accordion-button is clicked', () => {
    const toggle = jest.fn();

    const wrapper = mount(
      <AccordionContext.Provider value={{ toggle }}>
        <AccordionHeader targetId="cool-accordion" />
      </AccordionContext.Provider>
    );

    const accordionButton = wrapper.find('.accordion-header').find('.accordion-button');
    accordionButton.simulate('click');

    expect(toggle.mock.calls.length).toBe(1);
  });
});
