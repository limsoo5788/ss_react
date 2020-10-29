import '../css/headerbar.css';
import '../css/App.css';
import Menus from './Menus';
import imglogo from './logo192.png';
import { useEffect } from 'react';
const React = require('react');
const { Component } = React;

function Headerbar(props) {
  const [confirm, setConfirm] = React.useState(props.confirm);
  //confirm 이 true가 되었을때 menus 가 나타나게 하기 위해 useEffect 를 사용할지 3항연산자를 사용할지 고민중
  return (
    <div className="Headerbar">
      <img src={imglogo} className="AljjamLogo" alt="logo"/>
      {confirm?  <Menus/>: <React.Fragment></React.Fragment>}
    </div>
  );
}

export default Headerbar;
