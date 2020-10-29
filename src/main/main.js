import React, {useState} from "react";

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

function NonLogined(){
    // var contents = null;
    var contents = <LogIn />
    return(
        <div className="NonLogined">
            <div className="NonLoginedContents">
                <div className="ContentsBox">
                    <div className="Contents">
                        {contents}
                    </div>
                    <div className="IconBox">
                        <div className="Icon">
                            <h1>아이콘</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogIn(){
    return(
        <div className="LoginContents">
            <h1>Log In</h1>
            <form className="LoginForm">
                <div className="InputBox">
                    <input type="text" id="id" name="id" placeholder="Input Username or Email" />
                </div>
                <div className="InputBox">
                    <input type="password" id="pw" name="pw" placeholder="Password" />
                </div>
                <input type="Submit" value="Login" />
            </form>
            <div className="CASBox">
                <p>New user? <a>Create account</a> </p>
                <p>Forgot password? <a>Click here to reset it.</a> </p>
            </div>
        </div>
    )
}

export default Main;