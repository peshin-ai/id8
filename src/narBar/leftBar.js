import React from 'react';
import logo from '../asset/id8logo.png';

const list = ["Home", "About us", "Pay"];

class LeftBar extends React.Component {
  
    render() {
      return (
        <li>
        <img src={logo} alt="id8_logo" width="50" height="50"/>
        </li>
        list.map((item,index) => <li key={index}> {item}</li>)
      )
    }
}
export default LeftBar;
