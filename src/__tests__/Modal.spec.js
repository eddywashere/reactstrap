/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from '../';
import { keyCodes } from '../utils';

const didMount = (component) => {
  const wrapper = mount(component);
  wrapper.setProps({ fakefield: 'fakeToUpdate' });
  return wrapper;
}

describe('Modal', () => {
  let isOpen;
  let toggle;

  let isOpenNested;
  let toggleNested;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };

    isOpenNested = false;
    toggleNested = () => { isOpenNested = !isOpenNested; };

    jest.useFakeTimers();
  });

  afterEach(() => {
    // fast forward time for modal to fade out
    jest.runTimersToTime(300);
    jest.clearAllTimers();
  });

  it('should render modal portal into DOM', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(wrapper.childAt(0).children().length).not.toBe(0);
    wrapper.unmount();
  });

  it('should render with the class "modal-dialog"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    wrapper.unmount();
  });

  it('should render external content when present', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} external={<button className="cool-close-button">&times;</button>}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('cool-close-button').length).toBe(1);
    expect(document.getElementsByClassName('cool-close-button')[0].nextElementSibling.className.split(' ').indexOf('modal-dialog') > -1).toBe(true);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" by default', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop={false}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should render with the class "modal-dialog-scrollable" when scrollable is "true"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} scrollable={true}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog-scrollable').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" and have custom class name if provided', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} className="my-custom-modal">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" w/o centered class if not provided', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-dialog-centered').length).toBe(0);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" and centered class if provided', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} centered>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-dialog-centered').length).toBe(1);
    wrapper.unmount();
  });

  describe('fullscreen', () => {
    it('should render non fullscreen by default', () => {
      const wrapper = didMount(<Modal isOpen toggle={toggle}>Yo!</Modal>);
      jest.runTimersToTime(300);

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(0);
      wrapper.unmount();
    });

    it('should always render fullscreen if true', () => {
      const wrapper = didMount(<Modal isOpen toggle={toggle} fullscreen>Yo!</Modal>);
      jest.runTimersToTime(300);

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(1);
      wrapper.unmount();
    });

    it('should render fullscreen below breakpoint if breakpoint is provided', () => {
      const wrapper = didMount(<Modal isOpen toggle={toggle} fullscreen="lg">Yo!</Modal>);
      jest.runTimersToTime(300);

      expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
      expect(document.getElementsByClassName('modal-fullscreen').length).toBe(0);
      expect(document.getElementsByClassName('modal-fullscreen-lg-down').length).toBe(1);
      wrapper.unmount();
    });
  });

  it('should render with additional props if provided', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: '95%' }}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-dialog')[0].style.maxWidth).toBe('95%');
    wrapper.unmount();
  });

  it('should render without fade transition if provided with fade={false}', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} fade={false} modalClassName="fadeless-modal">
        Howdy!
      </Modal>
    );

    // Modal should appear instantaneously
    jest.runTimersToTime(1);

    const matchedModals = document.getElementsByClassName('fadeless-modal');
    const matchedModal = matchedModals[0];

    expect(matchedModals.length).toBe(1);
    // Modal should not have the 'fade' class
    expect(matchedModal.className.split(' ').indexOf('fade') < 0).toBe(true);

    wrapper.unmount();
  });

  it('should render when expected when passed modalTransition and backdropTransition props', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        modalTransition={{ timeout: 2 }}
        backdropTransition={{ timeout: 10 }}
        modalClassName="custom-timeout-modal"
      >
        Hello, world!
      </Modal>
    );

    jest.runTimersToTime(20);

    const matchedModals = document.getElementsByClassName('custom-timeout-modal');

    expect(matchedModals.length).toBe(1);

    wrapper.unmount();
  });

  it('should render with class "modal" and have custom class name if provided with modalClassName', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} modalClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with custom class name if provided with wrapClassName', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} wrapClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} contentClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.querySelectorAll('.modal-content.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdropClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.querySelectorAll('.modal-backdrop.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the class "modal-${size}" when size is passed', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} size="crazy">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-crazy').length).toBe(1);
    wrapper.unmount();
  });


  it('should render modal when isOpen is true', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should render modal with default role of "dialog"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal')[0].getAttribute('role')).toBe('dialog');
    wrapper.unmount();
  });

  it('should render modal with provided role', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} role="alert">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal')[0].getAttribute('role')).toBe('alert');
    wrapper.unmount();
  });

  it('should render modal with aria-labelledby provided labelledBy', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} labelledBy="myModalTitle">
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal')[0].getAttribute('aria-labelledby')).toBe('myModalTitle');
    wrapper.unmount();
  });

  it('should not render modal when isOpen is false', () => {
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(wrapper.childAt(0).children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should toggle modal', () => {
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(wrapper.childAt(0).children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    jest.runTimersToTime(300);
    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should call onClosed & onOpened', () => {
    jest.spyOn(Modal.prototype, 'onOpened');
    jest.spyOn(Modal.prototype, 'onClosed');
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const wrapper = didMount(
      <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(Modal.prototype.onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(Modal.prototype.onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();
    expect(Modal.prototype.onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();
    expect(Modal.prototype.onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClosed & onOpened when fade={false}', () => {
    const onOpened = jest.fn();
    const onClosed = jest.fn();
    const wrapper = didMount(
      <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} toggle={toggle} fade={false}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(1);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(1);

    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(1);

    expect(isOpen).toBe(false);
    expect(onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should not call init when isOpen does not change', () => {
    jest.spyOn(Modal.prototype, 'init');
    jest.spyOn(Modal.prototype, 'componentDidUpdate');
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(Modal.prototype.init).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).not.toHaveBeenCalled();

    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(Modal.prototype.init).not.toHaveBeenCalled();
    expect(Modal.prototype.componentDidUpdate).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should close modal when escape key pressed', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    const escapeKeyUpEvent = {
      keyCode: keyCodes.esc,
      preventDefault: jest.fn(() => {}),
      stopPropagation: jest.fn(() => {}),
    };

    instance.handleEscape(escapeKeyUpEvent);
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(escapeKeyUpEvent.preventDefault.mock.calls.length).toBe(1);
    expect(escapeKeyUpEvent.stopPropagation.mock.calls.length).toBe(1);

    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(document.getElementsByClassName('modal').length).toBe(0);

    wrapper.unmount();
  });

  it('should not close modal when escape key pressed when keyboard is false', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} keyboard={false}>
        Yo!
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 13 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    instance.handleEscape({ keyCode: 27 });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(document.getElementsByClassName('modal').length).toBe(1);

    wrapper.unmount();
  });

  it('should close modal when clicking backdrop', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    //
    document.getElementById('clicker').click();
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    const modal = document.getElementsByClassName('modal')[0];

    const mouseDownEvent = document.createEvent('MouseEvents');
    mouseDownEvent.initEvent('mousedown', true, true);
    modal.dispatchEvent(mouseDownEvent);

    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('click', true, true);
    modal.dispatchEvent(clickEvent);

    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);

    wrapper.unmount();
  });

  it('should not close modal when clicking backdrop and backdrop is "static"', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    document.getElementById('clicker').click();
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    document.getElementsByClassName('modal-backdrop')[0].click();
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    wrapper.unmount();
  });

  it('should not close modal when escape key pressed and backdrop is "static" and keyboard=false', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static" keyboard={false}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    const escapeKeyUpEvent = {
      keyCode: keyCodes.esc,
      preventDefault: jest.fn(() => {}),
      stopPropagation: jest.fn(() => {}),
    };

    instance.handleEscape(escapeKeyUpEvent);
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);

    wrapper.unmount();
  });

  it('should close modal when escape key pressed and backdrop is "static" and keyboard=true', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static" keyboard={true}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    const escapeKeyUpEvent = {
      keyCode: keyCodes.esc,
      preventDefault: jest.fn(() => {}),
      stopPropagation: jest.fn(() => {}),
    };

    instance.handleEscape(escapeKeyUpEvent);
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);

    wrapper.unmount();
  });

  it('should animate when backdrop is "static" and escape key pressed and keyboard=false', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static" keyboard={false}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const spy = jest.spyOn(wrapper.instance(), 'handleStaticBackdropAnimation');

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);

    const escapeKeyUpEvent = {
      keyCode: keyCodes.esc,
      preventDefault: jest.fn(() => {}),
      stopPropagation: jest.fn(() => {}),
    };

    wrapper.instance().handleEscape(escapeKeyUpEvent);
    expect(spy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should animate when backdrop is "static" and backdrop is clicked', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    const spy = jest.spyOn(wrapper.instance(), 'handleStaticBackdropAnimation');

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    
    const modal = document.getElementsByClassName('modal')[0];

    const mouseDownEvent = document.createEvent('MouseEvents');
    mouseDownEvent.initEvent('mousedown', true, true);
    modal.dispatchEvent(mouseDownEvent);

    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('click', true, true);
    modal.dispatchEvent(clickEvent);

    jest.runTimersToTime(300);
    expect(spy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should not animate when backdrop is "static" and modal is clicked', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        <button id="clicker">Does Nothing</button>
      </Modal>
    );

    const spy = jest.spyOn(wrapper.instance(), 'handleStaticBackdropAnimation');

    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    
    const modalDialog = document.getElementsByClassName('modal-dialog')[0];

    const mouseDownEvent = document.createEvent('MouseEvents');
    mouseDownEvent.initEvent('mousedown', true, true);
    modalDialog.dispatchEvent(mouseDownEvent);

    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent('click', true, true);
    modalDialog.dispatchEvent(clickEvent);

    jest.runTimersToTime(300);
    expect(spy).not.toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should destroy this._element', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBe(null);

    wrapper.unmount();
  });

  it('should destroy this._element when unmountOnClose prop set to true', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} unmountOnClose={true}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBe(null);

    wrapper.unmount();
  });

  it('should not destroy this._element when unmountOnClose prop set to false', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle} unmountOnClose={false}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(false);
    expect(instance._element).toBeTruthy();

    wrapper.unmount();
  });

  it('should destroy this._element on unmount', () => {
    isOpen = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <button id="clicker">Does Nothing</button>
      </Modal>
    );
    const instance = wrapper.instance();

    jest.runTimersToTime(300);
    expect(instance._element).toBeTruthy();

    wrapper.unmount();
    jest.runTimersToTime(300);

    expect(instance._element).toBe(null);
  });

  it('should render nested modals', () => {
    isOpen = true;
    isOpenNested = true;
    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <Modal isOpen={isOpenNested} toggle={toggleNested}>
            Yo!
          </Modal>
        </ModalBody>
      </Modal>
    );

    jest.runTimersToTime(300);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(2);
    expect(document.body.className).toBe('modal-open');

    toggleNested();
    jest.runTimersToTime(300);
    expect(isOpenNested).toBe(false);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(2);
    expect(document.body.className).toBe('modal-open');

    wrapper.unmount();
    expect(document.getElementsByClassName('modal-dialog').length).toBe(0);
    expect(document.body.className).toBe('');
  });

  it('should remove exactly modal-open class from body', () => {
    // set a body class which includes modal-open
    document.body.className = 'my-modal-opened';

    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    // assert that the modal is closed and the body class is what was set initially
    jest.runTimersToTime(300);
    expect(isOpen).toBe(false);
    expect(document.body.className).toBe('my-modal-opened');

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    // assert that the modal is open and the body class is what was set initially + modal-open
    jest.runTimersToTime(300);
    expect(isOpen).toBe(true);
    expect(document.body.className).toBe('my-modal-opened modal-open');

    // append another body class which includes modal-open
    // using this to test if replace will leave a space when removing modal-open
    document.body.className += ' modal-opened';
    expect(document.body.className).toBe('my-modal-opened modal-open modal-opened');

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    // assert that the modal is closed and the body class is what was set initially
    jest.runTimersToTime(301);
    expect(isOpen).toBe(false);
    expect(document.body.className).toBe('my-modal-opened modal-opened');

    wrapper.unmount();
  });

  it('should call onEnter & onExit props if provided', () => {
    const onEnter = jest.fn();
    const onExit = jest.fn();
    const wrapper = didMount(
      <Modal isOpen={isOpen} onEnter={onEnter} onExit={onExit} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(isOpen).toBe(false);
    expect(onEnter).toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    expect(isOpen).toBe(true);
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).not.toHaveBeenCalled();

    onEnter.mockReset();
    onExit.mockReset();

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });
    jest.runTimersToTime(300);

    wrapper.unmount();
    expect(onEnter).not.toHaveBeenCalled();
    expect(onExit).toHaveBeenCalled();
  });

  it('should update element z index when prop changes', () => {
    const wrapper = shallow(
      <Modal isOpen zIndex={0}>
        Yo!
      </Modal>
    );
    expect(wrapper.instance()._element.style.zIndex).toBe('0');
    wrapper.setProps({ zIndex: 1 });
    expect(wrapper.instance()._element.style.zIndex).toBe('1');
  });

  it('should allow focus on only focusable elements', () => {
    isOpen = true;

    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <a alt="test" href="/">Test</a>
          <map name="test">
            <area alt="test" href="/" coords="200,5,200,30" />
          </map>
          <input type="text" />
          <input type="hidden" />
          <input type="text" disabled value="Test" />
          <select name="test" id="select_test">
            <option>Test item</option>
          </select>
          <select name="test" id="select_test_disabled" disabled>
            <option>Test item</option>
          </select>
          <textarea name="textarea_test" id="textarea_test" cols="30" rows="10" />
          <textarea name="textarea_test_disabled" id="textarea_test_disabled" cols="30" rows="10" disabled />
          <object>Test</object>
          <span tabIndex="0">test tab index</span>
        </ModalBody>
        <ModalFooter>
          <Button disabled color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );

    const instance = wrapper.instance();
    expect(instance.getFocusableChildren().length).toBe(9);
    wrapper.unmount();
  });

  it('should tab through focusable elements', () => {
    isOpen = true;

    const mock = jest.fn();

    const wrapper = didMount(
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <Button onFocus={mock} color="secondary" onClick={toggle}>Cancel</Button>
        </ModalBody>
      </Modal>
    );

    const instance = wrapper.instance();
    expect(instance.getFocusedChild()).not.toBe(instance.getFocusableChildren()[0]);
    wrapper.find('.modal').hostNodes().simulate('keyDown', { which: 9, key: 'Tab', keyCode: 9 });
    expect(instance.getFocusedChild()).toBe(instance.getFocusableChildren()[0]);
    expect(mock).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should return the focus to the last focused element before the modal has opened', () => {
    const MockComponent = ({ isOpen = false }) => (
        <>
          <button className={'focus'}>Focused</button>
          <Modal isOpen={isOpen}>
            <ModalBody>Whatever</ModalBody>
          </Modal>
        </>
    );
    const wrapper = didMount(<MockComponent />);
    const button = wrapper
        .find('.focus')
        .hostNodes()
        .getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(true);
    wrapper.unmount();
  })

  it('should not return the focus to the last focused element before the modal has opened when "returnFocusAfterClose" is false', () => {
    const MockComponent = ({ isOpen = false }) => (
        <>
          <button className={'focus'}>Focused</button>
          <Modal isOpen={isOpen} returnFocusAfterClose={false} >
            <ModalBody>Whatever</ModalBody>
          </Modal>
        </>
    );
    const wrapper = didMount(<MockComponent />);
    const button = wrapper
        .find('.focus')
        .hostNodes()
        .getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(false);
    wrapper.unmount();
  })

  it('should return the focus to the last focused element before the modal has opened when "unmountOnClose" is false', () => {
    const MockComponent = ({ isOpen = false }) => (
        <>
          <button className={'focus'}>Focused</button>
          <Modal isOpen={isOpen} unmountOnClose={false}>
            <ModalBody>Whatever</ModalBody>
          </Modal>
        </>
    );
    const wrapper = didMount(<MockComponent />);
    const button = wrapper
        .find('.focus')
        .hostNodes()
        .getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(true);
    wrapper.unmount();
  })

  it('should not return the focus to the last focused element before the modal has opened when "returnFocusAfterClose" is false and "unmountOnClose" is false', () => {
    const MockComponent = ({ isOpen = false }) => (
        <>
          <button className={'focus'}/>
          <Modal isOpen={isOpen} returnFocusAfterClose={false} unmountOnClose={false}>
            <ModalBody>Whatever</ModalBody>
          </Modal>
        </>
    );
    const wrapper = didMount(<MockComponent />);
    const button = wrapper
        .find('.focus')
        .hostNodes()
        .getDOMNode();
    button.focus();
    wrapper.setProps({ isOpen: true });
    wrapper.setProps({ isOpen: false });
    jest.runAllTimers();

    expect(document.activeElement === button).toEqual(false);
  });
});
