import React from 'react';
import './results.css';



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
        </div>
    );
}


export default Results;

