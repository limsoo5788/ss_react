import React, {useState} from "react";

import '../css/popover.css';

function Popover({pk, efunc}){
    var contents = null;
    if(pk === 1){
        contents = (
          <div>
            <h1>Filter</h1>
            <form>
                <div className="TextBox">
                    <input type="text" id="search" name="Search" placeholder="Search" />
                </div>
                <div className="DateBtnBox">
                    <button type="button" className="DateBtn">Date</button>
                    <p>Date : None</p>
                </div>
                <div className="BtnBox">
                    <button className="Search" type="submit">Search</button>
                    <button className="Cancle" type="button" onClick={
                        (e) => {
                            e.preventDefault();
                            efunc(pk);
                        }
                    }>Cancle</button>
                </div>
            </form>
          </div>
        )
    }
    if(pk === 2){
        contents = (
          <div>
            <h1>Setting</h1>
            <form>
                <h3>추후 구현하는 것으로</h3>
                <div className="BtnBox">
                    <button className="Search" type="submit">Search</button>
                    <button className="Cancle" type="button" onClick={
                        (e) => {
                            e.preventDefault();
                            efunc(pk);
                        }
                    }>Cancle</button>
                </div>
            </form>
          </div>
        )
    }
    if(pk === 3){
        contents = (
          <div>
            <div className="UserInfo">
                <div className="UserNameBox">
                    <h1>UserName</h1>
                    <h6>(email)</h6>
                </div>
                <div className="LogOutBox">
                    <a className="LogOutBtn" onClick={
                        (e) => {
                            e.preventDefault();
                            efunc(pk);
                        }
                    }>LogOut</a>
                </div>
            </div>
            <div className="AdminInfo">
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