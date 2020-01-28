import React from 'react';
import Repo from './repoUser';
import NoRepos from './NoRepos';

const RepoList = props => { 
  

  
  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo owber={repo.owner.login} 
      fullname={repo.full_name} name={repo.name} stargazers_count={repo.stargazers_count} 
      forks_count={repo.forks_count} watchers_count={repo.watchers_count} url={repo.html_url}
       description={repo.description} key={repo.id}
       avatar_url={repo.owner.avatar_url} followers={repo.owner.followers_url} following={repo.owner.following_url}
       />)
       
       
       
       
       ;    
  } else {
    repos = <NoRepos />
  };


     
  return(
    <ul className="repo-list">
      {repos}
    </ul> 
  );
}

export default RepoList;
