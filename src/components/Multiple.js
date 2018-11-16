
import React from 'react';
import { FormGroup, ControlLabel,FormControl, HelpBlock, Button, Grid, Row, Col, Image} from "react-bootstrap";

// This component allows viewer to get all images between two dates and displays them on page with explanation hover

class Multiple extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.performSearch = this.performSearch.bind(this);

    this.state = {
      multiImage: []
    };
  }
// Function that fetches multiple images from API, need add a method that creates a max amount of images to retrieve

  performSearch = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&start_date=${this.state.start}&end_date=${this.state.end}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ multiImage: responseData});
      })
      .catch(error => {
        alert('Oops something wrong dates, refresh & try again', error);
      });
  }

  // Handle change method that work with teh binding methods that allow the user to type in start & end date and the methods 
  // put the dates into the API fetch method, 
  handleChangeStart(e) {
    this.setState({ start: e.target.value });
  }
  handleChangeEnd(e) {
    this.setState({ end: e.target.value });
  }

  render() {
    return (
     <div className="searchForm">
      <form className="form">
        <FormGroup>
          <ControlLabel bsClass="multiSearchTitle">
          <h1>See Multiple Images by Date</h1> 
          </ControlLabel>
          <p></p>
          <h2>See all the images between two dates </h2>
          <h3>For best results do not search more than 25 days out</h3>

          <FormControl bsClass="searchField"
            type="text"
            value={this.state.start}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChangeStart}
          />
          <FormControl bsClass="searchField"
            type="text"
            value={this.state.end}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChangeEnd}
          />
          
            <Button bsStyle="primary" onClick={this.performSearch}>Search</Button>
          <FormControl.Feedback />
          <p></p>
          <HelpBlock bsClass="searchExp">Enter any dates from 1996 to today in formats: YYYY-MM-DD</HelpBlock>
        </FormGroup>
      </form>

{/* // How the search from the date search is displayed. 
With title, date and then an on hover explanation of the image */}
       <div className="results"> 
                    <Grid fluid>
                    <Row>
                        <Col xs={6} md={8} lg={10}>
                {this.state.multiImage.map(image => <Image src={image.url} alt={image.title} title={image.explanation} responsive thumbnail />)}
                        </Col>
                        </Row>
                        </Grid>
          </div>
      </div>
      
    );
  }
}



export default Multiple;