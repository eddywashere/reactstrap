import React from 'react';
import { shallow } from 'enzyme';
import { Row } from '../';

describe('Row', () => {
  it('should render .row markup', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper.html()).toBe('<div class="row"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Row>Children</Row>);

    expect(wrapper.html()).toBe('<div class="row">Children</div>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Row className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('show render noGutters class as gx-0', () => {
    const wrapper = shallow(<Row noGutters />);

    expect(wrapper.hasClass('gx-0')).toBe(true);
    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('show render form classes', () => {
    const wrapper = shallow(<Row form />);

    expect(wrapper.html()).toBe('<div class="form-row"></div>');
  });

  it('should pass row col size specific classes as strings', () => {
    const wrapper = shallow(<Row sm="6" />);

    expect(wrapper.hasClass('row-cols-sm-6')).toBe(true);
  });

  it('should pass row col size specific classes as numbers', () => {
    const wrapper = shallow(<Row sm={6} />);

    expect(wrapper.hasClass('row-cols-sm-6')).toBe(true);
  });
});
