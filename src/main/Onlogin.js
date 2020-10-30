import '../css/main.css';
const React = require('react');


function Onlogin(props) {
    let contents = null;
    return (
        <div className="Onlogin">
            <MainTop/>
            <MainBottom/>
        </div>
    )
}

const MainTop = () =>{
    return (
        <div className="MainTop">
            <AddBtn/>
            <DateView/>
            <MemoTrashBorder/>
        </div>
    )
}

const AddBtn = () => {
    return(
        <button className="AddBtn">
            +
        </button>
    )
}
const DateView = () => {
    return(
        <div className="DateView">

        </div>
    )
}
const MemoTrashBorder = () => {
    return(
        <div className="MemoTrashBorder">

        </div>
    )
}




const MainBottom = () =>{
    return (
        <div className="MainBottom">
            <Memo/>
        </div>
    )
}
const Memo = () =>{
    return (
        <div className="Memo">
            
        </div>
    )
}
export default Onlogin;