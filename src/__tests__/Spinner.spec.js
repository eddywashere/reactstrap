import React from 'react';
import { shallow, mount } from 'enzyme';
import { Spinner } from '../';

describe('Spinner', () => {
  it('should render a span by default', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render a custom tag when provided', () => {
    const wrapper = shallow(<Spinner tag="main" />);

    expect(wrapper.type()).toBe('main');
  });

  it('should default render "Loading..." children', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.text()).toBe('Loading...');
  });

  it('should render children', () => {
    const wrapper = shallow(<Spinner>Yo!</Spinner>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render default type of border', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.hasClass('spinner-border')).toBe(true);
  });

  it('should render type if specified', () => {
    const wrapper = shallow(<Spinner type="grow" />);

    expect(wrapper.hasClass('spinner-grow')).toBe(true);
  });

  it('should render size if specified', () => {
    const wrapper = shallow(<Spinner size="sm" />);

    expect(wrapper.hasClass('spinner-border')).toBe(true);
    expect(wrapper.hasClass('spinner-border-sm')).toBe(true);
  });

  it('should render color if specified', () => {
    const wrapper = shallow(<Spinner color="primary" />);

    expect(wrapper.hasClass('text-primary')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><Spinner ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
