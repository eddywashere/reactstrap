import React, { useState, useEffect } from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';

const shortText = 'Hi';
const longText = 'Long tooltip content to test update';

const TooltipContent = ({ update }) => {
  const [text, setText] = useState(shortText);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(text === shortText ? longText : shortText);
      update();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <>{text}</>
  );
}

const Example = () => {
  return (
    <div className="text-center">
      <Button id="updateTooltip">Click me</Button>
      <UncontrolledTooltip placement="top" target="updateTooltip" trigger="click">
        {({ update }) => (
          <TooltipContent update={update} />
        )}
      </UncontrolledTooltip>
    </div>
  );
}

export default Example;