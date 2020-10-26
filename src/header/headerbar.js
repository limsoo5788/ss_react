import React, {useState} from "react";

import '../css/header.css';

function Headerbar() {
  const [confirm, setConfirm] = useState(true);
  return (
    <div className="Headerbar">
      <div className="HeaderContents">
        <Logo />
        <div className="Middle"></div>
        <Menu confirm = {confirm}/>
      </div>
    </div>
  );
}

function Logo(){
  return(
    <div className="Logo">
      <h1>아이콘.</h1>
    </div>
  )
}

function Menu({confirm}){
  const [items, setItems] = useState(
    [
      {
        key : 0,
        img : "img_path",
        alt : "Refresh",
        type : null,
      },
      {
        key : 1,
        img : "img_path",
        alt : "See",
        type : null,
      },
      {
        key : 2,
        img : "img_path",
        alt : "Complite",
        type : null,
      },
      {
        key : 3,
        img : "img_path",
        alt : "Fillter",
        type : null,
      },
      {
        key : 4,
        img : "img_path",
        alt : "Setting",
        type : null,
      },
      {
        key : 5,
        img : "img_path",
        alt : "User",
        type : null,
      },
    ]
  );
  console.log(confirm);
  return(
    <div className="Menu">
      {
        confirm ?
        items.map((item) => (
          <MenuItems key={item.key} img_alt={item.alt}  />
        )          
        ) : <div></div>
      }
    </div>
  )
}

function MenuItems({img_alt}){
  return(
    <div className="Items">
      <span>{img_alt}</span>
    </div>
  )
}

export default Headerbar;
