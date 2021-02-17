import React from 'react';
import { mount } from 'enzyme';
import { PopperContent } from '../';
import TooltipPopoverWrapper from '../TooltipPopoverWrapper';

describe('Tooltip', () => {
  let isOpen;
  let toggle;
  let element;
  let container;
  let target;
  let innerTarget;
  let synthEvent;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="target">This is the Tooltip <span id="innerTarget">target</span>.</p>';
    element.setAttribute('id', 'testContainer');
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);
    target = document.getElementById('target');
    innerTarget = document.getElementById('innerTarget');
    synthEvent = { persist: () => {} };

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    document.body.innerHTML = '';
    element = null;
    container = null;
    target = null;
    innerTarget = null;
  });

  it('should render with "hideArrow" false by default', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>);

    expect(wrapper.prop('hideArrow')).toBe(false);
  });

  it('should render with "hideArrow" true when "hideArrow" prop is truthy', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} hideArrow>
        Tooltip Content
      </TooltipPopoverWrapper>);

    expect(wrapper.prop('hideArrow')).toBe(true);
  });

  it('should not render children if isOpen is false', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    const Tooltips = document.getElementsByClassName('tooltip');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(0);
    expect(target.className).toBe('');
    expect(Tooltips.length).toBe(0);
    wrapper.detach();
  });

  it('should render if isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} className="tooltip show" trigger="hover">
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    const Tooltips = document.getElementsByClassName('tooltip');
    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
    expect(Tooltips.length).toBe(1);
    expect(Tooltips[0].textContent).toBe('Tooltip Content');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
    expect(Tooltips.length).toBe(1);
    expect(Tooltips[0].textContent).toBe('Tooltip Content');

    wrapper.detach();
  });

  it('should render with target object', () => {
    isOpen = true;
    const wrapper = mount(
      <TooltipPopoverWrapper target={document.getElementById('target')} isOpen={isOpen} toggle={toggle} className="tooltip show">
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    const Tooltips = document.getElementsByClassName('tooltip');

    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
    expect(Tooltips.length).toBe(1);
    expect(Tooltips[0].textContent).toBe('Tooltip Content');

    const tooltips = document.getElementsByClassName('tooltip');
    expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');

    wrapper.detach();
  });

  it('should toggle isOpen', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} className="tooltip show">
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    jest.runTimersToTime(150);
    expect(document.getElementsByClassName('tooltip').length).toBe(0);

    wrapper.setProps({ isOpen: true });
    jest.runTimersToTime(150);
    expect(document.getElementsByClassName('tooltip').length).toBe(1);

    wrapper.setProps({ isOpen: false });
    jest.runTimersToTime(150);
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should toggle isOpen', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} className="tooltip show" fade={false}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.setProps({ isOpen: true });
    jest.runTimersToTime(0); // slight async delay for getDerivedStateFromProps to update isOpen
    expect(document.getElementsByClassName('tooltip').length).toBe(1);
    wrapper.setProps({ isOpen: false });
    jest.runTimersToTime(0);
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should handle target clicks', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    jest.runTimersToTime(200);
    expect(isOpen).toBe(true);
    instance.handleDocumentClick({ target: target });
    jest.runTimersToTime(200);
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should handle inner target clicks', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    jest.runTimersToTime(200);
    expect(isOpen).toBe(true);
    wrapper.detach();
  });

  it('should not do anything when document click outside of target', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear hide timeout if it exists on target click', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} delay={200}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.hideWithDelay();
    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    jest.runTimersToTime(200);
    expect(isOpen).toBe(true);
    wrapper.setProps({ isOpen: isOpen });
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should open after receiving single touchstart and single click', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} trigger="click">
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    expect(isOpen).toBe(false);
    target.dispatchEvent(new Event('touchstart'));
    jest.runTimersToTime(20);
    target.dispatchEvent(new Event('click'));
    jest.runTimersToTime(200);
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should close after receiving single touchstart and single click', () => {
    isOpen = true;

    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} trigger="click">
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );

    expect(isOpen).toBe(true);
    target.dispatchEvent(new Event('touchstart'));
    jest.runTimersToTime(20);
    target.dispatchEvent(new Event('click'));
    jest.runTimersToTime(200);
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should pass down custom modifiers', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper
        isOpen
        target="target"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [2, 2],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
        ]}
      >
        Tooltip Content
      </TooltipPopoverWrapper>
    );

    expect(wrapper.find(PopperContent).props().modifiers).toContainEqual(
      {
        name: 'offset',
        options: {
          offset: [2, 2],
        },
      }
    );
    expect(wrapper.find(PopperContent).props().modifiers).toContainEqual(
      {
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
        },
      },
    );

    wrapper.unmount();
  });

  it('should pass down cssModule', () => {
    const cssModule = {};
    const wrapper = mount(
      <TooltipPopoverWrapper
        isOpen
        target="target"
        cssModule={cssModule}
      >
        Tooltip Content
      </TooltipPopoverWrapper>
    );
    expect(wrapper.find(PopperContent).props().cssModule).toBe(cssModule);
    wrapper.unmount();
  });

  it('should pass down offset', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper isOpen target="target" offset="100">
        Tooltip content
      </TooltipPopoverWrapper>
    );

    expect(wrapper.find(PopperContent).props().offset).toEqual('100');
    wrapper.unmount();
  });

  it('should pass down flip', () => {
    const wrapper = mount(
      <TooltipPopoverWrapper isOpen target="target" flip={false}>
        Tooltip Content
      </TooltipPopoverWrapper>
    );

    expect(wrapper.find(PopperContent).props().flip).toBe(false);
    wrapper.unmount();
  });

  it('should not call props.toggle when disabled ', () => {
    const props = createSpyObj('props', ['toggle']);
    const event = createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <TooltipPopoverWrapper target="target" disabled isOpen={isOpen} toggle={props.toggle}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.toggle(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.toggle).not.toHaveBeenCalled();

    wrapper.detach();
  });

  it('should not throw when props.toggle is not provided ', () => {
    const event = createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <TooltipPopoverWrapper target="target" isOpen={isOpen}>
        Tooltip Content
      </TooltipPopoverWrapper>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.toggle(event);

    wrapper.detach();
  });

  it('should not throw when passed a ref object as the target', () => {
    const targetObj = React.createRef();
    targetObj.current = createSpyObj('div', ['addEventListener', 'removeEventListener']);
    const event = createSpyObj('event', ['preventDefault']);
    const wrapper = mount(
      <TooltipPopoverWrapper target={targetObj}>Yo!</TooltipPopoverWrapper>,
      { attachTo: container });

    const instance = wrapper.instance();
    instance.toggle(event);

    wrapper.detach();

    expect(targetObj.current.addEventListener).toHaveBeenCalled();
    expect(targetObj.current.removeEventListener).toHaveBeenCalled();
  });

  describe('multi target', () => {
    let targets, targetContainer;
    beforeEach(() => {
      targetContainer = document.createElement('div');
      targetContainer.innerHTML = `<span class='example'>Target 1</span><span class='example'>Target 2</span>`
      element.appendChild(targetContainer);
      targets = targetContainer.querySelectorAll('.example');
    });

    afterEach(() => {
      element.removeChild(targetContainer);
      targets = null;
    });

    it("should attach tooltip on multiple target when a target selector matches multiple elements", () => {
      const wrapper = mount(
        <TooltipPopoverWrapper target=".example" isOpen={isOpen} toggle={toggle} delay={0}>Yo!</TooltipPopoverWrapper>,
        { attachTo: container });

      targets[0].dispatchEvent(new Event('click'));
      jest.runTimersToTime(0)
      expect(isOpen).toBe(true);

      targets[0].dispatchEvent(new Event('click'));
      jest.runTimersToTime(0)
      expect(isOpen).toBe(false);

      targets[1].dispatchEvent(new Event('click'));
      jest.runTimersToTime(0)
      expect(isOpen).toBe(true);

      targets[1].dispatchEvent(new Event('click'));
      jest.runTimersToTime(0)
      expect(isOpen).toBe(false);
      wrapper.detach();
    });
  });

  describe('delay', () => {
    it('should accept a number', () => {
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} delay={200}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hideWithDelay();
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should accept an object', () => {
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hideWithDelay();
      expect(isOpen).toBe(true);
      jest.runTimersToTime(200);
      expect(isOpen).toBe(false);
    });

    it('should use default value if value is missing from object', () => {
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 0 }}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hideWithDelay();
      expect(isOpen).toBe(true);
      jest.runTimersToTime(250); // Default hide value: 250
      expect(isOpen).toBe(false);
    });
  });

  describe('hide', () => {
    it('should call toggle when isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.hide();

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('show', () => {
    it('should call toggle when isOpen is false', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(spy).not.toHaveBeenCalled();

      instance.show();

      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseOverTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const spy = jest.fn(toggle);
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy} delay={200} trigger="manual">
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hideWithDelay();

      expect(isOpen).toBe(false);
      expect(spy).not.toHaveBeenCalled();

      instance.showWithDelay();
      jest.runTimersToTime(200);

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy} delay={0}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.showWithDelay();
      jest.runTimersToTime(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseLeaveTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.showWithDelay();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      instance.hideWithDelay();
      jest.runTimersToTime(200);

      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen is false', () => {
      const spy = jest.fn(toggle);
      isOpen = false;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={spy} delay={0}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.hideWithDelay();
      jest.runTimersToTime(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(false);
      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('autohide', () => {
    it('should keep Tooltip around when false and onmouseleave from Tooltip content', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper trigger="hover" target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(100);
      expect(spy).not.toHaveBeenCalled();
      jest.runTimersToTime(200);
      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('clears showTimeout in onMouseLeaveTooltipContent', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper trigger="hover" target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.showWithDelay();
      expect(instance._showTimeout).toBeTruthy();
      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(300);
      expect(instance._showTimeout).toBeFalsy();
      wrapper.detach();
    });

    it('clears hide timeout in onMouseOverTooltipContent', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper trigger="hover" target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent(synthEvent);
      jest.runTimersToTime(100);
      expect(instance._hideTimeout).toBeTruthy();
      instance.onMouseOverTooltipContent();
      expect(instance._hideTimeout).toBeFalsy();
      instance.onMouseOverTooltipContent();
      wrapper.detach();
    });

    it('should not keep Tooltip around when autohide is true and Tooltip content is hovered over', () => {
      const spy = jest.fn(toggle);
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" autohide isOpen={isOpen} toggle={spy} delay={200} trigger="click hover focus">
          Tooltip Content
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
      const instance = wrapper.instance();
      expect(isOpen).toBe(true);
      expect(spy).not.toHaveBeenCalled();
      instance.hideWithDelay();
      jest.runTimersToTime(100);
      instance.onMouseOverTooltipContent();
      jest.runTimersToTime(200);
      expect(spy).toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent(synthEvent);
      expect(instance._hideTimeout).toBeFalsy();
      wrapper.detach();
    });

    it('should allow a function to be used as children', () => {
      const renderChildren = jest.fn();
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen toggle={toggle}>
          {renderChildren}
        </TooltipPopoverWrapper>
      );
      expect(renderChildren).toHaveBeenCalled();
    });

    it('should render children properly when children is a function', () => {
      isOpen = true;
      const wrapper = mount(
        <TooltipPopoverWrapper target="target" isOpen={isOpen} toggle={toggle} className="tooltip show" trigger="hover">
          {() => 'Tooltip Content'}
        </TooltipPopoverWrapper>,
        { attachTo: container }
      );
  
      const Tooltips = document.getElementsByClassName('tooltip');
      expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
      expect(Tooltips.length).toBe(1);
      expect(Tooltips[0].textContent).toBe('Tooltip Content');
  
      expect(wrapper.find('.tooltip.show').hostNodes().length).toBe(1);
      expect(Tooltips.length).toBe(1);
      expect(Tooltips[0].textContent).toBe('Tooltip Content');
  
      wrapper.detach();
    });
  });
});
