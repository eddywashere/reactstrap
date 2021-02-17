import React from 'react';
import { shallow, mount } from 'enzyme';
import { Alert } from '../';

describe('Alert', () => {
  it('should render children', () => {
    const alert = mount(<Alert>Yo!</Alert>);
    expect(alert.text()).toBe('Yo!');
  });

  it('should pass className down', () => {
    const alert = mount(<Alert className="test-class-name">Yo!</Alert>);
    expect(alert.find('.alert').hostNodes().prop('className')).toContain('test-class-name');
  });

  it('should pass close className down', () => {
    function noop() { }
    const alert = mount(<Alert toggle={noop} closeClassName="test-class-name">Yo!</Alert>);
    expect(alert.find('.btn-close').hostNodes().prop('className')).toContain('test-class-name');
  });

  it('should pass other props down', () => {
    const alert = mount(<Alert data-testprop="testvalue">Yo!</Alert>);
    expect(alert.find('.alert').hostNodes().prop('data-testprop')).toContain('testvalue');
  });

  it('should have default transitionTimeouts', () => {
    const alert = mount(<Alert>Yo!</Alert>);

    const transition = alert.find('Transition');
    expect(transition.prop('timeout')).toEqual(150);
    expect(transition.prop('appear')).toBe(true);
    expect(transition.prop('enter')).toBe(true);
    expect(transition.prop('exit')).toBe(true);
  });

  it('should have support configurable transitionTimeouts', () => {
    const alert = mount(
      <Alert transition={{ timeout: 0, appear: false, enter: false, exit: false }}>
        Yo!
      </Alert>
    );

    const transition = alert.find('Transition');
    expect(transition.prop('timeout')).toEqual(0);
    expect(transition.prop('appear')).toBe(false);
    expect(transition.prop('enter')).toBe(false);
    expect(transition.prop('exit')).toBe(false);
  });

  it('should have "success" as default color', () => {
    const alert = mount(<Alert>Yo!</Alert>).find('div');
    expect(alert.hasClass('alert-success')).toBe(true);
  });

  it('should accept color prop', () => {
    const alert = mount(<Alert color="warning">Yo!</Alert>).find('div');
    expect(alert.hasClass('alert-warning')).toBe(true);
  });

  it('should use a div tag by default', () => {
    const alert = mount(<Alert>Yo!</Alert>);
    expect(alert.find('div').hostNodes().length).toBe(1);
  });

  it('should be non dismissible by default', () => {
    const alert = mount(<Alert>Yo!</Alert>).find('div');
    expect(alert.find('button').hostNodes().length).toEqual(0);
    expect(alert.hasClass('alert-dismissible')).toBe(false);
  });

  it('should show dismiss button if passed toggle', () => {
    const alert = mount(<Alert color="danger" toggle={() => { }}>Yo!</Alert>).find('div');
    expect(alert.find('button').hostNodes().length).toEqual(1);
    expect(alert.hasClass('alert-dismissible')).toBe(true);
  });

  it('should support custom tag', () => {
    const alert = mount(<Alert tag="p">Yo!</Alert>);
    expect(alert.find('p').hostNodes().length).toBe(1);
  });

  it('should be empty if not isOpen', () => {
    const alert = shallow(<Alert isOpen={false}>Yo!</Alert>);
    expect(alert.html()).toBe('');
  });

  it('should be dismissible', () => {
    const onClick = jest.fn();
    const alert = mount(<Alert color="danger" toggle={onClick}>Yo!</Alert>);

    alert.find('button').hostNodes().simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render close button with custom aria-label', () => {
    const alert = mount(<Alert toggle={() => { }} closeAriaLabel="oseclay">Yo!</Alert>).find('div');
    const closeButton = alert.find('button').hostNodes().first();
    expect(closeButton.prop('aria-label')).toBe('oseclay');
  });
});
