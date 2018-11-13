import React, { Component } from 'react';
import {Jumbotron, Image, Navbar, Nav, NavItem, MenuItem, NavDropdown} from "react-bootstrap";
import SearchDate from './components/SearchDate';


class App extends Component {

  constructor() {
    super();
    this.state= {
      pods: []
    };
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pods: responseData});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  
  render() {

    return (
      <div>
     <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>


              <Jumbotron bsClass="jumbotron">
                <h1 className="header">Nasa Image of the Day </h1>
                <h2 className="title">{this.state.pods.title}</h2>
                <h3>{new Date(this.state.pods.date).toString()}</h3>
                
                <p>
                <Image className="pod" src={this.state.pods.url} responsive />
                </p>
                <p className="explan">
                  {this.state.pods.explanation}
                </p>
              </Jumbotron>;
            
            <div> 
              <SearchDate  />
            </div>
      </div>
    );
  }
}

export default App;
