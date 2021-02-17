/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import AccordionExample from '../examples/Accordion';
const AccordionExampleSource = require('!!raw-loader!../examples/Accordion');

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
  id: PropTypes.string.isRequired,
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
