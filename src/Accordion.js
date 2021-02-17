import React, { useState } from 'react';
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
};

const defaultProps = {
  tag: 'div'
};

const Accordion = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'accordion',
  ), cssModule);

  const [openId, setOpenId] = useState();

  return (
    <AccordionContext.Provider value={{
      openId,
      toggle: (id) => {
        openId === id ? setOpenId(undefined) : setOpenId(id);
      },
    }}>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
