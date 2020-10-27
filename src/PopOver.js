import './css/App.css';
const React = require('react');

/*
    특정위치에 특정 기능을 하는 팝오버가 생성 되어야한다

*/
function Popover(props) {
    const [content_type, setContent_type] = React.useState();
    return (
        <div className="PopOver">
            <ul>
                <li className="popovertitle">
                    <h1>팝오버이름</h1>
                </li>
                <li className="popovercontents">
                    <h3>팝오버내용</h3>
                </li>
                <li className="popoverbuttons">
                    <h1>팝오버종료버튼들</h1>
                </li>
            </ul>
        </div>
    )
}

export default Popover;