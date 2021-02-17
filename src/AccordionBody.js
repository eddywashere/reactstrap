import React from 'react';
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
  id: PropTypes.string.isRequired,
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
    id,
    ...attributes
  } = props;

  return (
    <AccordionContext.Consumer>
      {({ openId }) => {
        const classes = mapToCssModules(classNames(
          className,
          'accordion-collapse',
        ), cssModule);

        return (
          <Collapse id={id} tag={Tag} {...attributes} className={classes} ref={innerRef} isOpen={openId === id}>
            <Tag className="accordion-body">{children}</Tag>
          </Collapse>
        );
      }}
    </AccordionContext.Consumer>
  );
};

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
