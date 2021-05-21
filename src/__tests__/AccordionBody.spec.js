import React from 'react';
import { mount } from 'enzyme';
import { AccordionBody, AccordionContext } from '../';

describe('AccordionBody', () => {
  it('should render with "accordion-body" class within "accordion-collapse', () => {
    const wrapper = mount(<AccordionBody accordionId="cool-accordion" />);

    const accordionBody = wrapper.find('.accordion-collapse.collapse');

    expect(accordionBody.find('.accordion-body').length).toBe(1);
    expect(accordionBody.hasClass('show')).toBe(false);
  });

  it('should render additional classes', () => {
    const wrapper = mount(<AccordionBody accordionId="cool-accordion" className="other" />);

    expect(wrapper.find('.accordion-collapse.collapse').hasClass('other')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<AccordionBody accordionId="cool-accordion" tag="div" />);

    expect(wrapper.find('.accordion-collapse.collapse').find('div.accordion-body').length).toBe(1);
  });

  it('should be open if open == id', () => {
    const wrapper = mount(
      <AccordionContext.Provider value={{ open: 'cool-accordion' }}>
        <AccordionBody accordionId="cool-accordion" />
      </AccordionContext.Provider>
    );

    expect(wrapper.find('.accordion-collapse.collapse.show').length).toBe(1);
  });
});
