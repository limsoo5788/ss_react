import React, {useState} from "react";

import '../css/header.css';
import Popover from '../popover/popover';

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
        type : 0,
      },
      {
        key : 1,
        img : "img_path",
        alt : "See",
        type : 0,
      },
      {
        key : 2,
        img : "img_path",
        alt : "Complite",
        type : 0,
      },
      {
        key : 3,
        img : "img_path",
        alt : "Fillter",
        type : 1,
      },
      {
        key : 4,
        img : "img_path",
        alt : "Setting",
        type : 2,
      },
      {
        key : 5,
        img : "img_path",
        alt : "User",
        type : 3,
      },
    ]
  );

  const [visiable, setVisiable] = useState(true);
  const [popoverkey, setPopoverkey] = useState(0);
  
  const eventMenus = (items) => {
    if(items.key === 0){
      window.location.reload();
    }
    else if(items.key === 1){
      console.log("보기 방식 변경!");
    }else if(items.key == 2){
      if(items.alt === 'Complite'){
        setItems(
          [
            {
              key : 0,
              img : "img_path",
              alt : "Refresh",
              type : 0,
            },
            {
              key : 1,
              img : "img_path",
              alt : "See",
              type : 0,
            },
            {
              key : 2,
              img : "img_path",
              alt : "Ing",
              type : 0,
            },
            {
              key : 3,
              img : "img_path",
              alt : "Fillter",
              type : 1,
            },
            {
              key : 4,
              img : "img_path",
              alt : "Setting",
              type : 2,
            },
            {
              key : 5,
              img : "img_path",
              alt : "User",
              type : 3,
            },
          ]
        );
      }
      if(items.alt === 'Ing'){
        setItems(
          [
            {
              key : 0,
              img : "img_path",
              alt : "Refresh",
              type : 0,
            },
            {
              key : 1,
              img : "img_path",
              alt : "See",
              type : 0,
            },
            {
              key : 2,
              img : "img_path",
              alt : "Complite",
              type : 0,
            },
            {
              key : 3,
              img : "img_path",
              alt : "Fillter",
              type : 1,
            },
            {
              key : 4,
              img : "img_path",
              alt : "Setting",
              type : 2,
            },
            {
              key : 5,
              img : "img_path",
              alt : "User",
              type : 3,
            },
          ]
        );
      }
    }else if(items.key === 3){
      if(visiable === false && popoverkey != 3){
        setVisiable(true);
        setPopoverkey(3);
      }else if(visiable === true && popoverkey != 3){
        setPopoverkey(3);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }else if(items.key === 4){
      if(visiable === false && popoverkey != 4){
        setVisiable(true);
        setPopoverkey(4);
      }else if(visiable === true && popoverkey != 4){
        setPopoverkey(4);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }else{
      if(visiable === false && popoverkey != 5){
        setVisiable(true);
        setPopoverkey(5);
      }else if(visiable === true && popoverkey != 5){
        setPopoverkey(5);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }
  }


  return(
    <div>
      <div className="Menu">
        {
          confirm ?
          items.map((item) => (
            <MenuItems key={item.key} items={item} efuc={eventMenus}  />
          )          
          ) : <div></div>
        }
      </div>
      <div>
        {
          visiable ? <Popover pk = {popoverkey}/> : <div></div>
        }
      </div>
    </div>
    
    
  )
}

function MenuItems({items, efuc}){
  return(
    <a className="Items" onClick={
      (e) =>{
        e.preventDefault();
        efuc(items);
      }
    }>
      <span>{items.alt}</span>
    </a>
  )
}

export default Headerbar;
