import React from 'react';
import { Button, Card, Container, Row, Col } from "reactstrap";
const RepoList = props => { 
  

  
  const results = props.data;
  
     
  return(
  
    <Button
    className="mr-4"
    color="info"
  
    size="sm"
  >
    {results.length} following
  </Button>
     
      
      
   
  );
}

export default RepoList;
