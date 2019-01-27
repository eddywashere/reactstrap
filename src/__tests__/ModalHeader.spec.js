import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const wrapper = shallow(<ModalHeader toggle={() => { }} className="other">Yo!</ModalHeader>);

    expect(wrapper.hasClass('other')).toBe(true);
    expect(wrapper.hasClass('modal-header')).toBe(true);
    expect(wrapper.find('button.close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalHeader tag="p">Yo!</ModalHeader>).childAt(0);

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.type()).toBe('p');
  });

  it('should forward the ref to the DOM element', () => {
    const ref = React.createRef();
    mount(<><ModalHeader ref={ref} /></>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should render custom wrapping tag', () => {
    const wrapper = shallow(<ModalHeader wrapTag="main">Yo!</ModalHeader>);

    expect(wrapper.type()).toBe('main');
  });

  it('should render close button with custom aria-label', () => {
    const wrapper = shallow(<ModalHeader toggle={() => { }} className="other" closeAriaLabel="oseclay">Yo!</ModalHeader>);

    const closeButton = wrapper.find('button.close').first();
    expect(closeButton.prop('aria-label')).toBe('oseclay');
  });

  it('should render close button with default icon', () => {
    const wrapper = shallow(<ModalHeader toggle={() => { }}>Yo!</ModalHeader>);

    const closeButtonIcon = wrapper.find('button.close span');
    const defaultIcon = String.fromCharCode(215);
    expect(closeButtonIcon.text()).toEqual(defaultIcon);
  });

  it('should render close button with custom icon', () => {
    const wrapper = shallow(<ModalHeader toggle={() => { }} charCode={'X'}>Yo!</ModalHeader>);

    const closeButtonIcon = wrapper.find('button.close span');
    expect(closeButtonIcon.text()).toEqual('X');
  });
});
