import React from 'react';
import DownloadButton from '../../components/Layout/DownloadButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from 'react-loaders';

function About() {
  return (
  

    <Container>
    
      <Row>
      
        <Col></Col>
      
        <Col xs={6}>  
        <br/><br/><br/> 
       <div>
          <h3>About me</h3><br/>
          <p >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            
            Lorem Ipsum has been the industry's standard dummy   </p>
          <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta
        </p>
          <br/>
          <DownloadButton />
             
      </div></Col>
        <Col></Col>
      </Row>
      <Loader type="line-scale" color="grey" width={500} />
    </Container>
    
  );
}


  export default About;