/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import OverviewExample from '../examples/InputGroupOverview';
const OverviewExampleSource = require('!!raw-loader!../examples/InputGroupOverview');
import AddonExample from '../examples/InputGroupAddon';
const AddonExampleSource = require('!!raw-loader!../examples/InputGroupAddon');
import AddonSizingExample from '../examples/InputGroupSizing';
const AddonSizingExampleSource = require('!!raw-loader!../examples/InputGroupSizing');
import ButtonExample from '../examples/InputGroupButton';
const ButtonExampleSource = require('!!raw-loader!../examples/InputGroupButton');
import ButtonShorthandExample from '../examples/InputGroupButtonShorthand';
const ButtonShorthandExampleSource = require('!!raw-loader!../examples/InputGroupButtonShorthand');

export default class InputGroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <PageTitle title="Input Group" />
        <div className="docs-example">
          <OverviewExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {OverviewExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`InputGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string
};

InputGroupButton.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  groupClassName: PropTypes.string, // only used in shorthand
  groupAttributes: PropTypes.object, // only used in shorthand
  className: PropTypes.string
};`}
          </PrismCode>
        </pre>
        <SectionTitle>Addons</SectionTitle>
        <div className="docs-example">
          <div>
            <AddonExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AddonExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Group Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <AddonSizingExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AddonSizingExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Buttons / Dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Button Shorthand (DEPRECATED)</SectionTitle>
        <p>
          Button shorthand is deprecated. Below are the updated examples of how to use <code>InputGroupAddon</code> to
          accomplish the same output.
        </p>
        <p style={{ textDecoration: 'line-through' }}>
          Button shorthand is a convenience method for adding just a button. It is triggered when only a single string
          is the child. A Button will be created and all of the props will be passed to it with the exception of
          <code>groupClassName</code> and <code>groupAttributes</code>, which are used to added classes and attributes
          to the wrapping container. This means you can add your <code>onClick</code> and other handlers directly to
          <code>InputGroupButton</code>. If you want your string to not be wrapped in a button, then you really want to
          use <code>InputGroupAddon</code> (see Addons above for that).
        </p>
        <div className="docs-example">
          <div>
            <ButtonShorthandExample />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonShorthandExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
