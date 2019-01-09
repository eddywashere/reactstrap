import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    row,
    disabled,
    check,
    inline,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    row ? 'row' : false,
    check ? 'form-check' : 'form-group',
    check && inline ? 'form-check-inline' : false,
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
