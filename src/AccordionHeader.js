import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import { AccordionContext } from './AccordionContext';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  targetId: PropTypes.string.isRequired,
};

const defaultProps = {
  tag: 'h2'
};

const AccordionHeader = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    children,
    targetId,
    ...attributes
  } = props;
  const { open, toggle } = useContext(AccordionContext);

  const classes = mapToCssModules(classNames(
    className,
    'accordion-header',
  ), cssModule);

  const buttonClasses = mapToCssModules(classNames(
    'accordion-button',
    {
      collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
    },
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef}>
      <button type="button" className={buttonClasses} onClick={() => toggle(targetId)}>
        {children}
      </button>
    </Tag>
  );
};

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
