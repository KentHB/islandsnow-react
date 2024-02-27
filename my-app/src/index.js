import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Img from './ti.png'
import Img2 from './full.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart, Columns, Facebook, FileImage, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

function BasicExample() {
  return (
    <Navbar expand="sm" bg="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
          <Nav.Link><Pinterest/></Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><HouseFill/> </Nav.Link>
          <Nav.Link><Search/> </Nav.Link>
          <Nav.Link><PersonFill/> </Nav.Link>
          <NavDropdown title={<Cart/>}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

function middleImage() {
  return (
    <Row className="justify-content-center">
      <Col xs={3}>
        <Image src={Img} alt={"Island Snow Logo"} />
      </Col>
    </Row>
  )
}

function middleText() {
  return (
    <Row  style={{ marginTop: 60 + 'px' }} className="justify-content-center">
      <Col xs={1}>
        <Nav>
          <NavDropdown
            title="MEN"
            menuVariant="dark"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
      <Col xs={1}>
        <Nav>
          <NavDropdown
            title="WOMEN"
            menuVariant="dark"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
      <Col xs={1}>
        <Nav>
          <NavDropdown
            title="KIDS"
            menuVariant="dark"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
      <Col xs={1}>
        <Nav>
          <NavDropdown
            title="BRANDS"
            menuVariant="dark"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
      <Col xs={1}>
        <Nav>
          <p style={{marginTop: 8 + 'px'}}>SEARCH</p>
        </Nav>
      </Col>
    </Row>
  )
}

function fullWidthImage() {
  return (
    <Image className="img-fluid" src={Img2} alt={"Island Snow Background"} />
  )
}

function footerFull() {
  return (
    <footer>
      <Container>
        <Row py={4}>
          <Col>
            <p style={{ marginTop: 40 + 'px' }}>NAVIGATION</p>
            <hr/>
            <div>About Us</div>
            <br/>
            <div>Employment</div>
            <br/>
            <div>Videos</div>
          </Col>
          <Col>
            <p style={{ marginTop: 40 + 'px' }}>MAIN MENU</p>
            <hr/>
            <div>Men</div>
            <br/>
            <div>Women</div>
            <br/>
            <div>Kids</div>
          </Col>
          <Col>
            <p style={{ marginTop: 40 + 'px' }}>CONNECT</p>
            <hr/>
            <div>Sign up for the latest updates</div>
            <br/>
            <input type="text" placeholder="Enter Email Address"/>
            <div className="btn btn-dark">Join</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const TopMenu = () => (
  BasicExample()
);

const IslandSnowLogo = () => (
  middleImage()
);

const MiddleMenu = () => (
  middleText()
);

const FullWidthImage = () => (
  fullWidthImage()
);

const FooterMenu = () => (
  footerFull()
);

const IslandSnow = () => (
  <Col>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Col>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);