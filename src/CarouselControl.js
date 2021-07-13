import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const CarouselControl = (props) => {
  const { direction, onClickHandler, cssModule, directionText, className, ...attributes } = props;

  const anchorClasses = mapToCssModules(classNames(
    className,
    `carousel-control-${direction}`
  ), cssModule);

  const iconClasses = mapToCssModules(classNames(
    `carousel-control-${direction}-icon`
  ), cssModule);

  const screenReaderClasses = mapToCssModules(classNames(
    'sr-only'
  ), cssModule);


  return (
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      {...attributes}
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
