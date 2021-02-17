import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Reference } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import { mapToCssModules, tagPropType } from './utils';
import Button from './Button';

const propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: tagPropType,
  nav: PropTypes.bool,
};

const defaultProps = {
  'aria-haspopup': true,
  color: 'secondary',
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  }

  render() {
    const { className, color, cssModule, caret, split, nav, tag, innerRef, ...props } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = mapToCssModules(classNames(
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }
    ), cssModule);
    const children =
      typeof props.children !== 'undefined' ? (
        props.children
      ) : (
        <span className="visually-hidden">{ariaLabel}</span>
      );

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return (
        <Tag
          {...props}
          className={classes}
          onClick={this.onClick}
          aria-expanded={this.context.isOpen}
          children={children}
        />
      );
    }

    return (
      <Reference innerRef={innerRef}>
        {({ ref }) => (
          <Tag
            {...props}
            {...{ [typeof Tag === 'string' ? 'ref' : 'innerRef']: ref }}

            className={classes}
            onClick={this.onClick}
            aria-expanded={this.context.isOpen}
            children={children}
          />
        )}
      </Reference>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextType = DropdownContext;

export default DropdownToggle;
