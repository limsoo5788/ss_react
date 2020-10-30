import React, {useState} from "react";
import { Link, Route } from 'react-router-dom';
import "../css/nonlogined.css"


function NonLogined(){
    // var contents = null;
    // var contents = <ChangeEmail />
    return(
        <div className="NonLogined">
            <div className="NonLoginedContents">
                <div className="ContentsBox">
                    <div className="Contents">
                        <Route exact path="/" component={LogIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/emailForPassword" component={EmailForPassword}/>
                        <Route path="/resetPassword" component={ResetPassword}/>
                        <Route path="/confrim" component={Confirm}/>
                        <Route path="/changeEmail" component={ChangeEmail}/>
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
                <div className="InputLabel">
                    <label for="id">등록되어있는 이메일 입니다.</label>
                </div>
                <div className="InputBox">
                    <input type="text" id="username" name="username" placeholder="Input Username" />
                </div>
                <div className="InputLabel">
                    <label for="username">등록되어있는 Username 입니다.</label>
                </div>
                <div className="InputBox">
                    <input type="password" id="pw" name="pw" placeholder="Password" />
                </div>
                <div className="InputBox">
                    <input type="password" id="pwCheck" name="pwCheck" placeholder="Password Check" />
                </div>
                <div className="InputLabel">                    
                    <label for="pw">비밀번호가 일치하지 않습니다.</label>
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

function EmailForPassword(){
    return(
        <div className="EFPContents">
            <h1>User email</h1>
            <div className="InputBox">
                    <input type="text" id="id" name="id" placeholder="Input Email" />
            </div>
            <div className="InputLabel">
                    <label for="id">유효하지 않는 이메일 입니다.</label>
            </div>
            <div>
                    <input type="submit" value="Send" />
            </div>
        </div>
    )
}

function ResetPassword(){
    return(
        <div className="CPContents">
            <h1>Change Password</h1>
            <div className="InputBox">
                <input type="password" id="pw" name="pw" placeholder="Password" />
            </div>
            <div className="InputBox">
                <input type="password" id="pwCheck" name="pwCheck" placeholder="Password Check" />
            </div>
            <div className="InputLabel">                    
                <label for="pw">비밀번호가 일치하지 않습니다.</label>
            </div>
            <div>
                <input type="submit" value="Change!" />
            </div>
        </div>
    )
}

function Confirm(){
    return(
        <div className="ACContents">
            <h1>Hello Username</h1>
            <div className="Discription">
                You have not confirmed your account(Register Email) yet.<br />
                Before you can access this application you need to confirm your account.<br />
                Check your email, you should have received an email with a confirmation link
            </div>
            <div className="Link">
                Need another confirmation email?
                <a>Click here</a>
            </div>
            <div className="Link">
                Need change account?
                <a>Click here</a>
            </div>
        </div>
    )
}

function ChangeEmail(){
    return(
        <div className="CEContents">
            <h1>Change Email</h1>
            <div className="InputBox">
                    <input type="text" id="id" name="id" placeholder="Input Current Email" />
            </div>
            <div className="InputBox">
                    <input type="text" id="id" name="id" placeholder="Input New Email" />
            </div>
            <div className="InputLabel">
                <label for="id">유효하지 않는 이메일 입니다.</label>
            </div>
            <div>
                <input type="submit" value="Change!" />
            </div>
        </div>
    )
}


export default NonLogined;