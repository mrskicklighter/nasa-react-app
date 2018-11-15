
import React from 'react';
import { FormGroup, ControlLabel,FormControl, HelpBlock, Button, Grid, Row, Col, Thumbnail} from "react-bootstrap";



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

  performSearch = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&start_date=${this.state.start}&end_date=${this.state.end}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ multiImage: responseData});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  handleChangeStart(e) {
    this.setState({ start: e.target.value });
  }
  handleChangeEnd(e) {
    this.setState({ end: e.target.value });
  }

  render() {
    return (
     <div className="searchForm">
      <form>
        <FormGroup>
          <ControlLabel bsClass="multiSearchTitle">Search for a grouping of images by dates </ControlLabel>
          <p></p>
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
           {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary" onClick={this.performSearch}>Search</Button>
          <FormControl.Feedback />
          <p></p>
          <HelpBlock bsClass="searchExp">Enter any dates from 1996 to today in formats: YYYY-MM-DD</HelpBlock>
        </FormGroup>
      </form>

{/* // How the search from the date search is displayed. 
With title, date and then an on hover explanation of the image */}
       <div className="results"> 
                    <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                {this.state.multiImage.map(image => <Thumbnail bsClass="multiImageResult" src={image.url} alt={image.title} title={image.explanation} responsive />)}
                        </Col>
                        </Row>
                        </Grid>
          </div>
      </div>
      
    );
  }
}



export default Multiple;