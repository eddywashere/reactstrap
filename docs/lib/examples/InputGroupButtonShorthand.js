import React from 'react';
import { InputGroup, Button, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup>
        <Button>To the Left!</Button>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <Button color="secondary">To the Right!</Button>
      </InputGroup>
      <br />
      <InputGroup>
        <Button color="danger">To the Left!</Button>
        <Input placeholder="and..." />
        <Button color="success">To the Right!</Button>
      </InputGroup>
    </div>
  );
};

export default Example;
