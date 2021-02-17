/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import TooltipExample from '../examples/Tooltip';
const TooltipExampleSource = require('!!raw-loader!../examples/Tooltip');
import TooltipAutoHideExample from '../examples/TooltipAutoHide';
const TooltipExampleAutoHideSource = require('!!raw-loader!../examples/TooltipAutoHide');
import TooltipExampleMulti from '../examples/TooltipMulti';
const TooltipExampleMultiSource = require('!!raw-loader!../examples/TooltipMulti');
import TooltipExampleUncontrolled from '../examples/TooltipUncontrolled';
const TooltipExampleUncontrolledSource = require('!!raw-loader!../examples/TooltipUncontrolled');
import TooltipUpdateExample from '../examples/TooltipUpdate';
const TooltipUpdateExampleSource = require('!!raw-loader!../examples/TooltipUpdate');

export default class TooltipsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Tooltips" />
        <p>Tooltips are built with <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a>.</p>
        <div className="docs-example">
          <TooltipExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // space separated list of triggers (e.g. "click hover focus")
  trigger: PropTypes.string,
  // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  // boolean to control the state of the tooltip
  isOpen: PropTypes.bool,
  hideArrow: PropTypes.bool,
  // callback for toggling isOpen in the controlling component. It will receive an object with info about the event that triggered it
  toggle: PropTypes.func,
  // target element or element ID, popover is attached to this element
  target:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
  // optionally override show/hide delays - default { show: 0, hide: 50 }
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  className: PropTypes.string,
  // Apply class to the popper component
  popperClassName: PropTypes.string,
  // Apply class to the inner-tooltip
  innerClassName: PropTypes.string,
  // Apply class to the arrow-tooltip ('arrow' by default)
  arrowClassName: PropTypes.string,
  // optionally hide tooltip when hovering over tooltip content - default true
  autohide: PropTypes.bool,
  // convenience attachments for popover
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
  // Custom ref handler that will be assigned to the "ref" of the <div> wrapping the tooltip elements
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

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
        <SectionTitle>Tooltip Disable Autohide</SectionTitle>
        <div className="docs-example">
          <TooltipAutoHideExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleAutoHideSource}
          </PrismCode>
        </pre>
        <SectionTitle>Tooltips List</SectionTitle>
        <div className="docs-example">
          <TooltipExampleMulti />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleMultiSource}
          </PrismCode>
        </pre>
        <SectionTitle>Uncontrolled Tooltip</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledTooltip</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.
        </p>
        <div className="docs-example">
          <TooltipExampleUncontrolled />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipExampleUncontrolledSource}
          </PrismCode>
        </pre>
        <SectionTitle>Repositioning Tooltips</SectionTitle>
        <p>
          If you need to reposition a tooltip due to content changes or target placement changes, use
          the <code>update</code> function to manually reposition it. This function is exposed
          as a render prop for <code>children</code>.
        </p>
        <div className="docs-example">
          <TooltipUpdateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TooltipUpdateExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
