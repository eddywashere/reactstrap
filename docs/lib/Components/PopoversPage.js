/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import PopoverExample from '../examples/Popover';
const PopoverExampleSource = require('!!raw-loader!../examples/Popover');
import PopoverExampleMulti from '../examples/PopoverMulti';
const PopoverExampleMultiSource = require('!!raw-loader!../examples/PopoverMulti');
import PopoverFocusExample from '../examples/PopoverFocus';
const PopoverFocusExampleSource = require('!!raw-loader!../examples/PopoverFocus');
import UncontrolledPopoverExample from '../examples/PopoverUncontrolled';
const UncontrolledPopoverExampleSource = require('!!raw-loader!../examples/PopoverUncontrolled');
import PopoverUpdateExample from '../examples/PopoverUpdate';
const PopoverUpdateExampleSource = require('!!raw-loader!../examples/PopoverUpdate');

export default class PopoversPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Popovers" />
        <p>Popovers are built with <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a>.</p>
        <div className="docs-example">
          <PopoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Popover.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // space separated list of triggers (e.g. "click hover focus")
  trigger: PropTypes.string,
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  target:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
  className: PropTypes.string,
  // Apply class to the popper component
  popperClassName: PropTypes.string,
  // Apply class to the inner-popover
  innerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ]),
  // Custom modifiers that are passed to Popper.js, see https://popper.js.org/docs/v2/modifiers/
  modifiers: PropTypes.array,
  offset: PropTypes.arrayOf(PropTypes.number),

  // Whether to show/hide the popover with a fade effect
  // (default: true)
  fade: PropTypes.bool,

  // Whether to flip the direction of the popover if too close to
  // the container edge
  // (default: true)
  flip: PropTypes.bool,
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Popovers Trigger</SectionTitle>
        <p>Trigger each popover to see information about the trigger</p>
        <div className="docs-example">
          <PopoverFocusExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverFocusExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Popovers Placements</SectionTitle>
        <div className="docs-example">
          <PopoverExampleMulti />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverExampleMultiSource}
          </PrismCode>
        </pre>
        <SectionTitle>UncontrolledPopovers</SectionTitle>
        <div className="docs-example">
          <UncontrolledPopoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {UncontrolledPopoverExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Repositioning Popovers</SectionTitle>
        <p>
          If you need to reposition a popover due to content changes or target placement changes, use
          the <code>update</code> function to manually reposition it. This function is exposed
          as a render prop for <code>children</code>.
        </p>
        <div className="docs-example">
          <PopoverUpdateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PopoverUpdateExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
