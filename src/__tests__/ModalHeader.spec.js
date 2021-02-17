import React from 'react';
import { shallow } from 'enzyme';
import { ModalHeader } from '../';

describe('ModalHeader', () => {
  it('should render with "modal-header" class', () => {
    const wrapper = shallow(<ModalHeader>Yo!</ModalHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('modal-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ModalHeader className="other">Yo!</ModalHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-header')).toBe(true);
  });

  it('should render close button', () => {
    const wrapper = shallow(<ModalHeader toggle={() => {}} className="other">Yo!</ModalHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-header')).toBe(true);
    expect(wrapper.find('button.btn-close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalHeader tag="p">Yo!</ModalHeader>).childAt(0);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('p');
  });

  it('should render custom wrapping tag', () => {
    const wrapper = shallow(<ModalHeader wrapTag="main">Yo!</ModalHeader>);

    expect(wrapper.type()).toBe('main');
  });
});
