import './css/App.css';
import Footerbar from './footer/footerbar';
import Hearderbar from './header/headerbar';
import Main from "./main/main"
const React = require('react');
function App() {
  //const [logined, setLogined] = React.useState(1);
  //const [confirm, setConfirm] = React.useState(1);

  return (
    <div className="App">
      <Hearderbar/>
      <Main />
      <Footerbar/>
    </div>
  );
}

export default App;
