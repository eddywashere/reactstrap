/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import React from 'react';
import PropTypes from 'prop-types';
import { Manager } from 'react-popper';
import classNames from 'classnames';
import { DropdownContext } from './DropdownContext';
import { mapToCssModules, omit, keyCodes, tagPropType } from './utils';

const propTypes = {
  a11y: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  size: PropTypes.string,
  tag: tagPropType,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool,
};

const defaultProps = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};

const preventDefaultKeys = [
  keyCodes.space,
  keyCodes.enter,
  keyCodes.up,
  keyCodes.down,
  keyCodes.end,
  keyCodes.home
]

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);

    this.containerRef = React.createRef();
  }

  getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: (this.props.direction === 'down' && this.props.dropup) ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getContainer() {
    return this.containerRef.current;
  }

  getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  }

  getMenuItems() {
    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
  }

  addEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
    const container = this.getContainer();
    const clickIsInContainer = container.contains(e.target) && container !== e.target;
    const clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';

    if ((clickIsInContainer && !clickIsInInput) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    if (
      /input|textarea/i.test(e.target.tagName)
      || (keyCodes.tab === e.which && (e.target.getAttribute('role') !== 'menuitem' || !this.props.a11y))
    ) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || ((e.which >= 48) && (e.which <= 90))) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (this.getMenuCtrl() === e.target) {
      if (
        !this.props.isOpen
        && ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1)
      ) {
        this.toggle(e);
        setTimeout(() => this.getMenuItems()[0].focus());
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && (e.target.getAttribute('role') === 'menuitem')) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if (
        [keyCodes.down, keyCodes.up].indexOf(e.which) > -1
        || ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
      ) {
        const $menuitems = this.getMenuItems();
        let index = $menuitems.indexOf(e.target);
        if (keyCodes.up === e.which || (keyCodes.p === e.which && e.ctrlKey)) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || (keyCodes.n === e.which && e.ctrlKey)) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }
        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[0].focus();
      } else if ((e.which >= 48) && (e.which <= 90)) {
        const $menuitems = this.getMenuItems();
        const charPressed = String.fromCharCode(e.which).toLowerCase();
        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();
          if (firstLetter === charPressed) {
            $menuitems[i].focus();
            break;
          }
        }
      }
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const {
      className,
      cssModule,
      direction,
      isOpen,
      group,
      size,
      nav,
      setActiveFromChild,
      active,
      tag,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']);

    const Tag = tag || (nav ? 'li' : 'div');

    let subItemIsActive = false;
    if (setActiveFromChild) {
      React.Children.map(this.props.children[1].props.children,
        (dropdownItem) => {
          if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
        }
      );
    }

    const classes = mapToCssModules(classNames(
      className,
      nav && active ? 'active' : false,
      setActiveFromChild && subItemIsActive ? 'active' : false,
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        dropup: direction === 'up',
        dropstart: direction === 'start' || direction === 'left',
        dropend: direction === 'end' || direction === 'right',
        show: isOpen,
        'nav-item': nav
      }
    ), cssModule);

    return (
      <DropdownContext.Provider value={this.getContextValue()}>
        <Manager>
          <Tag
            {...attrs}
            {...{ [typeof Tag === 'string' ? 'ref' : 'innerRef']: this.containerRef }}
            onKeyDown={this.handleKeyDown}
            className={classes}
          />
        </Manager>
      </DropdownContext.Provider>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
