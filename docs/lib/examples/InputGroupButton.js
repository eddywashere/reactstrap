import React, { useState } from 'react';
import {
  InputGroup,
  Dropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div>
      <InputGroup>
        <Button>I'm a button</Button>
        <Input />
      </InputGroup>
      <br />
      <InputGroup type="dropdown" isOpen={dropdownOpen} toggle={toggleDropDown}>
        <Input />
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </InputGroup>
      <br />
      <InputGroup type="dropdown" isOpen={splitButtonOpen} toggle={toggleSplit}>
        <Button outline>Split Button</Button>
        <DropdownToggle split outline />
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        <Input placeholder="and..." />
        <Button color="secondary">I'm a button</Button>
      </InputGroup>
    </div>
  );
}


export default Example;
