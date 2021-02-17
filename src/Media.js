import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: tagPropType,
  top: PropTypes.bool,
};

const Media = (props) => {
  const {
    body,
    bottom,
    className,
    cssModule,
    heading,
    left,
    list,
    middle,
    object,
    right,
    tag,
    top,
    ...attributes
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  const Tag = tag || defaultTag;

  const classes = mapToCssModules(classNames(
    className,
    {
      'flex-grow-1': body,
      'flex-shrink-0': left || right,
      'align-self-start': top,
      'align-self-end': bottom,
      'align-self-center': middle,
      'd-flex': !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;

export default Media;
