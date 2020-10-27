import React, {useState} from "react";

import '../css/popover.css';

function Popover({pk}){
    var contents = null;
    if(pk == 3){
        contents = (
          <div>
            <h1>Filter</h1>
            <form>
                <input type="text" id="search" name="Search" placeholder="Search" />
                <a className="dateBtn">Date</a>
                <button type="submit">Search</button>
                <button type="button">Cancle</button>
            </form>
          </div>
        )
    }
    if(pk == 4){
        contents = (
          <div>
            <h1>Setting</h1>
            <form>
                <h3>추후 구현하는 것으로</h3>
                <button type="submit">Search</button>
                <button type="button">Cancle</button>
            </form>
          </div>
        )
    }
    if(pk == 5){
        contents = (
          <div>
            <h1>UserName</h1>
            <div>
                <a>Log Out</a>
            </div>
            <div>
                <a>Change Password</a>
                <a>Change UserName</a>
                <a>계정에 연결된 아이디 관리</a>
            </div>
          </div>
        )
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