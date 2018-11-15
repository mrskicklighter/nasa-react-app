import React, { Component } from 'react';
import {Jumbotron, Image,} from "react-bootstrap";



class Today extends Component {

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
            
        
      </div>
    );
  }
}

export default Today;
