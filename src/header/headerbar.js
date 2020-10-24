import '../css/header.css';

function Headerbar() {
  return (
    <div className="Headerbar">
      <div className="HeaderContents">
        <Logo />
        <div className="Middle"></div>
        <Menu />
      </div>
    </div>
  );
}

function Logo(){
  return(
    <div className="Logo">
      <h1>아이콘.</h1>
    </div>
  )
}

function Menu(){
  return(
    <div className="Menu">
      <h1>메뉴바 입니다.</h1>
    </div>
  )
}

export default Headerbar;
