import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const CardFooter = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-footer'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
