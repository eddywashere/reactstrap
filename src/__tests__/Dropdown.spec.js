import React from 'react';
import { mount, shallow } from 'enzyme';
import { Popper, Reference } from 'react-popper';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../';
import { keyCodes } from '../utils';

describe('Dropdown', () => {
  let isOpen;
  let toggle;
  let element;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (jest.isMockFunction(Dropdown.prototype.componentDidUpdate)) Dropdown.prototype.componentDidUpdate.mockRestore();
    if (jest.isMockFunction(Dropdown.prototype.handleProps)) Dropdown.prototype.handleProps.mockRestore();
    if (jest.isMockFunction(Dropdown.prototype.toggle)) Dropdown.prototype.toggle.mockRestore();
    if (jest.isMockFunction(Dropdown.prototype.handleDocumentClick)) Dropdown.prototype.handleDocumentClick.mockRestore();
    document.body.removeChild(element);
    document.body.innerHTML = '';
    element = null;
  });

  it('should render a single child', () => {
    const wrapper = mount(<Dropdown isOpen={isOpen} toggle={toggle}>Ello world</Dropdown>);

    expect(wrapper.text()).toBe('Ello world');
    expect(wrapper.find('.dropdown').hostNodes().length).toBe(1);
  });

  it('should render multiple children when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(wrapper.find('.btn').hostNodes().text()).toBe('Toggle');
    expect(wrapper.find('.dropdown').hostNodes().length).toBe(1);
    expect(wrapper.find('.dropdown-item').hostNodes().length).toBe(1);
    expect(wrapper.childAt(0).childAt(0).children().length).toBe(2);
  });

  it('should not call props.toggle when disabled ', () => {
    isOpen = true;
    let props = createSpyObj('props', ['toggle']);
    const wrapper = mount(
      <Dropdown isOpen={isOpen} toggle={props.toggle} disabled>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const instance = wrapper.instance();

    instance.toggle({ preventDefault: () => { } });
    expect(props.toggle).not.toHaveBeenCalled();
  });

  describe('handleProps', () => {
    it('should not pass custom props to html attrs', () => {
      const wrapper = mount(
        <Dropdown inNavbar a11y isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.find('.dropdown').prop('inNavbar')).toBe(undefined);
      expect(wrapper.find('.dropdown').prop('toggle')).toBe(undefined);
      expect(wrapper.find('.dropdown').prop('a11y')).toBe(undefined);
      expect(wrapper.find('.dropdown').prop('isOpen')).toBe(undefined);
    });

    it('should be called on componentDidUpdate when isOpen changed', () => {
      jest.spyOn(Dropdown.prototype, 'componentDidUpdate');
      jest.spyOn(Dropdown.prototype, 'handleProps');
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      const instance = wrapper.instance();

      expect(Dropdown.prototype.componentDidUpdate.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.handleProps.mock.calls.length).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      isOpen = true;
      wrapper.setProps({ isOpen: isOpen });

      expect(Dropdown.prototype.componentDidUpdate.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.handleProps.mock.calls.length).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen did not change', () => {
      jest.spyOn(Dropdown.prototype, 'componentDidUpdate');
      jest.spyOn(Dropdown.prototype, 'handleProps');
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
      const instance = wrapper.instance();

      expect(Dropdown.prototype.componentDidUpdate.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.handleProps.mock.calls.length).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      wrapper.setProps({ 'data-foo': 'bar' });

      expect(Dropdown.prototype.componentDidUpdate.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.handleProps.mock.calls.length).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });
  });

  describe('removeEvents', () => {
    it('should be called on componentWillUnmount', () => {
      jest.spyOn(Dropdown.prototype, 'componentWillUnmount');
      jest.spyOn(Dropdown.prototype, 'removeEvents');
      isOpen = true;
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(Dropdown.prototype.componentWillUnmount.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.removeEvents.mock.calls.length).toBe(0);

      wrapper.unmount();

      expect(Dropdown.prototype.componentWillUnmount.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.removeEvents.mock.calls.length).toBe(1);
    });
  });

  describe('handleDocumentClick', () => {
    it('should call toggle on document click', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'handleDocumentClick');
      jest.spyOn(Dropdown.prototype, 'toggle');

      mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      document.body.click();

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);
    });

    it('should call toggle on container click', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'handleDocumentClick');
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown id="test" isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      document.getElementById('test').click();

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should not call toggle on inner container click', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'handleDocumentClick');
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      document.getElementById('divider').click();

      expect(Dropdown.prototype.handleDocumentClick.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should not call toggle when right-clicked', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.instance().handleDocumentClick({ type: 'click', which: 3 });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      wrapper.detach();
    });

    it('should call toggle when key is tab', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.instance().handleDocumentClick({ type: 'keyup', which: keyCodes.tab });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);
      wrapper.detach();
    });
  });

  describe('keyboard events', () => {
    it('should call toggle on ESC keydown when it isOpen is true', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="test">Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#test').hostNodes().simulate('keydown', { which: keyCodes.esc });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should call toggle on down arrow keydown when it isOpen is false', () => {
      isOpen = false;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should call toggle on up arrow keydown when it isOpen is false', () => {
      isOpen = false;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', { which: keyCodes.up });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the first menuitem when toggle is triggered by enter keydown', () => {
      jest.useFakeTimers();
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus = jest.fn();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element }
      );

      expect(focus.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', { which: keyCodes.enter });
      jest.runAllTimers();

      expect(focus.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the first menuitem when toggle is triggered by up arrow keydown', () => {
      jest.useFakeTimers();
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus = jest.fn();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element }
      );

      expect(focus.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', { which: keyCodes.up });
      jest.runAllTimers();

      expect(focus.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the first menuitem when toggle is triggered by down arrow keydown', () => {
      jest.useFakeTimers();
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus = jest.fn();
      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem onFocus={focus}>Test</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element }
      );

      expect(focus.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', { which: keyCodes.down });
      jest.runAllTimers();

      expect(focus.mock.calls.length).toBe(1);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the next menuitem on down arrow keydown when isOpen is true', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(1);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should focus the next menuitem on ctrl + n keydown when isOpen is true', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.n, ctrlKey: true });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(1);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should focus the first menu item matching the character pressed when isOpen is true', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Reactstrap</DropdownItem>
            <DropdownItem onFocus={focus2}>4</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}> Lyfe</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: 52 });
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(1);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should skip non-menu items focus the next menu item on down arrow keydown when it isOpen is true and anther item is focused', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#second').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the previous menu item on up arrow keydown when isOpen is true and another item is focused', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#second').hostNodes().simulate('keydown', { which: keyCodes.up });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(1);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should focus the previous menuitem on ctrl + p keydown when isOpen is true and another item is focused', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#second').hostNodes().simulate('keydown', { which: keyCodes.p, ctrlKey: true });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(1);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should wrap focus with down arrow keydown', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#third').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(1);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should wrap focus with up arrow keydown', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.up });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus the 1st item on home key keyDown', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="zero" disabled>Test</DropdownItem>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.home });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(1);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should focus the last item on end key keyDown', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="zero" disabled>Test</DropdownItem>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.end });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should focus other direct child elements with tabindex >= 0', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <button id="second" onFocus={focus2}>Button</button>
            <DropdownItem id="divider" divider />
            <input id="third" onFocus={focus3} type="text" placeholder="Text input" />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(1);
      expect(focus3.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should focus other direct child elements with tabindex >= 0, skiping divider and disabled elements', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus1 = jest.fn();
      const focus2 = jest.fn();
      const focus3 = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
            <button id="second" onFocus={focus2}>Button</button>
            <DropdownItem id="divider" divider />
            <DropdownItem id="zero" disabled>Test</DropdownItem>
            <input id="third" tabIndex={0} onFocus={focus3} type="text" placeholder="Text input" />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#second').hostNodes().simulate('keydown', { which: keyCodes.down });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(focus1.mock.calls.length).toBe(0);
      expect(focus2.mock.calls.length).toBe(0);
      expect(focus3.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should trigger a click on links when an item is focused and space[bar] it pressed', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="#" id="first" onClick={click}>Test</DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);
      expect(click.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should trigger a click on buttons when an item is focused and space[bar] it pressed (override browser defaults for focus management)', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem id="first" onClick={click}>Test</DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);
      expect(click.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should not trigger anything when within an input', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();
      const focus = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}><input id="input" /></DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.up });
      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.down });
      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(click.mock.calls.length).toBe(0);
      expect(focus.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should not trigger anything when within a textarea', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();
      const focus = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}><textarea id="input" /></DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.up });
      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.down });
      wrapper.find('#input').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(click.mock.calls.length).toBe(0);
      expect(focus.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should toggle when isOpen is true and tab keyDown on menuitem', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const focus = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="first">First</DropdownItem>
            <DropdownItem id="second" onFocus={focus}>Second</DropdownItem>
          </DropdownMenu>
        </Dropdown>,
        { attachTo: element }
      );

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.tab });

      expect(focus.mock.calls.length).toBe(0);
      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(1);

      wrapper.detach();
    });

    it('should not trigger anything when disabled', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();
      const focus = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle} disabled>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}>Test</DropdownItem>
            <DropdownItem id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.up });
      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.down });
      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(click.mock.calls.length).toBe(0);
      expect(focus.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should not focus anything when all items disabled', () => {
      isOpen = true;
      jest.spyOn(Dropdown.prototype, 'toggle');
      const click = jest.fn();
      const focus = jest.fn();

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem disabled tag="div" id="first" onClick={click} onFocus={focus}>Test</DropdownItem>
            <DropdownItem disabled id="second">Test</DropdownItem>
            <DropdownItem id="divider" divider />
            <DropdownItem disabled id="third">Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);

      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.up });
      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.down });
      wrapper.find('#first').hostNodes().simulate('keydown', { which: keyCodes.space });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      expect(click.mock.calls.length).toBe(0);
      expect(focus.mock.calls.length).toBe(0);

      wrapper.detach();
    });

    it('should not call preventDefault when dropdown has focus and f5 key is pressed', () => {
      isOpen = false;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      const event = { preventDefault: ()=>{} };
      const spy = jest.spyOn(event, 'preventDefault');

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: 116/*f5 key*/});
      expect(spy).not.toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: 16/*shift key*/});
      expect(spy).not.toHaveBeenCalled();

      wrapper.detach();
    });

    it('should call preventDefault when dropdown has focus and any key(up, down, esc, enter, home, end or any alphanumeric key) is pressed', () => {
      isOpen = false;
      jest.spyOn(Dropdown.prototype, 'toggle');

      const wrapper = mount(
        <Dropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
            <DropdownItem id="divider" divider />
          </DropdownMenu>
        </Dropdown>, { attachTo: element });

      expect(Dropdown.prototype.toggle.mock.calls.length).toBe(0);
      const event = { preventDefault: ()=>{} };
      const spy = jest.spyOn(event, 'preventDefault');

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.down});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.up});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.esc});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.end});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.home});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: keyCodes.enter});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: 65 /*A key*/});
      expect(spy).toHaveBeenCalled();

      wrapper.find('[aria-haspopup]').hostNodes().simulate('keydown', {...event, which: 90 /*A key*/});
      expect(spy).toHaveBeenCalled();

      wrapper.detach();
    });
  });

  it('should render different size classes', () => {
    const small = mount(
      <Dropdown group isOpen={isOpen} size="sm" toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    const large = mount(
      <Dropdown group isOpen={isOpen} size="lg" toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(small.find('.btn-group-sm').hostNodes().length).toBe(1);
    expect(large.find('.btn-group-lg').hostNodes().length).toBe(1);
  });

  describe('Dropdown with nav', () => {
    it('should render a single child', () => {
      const wrapper = mount(<Dropdown nav isOpen={isOpen} toggle={toggle}>Ello world</Dropdown>);

      expect(wrapper.find('.nav-item').hostNodes().text()).toBe('Ello world');
      expect(wrapper.find('.nav-item').hostNodes().length).toBe(1);
    });

    it('should render multiple children when isOpen', () => {
      isOpen = true;
      const wrapper = mount(
        <Dropdown nav isOpen={isOpen} toggle={toggle}>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.find('.btn').hostNodes().text()).toBe('Toggle');
      expect(wrapper.find('.nav-item').hostNodes().length).toBe(1);
      expect(wrapper.find('.dropdown-item').hostNodes().length).toBe(1);
      expect(wrapper.find('.nav-item').hostNodes().children().length).toBe(2);
    });
  });

  describe('Dropdown in navbar', () => {
    it('should open without popper with inNavbar prop', () => {
      isOpen = true;
      const wrapper = mount(
        <Dropdown nav inNavbar isOpen={isOpen} toggle={toggle}>
          <DropdownToggle caret nav>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.find('.dropdown-toggle').first().type()).toEqual('a');
      expect(wrapper.find('.dropdown-menu').first().type()).toEqual('div');
    });

    it('should open with popper without inNavbar prop', () => {
      isOpen = true;
      const wrapper = mount(
        <Dropdown nav isOpen={isOpen} toggle={toggle}>
          <DropdownToggle caret nav>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.find('.dropdown-toggle').parent().type()).toEqual(Reference);
      expect(wrapper.find('.dropdown-menu').parent().type()).toEqual(Popper);
    });
  });

  describe('active', () => {
    it('should render an active class', () => {
      const wrapper = shallow(<Dropdown active nav />);

      expect(wrapper.childAt(0).childAt(0).hasClass('active')).toBe(true);
    });

    it('should render an active class when a child DropdownItem is active IF setActiveFromChild is true', () => {
      const wrapper = shallow(
        <Dropdown nav inNavbar setActiveFromChild toggle={toggle}>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>
              Test
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.childAt(0).childAt(0).hasClass('active')).toBe(true);
    });
  });

  it('should render with correct class when direction is set', () => {
    const dropup = shallow(<Dropdown direction="up" />);
    const dropleft = shallow(<Dropdown direction="left" />);
    const dropright = shallow(<Dropdown direction="right" />);

    expect(dropup.childAt(0).childAt(0).hasClass('dropup')).toBe(true);
    expect(dropleft.childAt(0).childAt(0).hasClass('dropleft')).toBe(true);
    expect(dropright.childAt(0).childAt(0).hasClass('dropright')).toBe(true);
  });

  describe('menuRole prop', () => {

    it('should set correct roles for children when menuRole is menu', () => {
      const wrapper = mount(
        <Dropdown menuRole={'menu'} toggle={toggle}>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>
              Test
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.props().menuRole).toEqual('menu')
      expect(wrapper.find('[aria-haspopup="menu"]').length).toEqual(1)
      expect(wrapper.find('[role="menuitem"]').length).toEqual(1)
      expect(wrapper.find('[role="menu"]').length).toEqual(1)
    })

    it('should set correct roles for children when menuRole is menu', () => {
      const wrapper = mount(
        <Dropdown menuRole={'listbox'} toggle={toggle}>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active>
              Test
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

      expect(wrapper.props().menuRole).toEqual('listbox')
      expect(wrapper.find('[aria-haspopup="listbox"]').length).toEqual(1)
      expect(wrapper.find('[role="option"]').length).toEqual(1)
      expect(wrapper.find('[role="listbox"]').length).toEqual(1)
    })
  })
});
