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
    var contents = <Register />
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
                <input type="submit" value="Login" />
            </form>
            <div className="CASBox">
                <p>New user? <a>Create account</a> </p>
                <p>Forgot password? <a>Click here to reset it.</a> </p>
            </div>
        </div>
    )
}

function Register(){
    return(
        <div className="RegisterContents">
            <h1>Create Account</h1>
            <h3>
                Already an User?
                <a>LogIn</a>
            </h3>
            <form className="RegisterForm">
                <div className="InputBox">
                    <input type="text" id="id" name="id" placeholder="Input Email" />
                </div>
                <label for="id">등록되어있는 이메일 입니다.</label>
                <div className="InputBox">
                    <input type="text" id="username" name="username" placeholder="Input Username" />
                </div>
                <label for="username">등록되어있는 Username 입니다.</label>
                <div className="InputBox">
                    <input type="password" id="pw" name="pw" placeholder="Password" />
                </div>
                <label for="pw">비밀번호가 일치하지 않습니다.</label>
                <div className="InputBox">
                    <input type="password" id="pwCheck" name="pwCheck" placeholder="Password Check" />
                </div>
                <div>
                    <button type="button" id="PhoneApi">*Phone Numbers</button>
                </div>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        </div>
    )
}

export default Main;