import React, { useState } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody, Collapse } from 'reactstrap';

const PopoverContent = ({ update }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopoverHeader>Update</PopoverHeader>
      <PopoverBody>
        <Button onClick={() => setIsOpen(!isOpen)}>Click me</Button>
        <Collapse isOpen={isOpen} onEntered={update} onExited={update}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
        </Collapse>
      </PopoverBody>
    </>
  );
}

const Example = (props) => {
  return (
    <div className="text-center">
      <Button id="updateButton" type="button">
        Open Popover
      </Button>
      <UncontrolledPopover trigger="click" placement="top" target="updateButton">
        {({ update }) => (
          <PopoverContent update={update} />
        )}
      </UncontrolledPopover>
    </div>
  );
}

export default Example;