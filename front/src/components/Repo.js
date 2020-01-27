import React from 'react';

import { Link } from "react-router-dom";
import{
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  TabContent,
   TabPane,
   Row,
   Col,
   Button,
   Container
 
  }


from 'reactstrap';

const props = props => (
  <ul>

      <Row>
          <Col lg="4">
            {/* Tabs with icons */}
          
            <section className="section">
           
              <Card className=" shadow ">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                           src={props.avatar_url}
                          />
                        </a>
                      </div>
                    </Col>
                   </Row>
                    <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          
                        </div>
                        <div>
                         
                        </div>
                        <div>
                        <br></br>
                        </div>
                      </div>
                    </Col>
                  
                  <div className="text-center mt-5">
                    <h3>
                      {props.owber}
                      
                    </h3>
                    <div className="h6 font-weight-300">
                    <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Followers</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Following</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Repositories </span>
                        </div>
                    </div>
                    
                   
                  </div>
                 </div>
                </div>
              </Card>
           
          </section>
        
        </Col>
          <Col className="mt-5 mt-lg-0" lg="8">
          {/* Menu */}
 <div className="mb-3">
              
              <h4><a
                   href={props.url}
                   target='_blank'
                   rel='noopener noreferrer'
                 >
                  
                  {props.fullname}
                 </a>
                 <br></br>
                 <Link to={{pathname: '/Profile',
                         state: { avatar_url:props.avatar_url,
                          followers:props.followers_url,
                          name:props.name,
                           following:props.following_url}}} > owner: {props.owber}</Link>
                 </h4> 
             </div>
             <div className="nav-wrapper">
               <Nav
                 className="nav-fill flex-column flex-md-row"
                 id="tabs-icons-text"
                 pills
                 role="tablist"
               >
                 <NavItem >
                   <NavLink style={{backgroundColor: "lightblue"}}>
                    Stars: {props.stargazers_count}
                   </NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  style={{backgroundColor: "lightblue"}}>
                     Watchers: {props.watchers_count}
                   </NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink style={{backgroundColor: "lightblue"}}>
                     Forks: {props.forks_count}
                   </NavLink>
                 </NavItem>
               </Nav>
             </div>
             <Card className="shadow">
               <CardBody>
                 <TabContent>
                   <TabPane >
                     <p className="description">
                     <p>{props.description}</p>
                     </p>
                    
                   </TabPane>
                  
                  
                 </TabContent>
               </CardBody>
             </Card>
         
          </Col>
        </Row>
        <hr></hr>
</ul>
  
 
            
        
);

export default props;