import React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle } from '../';
import { DropdownContext } from '../DropdownContext';

describe('DropdownToggle', () => {
  const setReferenceNode = jest.fn();
  let isOpen;
  let inNavbar;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    inNavbar = false;
    setReferenceNode.mockClear();
    toggle = () => {
      isOpen = !isOpen;
    };
  });

  it('should wrap text', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle>Ello world</DropdownToggle>
      </DropdownContext.Provider>
    );

    expect(wrapper.text()).toBe('Ello world');
  });

  it('should add default visually-hidden content', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle />
      </DropdownContext.Provider>
    );

    expect(wrapper.text()).toBe('Toggle Dropdown');
    expect(wrapper.find('.visually-hidden').hostNodes().length).toBe(1);
  });

  it('should add default visually-hidden content', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle aria-label="Dropup Toggle" />
      </DropdownContext.Provider>
    );

    expect(wrapper.text()).toBe('Dropup Toggle');
    expect(wrapper.find('.visually-hidden').hostNodes().length).toBe(1);
  });

  it('should render elements', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle>Click Me</DropdownToggle>
      </DropdownContext.Provider>
    );

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').hostNodes().length).toBe(1);
  });

  it('should render a caret', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle caret>Ello world</DropdownToggle>
      </DropdownContext.Provider>
    );

    expect(wrapper.childAt(0).childAt(0).hasClass('dropdown-toggle')).toBe(true);
  });

  describe('color', () => {
    it('should render the dropdown as a BUTTON element with default color secondary', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle />
        </DropdownContext.Provider>
      );

      expect(wrapper.find('button').hostNodes().length).toBe(1);
      expect(wrapper.find('button').hostNodes().hasClass('btn-secondary')).toBe(true);
    });

    it('should render the dropdown as a BUTTON element with explicit color success', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle color="success" />
        </DropdownContext.Provider>
      );

      expect(wrapper.find('button').hostNodes().length).toBe(1);
      expect(wrapper.find('button').hostNodes().hasClass('btn-success')).toBe(true);
    });

    it('should render the dropdown as an A element with no color attribute', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle tag="a" />
        </DropdownContext.Provider>
      );

      expect(wrapper.find('a').hostNodes().length).toBe(1);
      expect(wrapper.find('a[color]').hostNodes().length).toBe(0);
    });

    it('should render the dropdown as a DIV element with no color attribute', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle tag="div" color="success" />
        </DropdownContext.Provider>
      );

      expect(wrapper.find('div').hostNodes().length).toBe(1);
      expect(wrapper.find('div[color]').hostNodes().length).toBe(0);
    });
  });

  it('should render a split', () => {
    const wrapper = mount(
      <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
        <DropdownToggle split>Ello world</DropdownToggle>
      </DropdownContext.Provider>
    );

    expect(wrapper.childAt(0).childAt(0).hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const onClick = jest.fn();
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle onClick={() => onClick()}>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );

      const instance = wrapper.instance();

      instance.onClick({});
      expect(onClick).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', () => {
      toggle = jest.fn();
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );

      const instance = wrapper.instance();

      instance.onClick({
        preventDefault: () => {
        }
      });
      expect(toggle).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('should preventDefault when disabled', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle disabled>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });

  describe('nav', () => {
    it('should add .nav-link class', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle nav>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );

      expect(wrapper.find('a').hostNodes().length).toBe(1);
      expect(wrapper.find('.nav-link').hostNodes().length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', () => {
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle nav>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );

      expect(wrapper.prop('tag')).toBe(undefined);
    });

    it('should preventDefault', () => {
      const e = { preventDefault: jest.fn() };
      const wrapper = mount(
        <DropdownContext.Provider value={{ isOpen, inNavbar, toggle }}>
          <DropdownToggle nav>Ello world</DropdownToggle>
        </DropdownContext.Provider>
      );
      const instance = wrapper.instance();

      instance.onClick(e);
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });
});
