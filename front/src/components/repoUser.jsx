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
      <Col className=" justify-content-center">
          {/* Menu */}
             <div >
              
             
              <h4>Reposetory Name:
                <a href={props.url} target='_blank'rel='noopener noreferrer'>{props.fullname} </a>
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