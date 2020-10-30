
import React, {useState} from "react";
import NonLogined from './nonlogined.js';
import OnLogin from './onlogin'
import '../css/main.css';

function Main({logined, confirm}){
    var contents = null;
    contents=logined && confirm?(<OnLogin/>):(<NonLogined/>)
    return(
        <div className="Main">
            {contents}
        </div>
    )
}

export default Main;