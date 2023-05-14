import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './Routes';
import Logo from './components/logo';
import MenuBar from './components/menu';

const App: React.FC<any> = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Container>
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href='/'>
                <Logo />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-nav-bar'>
                <FontAwesomeIcon icon={faBars} style={{ padding: '5 5 5 5' }} />
              </Navbar.Toggle>
              <Navbar.Collapse id='responsive-nav-bar' className='justify-content-end'>
                <MenuBar />
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className='content'>
            <Routes children={routes} />
          </div>
        </Container>
        <div className='footer'>
          <Row>
            <Col className='col-md-9 col-sm-12'>Copyright © 2014 Company Name | Design: TemplateMo</Col>
            <Col className='col-md-3 col-sm-12'>
              <div className='hex_footer'>
              </div>
              <div className='hex_footer'></div>
              <div className='hex_footer'></div>
              <div className='hex_footer'></div>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
