import '../css/onlogin.css';
import {useState} from "react";


function OnLogin(props) {
    let contents = null;
    const delete_memo_id = {dmi:null};
    const [box_visible, setbox_visible] = useState(false);
    return (
        <div className="Onlogin">
            <MainTop setbox_visible={setbox_visible}/>
            <MainBottom box_visible={box_visible}/>
        </div>
    )
}

const MainTop = (props) =>{
    return (
        <div className="MainTop">
            <AddBtn/>
            <DateView/>
            <MemoDeleteBorder setbox_visible={props.setbox_visible}/>
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
const MemoDeleteBorder = (props) => {
    //props.setbox_visible
    return(
        <div className="MemoDeleteBorder">
            <MemoTrashCan/>
            <MemoDelete/>
            <NoMemoDelete/>
        </div>
    )
}
const MemoTrashCan = () => {
    return(
        <button className="MemoTrashCan">

        </button>
    )
}
const MemoDelete = () => {
    return(
        <button className="MemoDelete">
            
        </button>
    )
}
const NoMemoDelete = () => {
    return(
        <button className="NoMemoDelete">
            
        </button>
    )
}




const MainBottom = (props) =>{
    //props = box_visible
    return (
        // file:///D:/Util/Git/folder/htmltest/index.html
        // https://hello-bryan.tistory.com/114
        // 이거 넣어도 이쁠듯: https://stackoverflow.com/questions/57555389/change-height-of-element-in-css-grid-without-pushing-sibling-elements
        <div className="MainBottom">
            <Memo height={40}/>
            <Memo height={60}/>
            <Memo height={80}/>
            <Memo height={120}/>
            <Memo height={20}/>
            <Memo height={30}/>
            <Memo height={40}/>
        </div>
    )
}
// style={{height: props.height}}
const Memo = (props) =>{
    return (
        <div className="Memo" style={{height: props.height}}>
            <DataManagement height={props.height}/>
        </div>
    )
}
const DataManagement = (props) =>{
    return (
        <div className="DataManagement">
            <DMTitleandbody height={props.height}/>
            {/* <DMTime/>
            <DMOption/> */}
        </div>
    )
}
const DMTitleandbody = (props) =>{
    return (
        <div className="DMTitleandbody" style={{height: props.height}}>
            
        </div>
    )
}
const DMTime = () =>{
    return (
        <div className="DMTime">
            
        </div>
    )
}
const DMOption = () =>{
    return (
        <div className="DMOption">
            
        </div>
    )
}
export default OnLogin;