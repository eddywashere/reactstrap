import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
  it('should render children', () => {
    const wrapper = shallow(<Button>Ello world</Button>);

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should render custom element', () => {
    const Link = props => <a href="/home" {...props}>{props.children}</a>;
    const wrapper = mount(<Button tag={Link}>Home</Button>);

    expect(wrapper.find('a').hostNodes().length).toBe(1);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render an anchor element if href exists', () => {
    const wrapper = mount(<Button href="/home">Home</Button>);

    expect(wrapper.find('a').hostNodes().length).toBe(1);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as undefined by default when tag is "button"', () => {
    const wrapper = mount(<Button>Home</Button>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe(undefined);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as "button" by default when tag is "button" and onClick is provided', () => {
    const wrapper = mount(<Button onClick={() => {}}>Home</Button>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('button');
    expect(wrapper.text()).toBe('Home');
  });

  it('should render type as user defined when defined by the user', () => {
    const wrapper = mount(<Button type="submit">Home</Button>);

    expect(wrapper.find('button').hostNodes().prop('type')).toBe('submit');
    expect(wrapper.text()).toBe('Home');
  });

  it('should not render type by default when the type is not defined and the tag is not "button"', () => {
    const wrapper = mount(<Button tag="a">Home</Button>);

    expect(wrapper.find('a').hostNodes().prop('type')).toBe(undefined);
    expect(wrapper.text()).toBe('Home');
  });

  it('should not render type by default when the type is not defined and the href is defined', () => {
    const wrapper = mount(<Button href="#">Home</Button>);

    expect(wrapper.find('a').hostNodes().prop('type')).toBe(undefined);
    expect(wrapper.text()).toBe('Home');
  });

  it('should render buttons with default color', () => {
    const wrapper = shallow(<Button>Default Button</Button>);

    expect(wrapper.hasClass('btn-secondary')).toBe(true);
  });

  it('should render buttons with other colors', () => {
    const wrapper = shallow(<Button color="danger">Default Button</Button>);

    expect(wrapper.hasClass('btn-danger')).toBe(true);
  });

  it('should render buttons with outline variant', () => {
    const wrapper = shallow(<Button outline>Default Button</Button>);

    expect(wrapper.hasClass('btn-outline-secondary')).toBe(true);
  });

  it('should render buttons with outline variant with different colors', () => {
    const wrapper = shallow(<Button outline color="info">Default Button</Button>);

    expect(wrapper.hasClass('btn-outline-info')).toBe(true);
  });

  it('should render buttons at different sizes', () => {
    const small = shallow(<Button size="sm">Small Button</Button>);
    const large = shallow(<Button size="lg">Large Button</Button>);

    expect(small.hasClass('btn-sm')).toBe(true);
    expect(large.hasClass('btn-lg')).toBe(true);
  });

  it('should render block level buttons', () => {
    const block = shallow(<Button block>Block Level Button</Button>);

    expect(block.hasClass('d-block w-100')).toBe(true);
  });

  it('should render close icon utility with default props', () => {
    const times = '×'; // unicode: U+00D7 MULTIPLICATION SIGN
    const expectedInnerHTML = `<span aria-hidden="true">${times}</span>`;

    const wrapper = shallow(<Button close />);
    const actualInnerHTML = wrapper.children().html();

    expect(wrapper.find('.btn-close').length).toBe(1);
    expect(wrapper.find('.btn').length).toBe(0);
    expect(wrapper.find('.btn-secondary').length).toBe(0);
    expect(wrapper.find('button').prop('aria-label')).toMatch(/close/i);
    expect(actualInnerHTML).toBe(expectedInnerHTML);
  });

  it('should render close icon with custom child and props', () => {
    const testChild = 'close this thing';
    const wrapper = shallow(<Button close>{testChild}</Button>);

    expect(wrapper.contains(testChild));
  });

  describe('onClick', () => {
    it('calls props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mount(<Button onClick={onClick}>Testing Click</Button>);

      wrapper.find('button').hostNodes().simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    it('returns the value returned by props.onClick', () => {
      const onClick = jest.fn(() => 1234);
      const wrapper = mount(<Button onClick={onClick}>Testing Click</Button>);

      const result = wrapper.find('button').props().onClick();
      expect(onClick).toHaveBeenCalled();
      expect(result).toEqual(1234);
    });

    it('is not called when disabled', () => {
      const e = createSpyObj('e', ['preventDefault']);
      const wrapper = mount(<Button>Testing Click</Button>);

      wrapper.instance().onClick(e);
      expect(e.preventDefault).not.toHaveBeenCalled();

      wrapper.setProps({ disabled: true });
      wrapper.instance().onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});
