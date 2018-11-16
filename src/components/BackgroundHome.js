import React, { Component } from 'react';
import {Image} from 'react-bootstrap';


// // This Component fetches 10 random images from the API and displays them in a bar that will be 
// rendered on the home page, on hover you can see explanation of image
class BackgroundHome extends Component {
        constructor() {
            super();
            this.state = {
                background: []
            };
        }
    
        componentDidMount() {
            fetch('https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&count=10',
            {cache:'force-cache'})
            .then(response => response.json())
            .then(responseData => {
              this.setState({ background: responseData});
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
        }
            
    // Data from fetch is mapped to get the image and then displayed, 
    // explanation of each image is available when mouse hovers

        render() {
            return (
                <div >
                    <div className="homeImage">
               
                    {this.state.background.map(image => <Image bsClass="img" src={image.url} alt={image.title} title={image.explanation} responsive />)}
                        
                    </div>
                </div>
                
            )
        }
    }
        

export default BackgroundHome