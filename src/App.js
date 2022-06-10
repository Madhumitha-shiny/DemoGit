import picture from './images/logo3.png'
import downarr from './images/downarrow.png'
import Header from "./components/Header";
import Body from "./components/Body";
import Button from "./components/Button";
import { useState } from 'react';


function App() {
  const [bol, setBol] = useState(true);

  const onClick = () => {
    setBol(!bol)
  }
  return (
    <div className="App">
      <div className="card shadow">
        <div className="container">
          <div className="row">
          <Header img = {picture} text= "Sign in"/>
          </div>
          <div className="row">
          <Body />
          </div>
          <div className="row">
          <Button onClick={onClick}/>
          </div>
        </div>
      </div>
      <div className="loginType">
        {bol ? 
          <div className="container card">
            <div className="row">For myself</div>
            <div className="row">For my child</div>
            <div className="row">To manage my business</div>
          </div>
        : ''}
       </div>
       <div className="footer">
          <div className="container">
            <div className="row text-center">
              <div className="col-5">English(United Kingdom) <span><img src={downarr} alt="downarrow" height={13} width={13}/></span></div>
              <div className="col-auto">Help</div>
              <div className="col-auto">Privacy</div>
              <div className="col-auto">Terms</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
