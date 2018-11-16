import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';

class BackgroundHome extends Component {
        constructor() {
            super();
            this.state = {
                background: []
            };
        }
    
        componentDidMount() {
            fetch('https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&count=20',
            {cache:'force-cache'})
            .then(response => response.json())
            .then(responseData => {
              this.setState({ background: responseData});
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
        }
            
    

        render() {
            return (
                <div className="">
                    <div className="">
                    {this.state.background.map(image => <Thumbnail bsClass="multiImageResult" src={image.url} alt={image.title} title={image.explanation} responsive />)}
                    </div>
                </div>
                
            )
        }
    }
        

export default BackgroundHome