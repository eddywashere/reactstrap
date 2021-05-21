/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import AccordionExample from '../examples/Accordion';
import AccordionFlushExample from '../examples/AccordionFlush';
import UncontrolledAccordionExample from '../examples/UncontrolledAccordion';
import UncontrolledAccordionStayOpenExample from '../examples/UncontrolledAccordionStayOpen';

const AccordionExampleSource = require('!!raw-loader!../examples/Accordion');
const AccordionFlushExampleSource = require('!!raw-loader!../examples/AccordionFlush');
const UncontrolledAccordionExampleSource = require('!!raw-loader!../examples/UncontrolledAccordion');
const UncontrolledAccordionStayOpenExampleSource =
    require('!!raw-loader!../examples/UncontrolledAccordionStayOpen');

export default class AccordionPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Accordion" />
        <div className="docs-example">
          <AccordionExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            { AccordionExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Accordion.propTypes = {
    openId: Proptypes.string.isRequired,
    toggle: Proptypes.func.isRequired,
    tag: tagPropType,
    className: PropTypes.string,
    flush: PropTypes.boolean,
    cssModule: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
};

AccordionBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  accordionId: PropTypes.string.isRequired,
};

AccordionHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  targetId: PropTypes.string.isRequired,
};

AccordionItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
};
`}
          </PrismCode>
        </pre>

        <SectionTitle>Flush</SectionTitle>
        <p>
          Add <code>flush</code> to remove the default background-color, some borders,
          and some rounded corners to render Accordions edge-to-edge with their parent container.
        </p>
        <div className="docs-example">
          <AccordionFlushExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{AccordionFlushExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Uncontrolled</SectionTitle>
        <div className="docs-example">
          <UncontrolledAccordionExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            { UncontrolledAccordionExampleSource }
          </PrismCode>
        </pre>

        <SectionTitle>Stay Open</SectionTitle>
        <p>
          Add the <code>stayOpen</code> prop to make accordion items stay open when another item is opened.
        </p>
        <div className="docs-example">
          <UncontrolledAccordionStayOpenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            { UncontrolledAccordionStayOpenExampleSource }
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`UncontrolledAccordion.propTypes = {
    tag: tagPropType,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
};

AccordionBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  accordionId: PropTypes.string.isRequired,
};

AccordionHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
  targetId: PropTypes.string.isRequired,
};

AccordionItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.node,
};
`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
