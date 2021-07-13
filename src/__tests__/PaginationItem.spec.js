import React, { useContext } from 'react';
import { shallow, mount } from 'enzyme';
import { PaginationItem } from '../';
import { PaginationItemContext } from '../PaginationItemContext';

describe('PaginationItem', () => {
  it('should render default tag', () => {
    const wrapper = mount(<PaginationItem />);

    expect(wrapper.find('li').hostNodes().length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<PaginationItem tag="main" />);

    expect(wrapper.find('main').hostNodes().length).toBe(1);
  });

  it('should render with "page-item" class', () => {
    const wrapper = shallow(<PaginationItem />);

    expect(wrapper.hasClass('page-item')).toBe(true);
  });

  it('should render active state', () => {
    const wrapper = shallow(<PaginationItem active />);

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render disabled state', () => {
    const wrapper = shallow(<PaginationItem disabled />);

    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should pass context disabled variable to children', () => {
    const SubComponent = (() => {
      let context = useContext(PaginationItemContext);
      return (<span className={(context.disabled ? "disabled" : "")}></span>);
    });
    const wrapper = mount(
      <PaginationItem disabled>
        <SubComponent />
      </PaginationItem>);

    expect(wrapper.find('span.disabled').hostNodes().length).toBe(1);
  });

  it('should pass context false disabled variable to children', () => {
    const SubComponent = (() => {
      let context = useContext(PaginationItemContext);
      return (<span className={(context.disabled ? "disabled" : "")}></span>);
    });
    const wrapper = mount(
      <PaginationItem>
        <SubComponent />
      </PaginationItem>);

    expect(wrapper.find('span.disabled').hostNodes().length).toBe(0);
  });
});
