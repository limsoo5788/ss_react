// import logo from './logo.svg';
// import './App.css';
import Headerbar from './header/headerbar';
import Footerbar from './footer/footerbar';
import Main from './main/main';

function App() {
  return (
    <div className="App">
      <Headerbar />
      <Main />
      <Footerbar />
    </div>
  );
}

export default App;
