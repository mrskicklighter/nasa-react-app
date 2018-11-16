import React, { Component } from 'react';
import {Jumbotron, Image,} from "react-bootstrap";


// This component will always pull the most recent image of the day from API, cannot be changed by user, only changes
// as the API is updated 

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

  // Title, Date, Image & Explanation of image from API is displayed 

  render() {

    return (
      <div>
              <Jumbotron bsClass="jumbotron">
                <h1 className="header">Nasa's Most Recent Image </h1>
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
