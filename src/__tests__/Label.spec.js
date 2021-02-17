import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../';

describe('Label', () => {
  it('should render a label tag by default', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper.type()).toBe('label');
  });

  it('should render children', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Label className="extra">Yo!</Label>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render with "col-form-label" class when a col is provided', () => {
    const wrapper = shallow(<Label sm="6">Yo!</Label>);

    expect(wrapper.hasClass('col-form-label')).toBe(true);
  });

  it('should not render with "col-form-label" class when a col is not provided', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.hasClass('col-form-label')).toBe(false);
  });

  it('should pass col size specific classes as Strings', () => {
    const wrapper = shallow(<Label sm="6">Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should pass col size specific classes as Strings (auto)', () => {
    const wrapper = shallow(<Label sm="auto">Yo!</Label>);

    expect(wrapper.hasClass('col-sm-auto')).toBe(true);
  });

  it('should pass col size specific classes as Strings ("")', () => {
    const wrapper = shallow(<Label sm="">Yo!</Label>);

    expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes as Strings (true)', () => {
    const wrapper = shallow(<Label sm>Yo!</Label>);

    expect(wrapper.hasClass('col-sm')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs)', () => {
    const wrapper = shallow(<Label xs="6">Yo!</Label>);

    expect(wrapper.hasClass('col-6')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs="")', () => {
    const wrapper = shallow(<Label xs="">Yo!</Label>);

    expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs (true))', () => {
    const wrapper = shallow(<Label xs>Yo!</Label>);

    expect(wrapper.hasClass('col')).toBe(true);
  });

  it('should pass col size specific classes as Strings (xs="auto")', () => {
    const wrapper = shallow(<Label xs="auto">Yo!</Label>);

    expect(wrapper.hasClass('col-auto')).toBe(true);
  });

  it('should render with "visually-hidden" class when hidden prop is truthy', () => {
    const wrapper = shallow(<Label hidden>Yo!</Label>);

    expect(wrapper.hasClass('visually-hidden')).toBe(true);
  });

  it('should render with "col-form-label-${size}" class when size is provided', () => {
    const wrapper = shallow(<Label size="lg">Yo!</Label>);

    expect(wrapper.hasClass('col-form-label-lg')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const wrapper = shallow(<Label sm={6}>Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
  });

  it('should pass col size specific classes as Numbers (xs)', () => {
    const wrapper = shallow(<Label xs={6}>Yo!</Label>);

    expect(wrapper.hasClass('col-6')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const wrapper = shallow(<Label sm={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);

    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('order-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects (xs)', () => {
    const wrapper = shallow(<Label xs={{ size: 6, order: 2, offset: 2 }}>Yo!</Label>);

    expect(wrapper.hasClass('col-6')).toBe(true);
    expect(wrapper.hasClass('order-2')).toBe(true);
    expect(wrapper.hasClass('offset-2')).toBe(true);
  });

  it('should pass multiple col size specific classes via Objects', () => {
    const wrapper = shallow(<Label xs={{ size: 4, order: 3, offset: 3 }} sm={{ size: 6, order: 2, offset: 2 }} md={{ size: 7, order: 1, offset: 1 }}>Yo!</Label>);

    expect(wrapper.hasClass('col-4')).toBe(true);
    expect(wrapper.hasClass('order-3')).toBe(true);
    expect(wrapper.hasClass('offset-3')).toBe(true);
    expect(wrapper.hasClass('col-sm-6')).toBe(true);
    expect(wrapper.hasClass('order-sm-2')).toBe(true);
    expect(wrapper.hasClass('offset-sm-2')).toBe(true);
    expect(wrapper.hasClass('col-md-7')).toBe(true);
    expect(wrapper.hasClass('order-md-1')).toBe(true);
    expect(wrapper.hasClass('offset-md-1')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Label tag="main">Yo!</Label>);

    expect(wrapper.type()).toBe('main');
  });
});
