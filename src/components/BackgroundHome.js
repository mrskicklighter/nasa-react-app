import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

class BackgroundHome extends Component {
        constructor() {
            super();
            this.state = {
                pictures: [],
            };
        }
        // fetch('https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo')
        // .then(response => response.json())
        // .then(responseData => {
        //   this.setState({ pods: responseData});
        // })
        // .catch(error => {
        //   console.log('Error fetching and parsing data', error);
        // });
        componentDidMount() {
            fetch('https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&count=25')
            .then(results=> {
                return results.json();
        }).then(Data => {
                 let pictures = Data.results.map((url) => {
                    return(
                        <div key={url.results}>
                            <img alt={this.state.pictures.explanation} src={this.state.pictures.url}/>
                        </div>
                    )
                    })
                this.setState({pictures: pictures});
                console.log("state", this.state.pictures);
            })
            
        }

        render() {
            return (
                <div className="">
                    <div className="">
                       {this.state.pictures.url} 
                       {/* {this.state.pictures.map(image => <Image className="searchResult" src={image.url} responsive /> )} */}
                    </div>
                </div>
            )
        }

}
{/* <Image alt={this.state.podImage.explanation} title={this.state.podImage.explanation} className="searchResult" src={this.state.podImage.url} responsive />    */}
export default BackgroundHome