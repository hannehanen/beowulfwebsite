import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="#start">Start</a>
        <a href="#nyheter">Nyheter..</a>
        <a href="#dokument">Dokument</a>
        <a href="#om">Om</a>
      </div>
      <div id="outer-container">
        <div id="sidebar">

          <p className="text">
          Något här.
          </p>
          
          <p className="text">
          Något där.
          </p>
        </div>
        <div id="content">
        <h1 className="text">Beowulf Rocks!</h1>
        <p className="text">
          Informationen kan stå här...
         
          </p>
          <p className="text">
          Endast en enkel sida för att påvisa något man kan göra..
         
          </p>
    
        </div>
      </div>
    </div>
  );
}

export default App;
