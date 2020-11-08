import './css/App.css';
import Footerbar from './footer/footerbar';
import Headerbar from './header/headerbar';
import Main from "./main/main"
import React, {useState} from "react";

function App() {
  const [logined, setLogined] = useState(true);
  const [confirm, setConfirm] = useState(true);

  return (
    <div className="App">
      <Headerbar confirm={confirm}/>
      <Main logined={logined} confirm={confirm} />
      <Footerbar/>
    </div>
  );
}

export default App;
