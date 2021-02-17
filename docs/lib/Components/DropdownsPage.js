/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown } from 'reactstrap';
import SectionTitle from '../UI/SectionTitle';
import DropdownExample from '../examples/Dropdown';
import DropdownSizingExample from '../examples/DropdownSizing';
import CustomDropdownExample from '../examples/CustomDropdown';
import DropdownUncontrolledExample from '../examples/DropdownUncontrolled';
import DropdownSetActiveFromChildExample from '../examples/DropdownSetActiveFromChild';

const DropdownExampleSource = require('!!raw-loader!../examples/Dropdown');
const CustomDropdownExampleSource = require('!!raw-loader!../examples/CustomDropdown');
const DropdownUncontrolledExampleSource = require('!!raw-loader!../examples/DropdownUncontrolled');
const DropdownSetActiveFromChildSource = require('!!raw-loader!../examples/DropdownSetActiveFromChild');

export default class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExample2 = this.toggle.bind(this);
    this.state = {
      example2: false
    };
  }

  toggle() {
    this.setState({
      example2: !this.state.example2
    });
  }

  render() {
    return (
      <div>
        <PageTitle title="Dropdowns" />
        <p>
          The <code>Dropdown</code> component is used to pass the <code>isOpen</code> &amp; <code>toggle</code> props via context to the following components: <code>DropdownToggle</code>, <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the <code>Button</code> component internally, meaning it also accepts all the props the <Link to="/components/buttons/">Button component</Link> accepts.
        </p>
        <div className="docs-example">
          <DropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Dropdown.propTypes = {
  a11y: PropTypes.bool, // defaults to true. Set to false to enable more bootstrap like tabbing behavior
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  // For Dropdown usage inside a Nav
  nav: PropTypes.bool,
  active: PropTypes.bool,
  // For Dropdown usage inside a Navbar (disables popper)
  inNavbar: PropTypes.bool,
  tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
  toggle: PropTypes.func,
  setActiveFromChild: PropTypes.bool
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  end: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  // Custom modifiers that are passed to Popper.js, see https://popper.js.org/docs/v2/modifiers/
  modifiers: PropTypes.array,
  persist: PropTypes.bool, // presist the popper, even when closed. See #779 for reasoning
  // passed to popper, see https://popper.js.org/popper-documentation.html#Popper.Defaults.positionFixed
  positionFixed: PropTypes.bool
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool, // default: true
  text: PropTypes.bool
};`}
          </PrismCode>
        </pre>
        <SectionTitle>Alignment</SectionTitle>
        <p>To align the <code>DropdownMenu</code> to the right, add a <code>right</code> prop to <code>Dropdown</code>.</p>
        <div className="docs-example">
          <div className="d-flex justify-content-center">
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                Dropdown's menu is right-aligned
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown's menu is right-aligned
  </DropdownToggle>
  <DropdownMenu end>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <SectionTitle>Dark dropdowns</SectionTitle>
        <p>To opt into darker <code>DropdownMenu</code> to match a dark <code>Navbar</code>, add a <code>dark</code> prop to <code>DropdownMenu</code>.</p>
        <div className="docs-example">
          <div>
            <UncontrolledDropdown>
              <DropdownToggle caret>
                Dropdown's menu is dark
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem active>Active Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown's menu is dark
  </DropdownToggle>
  <DropdownMenu dark>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem active>Active Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <SectionTitle>Menu Headers</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem header>Header</DropdownItem>'}
          </PrismCode>
        </pre>
        <SectionTitle>Menu Dividers</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem divider/>'}
          </PrismCode>
        </pre>
        <SectionTitle>Menu Items</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <SectionTitle>Disabled Menu Items</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem disabled>Action</DropdownItem>'}
          </PrismCode>
        </pre>
        <SectionTitle>Plaintext Menu Items</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{'<DropdownItem text>Dropdown item text</DropdownItem>'}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <DropdownSizingExample group size="lg" />
            <DropdownSizingExample className="mt-1" />
            <DropdownSizingExample className="mt-1" group size="sm" />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>

<Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    ...
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>
        <h4>Custom Dropdown</h4>
        <div className="docs-example">
          <CustomDropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CustomDropdownExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Uncontrolled Dropdown</SectionTitle>
        <p>
          For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledDropdown</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work. For the <code>ButtonDropdown</code> flavor, an uncontrolled component have been made as well; <code>UncontrolledButtonDropdown</code>.
        </p>
        <div className="docs-example">
          <DropdownUncontrolledExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownUncontrolledExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Drop direction variations</SectionTitle>
        <div className="docs-example">
          <Row>
            <Col>
              <Dropdown direction="up" isOpen={this.state.ddDropup} toggle={() => { this.setState({ ddDropup: !this.state.ddDropup }); }}>
                <DropdownToggle caret>
                  Dropup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown direction="start" isOpen={this.state.ddDropleft} toggle={() => { this.setState({ ddDropleft: !this.state.ddDropleft }); }}>
                <DropdownToggle caret>
                  Dropleft
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown direction="end" isOpen={this.state.ddDropright} toggle={() => { this.setState({ ddDropright: !this.state.ddDropright }); }}>
                <DropdownToggle caret>
                  Dropright
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown direction="up" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown direction="start" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>

<Dropdown direction="end" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>

        <SectionTitle>Modifiers</SectionTitle>
        <div className="docs-example">
          <Row>
            <Col>
              <Dropdown
                isOpen={this.state.ddModifiers}
                toggle={() => { this.setState({ ddModifiers: !this.state.ddModifiers }); }}
              >
                <DropdownToggle>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: (data) => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: 'auto',
                            maxHeight: '100px',
                          },
                        };
                      },
                    },
                  }}
                >
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<Dropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle>
    Dropdown
  </DropdownToggle>
  <DropdownMenu
    modifiers={{
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: (data) => {
          return {
            ...data,
            styles: {
              ...data.styles,
              overflow: 'auto',
              maxHeight: '100px',
            },
          };
        },
      },
    }}
  >
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
          </PrismCode>
        </pre>

        <SectionTitle>setActiveFromChild</SectionTitle>
        <p>
          Use <code>setActiveFromChild</code> prop to automatically set the dropdown to active when any of the dropdown menu items are active. Note: this prop will not work in conjunction with react-router <code>Link</code> and <code>activeClassName</code>.
        </p>
        <div className="docs-example">
          <DropdownSetActiveFromChildExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {DropdownSetActiveFromChildSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
