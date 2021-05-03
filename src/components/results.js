import React from 'react';
import './results.css';
import logo from '../logo.jpeg';




const Results = ({link, name}) =>{
    return(
        <div className = "rectangle" >
            <p clasName = "name">
                {name}
            </p>
            <p  className ="link">
                <a href={{link}}>
                    {link}
                </a>
            </p>
            <img src={logo} className="logo" alt="logo" />
            <img src={logo} className="logo" alt="logo" />
            <img src={logo} className="logo" alt="logo" />


        </div>
    );
}


export default Results;

