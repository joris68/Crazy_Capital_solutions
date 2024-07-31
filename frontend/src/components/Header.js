import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


export function HeaderBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Crazy Capital Solutions Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={"/explanation"}><Nav.Link >Solutions</Nav.Link></Link>
            <Link to={"/account/:userid"}><Nav.Link >Dashboard</Nav.Link></Link>
            <Nav className="ms-auto"> 
             <Link to={"/login"}><Nav.Link>Login</Nav.Link></Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}