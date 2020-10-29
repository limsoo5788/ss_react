import './css/App.css';
import Hearderbar from './header/Headerbar';
import Main from './main/main';
import Footerbar from './footer/footerbar';
const React = require('react');

function App() {
  const [logined, setLogined] = React.useState(0);
  const [confirm, setConfirm] = React.useState(0);

  return (
    <div className="App">
      <Hearderbar confirm={confirm}/>
      <Main confirm={confirm} logined={logined}/>
      <Footerbar/>
    </div>
  );
}

export default App;
