import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component{


    render(){


        return(

            <div>
                <BrowserRouter>

 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">99</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>

      <NavDropdown title="Speciality" id="basic-nav-dropdown">
        <NavDropdown.Item href="#Art/3.1">Art</NavDropdown.Item>
        <NavDropdown.Item href="#Medical studies/3.2">Medical studies</NavDropdown.Item>
        <NavDropdown.Item href="#Business studies/3.3">Business studies</NavDropdown.Item>
        <NavDropdown.Item href="#Engineering studies/3.3">Engineering studies</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/inscrit">Enrollment</Nav.Link>
      <div className="row col-10 ">
      <span width="70%"></span>
     <Nav className="col-6 ml-auto">
     <NavDropdown.Item href="#Engineering studies/3.3">About Us</NavDropdown.Item>
     <NavDropdown.Item href="#Engineering studies/3.3">Login</NavDropdown.Item>
     </Nav>
     </div>

    </Nav>
    </Navbar.Collapse>
    </Navbar>
                
                </BrowserRouter>
            </div>
        )
    }
}