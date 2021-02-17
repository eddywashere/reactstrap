import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from '../';

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.type()).toBe('input');
  });

  it('should render with "type" tag when type is "select"', () => {
    const wrapper = shallow(<Input type="select">Yo!</Input>);

    expect(wrapper.type()).toBe('select');
  });

  it('should render with "textarea" tag when type is "textarea"', () => {
    const wrapper = shallow(<Input type="textarea" />);

    expect(wrapper.type()).toBe('textarea');
  });

  it('should render with "input" tag when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.type()).toBe('input');
  });

  it('should render with "form-control-plaintext" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(true);
  });

  it('should not render with "form-control" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with custom tag when plaintext prop is truthy and tag is provided', () => {
    const wrapper = shallow(<Input type="select" plaintext tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render with custom tag when plaintext prop is not truthy and tag is provided', () => {
    const wrapper = shallow(<Input tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "input" tag when type is not a special case', () => {
    const wrapper = shallow(<Input type="email" />);

    expect(wrapper.type()).toBe('input');
  });

  it('should not render children', () => {
    const wrapper = shallow(<Input>Yo!</Input>);

    expect(wrapper.text()).toBe('');
  });

  it('should render without children when type is "textarea"', () => {
    const wrapper = shallow(<Input type="textarea">Yo!</Input>);

    expect(wrapper.text()).toBe('');
  });

  it('should render children when type is select', () => {
    const wrapper = shallow(<Input type="select">Yo!</Input>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render children when tag is select', () => {
    const wrapper = shallow(<Input tag="select">Yo!</Input>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass children when tag is a custom component', () => {
    const wrapper = mount(<Input tag={props => props.children}>Yo!</Input>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should not render with "is-invalid" class when valid is false', () => {
    const wrapper = shallow(<Input valid={false} />);

    expect(wrapper.hasClass('is-invalid')).toBe(false);
  });

  it('should not render with "is-valid" class when invalid is false', () => {
    const wrapper = shallow(<Input invalid={false} />);

    expect(wrapper.hasClass('is-valid')).toBe(false);
  });

  it('should render with "is-invalid" class when invalid is true', () => {
    const wrapper = shallow(<Input invalid />);

    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });

  it('should render with "is-valid" class when valid is true', () => {
    const wrapper = shallow(<Input valid />);

    expect(wrapper.hasClass('is-valid')).toBe(true);
  });

  it('should render with "form-control-${bsSize}" class when bsSize is "lg" or "sm"', () => {
    const wrapper = shallow(<Input bsSize="lg" />);

    expect(wrapper.hasClass('form-control-lg')).toBe(true);
  });

  it('should render with "form-select-${bsSize}" class when bsSize is "lg" or "sm" and type is select', () => {
    const wrapper = shallow(<Input type="select" bsSize="lg" />);

    expect(wrapper.hasClass('form-select-lg')).toBe(true);
  });

  it('should render with "form-control" class when size is nor "lg" nor "sm"', () => {
    const wrapper = shallow(<Input bsSize="5" />);

    expect(wrapper.hasClass('form-control-sm')).toBe(false);
    expect(wrapper.hasClass('form-control-lg')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(true);
  });

  it('should render with "form-select" class when size is nor "lg" nor "sm" and type is select', () => {
    const wrapper = shallow(<Input type="select" bsSize="5" />);

    expect(wrapper.hasClass('form-select-sm')).toBe(false);
    expect(wrapper.hasClass('form-select-lg')).toBe(false);
    expect(wrapper.hasClass('form-select')).toBe(true);
  });

  it('should render with "form-control-${bsSize}" class when bsSize is provided', () => {
    const wrapper = shallow(<Input bsSize="sm" />);

    expect(wrapper.hasClass('form-control-sm')).toBe(true);
  });

  it('should render with "form-select-${bsSize}" class when bsSize is provided and type is select', () => {
    const wrapper = shallow(<Input type="select" bsSize="sm" />);

    expect(wrapper.hasClass('form-select-sm')).toBe(true);
  });

  it('should render with "form-control" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control')).toBe(true);
  });

  it('should not render with "form-control-plaintext" nor "form-check-input" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-plaintext" nor "form-check-input" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is select', () => {
    const wrapper = shallow(<Input type="select" />);

    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control" nor "form-check-input" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="file" plaintext />);

    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });
  it('should not render nor "form-control-plaintext" nor "form-control" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render nor "form-control-plaintext" nor "form-control" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-check-input" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should render with "form-check-input" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should render with "form-check-input" class when type is switch', () => {
    const wrapper = shallow(<Input type="switch" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-select" class when type is select', () => {
    const wrapper = shallow(<Input type="select" />);

    expect(wrapper.hasClass('form-select')).toBe(true);
  });

  it('should render with "form-control" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Input className="other" />);

    expect(wrapper.hasClass('other')).toBe(true);
  });

  it('should render checkbox type when type is switch', () => {
    const input = shallow(<Input type="switch" />);

    expect(input.find('[type="checkbox"]').exists()).toBe(true);
  });

  it('should render "select" and "textarea" without type property', () => {
    const input = shallow(<Input type="select">Yo!</Input>);
    const textarea = shallow(<Input type="textarea" />);

    expect(input.find('[type="select"]').exists()).toBe(false);
    expect(textarea.find('[type="textarea"]').exists()).toBe(false);
  });

  it('should render with "form-range" not "form-control" class when type is range', () => {
    const wrapper = shallow(<Input type="range" />);

    expect(wrapper.hasClass('form-range')).toBe(true);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });
});
