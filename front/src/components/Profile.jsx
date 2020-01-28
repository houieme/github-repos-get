
import React from "react";
import axios from"axios";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import Followers from './followers';
import Following from './following';
import RepoList from './RepoUserName';
// core components
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import SimpleFooter from "./Footers/SimpleFooter.jsx";

class Profile extends React.Component {
  constructor(props) {
		super(props);
  this.state = {
    following:[],
    followers: [],
    repos: [],
     
  }
}
  componentDidMount() {
    const user = this.props.location.state.owner;
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    axios.get(`/api/repos/user/${user}/followers`)
      .then(response => {
        this.setState({
          user: user,
        
          followers: response.data,
        });
      })
      axios.get(`/api/repos/user/${user}/following`)
      .then(response => {
        this.setState({
          user: user,
        
          following: response.data,
        });
      })
      axios.get(`/api/repos/user/${user}/`)
      .then(response => {
        this.setState({
          user:user,
          repos: response.data,
          loading: false
        });
      })
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
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={this.props.location.state.avatar_url}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                      <Followers data={this.state.followers} />
                      <Following data={this.state.following} />
                      </div>
                    </Col>
                    
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                      
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                     {this.props.location.state.owner}{" "}
                    
                    </h3>
                   
                   
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      <RepoList data={this.state.repos} />
                        
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

export default Profile;
