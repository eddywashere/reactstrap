/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';

import PageTitle from '../UI/PageTitle';
import ModalExample from '../examples/Modal';
import ModalBackdropExample from '../examples/ModalBackdrop';
import ModalNestedExample from '../examples/ModalNested';
import ModalCustomTimeoutExample from '../examples/ModalCustomTimeout';
import ModalFadelessExample from '../examples/ModalFadeless';
import ModalFullscreenExample from '../examples/ModalFullscreen';
import ModalExternalExample from '../examples/ModalExternal';
import ModalCustomCloseIconExample from '../examples/ModalCustomCloseIcon';
import ModalCustomCloseButtonExample from '../examples/ModalCustomCloseButton';
import ModalDestructuringExample from '../examples/ModalDestructuring';
import ModalFocusAfterClose from '../examples/ModalFocusAfterClose';

const ModalBackdropExampleSource = require('!!raw-loader!../examples/ModalBackdrop');
const ModalCustomCloseButtonExampleSource = require('!!raw-loader!../examples/ModalCustomCloseButton');
const ModalCustomCloseIconExampleSource = require('!!raw-loader!../examples/ModalCustomCloseIcon');
const ModalCustomTimeoutExampleSource = require('!!raw-loader!../examples/ModalCustomTimeout');
const ModalExampleSource = require('!!raw-loader!../examples/Modal');
const ModalExternalExampleSource = require('!!raw-loader!../examples/ModalExternal');
const ModalFadelessExampleSource = require('!!raw-loader!../examples/ModalFadeless');
const ModalFullscreenExampleSource = require('!!raw-loader!../examples/ModalFullscreen');

const ModalNestedExampleSource = require('!!raw-loader!../examples/ModalNested');
const ModalDestructuringExampleSource = require('!!raw-loader!../examples/ModalDestructuring');
const ModalFocusOnDestroyExampleSource = require('!!raw-loader!../examples/ModalFocusAfterClose');

const ModalsPage = () => {
  return (
    <div>
      <PageTitle title="Modals" />
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalExample buttonLabel="Launch Modal" />
          </div>
          <div className="btn">
            <ModalExample
              buttonLabel="Launch Modal with custom className"
              className="my-custom-modal"
            />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalExampleSource}
        </PrismCode>
      </pre>
      <h4>Properties</h4>
      <pre>
        <PrismCode className="language-jsx">
          {`Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  // if modal should be fullscreen
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool, // always fullscreen
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl']), // fullscreen below breakpoints
  ]),
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // if body of modal should be scrollable when content is long
  scrollable: PropTypes.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition
  // timeout is 300ms by default to match bootstrap
  // see [Fade](/components/fade/) for more details
  modalTransition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.object,
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: PropTypes.bool, // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: PropTypes.bool, // defaults to true
  // container to append the modal to
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
}`}
        </PrismCode>
      </pre>

      <h4>Fullscreen Modals</h4>

      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalFullscreenExample buttonLabel="Full screen" fullscreen />
          </div>
          <div className="btn">
            <ModalFullscreenExample buttonLabel="Full screen below sm" fullscreen="sm" />
          </div>
          <div className="btn">
            <ModalFullscreenExample buttonLabel="Full screen below md" fullscreen="md" />
          </div>
          <div className="btn">
            <ModalFullscreenExample buttonLabel="Full screen below lg" fullscreen="lg" />
          </div>
          <div className="btn">
            <ModalFullscreenExample buttonLabel="Full screen below xl" fullscreen="xl" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalFullscreenExampleSource}
        </PrismCode>
      </pre>

      <h4>Backdrop</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalBackdropExample buttonLabel="Launch Modal" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalBackdropExampleSource}
        </PrismCode>
      </pre>

      <h4>Nested Modals</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalNestedExample buttonLabel="Launch Modal w/ Nested Example" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalNestedExampleSource}
        </PrismCode>
      </pre>

      <h4>Modals with Custom Transition Timeouts</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalCustomTimeoutExample buttonLabel="Launch Modal with Custom Transition Timeouts Example" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalCustomTimeoutExampleSource}
        </PrismCode>
      </pre>

      <h4>Modals without Fade Effect</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalFadelessExample buttonLabel="Launch Modal without Fade Effect Example" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalFadelessExampleSource}
        </PrismCode>
      </pre>

      <h4>Modals with external button</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalExternalExample buttonLabel="Launch Modal with external close button" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalExternalExampleSource}
        </PrismCode>
      </pre>

      <h4>Modals with custom close icon</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalCustomCloseIconExample buttonLabel="Launch Modal with custom close Icon" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalCustomCloseIconExampleSource}
        </PrismCode>
      </pre>
      <h4>Modals with custom close button</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalCustomCloseButtonExample buttonLabel="Launch Modal with custom close button" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalCustomCloseButtonExampleSource}
        </PrismCode>
      </pre>

      <h4>Destructuring</h4>
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalDestructuringExample buttonLabel="Launch Modal" />
          </div>
        </div>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ModalDestructuringExampleSource}
        </PrismCode>
      </pre>

       <h4>Focus after close</h4>
       <div className="docs-example">
         <div className="btn-group">
           <div className="btn">
             <ModalFocusAfterClose />
           </div>
         </div>
       </div>
       <pre>
         <PrismCode className="language-jsx">
           {ModalFocusOnDestroyExampleSource}
         </PrismCode>
       </pre>
    </div>
  );
};

export default ModalsPage;
