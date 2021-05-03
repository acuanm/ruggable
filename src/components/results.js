import React from 'react';
import './results.css';
import logo from '../logo.jpeg';
import {GitForkIcon, StarIcon, IssueOpenedIcon} from '@primer/octicons-react'





const Results = ({link, name, forks, description, stars, issues}) =>{
    return(
        <div className = "rectangle" >
            <p className = "name">
                <a className = 'name' href = {{link}}>
                    {name}
                </a>
            </p>
            <p className='description'>
                {description}
            </p>
            <GitForkIcon className="logo" alt="logo" />
            <a className="extraInfo">
                {forks}
            </a>
            <StarIcon src={logo} className="logo" alt="logo" />
            <a className="extraInfo">
                {stars}
            </a>
            <IssueOpenedIcon src={logo} className="logo" alt="logo" />
            <a className="extraInfo">
                {issues}
            </a>


        </div>
    );
}


export default Results;

