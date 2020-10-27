import './css/App.css';
import PopOver from './PopOver';
const React = require('react');

function Menu(props) {
    const [key, setKey] = React.useState(props.items.key);
    const [img, setImg] = React.useState(props.items.img);
    const [alt, setAlt] = React.useState(props.items.alt);
    const [type, setType] = React.useState(props.items.type);
    //팝오버가 나타나 있는지 확인하기 위한 상태값
    const [ispop, setIspop] = React.useState(0);

    const onClick = (e) => {
        { ispop ? setIspop(0) : setIspop(1) }
        console.log(e.clientX)
    };
    return (
        <button
            className="menuButton"
            onClick={onClick}
        >
            {ispop ? alt : "팝업없음"}
        </button>
    );
}

export default Menu;
/*
6개의 메뉴가 필요하다
*/