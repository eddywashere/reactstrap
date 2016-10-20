import React, { Component, PropTypes } from 'react';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
