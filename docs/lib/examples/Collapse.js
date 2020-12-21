import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </React.StrictMode>
  );
}

export default Example;
