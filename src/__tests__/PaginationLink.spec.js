import React from 'react';
import { shallow, mount } from 'enzyme';
import { PaginationLink } from '../';

describe('PaginationLink', () => {
  it('should render default `a` tag when `href` is present', () => {
    const wrapper = mount(<PaginationLink href="#" />);

    expect(wrapper.find('a').hostNodes().length).toBe(1);
  });

  it('should render default `button` tag when no `href` is present', () => {
    const wrapper = mount(<PaginationLink />);

    expect(wrapper.find('button').hostNodes().length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = mount(<PaginationLink tag="span" />);

    expect(wrapper.find('span').hostNodes().length).toBe(1);
  });

  it('should render with "page-link" class', () => {
    const wrapper = shallow(<PaginationLink />);

    expect(wrapper.hasClass('page-link')).toBe(true);
  });

  it('should render previous', () => {
    const wrapper = shallow(<PaginationLink previous />);

    expect(wrapper.prop('aria-label')).toBe('Previous');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u2039');
    expect(wrapper.find('.visually-hidden').text()).toBe('Previous');
  });

  it('should render next', () => {
    const wrapper = shallow(<PaginationLink next />);

    expect(wrapper.prop('aria-label')).toBe('Next');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u203A');
    expect(wrapper.find('.visually-hidden').text()).toBe('Next');
  });

  it('should render default previous caret with children as an empty array', () => {
    const wrapper = shallow(<PaginationLink previous children={[]} />);

    expect(wrapper.prop('aria-label')).toBe('Previous');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u2039');
    expect(wrapper.find('.visually-hidden').text()).toBe('Previous');
  });

  it('should render default next caret with children as an empty array', () => {
    const wrapper = shallow(<PaginationLink next children={[]} />);

    expect(wrapper.prop('aria-label')).toBe('Next');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u203A');
    expect(wrapper.find('.visually-hidden').text()).toBe('Next');
  });

  it('should render custom aria label', () => {
    const wrapper = shallow(<PaginationLink next aria-label="Yo" />);

    expect(wrapper.prop('aria-label')).toBe('Yo');
    expect(wrapper.find('.visually-hidden').text()).toBe('Yo');
  });

  it('should render custom caret specified as a string', () => {
    const wrapper = shallow(<PaginationLink next>Yo</PaginationLink>);

    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('Yo');
  });

  it('should render custom caret specified as a component', () => {
    const wrapper = shallow(<PaginationLink next><span>Yo</span></PaginationLink>);

    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('Yo');
  });

  it('should render first', () => {
    const wrapper = shallow(<PaginationLink first />);

    expect(wrapper.prop('aria-label')).toBe('First');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00ab');
    expect(wrapper.find('.visually-hidden').text()).toBe('First');
  });

  it('should render last', () => {
    const wrapper = shallow(<PaginationLink last />);

    expect(wrapper.prop('aria-label')).toBe('Last');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00bb');
    expect(wrapper.find('.visually-hidden').text()).toBe('Last');
  });

  it('should render default first caret with children as an empty array', () => {
    const wrapper = shallow(<PaginationLink first children={[]} />);

    expect(wrapper.prop('aria-label')).toBe('First');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00ab');
    expect(wrapper.find('.visually-hidden').text()).toBe('First');
  });

  it('should render default last caret with children as an empty array', () => {
    const wrapper = shallow(<PaginationLink last children={[]} />);

    expect(wrapper.prop('aria-label')).toBe('Last');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00bb');
    expect(wrapper.find('.visually-hidden').text()).toBe('Last');
  });

});
