import '../css/main.css';
import Onlogin from './Onlogin'
import Nonlogin from './Nonlogin'
import {Route, Switch} from 'react-router-dom'

function Main(props) {
    var contents = null;

    contents=props.logined?(<Onlogin/>):(<Nonlogin confirm={props.confirm}/>)
    return (
        <div className="Main">
            {contents}
        </div>
    )
}

export default Main;