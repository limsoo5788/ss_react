import './css/App.css';
import PopOver from './Popover';
const React = require('react');

function Menu(props) {
    const [key, setKey] = React.useState(props.items.key);
    const [img, setImg] = React.useState(props.items.img);
    const [alt, setAlt] = React.useState(props.items.alt);
    const [type, setType] = React.useState(props.items.type);

    const onClick = (e) => {
        props.setPopovertype(type)
    };
    return (
        <button
            className="menuButton"
            onClick={onClick}
        >
        {alt}
        </button>
    );
}

export default Menu;
/*
6개의 메뉴가 필요하다
*/