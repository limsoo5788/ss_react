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
  const [menus, setMenus] = useState(
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
    // {
    //   "Refresh" : {
    //     key : 0,
    //     img : "img_path",
    //     alt : "Refresh",
    //     type : 0,
    //   },
    //   "See" : {
    //     key : 1,
    //     img : "img_path",
    //     alt : "See",
    //     type : 0,
    //   },
    //   "Complite" : {
    //     key : 2,
    //     img : "img_path",
    //     alt : "Complite",
    //     type : 0,
    //   },
    //   "Fillter" : {
    //     key : 3,
    //     img : "img_path",
    //     alt : "Fillter",
    //     type : 1,
    //   },
    //   "Setting" : {
    //     key : 4,
    //     img : "img_path",
    //     alt : "Setting",
    //     type : 2,
    //   },
    //   "User" : {
    //     key : 5,
    //     img : "img_path",
    //     alt : "User",
    //     type : 3,
    //   },
    // }
  );

  const [visiable, setVisiable] = useState(false);
  const [popoverkey, setPopoverkey] = useState(0);
  
  const eventMenus = (items) => {
    if(items.key === 0){
      window.location.reload();
    }
    else if(items.key === 1){
      console.log("보기 방식 변경!");
    }else if(items.key == 2){
      if(items.alt === 'Complite'){
        // let item = items;
        // let menu = menus;
        // console.log(item);
        // item.alt = "Ing"
        // console.log(item.alt);
        // console.log(menu);
        // setMenus(menu);
        setMenus(
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
      else{
        // let item = items;
        // let menu = menus;
        // console.log(item);
        // item.alt = "Complite"
        // console.log(item.alt);
        // console.log(menu);
        // setMenus(menu);
        setMenus(
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
      if(visiable === false && popoverkey !== 1){
        setVisiable(true);
        setPopoverkey(1);
      }else if(visiable === true && popoverkey !== 1){
        setPopoverkey(1);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }else if(items.key === 4){
      if(visiable === false && popoverkey !== 2){
        setVisiable(true);
        setPopoverkey(2);
      }else if(visiable === true && popoverkey !== 2){
        setPopoverkey(2);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }else{
      if(visiable === false && popoverkey !== 3){
        setVisiable(true);
        setPopoverkey(3);
      }else if(visiable === true && popoverkey !== 3){
        setPopoverkey(3);
      }else{
        setVisiable(false);
        setPopoverkey(0);
      }
    }
  }


  const eventCancle = (typeKey) => {
    if(typeKey === 3){
      console.log("로그아웃 실행!");
    }
    setVisiable(false);
    setPopoverkey(0);
  }


  return(
    <div>
      <div className="Menu">
        {
          confirm ?
          menus.map((item) => (
            <MenuItems key={item.key} item={item} efunc={eventMenus}  />
          )          
          ) : <div></div>
        }
      </div>
      <div>
        {
          visiable ? <Popover pk = {popoverkey} efunc={eventCancle}/> : <div></div>
        }
      </div>
    </div>
    
    
  )
}

function MenuItems({item, efunc}){
  return(
    <a className="Items" onClick={
      (e) =>{
        e.preventDefault();
        efunc(item);
      }
    }>
      <span>{item.alt}</span>
    </a>
  )
}

export default Headerbar;
