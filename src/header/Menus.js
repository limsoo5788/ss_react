import '../css/Headerbar.css';
import Menu from '../Menu'
const React = require('react');

function Menus() {
    const [activepopover, setAvtivepopover] = React.useState(0);
    const [menus, setMenus] = React.useState(
        [
            {
                key: 0,
                img: "img_path",
                alt: "Refresh",
                type: null,
            },
            {
                key: 1,
                img: "img_path",
                alt: "See",
                type: null,
            },
            {
                key: 2,
                img: "img_path",
                alt: "Complite",
                type: null,
            },
            {
                key: 3,
                img: "img_path",
                alt: "Fillter",
                type: null,
            },
            {
                key: 4,
                img: "img_path",
                alt: "Setting",
                type: null,
            },
            {
                key: 5,
                img: "img_path",
                alt: "User",
                type: null,
            },
        ]
    );
    return (
        <div className="Menus">
            {menus.map((items)=>(
                <Menu items={items}/>
            ))}
        </div>
    );
}

export default Menus;