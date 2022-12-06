import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';


function ContactForm() {
  
  const [success, setSuccess] = useState(false);
   
    function handleSubmit(event) {
    setSuccess(true);
    event.preventDefault();
    console.log('Success submit', success);
  };

  return (
    <Container>
    <Row>
      <Col>  
      <h3>Leave your contact here, I will touch you soon.</h3>
      <br/>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
        <br />
        <Form.Label>Leave Message to me</Form.Label>
        <Form.Control type="text" placeholder="Message" row="3"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {/* import FormButton components */}
      {/* <FormButton variant="primary" type="submit"></FormButton>  */}
      <Button variant="primary" type="submit" onClick = {handleSubmit}>
        Submit
      </Button>
    </Form>
    </Col>
      <Col>
      img
      </Col>
    </Row>
  <Alert show={success}> form submited</Alert>
  </Container>

  
  );
}

export default ContactForm;