import '../css/main.css';
import { Link, Route } from 'react-router-dom';
const React = require('react');


function Nonlogin(props) {
    let contents = null;
    if(props.children == "Login"){
        contents=(
            <>
                
            </>
        )
    }
    else{
        contents = (
            <>
            </>
        )
    }
    return (
        <div className="Nonlogin">
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/emailForPassword" component={EmailForPassword}/>
            <Route path="/resetPassword" component={ResetPassword}/>
            <Route path="/confrim" component={Confrim}/>
            <Route path="/changeEmail" component={ChangeEmail}/>
        </div>
    )
}

const Login = () =>{
    return (
        <div className="Login">
            <Link to="register">Register</Link>
            <a>여기가 로그인 페</a>
        </div>
    )
}
const Register = () =>{
    return (
        <div>
            <a>Register</a>
        </div>
    )
}
const EmailForPassword = () =>{
    return (
        <div>
            <a>EmailForPassword</a>
        </div>
    )
}
const ResetPassword = () =>{
    return (
        <div>
            <a>ResetPassword</a>
        </div>
    )
}
const Confrim = () =>{
    return (
        <div>
            <a>Confrim</a>
        </div>
    )
}
const ChangeEmail = () =>{
    return (
        <div>
            <a>ChangeEmail</a>
        </div>
    )
}

export default Nonlogin;