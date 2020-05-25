import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/NavBar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  async componentDidMount() {
    const response = await axios.get('https://api.github.com/users')    
    console.log(response.data)
  }
  

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
