import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './components/logo';
import MenuBar from './components/menu';

const App: React.FC<any> = () => {
  return (
    <Container>
      <Navbar fixed='top'>
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Brand>
            <MenuBar />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;
