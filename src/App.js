import React, { Component } from 'react';
import Carts from './Carts/Carts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div id="logo">
            <img src="https://images.unsplash.com/photo-1595053826311-1f57f2c8b9c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="myLogo" />
          </div>
          <ul>
            <li className="item"><a href="#">Home</a></li>
          </ul>
        </nav>
        <div className='container'>
          <Carts />
        </div>
        <footer>
          <p>this is footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
