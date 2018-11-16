import React, { Component } from 'react';
import {Button, PageHeader} from "react-bootstrap";
import {Link} from 'react-router-dom';

import BackgroundHome from './BackgroundHome'

class Home extends Component {
 
  
  
  render() {

    return (
     <div className="background">
      <div className="titlediv">
        <PageHeader>
          Explore Nasa's Astronomy Picture of the Day
          <small>Subtext for header</small>
        </PageHeader>
          <div className="homeButton">
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Link exact to="/"><Button bsStyle="primary">Home</Button></Link>
  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Link to="/today"><Button bsStyle="primary">Today's Image</Button></Link>
  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary"><Link to="/searchDate">Look up a Date</Link></Button>
  <Button bsStyle="primary"><Link to="/multiple">group of dates</Link></Button>

          </div>
          

    







      </div>
<BackgroundHome />
     </div>
    );
  }
}

export default Home;