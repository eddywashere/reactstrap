import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Collapse from './Collapse';
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
  accordionId: PropTypes.string.isRequired,
};

const defaultProps = {
  tag: 'div'
};

const AccordionItem = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    children,
    accordionId,
    ...attributes
  } = props;

  const { open } = useContext(AccordionContext);

  const classes = mapToCssModules(classNames(
    className,
    'accordion-collapse',
  ), cssModule);

  return (
    <Collapse
      {...attributes}
      className={classes}
      ref={innerRef} isOpen={Array.isArray(open) ? open.includes(accordionId) : open === accordionId }>
      <Tag className="accordion-body">{children}</Tag>
    </Collapse>    
  );
};

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
