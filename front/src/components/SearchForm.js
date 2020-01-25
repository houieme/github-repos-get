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

      <Form  onSubmit={this.handleSubmit}>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-user-run" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
           type="search" 
           onChange={this.onSearchChange}
           name="search" 
           ref={(input) => this.query = input}
           placeholder="Search..." 
          />
        </InputGroup>
      </FormGroup>
      </Form>
     
    );
  }
}