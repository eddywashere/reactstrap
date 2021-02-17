import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string
};

const defaultProps = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

const Spinner = props => {
  const {
    className,
    cssModule,
    type,
    size,
    color,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      size ? `spinner-${type}-${size}` : false,
      `spinner-${type}`,
      color ? `text-${color}` : false
    ),
    cssModule
  );

  return (
    <Tag role="status" {...attributes} className={classes}>
      {children &&
        <span className={mapToCssModules('visually-hidden', cssModule)}>
          {children}
        </span>
      }
    </Tag>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
