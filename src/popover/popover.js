import '../css/popover.css';

function Popover({pk}){
    return(
        <div className="PopOver">
            <div className="PopOverContents">

                {pk}
            </div>
        </div>
    )
}


export default Popover;