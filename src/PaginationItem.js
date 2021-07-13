import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import { PaginationItemContext } from './PaginationItemContext';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: tagPropType,
};

const defaultProps = {
  tag: 'li',
};

const PaginationItem = (props) => {
  const {
    active,
    className,
    cssModule,
    disabled,
    tag: Tag,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      <PaginationItemContext.Provider value={{ 'disabled': disabled }}>
        {children}
      </PaginationItemContext.Provider>
    </Tag>
  );
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
