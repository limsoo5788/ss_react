import '../css/main.css';
const React = require('react');


function Onlogin(props) {
    let contents = null;
    const delete_memo_id = {dmi:null};
    const [box_visible, setbox_visible] = React.useState(0);
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