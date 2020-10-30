import React, {useState} from "react";

import NonLogined from './nonlogined.js';

import '../css/main.css';

function Main(){
    const [logined, setLogined] = useState(false);
    const [confirm, setConfirm] = useState(false);
    return(
        <div className="Main">
            <NonLogined />
        </div>
    )
}

export default Main;