import './css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const React = require('react');

function Menu(props) {
    const [key, setKey] = React.useState(props.items.key);
    const [img, setImg] = React.useState(props.items.img);
    const [alt, setAlt] = React.useState(props.items.alt);
    const [type, setType] = React.useState(props.items.type);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //오픈할지 여부를 type과 관련지으면 될듯?
    const open = Boolean(anchorEl)&&Boolean(type);
    const id = open ? alt : undefined;

    //타입에따라 정해진 메뉴컨텐츠가 나오도록하기 위한 switch문
    switch(type){
        case 1:
            console.log("테스트성공!")
            break;
        case 2:
            break;
        case 3:
            break;
    }

    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                {alt}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className="popoverContents">
                    <a href="https://www.naver.com">가능한가?</a>
                </Typography>
            </Popover>
        </>
    );
}

export default Menu;
/*
6개의 메뉴가 필요하다
*/