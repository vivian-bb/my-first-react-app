import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ProjectContainer() {
  return (
    <Container>
      <Row>
        <Col xs={6}><Card>
            <Card.Img variant="top" src="https://picsum.photos/id/119/150/80" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary"  href="/">More Details</Button>
            </Card.Body>
          </Card></Col>
        <Col xs={6}><Card>
            <Card.Img variant="top" src="https://picsum.photos/id/60/150/80" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" href="/">More details</Button>
            </Card.Body>
          </Card>
          </Col>
      </Row>
      </Container>
  )}

export default ProjectContainer;
