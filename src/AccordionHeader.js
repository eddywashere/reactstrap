import React from 'react';
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
  const classes = mapToCssModules(classNames(
    className,
    'accordion-header',
  ), cssModule);

  return (
    <AccordionContext.Consumer>
      {({ openId, toggle}) => {
        const buttonClasses = mapToCssModules(classNames(
          'accordion-button',
          { collapsed: openId !== targetId },
        ), cssModule);

        return (
          <Tag {...attributes} className={classes} ref={innerRef}>
            <button type="button" className={buttonClasses} onClick={() => toggle(targetId)}>
              {children}
            </button>
          </Tag>
        );
      }}
    </AccordionContext.Consumer>
  );
};

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
