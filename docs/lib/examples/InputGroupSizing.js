import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupText>@lg</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>@normal</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupText>@sm</InputGroupText>
        <Input />
      </InputGroup>
    </div>
  );
};

export default Example;
