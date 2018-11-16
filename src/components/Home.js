import React, { Component } from 'react';
import {Button, PageHeader } from "react-bootstrap";

import BackgroundHome from './BackgroundHome'

class Home extends Component {
 
  
  
  render() {

    return (
     <div className="background">
      <div className="titlediv">
        <PageHeader>
          
          <small>Subtext for header</small>
        </PageHeader>;
          <div>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>
  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>
  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>
          </div>

      </div>
<BackgroundHome />
     </div>
    );
  }
}

export default Home;