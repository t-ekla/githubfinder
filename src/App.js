import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/NavBar';
import Users from './components/users/Users';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />  
        <div className='container'/>   
        <Users />
      </div>    
    );
  }
}

export default App;
