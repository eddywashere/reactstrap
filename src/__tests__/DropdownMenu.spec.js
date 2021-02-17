import React from 'react';
import { mount } from 'enzyme';
import { Popper } from 'react-popper';
import { DropdownMenu } from '../';
import { DropdownContext } from '../DropdownContext';

describe('DropdownMenu', () => {
  let isOpen;
  let direction;
  let inNavbar;

  beforeEach(() => {
    isOpen = false;
    direction = 'down';
    inNavbar = false;
  });

  it('should render children', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>
          <p>Content</p>
        </DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().text()).toBe('Content');
    expect(wrapper.find('.dropdown-menu').hostNodes().length).toBe(1);
  });

  it('should not have the class "show" when isOpen context is false', () => {
    isOpen = false;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>
          <p>Content</p>
        </DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(false);
    expect(wrapper.find('.show').hostNodes().length).toBe(0);
  });

  it('should have the class "show" when isOpen context is true', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>
          <p>Content</p>
        </DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('show')).toBe(true);
    expect(wrapper.find('.show').hostNodes().length).toBe(1);
  });

  it('should render left aligned menus by default', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-end')).toBe(false);
  });

  it('should render right aligned menus', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu end>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-end')).toBe(true);
  });

  it('should render down when direction is unknown on the context', () => {
    isOpen = true;
    direction = 'unknown';
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render down when direction is "down" on the context', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('bottom-start');
  });

  it('should render up when direction is "up" on the context', () => {
    isOpen = true;
    direction = 'up';
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('top-start');
  });

  it('should render left when direction is "start" on the context', () => {
    isOpen = true;
    direction = 'start';
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('left-start');
  });

  it('should render right when direction is "end" on the context', () => {
    isOpen = true;
    direction = 'end';
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('placement')).toBe('right-start');
  });

  it('should not disable flip modifier by default', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    const modifiers = wrapper.find(Popper).prop('modifiers');
    expect(modifiers.length).toBe(1);
    expect(modifiers).toContainEqual({"enabled": true, "name": "flip"});
  });

  it('should disable flip modifier when flip is false', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu flip={false}>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('modifiers')).toEqual([{"enabled": false, "name": "flip"}]);
  });

  it('should position using fixed mode when positionFixed is true', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu positionFixed>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).prop('strategy')).toBe('fixed');
  });

  it('should not render Popper when isOpen is false', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu end>Ello world</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find(Popper).length).toBe(0);
  });

  it('should render custom tag', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu tag="main">Yo!</DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.text()).toBe('Yo!');
    expect(wrapper.childAt(0).hasClass('dropdown-menu')).toBe(true);
    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });

  it('should not have the class "dropdown-menu-dark" by default', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu>
          <p>Keep it light</p>
        </DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-dark')).toBe(false);
  });

  it('should have the class "dropdown-menu-dark" when dark is true', () => {
    isOpen = true;
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, direction, inNavbar }}>
        <DropdownMenu dark>
          <p>Let's go dark</p>
        </DropdownMenu>
      </DropdownContext.Provider>
    );

    expect(wrapper.find('.dropdown-menu').hostNodes().hasClass('dropdown-menu-dark')).toBe(true);
  });
});
