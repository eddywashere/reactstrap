import React from 'react';
import { shallow } from 'enzyme';
import { ToastHeader } from '../';

describe('ToastHeader', () => {
  it('should render with "toast-header" class', () => {
    const wrapper = shallow(<ToastHeader>Yo!</ToastHeader>);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.hasClass('toast-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<ToastHeader className="other">Yo!</ToastHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('toast-header')).toBe(true);
  });

  it('should render close button', () => {
    const wrapper = shallow(<ToastHeader toggle={() => { }} className="other">Yo!</ToastHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('toast-header')).toBe(true);
    expect(wrapper.find('button.btn-close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ToastHeader tag="p">Yo!</ToastHeader>).childAt(0);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('p');
  });

  it('should render custom wrapping tag', () => {
    const wrapper = shallow(<ToastHeader wrapTag="main">Yo!</ToastHeader>);

    expect(wrapper.type()).toBe('main');
  });
});
