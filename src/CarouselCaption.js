import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const CarouselCaption = (props) => {
  const { captionHeader, captionText, cssModule, className, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'carousel-caption',
    'd-none',
    'd-md-block'
  ), cssModule);

  return (
    <div {...attributes} className={classes}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.node,
  captionText: PropTypes.node.isRequired,
  cssModule: PropTypes.object,
  className: PropTypes.string,
};

export default CarouselCaption;
