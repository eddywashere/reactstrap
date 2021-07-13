import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabContext } from './TabContext';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any,
};

const defaultProps = {
  tag: 'div',
};

export default function TabPane(props) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag,
    ...attributes
  } = props;

  const tabIsActive = (activeTabId) => tabId === activeTabId;
  const getClasses = (activeTabId) => mapToCssModules(classNames('tab-pane', className, { active: tabIsActive(activeTabId) }), cssModule);
  
  return (
    <TabContext.Consumer>
      {({activeTabId, unmountOnExit}) => (!unmountOnExit || (unmountOnExit && tabIsActive(activeTabId))) ? <Tag {...attributes} className={getClasses(activeTabId)} /> : <></>}
    </TabContext.Consumer>
  );
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

