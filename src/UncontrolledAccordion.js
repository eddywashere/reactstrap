import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';
import Accordion from './Accordion';

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
  defaultOpen: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  stayOpen: PropTypes.bool,
};

const defaultProps = {
  tag: 'div'
};

const UncontrolledAccordion = ({ defaultOpen, stayOpen, ...props }) => {
  const [open, setOpen] = useState(defaultOpen || (stayOpen ? [] : undefined));
  const toggle = (id) => {
    if (stayOpen) {
      open.includes(id) ? setOpen(open.filter(accordionId => accordionId !== id)) : setOpen([...open, id]);
    } else {
      open === id ? setOpen(undefined) : setOpen(id);
    }
  };

  return <Accordion {...props} open={open} toggle={toggle} />;
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default UncontrolledAccordion;
