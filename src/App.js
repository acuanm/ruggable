import logo from './logo.jpeg';
import './App.css';
import SearchBox from './components/searchbox'
import Results from './components/results'

import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
     searchField: '',
     results: []
    }
  }

  async get() {
    const url = 'https://api.github.com/search/repositories?q=user:' + this.state.searchField +"&sort=&order=desc"
    const response = await fetch(url,{
      
        method:'get',
        headers:{
            Accept: 'application/json', 
            'Content-Type': 'application/json'        
        } 
    });

    const body = await response.json();
    return body;
}
  handleChange = (search) => {
    this.setState({searchField: search.target.value})
  };

  handleClick = async search => {
    search.preventDefault();
    const result = await this.get();
    if(result["items"]){
      console.log(result["items"])
      this.setState({results: result["items"]})
    }
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='mainText'>
          Search repository of a given user
        </p>
        <SearchBox 
          className="search"
          placeholder="Enter desired user ..." 
          handleChange={this.handleChange}
        />
        <button
          className = "button"
          onClick={this.handleClick}
          > Enter
        
        </button>            
        {this.state.results.map(result =>(
          <Results
            link = {result['html_url']}
            name = {result['name']}
            description = {result['description']}
            forks = {result["forks"]}
          />
        ))}      
        </header>
      </div>
    );
  }
}

export default App;
