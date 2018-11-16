import React, { Component } from 'react';
import {Button, PageHeader} from "react-bootstrap";
import {Link} from 'react-router-dom';

import BackgroundHome from './BackgroundHome'

class Home extends Component {
  
  render() {

    return (
     <div className="background">
     {/* pulls 10 images from BackgroundHome Component that are random from API */}
     <div>
     <BackgroundHome />
     </div>
      <div className="titlediv">
        <PageHeader>
          Explore Nasa's Astronomy Picture of the Day
          <p></p>
          <small>Nasa has been posting an astronmomy image everyday since June 16, 1995.
          <p> You can look at the most recent image, find a specfic date, or get pictures from multiple dates.</p> </small>
        </PageHeader>
        
        {/* home page navigation same router links as header/navbar */}
          <div className="homeButton">
            
            <Link exact to="/"><Button bsStyle="primary">Home</Button></Link>
            <Link to="/today"><Button bsStyle="primary">Today's Image</Button></Link>
            <Link to="/searchDate"> <Button bsStyle="primary">Look up a Date</Button></Link>
            <Link to="/multiple"><Button bsStyle="primary">Mulitple Dates</Button></Link>

          </div>

      </div>

     </div>
    );
  }
}

export default Home;