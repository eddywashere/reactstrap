import React from 'react';
import { shallow, mount } from 'enzyme';
import { Badge } from '../';

describe('Badge', () => {
  it('should render a span by default', () => {
    const wrapper = shallow(<Badge>Yo!</Badge>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render an anchor when when href is provided', () => {
    const wrapper = shallow(<Badge href="#">Yo!</Badge>);

    expect(wrapper.type()).toBe('a');
  });

  it('should render a custom tag when provided', () => {
    const wrapper = shallow(<Badge tag="main">Yo!</Badge>);

    expect(wrapper.type()).toBe('main');
  });

  it('should render children', () => {
    const wrapper = shallow(<Badge>Yo!</Badge>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render badges with secondary color', () => {
    const wrapper = shallow(<Badge>Default Badge</Badge>);

    expect(wrapper.hasClass('badge-secondary')).toBe(true);
  });

  it('should render Badges with other colors', () => {
    const wrapper = shallow(<Badge color="danger">Danger Badge</Badge>);

    expect(wrapper.hasClass('badge-danger')).toBe(true);
  });

  it('should render Badges as pills', () => {
    const wrapper = shallow(<Badge pill>Pill Badge</Badge>);

    expect(wrapper.hasClass('badge-pill')).toBe(true);
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><Badge ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
