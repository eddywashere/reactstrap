import React from 'react';
import { shallow, mount } from 'enzyme';
import { Container } from '../';

describe('Container', () => {
  it('should render .container markup', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.html()).toBe('<div class="container"></div>');
  });

  it('should render .container-fluid markup', () => {
    const wrapper = shallow(<Container fluid />);

    expect(wrapper.html()).toBe('<div class="container-fluid"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Container>Children</Container>);

    expect(wrapper.html()).toBe('<div class="container">Children</div>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Container className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Container tag="main">Yo!</Container>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('container')).toBe(true);
    expect(wrapper.type()).toBe('main');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    const wrapper = mount(<><Container ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
    wrapper.unmount();
  });
});
