import React, {useState} from "react";

import '../css/popover.css';

function Popover({pk}){
    var contents = null;
    if(pk == 3){
        contents = <h1>Filter</h1>
    }
    if(pk == 4){
        contents = <h1>Setting</h1>
    }
    if(pk == 5){
        contents = <h1>User</h1>
    }
    return(
        <div className="PopOver">
            <div className="PopOverContents">

                {contents}
            </div>
        </div>
    )
}


export default Popover;