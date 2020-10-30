import './css/App.css';
import Hearderbar from './header/Headerbar';
import Main from './main/main';
import Footerbar from './footer/Footerbar';
const React = require('react');

function App() {
  const [logined, setLogined] = React.useState(1);
  const [confirm, setConfirm] = React.useState(1);

  return (
    <div className="App">
      <Hearderbar confirm={confirm}/>
      <Main confirm={confirm} logined={logined}/>
      <Footerbar/>
    </div>
  );
}

export default App;
