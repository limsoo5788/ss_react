
import React, {useState} from "react";
import NonLogined from './nonlogined.js';
import Onlogin from './onlogin'
import '../css/main.css';

function Main(){
    const [logined, setLogined] = useState(false);
    const [confirm, setConfirm] = useState(false);
    var contents = null;
    // contents=logined && confirm?(<Onlogin/>):(<Nonlogin/>)
    return(
        <div className="Main">
            <NonLogined />
        </div>
    )
}

export default Main;