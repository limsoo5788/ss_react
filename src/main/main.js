
import React, {useState} from "react";
import NonLogin from './nonlogin.js';
// import OnLogin from './onlogin.js'
import '../css/main.css';

function Main({logined, confirm}){
    const contents=logined && confirm?(<NonLogin/>):(<NonLogin/>)
    return(
        <div className="Main">
            {contents}
        </div>
    )
}

export default Main;