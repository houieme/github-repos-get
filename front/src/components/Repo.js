import React from 'react';


const props = props => (
  <ul>
     <div key={props.id} className='props bg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href={props.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {props.name}
                  
                </a>
                <h2>{props.Fullname}</h2>
              </h4>
              <p>{props.description}</p>
            </div>
            <div>
              <ul>
                <li className='badge badge-primary'>
                  Stars: {props.stargazers_count}
                </li>
                <li className='badge badge-dark'>
                  Watchers: {props.watchers_count}
                </li>
                <li className='badge badge-light'>Forks: {props.forks_count}</li>
              </ul>
            </div>
          </div>
        
  
</ul>
  

);

export default props;