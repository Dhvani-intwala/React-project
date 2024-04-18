import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Convert from './convercase/convert';

function App() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Converter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     <Convert />
    </>
  );
}

export default App;
