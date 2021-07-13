/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import TabsExample from '../examples/Tabs';
const TabsExampleSource = require('!!raw-loader!../examples/Tabs');

export default function TabsPage() {
  return (
    <div>
      <PageTitle title="Tabs" />
      <hr />
      <div className="docs-example">
        <TabsExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {TabsExampleSource}
        </PrismCode>
      </pre>
      <h4>TabContent Properties</h4>
      <pre>
        <PrismCode className="language-jsx">
          {`TabContent.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  // if all inactive tabs should be destructed/removed
  unmountOnExit: PropTypes.bool // defaults to false
  // if set to true, renders only active tab
}`}
        </PrismCode>
      </pre>
      <h4>TabPane Properties</h4>
      <pre>
        <PrismCode className="language-jsx">
          {`TabPane.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any;
}`}
        </PrismCode>
      </pre>
    </div>
  );
}
