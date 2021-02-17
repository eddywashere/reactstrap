import React from 'react';
import { Container } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <Container className="themed-container">.container</Container>
      <Container className="themed-container" fluid="sm">.container-sm</Container>
      <Container className="themed-container" fluid="md">.container-md</Container>
      <Container className="themed-container" fluid="lg">.container-lg</Container>
      <Container className="themed-container" fluid="xl">.container-xl</Container>
      <Container className="themed-container" fluid="xxl">.container-xxl</Container>
      <Container className="themed-container" fluid={true}>.container-fluid</Container>
    </>
  );
}

export default Example;
