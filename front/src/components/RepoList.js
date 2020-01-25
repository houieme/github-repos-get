import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';

const RepoList = props => { 
  
  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo  Fullname={repo.Fullname} name={repo.name} stargazers_count={repo.stargazers_count} forks_count={repo.forks_count} watchers_count={repo.watchers_count} url={repo.html_url} description={repo.description} key={repo.id} />);    
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
