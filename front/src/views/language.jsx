import React, { Component } from 'react';

import axios from 'axios';
import SearchFormLanguage from '../components/SearchFormLanguage';
import RepoList from '../components/RepoList';
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "../components/Footers/SimpleFooter.jsx";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default class Simple extends Component {
  
  constructor(props) {
		super(props);
  this.state = {
    searchText: '',
    repos: [],
      loading: true,
    language:''
  }
  this.handleTextChange = this.handleTextChange.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({searchText: event.target.value});
  this.setState({language: event.target.value});
}
handleTextChange(event) {
  this.setState({searchText: event.target.value});
 
}
  handleSubmit = e => {
   
		const searchText = this.state.searchText;
		const language = this.state.language;
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
      e.preventDefault();  
  }
  
 
  render() { 
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
               <div className="text-center mt-5">
                    <h3>
                      Get Github Reposeteries{" "}
                      
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                    Search with Language
                    </div>
                    <div className="h6 mt-4">
                           <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                    <Form  onSubmit={this.handleSubmit}>
   
                        <input
                          type="search" 
                          
                          name="search" 
                          value={this.state.searchText} 
                          onChange={this.handleTextChange}
                          placeholder="Search..." 
                        />
                      <br>
                      </br>
                      <br>
                      </br>
                        <input
                          type="texte" 
                          
                          name="language" 
                          value={this.state.language} 
                          onChange={this.handleChange}
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


                    </CardBody>
                  </Card>
               
                    </div>
                   
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      {
            (this.state.loading)
             ? <p>Loading...</p>
             : <div><h2>{this.state.language}</h2><RepoList data={this.state.repos} /></div>
          }          
                     </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
 

}



