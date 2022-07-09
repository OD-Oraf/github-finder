import React, { Component } from 'react';
import Navbar from "./components/layouts/Navbar";
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  
   render () {
      // const nums = [1,2,5,4,7];
      return (
         <div className="App">
            <h1>Hello</h1>
            <Navbar title="Github Finder" icon="fab fa-github"/>

         </div>
      );
   }
}



export default App;
