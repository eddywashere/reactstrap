import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
};

const Popover = (props) => {
  const popperClasses = classNames(
    'popover',
    'show',
    props.popperClassName
  );

  const classes = classNames(
    'popover-inner',
    props.innerClassName
  );


  return (
    <TooltipPopoverWrapper
      {...props}
      arrowClassName="popover-arrow"
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;


export default Popover;
