import React from 'react';
import { shallow, mount } from 'enzyme';
import { Jumbotron } from '../';

describe('Jumbotron', () => {
  it('should render children', () => {
    const wrapper = shallow(<Jumbotron>Hello World</Jumbotron>);

    expect(wrapper.text()).toBe('Hello World');
  });

  it('should render elements as children', () => {
    const wrapper = mount(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

    expect(wrapper.find('h1').hostNodes().length).toBe(1);
    expect(wrapper.find('h1').hostNodes().text()).toBe('Hello from h1');
  });

  it('should have default classes', () => {
    const wrapper = shallow(<Jumbotron>Hello</Jumbotron>);

    expect(wrapper.hasClass('bg-light')).toBe(true);
    expect(wrapper.hasClass('mb-4')).toBe(true);
    expect(wrapper.hasClass('py-3')).toBe(true);
    expect(wrapper.hasClass('py-sm-5')).toBe(true);
    expect(wrapper.hasClass('rounded')).toBe(true);
    expect(wrapper.hasClass('px-3')).toBe(true);
    expect(wrapper.hasClass('px-sm-4')).toBe(true);
  });

  it('should render fluid with square corners and no x padding', () => {
    const wrapper = shallow(<Jumbotron fluid>Hello</Jumbotron>);

    expect(wrapper.hasClass('bg-light')).toBe(true);
    expect(wrapper.hasClass('mb-4')).toBe(true);
    expect(wrapper.hasClass('py-3')).toBe(true);
    expect(wrapper.hasClass('py-sm-5')).toBe(true);
    expect(wrapper.hasClass('rounded')).toBe(false);
    expect(wrapper.hasClass('px-3')).toBe(false);
    expect(wrapper.hasClass('px-sm-4')).toBe(false);
  });

  it('should render custom class', () => {
    const wrapper = shallow(<Jumbotron className="custom-class">Hello</Jumbotron>);

    expect(wrapper.hasClass('custom-class')).toBe(true);
  });
});
