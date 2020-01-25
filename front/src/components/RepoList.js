import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';

const RepoList = props => { 
  
  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo name={repo.name} Stars={repo.stargazers_count} Forks={repo.forks_count} Watchers={repo.watchers_count} url={repo.html_url} description={repo.description} key={repo.id} />);    
  } else {
    repos = <NoRepos />
  }

  return(
    <ul className="repo-list">
      {repos}
    </ul> 
  );
}

export default RepoList;
