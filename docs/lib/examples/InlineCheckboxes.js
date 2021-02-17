import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup check inline>
        <Input id="InlineCheckboxes-checkbox-1" type="checkbox" />
        <Label for="InlineCheckboxes-checkbox-1" check>
          Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Input id="InlineCheckboxes-checkbox-2" type="checkbox" />
        <Label for="InlineCheckboxes-checkbox-2" check>
          Some other input
        </Label>
      </FormGroup>
    </Form>
  );
}

export default Example;
