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
  
  performSearch = (query = 'web') => {
    axios.get(`/api/repos/github/${query}`)
    .then(response => {
      this.setState({
        query: query,
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
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
        <div id="colorlib-main">
        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4 font-weight-bold">Contact Information</h2>
              </div>
              <div className="w-100" />
              <div className="col-md-3">
                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="col-md-3">
                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
              </div>
              <div className="col-md-3">
                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
              </div>
              <div className="col-md-3">
                <p><span>Website</span> <a href="#">yoursite.com</a></p>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6 order-md-last pr-md-5">
              <SearchForm onSearch={this.performSearch} />  
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
            </div>
         
        </section>
      </div>{/* END COLORLIB-MAIN */}
        </main>
        <SimpleFooter />
      </>
    );
  }
 

}



