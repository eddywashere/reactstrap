import React from 'react';
import { shallow, mount } from 'enzyme';
import { Collapse } from '../';

describe('Collapse', () => {
  let isOpen;
  let wrapper;
  const toggle = () => {
    isOpen = !isOpen;
    if (wrapper != null) {
      wrapper.setProps({ isOpen });
    }
  };

  beforeEach(() => {
    isOpen = false;
    jest.useFakeTimers();
  });

  afterEach(() => {
    // fast forward time for collapse to fade out
    jest.runTimersToTime(400);
    jest.clearAllTimers();
  });

  it('should render children', () => {
    wrapper = mount(<Collapse><p>hello</p></Collapse>);
    expect(wrapper.find('p').text()).toBe('hello');
  });

  it('works with strict mode', () => {
    const spy = jest.spyOn(console, 'error');
    wrapper = mount(<React.StrictMode><Collapse/></React.StrictMode>);
    expect(wrapper.instance()).toBeTruthy();
    expect(spy).not.toHaveBeenCalled();
  })

  it('should have default isOpen value', () => {
    wrapper = shallow(<Collapse />);
    expect(wrapper.instance().props.isOpen).toEqual(false);
  });

  it('should render with class "collapse"', () => {
    wrapper = mount(<Collapse />);
    expect(wrapper.find('div').hasClass('collapse')).toEqual(true);
  });

  it('should render with class "navbar-collapse" if it has prop navbar', () => {
    wrapper = mount(<Collapse navbar />);
    expect(wrapper.find('div').hasClass('navbar-collapse')).toEqual(true);
  });

  it('should render with class "show" when isOpen is true', () => {
    wrapper = mount(<Collapse isOpen />);
    expect(wrapper.find('div').hasClass('show')).toEqual(true);
  });

  it('should set height to null when isOpen is true', () => {
    wrapper = shallow(<Collapse isOpen />);
    expect(wrapper.state('height')).toBe(null);
  });

  it('should not set height when isOpen is false', () => {
    wrapper = shallow(<Collapse isOpen={false} />);
    expect(wrapper.state('height')).toBe(null);
  });

  it('should forward all styles', () => {
    wrapper = mount(<Collapse isOpen style={{ backgroundColor: 'black' }} />);
    expect(wrapper.find('div').prop('style').backgroundColor).toBe('black');
  });

  it('should forward all callbacks', () => {
    const callbacks = {
      onEnter: jest.fn(),
      onEntering: jest.fn(),
      onEntered: jest.fn(),
      onExit: jest.fn(),
      onExiting: jest.fn(),
      onExited: jest.fn(),
    };
    wrapper = mount(<Collapse isOpen={isOpen} {...callbacks} />);
    toggle();
    expect(callbacks.onEnter).toHaveBeenCalled();
    expect(callbacks.onEntering).toHaveBeenCalled();
    expect(callbacks.onEntered).not.toHaveBeenCalled();
    jest.runTimersToTime(350);
    expect(callbacks.onEntered).toHaveBeenCalled();
    expect(callbacks.onExit).not.toHaveBeenCalled();

    toggle();
    expect(callbacks.onExit).toHaveBeenCalled();
    expect(callbacks.onExiting).toHaveBeenCalled();
    expect(callbacks.onExited).not.toHaveBeenCalled();
    jest.runTimersToTime(350);
    expect(callbacks.onExiting).toHaveBeenCalled();
    expect(callbacks.onExited).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should apply correct bootstrap classes', () => {
    wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    expect(wrapper.update().find('div').prop('className')).toBe('collapsing');
    jest.runTimersToTime(350);
    expect(wrapper.update().find('div').prop('className')).toBe('collapse show');

    toggle();
    expect(wrapper.update().find('div').prop('className')).toBe('collapsing');
    jest.runTimersToTime(350);
    expect(wrapper.update().find('div').prop('className')).toBe('collapse');

    wrapper.unmount();
  });

  it('should set inline style to 0 when isOpen change to false', () => {
    isOpen = true;
    wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    expect(wrapper.state('height')).toBe(0);
    wrapper.unmount();
  });

  it('should remove inline style when isOpen change to true after transition', () => {
    wrapper = mount(<Collapse isOpen={isOpen} />);
    toggle();
    jest.runTimersToTime(380);
    expect(wrapper.state('height')).toBe(null);
    wrapper.unmount();
  });
});
