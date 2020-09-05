import React, { Component } from 'react';
import { Person } from './Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name={'이민기'} age={27}></Person>
        <Person name={'홍길동'} age={27}></Person>
        <Person name={'아악'} age={47}></Person>
      </div>
    );
  }
}
export default App;
