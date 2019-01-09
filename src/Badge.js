import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

const Badge = React.forwardRef((props, ref) => {
  let {
    className,
    cssModule,
    color,
    pill,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'badge-' + color,
    pill ? 'badge-pill' : false
  ), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
