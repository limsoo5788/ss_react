import './css/App.css';
import Footerbar from './footer/footerbar';
import Hearderbar from './header/headerbar';
import Main from "./main/main"
import React, {useState} from "react";

function App() {
  const [logined, setLogined] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="App">
      <Hearderbar confirm={confirm}/>
      <Main logined={logined} confirm={confirm} />
      <Footerbar/>
    </div>
  );
}

export default App;
