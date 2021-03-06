import React, { Component } from 'react';
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default class SearchForm extends Component {
  
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  render() {  
    return (

      <Form  onSubmit={this.handleSubmit} >
      <input type="text" 
             onChange={this.onSearchChange}
             name="search" 
             ref={(input) => this.query = input}
             placeholder="Search..." 
             class="form-control"
             />

    </Form>      
     
    );
  }
}