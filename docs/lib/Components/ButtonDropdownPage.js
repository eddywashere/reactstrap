/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu } from 'reactstrap';
import Example from '../examples/ButtonDropdownMulti';
import ExampleSplit from '../examples/ButtonDropdownMultiSplit';
import ButtonDropdownExample from '../examples/ButtonDropdown';
import ButtonDropdownUncontrolledExample from '../examples/ButtonDropdownUncontrolled'
import SectionTitle from '../UI/SectionTitle';

const ButtonDropdownExampleSource = require('!!raw-loader!../examples/ButtonDropdown');

export default class ButtonDropdownPage extends React.Component {
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
        <PageTitle title="Button Dropdown" />
        <div className="docs-example">
          <ButtonDropdownExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonDropdownExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};`}
          </PrismCode>
        </pre>
        <SectionTitle>Single button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <Example color="primary" text="Primary" />
            <Example color="secondary" text="Secondary" />
            <Example color="success" text="Success" />
            <Example color="info" text="Info" />
            <Example color="warning" text="Warning" />
            <Example color="danger" text="Danger" />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret color="primary">
    Text
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <SectionTitle>Split button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <ExampleSplit color="primary" text="Primary" />
            <ExampleSplit color="secondary" text="Secondary" />
            <ExampleSplit color="success" text="Success" />
            <ExampleSplit color="info" text="Info" />
            <ExampleSplit color="warning" text="Warning" />
            <ExampleSplit color="danger" text="Danger" />
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <Button id="caret" color="primary">{this.props.text}</Button>
  <DropdownToggle split color="primary" />
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown isOpen={this.state.btnLg} toggle={() => { this.setState({ btnLg: !this.state.btnLg }); }}>
              <DropdownToggle caret size="lg">
                Large Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="mt-1">
            <ButtonDropdown isOpen={this.state.btnSm} toggle={() => { this.setState({ btnSm: !this.state.btnSm }); }}>
              <DropdownToggle caret size="sm">
                Small Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="lg">
    Large Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="sm">
    Small Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
        <SectionTitle>Uncontrolled Dropdown</SectionTitle>
        <div className="docs-example">
          <ButtonDropdownUncontrolledExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default function Example () => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Drop direction variations</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown direction="up" isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
              <DropdownToggle caret>
                Dropup
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {' '}
            <ButtonDropdown direction="start" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
              <DropdownToggle caret>
                Dropleft
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {' '}
            <ButtonDropdown direction="end" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
              <DropdownToggle caret>
                Dropright
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <pre>
          <PrismCode className="language-jsx">
{`<ButtonDropdown direction="up" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown direction="start" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown direction="end" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
