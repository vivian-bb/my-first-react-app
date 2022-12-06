import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Vivian's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           {/* copy the original code under bottom */}
           <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/vivian-zhang-525923142/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/vivian-bb">
                Github
              </NavDropdown.Item>
              
            </NavDropdown>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  NavBar;
// eslint-disable-next-line
{/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link> */}