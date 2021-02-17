import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const CarouselControl = (props) => {
  const { direction, onClickHandler, cssModule, directionText, className } = props;

  const anchorClasses = mapToCssModules(classNames(
    className,
    `carousel-control-${direction}`
  ), cssModule);

  const iconClasses = mapToCssModules(classNames(
    `carousel-control-${direction}-icon`
  ), cssModule);

  const screenReaderClasses = mapToCssModules(classNames(
    'visually-hidden'
  ), cssModule);


  return (
    <a
      className={anchorClasses}
      style={{cursor: "pointer"}}
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <span className={iconClasses} aria-hidden="true" />
      <span className={screenReaderClasses}>{directionText || direction}</span>
    </a>
  );
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string,
  className: PropTypes.string,
};

export default CarouselControl;
