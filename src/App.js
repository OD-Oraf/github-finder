import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
      foo = () => 'bars';
   render () {
      const name = 'John Doe';
      const getJob = () => 'devops';
      const loading = false;
      const showName = false;


      return (
         <div className="App">
            {/*Can add javascript within brackets*/}
            {loading ? <h4>Loading..... </h4> : <h1>Hello {showName && name.toUpperCase()}</h1>}
            {/*<h2>Job: {getJob()}</h2>*/}
            {/*<h2>Foo: {this.foo()}</h2>*/}

         </div>
      );
   }
}



export default App;
