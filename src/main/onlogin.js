import '../css/onlogin.css';
import DMCBack from './dmc.js';
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
        <>
            <div className="MainBottom">
                <Memo/>
                <Memo/>
                <Memo/>
                <Memo/>
                <Memo/>
                <Memo/>
                <Memo/>
            </div>
            <DMCBack />
        </>
    )
}
const Memo = () =>{
    return (
        <div className="Memo">
            <DataManagement/>
        </div>
    )
}
const DataManagement = () =>{
    return (
        <div className="DataManagement">
            <DMTitleandbody/>
            <DMTime/>
            <DMOption/>
        </div>
    )
}
const DMTitleandbody = () =>{
    return (
        <div className="DMTitleandbody">
            
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