import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        이름 :{name}, 나이 : {age}
      </div>
    );
  }
}
// const Person = (props) => (
//   <div>
//     <h1>
//       이름 :{props.name} 나이 : {props.age}
//     </h1>
//   </div>
// );
const My = () => {
  return <h1> MY 컴포넌트 입니다 </h1>;
};

export { Person, My };
