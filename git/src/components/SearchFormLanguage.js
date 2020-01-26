import React, { Component } from 'react';
import axios from 'axios';
import {
 
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
} from "reactstrap";

export default class SearchForm extends Component {
  constructor(props) {
		super(props);
  this.state = {
    searchText: '',
    repos: [],
      loading: true,
    language:''
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}

  
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
		const searchText = data.append('searchText', this.search.value);
		const language = data.append('language', this.language.value);
    axios.get(`/api/repos/github/${searchText}/${language}`)
      .then(response => {
        this.setState({
          searchText: searchText,
          language: language,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() {  
    return (

      <Form  onSubmit={this.handleSubmit}>
   
          <input
           type="search" 
           
           name="search" 
           ref={ref => {
            this.search = ref;
          }}
           placeholder="Search..." 
          />
        <br>
        </br>
        <br>
        </br>
          <input
           type="texte" 
           
           name="language" 
           ref={ref => {
            this.language = ref;
          }}
           placeholder="Language..." 
          />
         <br>
        </br>
        <br>
        </br>
        <div>
						<button className="btn btn-success">Search</button>
					</div>
      </Form>
     
    );
  }
}