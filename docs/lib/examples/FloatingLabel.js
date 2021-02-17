import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FloatingLabel = (props) => {
  return (
    <Form>
      <FormGroup floating>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        <Label for="examplePassword">Password</Label>
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
  );
}

export default FloatingLabel;
