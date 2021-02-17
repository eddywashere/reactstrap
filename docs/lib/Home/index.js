import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router';
import Example from '../examples/import-basic';

const importBasic = require('!!raw-loader!../examples/import-basic');

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">reactstrap</h1>
              <p className="lead">Easy to use React Bootstrap 4 components</p>
              <p>
                <Button
                  outline
                  color="danger"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  GitHub
                </Button>
                <Button
                  color="danger"
                  tag={Link}
                  to="/components/"
                >
                  Components
                </Button>
                <Button color="primary" tag={Link} to="/premium-themes/">
                  Premium Themes
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8} className="docSearch-content">
            <h2>Installation</h2>
            <hr />
            <h3 className="mt-5">NPM</h3>
            <p>Install reactstrap and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">
                npm install --save reactstrap react react-dom
              </PrismCode>
            </pre>
            <p>Import the components you need</p>
            <div className="docs-example">
              <Example />
            </div>
            <pre>
              <PrismCode className="language-jsx">{importBasic}</PrismCode>
            </pre>
            <h3 className="mt-5">Getting Started with Create React App</h3>
            <p>
              Follow the{' '}
              <a
                href="https://facebook.github.io/create-react-app/docs/getting-started"
                target="_blank"
                rel="noreferrer"
              >
                Create React App instructions
              </a>{' '}
              and then follow the{' '}
              <a
                href="https://facebook.github.io/create-react-app/docs/adding-bootstrap"
                target="_blank"
                rel="noreferrer"
              >
                Adding Bootstrap instructions
              </a>
              .
            </p>
            <h4>tl;dr</h4>
            <pre>
              <PrismCode className="language-bash">
                {`npx create-react-app my-app
cd my-app
npm start`}
              </PrismCode>
            </pre>
            <p>
              Then open{' '}
              <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
                http://localhost:3000/
              </a>{' '}
              to see your app. The initial structure of your app is setup. Next,
              let's add reactstrap and bootstrap.
            </p>
            <h4>Adding Bootstrap</h4>
            <p>
              Install reactstrap and Bootstrap from NPM. Reactstrap does not
              include Bootstrap CSS so this needs to be installed as well:
            </p>
            <pre>
              <PrismCode className="language-bash">
                {`npm install --save bootstrap
npm install --save reactstrap react react-dom`}
              </PrismCode>
            </pre>
            <p>
              Import Bootstrap CSS in the <code>src/index.js</code> file:
            </p>
            <pre>
              <PrismCode className="language-bash">
                import 'bootstrap/dist/css/bootstrap.min.css';
              </PrismCode>
            </pre>
            <p>
              Import required reactstrap components within{' '}
              <code>src/App.js</code> file or your custom component files:
            </p>
            <pre>
              <PrismCode className="language-bash">
                {`import { Button } from 'reactstrap';`}
              </PrismCode>
            </pre>
            <p>
              Now you are ready to use the imported reactstrap components within
              your component hierarchy defined in the render method. Here is an
              example{' '}
              <a
                href="https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935"
                target="_blank"
                rel="noreferrer"
              >
                <code>App.js</code>
              </a>{' '}
              redone using reactstrap.
            </p>
            <h2 className="mt-5">CDN</h2>
            <p>
              Reactstrap can be included directly in your application's bundle
              or excluded during compilation and linked directly to a CDN.
            </p>
            <pre>
              <PrismCode className="language-jsx">
                https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js
              </PrismCode>
            </pre>
            <blockquote className="blockquote">
              <p>
                <strong>Note</strong>: When using the external CDN library, be
                sure to include the required dependencies as necessary{' '}
                <strong>prior</strong> to the Reactstrap library:
              </p>
              <ul>
                <li>
                  <a
                    href="//cdnjs.com/libraries/react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    href="//unpkg.com/react-transition-group/dist/react-transition-group.min.js"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ReactTransitionGroup
                  </a>
                </li>
              </ul>
            </blockquote>
            <p>
              Check out the demo{' '}
              <a href="http://output.jsbin.com/dimive/latest">here</a>
            </p>
            <h2 className="mt-5">About the Project</h2>
            <hr />
            <p>
              This library contains React Bootstrap 4 components that favor
              composition and control. The library does not depend on jQuery or
              Bootstrap javascript. However,{' '}
              <a href="https://popper.js.org/">https://popper.js.org/</a> via{' '}
              <a href="https://github.com/souporserious/react-popper">
                https://github.com/souporserious/react-popper
              </a>{' '}
              is relied upon for advanced positioning of content like Tooltips,
              Popovers, and auto-flipping Dropdowns.
            </p>
            <p>
              There are a few core concepts to understand in order to make the
              most out of this library.
            </p>
            <p>
              1) Your content is expected to be composed via props.children
              rather than using named props to pass in Components.
            </p>
            <pre>
              <PrismCode className="language-jsx">
                {`// Content passed in via props
const Example = (props) => {
  return (
    <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
  );
}

// Content passed in as children (Preferred)
const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}`}
              </PrismCode>
            </pre>
            <p>
              2) Attributes in this library are used to pass in state,
              conveniently apply modifier classes, enable advanced functionality
              (like popperjs), or automatically include non-content based
              elements.
            </p>
            <p>Examples:</p>
            <ul>
              <li>
                <code>isOpen</code> - current state for items like dropdown,
                popover, tooltip
              </li>
              <li>
                <code>toggle</code> - callback for toggling isOpen in the
                controlling component
              </li>
              <li>
                <code>color</code> - applies color classes, ex:{' '}
                <code>{'<Button color="danger"/>'}</code>
              </li>
              <li>
                <code>size</code> for controlling size classes. ex:{' '}
                <code>{'<Button size="sm"/>'}</code>
              </li>
              <li>
                <code>tag</code> - customize component output by passing in an
                element name or Component
              </li>
              <li>
                boolean based props (attributes) when possible for alternative
                style classes or visually-hidden content
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
