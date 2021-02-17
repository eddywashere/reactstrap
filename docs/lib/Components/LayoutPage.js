/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';
import LayoutExample from '../examples/Layout';
import LayoutRowColsExample from '../examples/LayoutRowCols';
import ContainerResponsiveExample from '../examples/ContainerResponsive';

const LayoutExampleSource = require('!!raw-loader!../examples/Layout');
const LayoutRowColsExampleSource = require('!!raw-loader!../examples/LayoutRowCols');
const ContainerResponsiveExampleSource = require('!!raw-loader!../examples/ContainerResponsive');

export default class LayoutsPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Layout Components (Container, Row, Col)" />
        <div className="docs-example">
          <LayoutExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LayoutExampleSource}
          </PrismCode>
        </pre>
        <h4>Container Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Container.propTypes = {
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  // applies .container-fluid class if bool or .container-{breakpoint} if string
}`}
          </PrismCode>
        </pre>
        <h4>Row Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}`}
          </PrismCode>
        </pre>
        <h4>Col Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-\`width\`-12
    // auto => col-auto or col-\`width\`-auto
    // true => col or col-\`width\`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}`}
          </PrismCode>
        </pre>
        <h4>Container</h4>
        <div className="docs-example">
          <ContainerResponsiveExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ContainerResponsiveExampleSource}
          </PrismCode>
        </pre>
        <h4>Row Columns</h4>
        <div className="docs-example">
          <LayoutRowColsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LayoutRowColsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
