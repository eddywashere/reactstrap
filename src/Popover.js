import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopperContent from './PopperContent';
import { getTarget, DOMElement, mapToCssModules, omit, popperAttachments } from './utils';

const propTypes = {
  placement: PropTypes.oneOf(popperAttachments),
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]).isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placementPrefix: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 0,
};

const defaultProps = {
  isOpen: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: () => {},
};

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.handleProps();
  }

  componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.addTargetEvents();
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.clearShowTimeout();
    this.addTargetEvents();
    if (!this.props.isOpen) {
      this.toggle();
    }
  }

  hide() {
    this.clearHideTimeout();
    this.removeTargetEvents();
    if (this.props.isOpen) {
      this.toggle();
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    if (e.target !== this._target && !this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeTargetEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));
    const classes = mapToCssModules(classNames(
      'popover-inner',
      this.props.className
    ), this.props.cssModule);

    const popperClasses = mapToCssModules(classNames(
      'popover',
      'show'
    ), this.props.cssModule);

    return (
      <PopperContent
        className={popperClasses}
        target={this.props.target}
        isOpen={this.props.isOpen}
        placement={this.props.placement}
        placementPrefix={this.props.placementPrefix}
      >
        <div {...attributes} className={classes} />
      </PopperContent>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
