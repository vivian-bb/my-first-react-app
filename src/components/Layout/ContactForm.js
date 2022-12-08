import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import AnimatedLetters  from '../../components/Layout/AnimatedLetters/AnimatedLetters.js';
import '../../../src/App.scss';
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/projectpic-h2.png'
//import {MapContainer, Marker, Popup, TileLayer,} from 'react-leaflet';
//import  * as Leaflet from 'leaflet';
//import 'leaflet/;

function ContactForm() {
  
  const [success, setSuccess] = useState(false);
   
    function handleSubmit(event) {
    setSuccess(true);
    event.preventDefault();
    console.log('Success submit', success);
    setTimeout(() => {setSuccess(false)}, 3000)
  };

  return (
    <Container className = "contactForm">
    <Row>
      <Col>  
      <h1><AnimatedLetters strArray={"Leave me a message, ".split('')} startIdx={1}  /></h1>
      <h1><AnimatedLetters strArray={"I will touch you soon.".split('')} startIdx={21}  /></h1>
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
      <br/> <br/> <br/> <br/>
      <div className="map-wrapper">
        <Image src={img1} width="500px" height="300px" padding="10px" rounded />
        {/* <MapContainer position={[-37.9701477,144.4913281]} zoom={11}>
          <Marker position={[-37.9701477,144.4913281]}>
            <Popup>
              It all starts with a line of JavaScript!
            </Popup>
          </Marker>
        </MapContainer> */}

      </div>
      </Col>
    </Row>
  <Alert show={success}> form submited</Alert>
  </Container>

  
  );
}

export default ContactForm;