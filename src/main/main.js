import '../css/main.css';
import Onlogin from './Onlogin'
import Nonlogin from './Nonlogin'

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