import '../css/headerbar.css';
import '../css/App.css';
import imglogo from './logo192.png';

function Headerbar() {
  return (
    <div className="Headerbar">
      <img src={imglogo} className="AljjamLogo" alt="logo"/>
    </div>
  );
}

export default Headerbar;
