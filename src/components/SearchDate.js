import React from 'react';
import {Image, FormGroup, ControlLabel,FormControl, HelpBlock, Button} from "react-bootstrap";



class SearchDate extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.performSearch = this.performSearch.bind(this);

    this.state = {
      podImage: []
    };
  }

  performSearch = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ge4N4qMzvNdIl38waxmldDBaeKjX2pbmbhkDxSQo&date=${this.state.value}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ podImage: responseData});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
     <div className="searchForm">
      <form>
        <FormGroup>
          <ControlLabel bsClass="searchTitle">Search for past pictures of the day </ControlLabel>
          <p></p>
          <FormControl bsClass="searchField"
            type="text"
            value={this.state.value}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChange}
          />
           {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary" onClick={this.performSearch}>Search</Button>
          <FormControl.Feedback />
          <p></p>
          <HelpBlock bsClass="searchExp">Enter any date from 1996 to today in format: YYYY-MM-DD</HelpBlock>
        </FormGroup>
      </form>

{/* // How the search from the date search is displayed. 
With title, date and then an on hover explanation of the image */}
       <div className="result"> 
        <h3 className="title">{this.state.podImage.title}</h3>
                <h3>{new Date(this.state.podImage.date).toDateString()}</h3>
       <Image alt={this.state.podImage.explanation} title={this.state.podImage.explanation} className="searchResult" src={this.state.podImage.url} responsive />   
          </div>
      </div>
      
    );
  }
}



export default SearchDate;