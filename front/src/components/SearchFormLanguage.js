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
    searchText: '',
    language:''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
    this.setState({ language: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    this.props.onSearch(this.language.value);
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
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-user-run" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
           type="texte" 
           onChange={this.onSearchChange}
           name="language" 
           ref={(input) => this.query = input}
           placeholder="Language..." 
          />
        </InputGroup>
      </FormGroup>
      </Form>
     
    );
  }
}