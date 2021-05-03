import React from 'react';
import './results.css';
import logo from '../logo.jpeg';
import {GitForkIcon} from '@primer/octicons-react'





const Results = ({link, name, forks, description}) =>{
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
            <img src={logo} className="logo" alt="logo" />
            <img src={logo} className="logo" alt="logo" />


        </div>
    );
}


export default Results;

