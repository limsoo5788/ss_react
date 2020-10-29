import { useEffect } from 'react';
import '../css/headerbar.css';
import Menu from '../Menu'
const React = require('react');

function Menus() {
  const [menus, setMenus] = React.useState(
    [
      {
        key: 0,
        img: "img_path",
        alt: "Refresh",
        type: 0,
      },
      {
        key: 1,
        img: "img_path",
        alt: "See",
        type: 0,
      },
      {
        key: 2,
        img: "img_path",
        alt: "Complite",
        type: 0,
      },
      {
        key: 3,
        img: "img_path",
        alt: "Fillter",
        type: 1,
      },
      {
        key: 4,
        img: "img_path",
        alt: "Setting",
        type: 2,
      },
      {
        key: 5,
        img: "img_path",
        alt: "User",
        type: 3,
      },
    ]
  );
  menus.reverse();
  //과거값을 가져오는게 문제있는건가?
  //http://jsfiddle.net/LPbhS/
  return (
    <div className="Menus">
      {menus.map((items) => (
        <Menu items={items} />
      ))}
    </div>
  );
}

export default Menus;