import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import { deprecated, mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  end: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.array,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool,
  positionFixed: PropTypes.bool,
  right: deprecated(PropTypes.bool, 'Please use "end" instead.'),
};

const defaultProps = {
  tag: 'div',
  flip: true,
  modifiers: [],
};

const directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom',
};

class DropdownMenu extends React.Component {

  render() {
    const { className, cssModule, dark, end, right, tag, flip, modifiers, persist, positionFixed, ...attrs } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'dropdown-menu',
      {
        'dropdown-menu-dark': dark,
        'dropdown-menu-end': end || right,
        show: this.context.isOpen,
      }
    ), cssModule);

    const Tag = tag;

    if (persist || (this.context.isOpen && !this.context.inNavbar)) {

      const position1 = directionPositionMap[this.context.direction] || 'bottom';
      const position2 = (end || right) ? 'end' : 'start';
      const poperPlacement = `${position1}-${position2}`;
      const poperModifiers = [
        ...modifiers,
        {
          name: 'flip',
          enabled: !!flip,
        },
       ];

      return (
        <Popper
          placement={poperPlacement}
          modifiers={poperModifiers}
          strategy={positionFixed ? 'fixed' : undefined}
        >
          {({ ref, style, placement }) => {
            let combinedStyle = { ...this.props.style, ...style };
            return (
              <Tag
                tabIndex="-1"
                role="menu"
                ref={ref}
                {...attrs}
                style={combinedStyle}
                aria-hidden={!this.context.isOpen}
                className={classes}
                data-popper-placement={placement}
              />
            );
          }}
        </Popper>
      );
    }

    return (
      <Tag
        tabIndex="-1"
        role="menu"
        {...attrs}
        aria-hidden={!this.context.isOpen}
        className={classes}
        data-popper-placement={attrs.placement}
      />
    );
  }
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextType = DropdownContext;

export default DropdownMenu;
