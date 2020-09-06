import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  let numberState = useState(props.initNumber);
  {
    /*인자값 : useState의 초기값. 배열을 리턴*/
  }
  let number = numberState[0]; // 상태 값
  let setNumber = numberState[1]; // 상태 값을 바꿀 수 있는 함수
  console.log('numberState : ', numberState);

  let [date, setDate] = useState(Date().toString());
  // 위의 코드는 아래의 3줄과 같다.
  // let dateState = useState(Date().toString());
  // let date = dateState[0];
  // let setDate = dateState[1];

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(Date());
        }}
      ></input>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: Date(),
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>this.props.initNumber - Number : {this.props.initNumber}</p>
        <p>this.state.number - Number : {this.state.number}</p>{' '}
        <p>this.state.date - Date : {this.state.date}</p>{' '}
        {/* class형 컴포넌트의 상태관리*/}
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: Date() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
export default App;
