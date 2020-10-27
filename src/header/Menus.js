import { useEffect } from 'react';
import '../css/Headerbar.css';
import Menu from '../Menu'
import Popover from '../Popover';
const React = require('react');

function Menus() {
    const [ismenipopover, setIsmenupopover] = React.useState(0)
    const [popovertype, setPopvertype] = React.useState(0)
    const [menus, setMenus] = React.useState(
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
    //과거값을 가져오는게 문제있는건가?
    //http://jsfiddle.net/LPbhS/
    //
    useEffect(()=> {
        let a = popovertype;
        
        console.log("변경전 a후"+a)
        return()=>{
            if(a != popovertype){
                console.log("다르다!")
            }
            console.log("변경후 a전"+a)
            console.log(popovertype)
        }
    }, [popovertype]);
    return (
        <div className="Menus">
            {menus.map((items)=>(
                <Menu items={items} setPopovertype={setPopvertype}/>
            ))}
            <div className="menuPopover">
                {ismenipopover? <Popover/>:<></>}
            </div>
        </div>
    );
}

export default Menus;