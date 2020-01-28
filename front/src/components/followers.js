import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';
import { Button, Card, Container, Row, Col } from "reactstrap";
const RepoList = props => { 
  

  
  const results = props.data;
  
     
  return(
    <ul className="repo-list">
      <Button
        className="mr-4"
        color="info"
       
        size="sm"
      >
        {results.length} followers
      </Button>
      
    </ul> 
  );
}

export default RepoList;
