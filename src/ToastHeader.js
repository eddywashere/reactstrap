import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object,
};

const defaultProps = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'me-auto',
  closeAriaLabel: 'Close',
  charCode: 215,
};

const ToastHeader = (props) => {
  let closeButton;
  let icon;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    close,
    tagClassName,
    icon: iconProp,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'toast-header'
  ), cssModule);

  if (!close && toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className={mapToCssModules('btn-close', cssModule)} aria-label={closeAriaLabel} />
    );
  }

  if (typeof iconProp === "string") {
    icon = (
      <svg
        className={mapToCssModules(`rounded text-${iconProp}`)}
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect fill="currentColor" width="100%" height="100%"></rect>
      </svg>
    );
  } else if (iconProp) {
    icon = iconProp;
  }

  return (
    <WrapTag {...attributes} className={classes}>
      {icon}
      <Tag className={mapToCssModules(classNames(tagClassName, { "ms-2": icon != null }), cssModule)}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
};

ToastHeader.propTypes = propTypes;
ToastHeader.defaultProps = defaultProps;

export default ToastHeader;
