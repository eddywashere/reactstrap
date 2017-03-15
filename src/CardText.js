import React from 'react';
const { PropTypes } = React;
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'p'
};

const CardText = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

export default CardText;
