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

const CardImgOverlay = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-img-overlay'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

CardImgOverlay.propTypes = propTypes;
CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;
