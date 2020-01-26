import React, { Component } from 'react';

import axios from 'axios';
import SearchForm from 'components/SearchForm';
import RepoList from 'components//RepoList';
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import {
  
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

export default class Simple extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'houieme',) => {
    axios.get(`/api/repos/user/${query}/`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
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
                    Search with username
                    </div>
                    <div className="h6 mt-4">
                           <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                    <SearchForm onSearch={this.performSearch} />   
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
             : <div><h2>{this.state.query}</h2><RepoList data={this.state.repos} /></div>
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



