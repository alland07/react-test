//import logo from './logo.svg';
import './App.scss';
//import Hello from './components/Hello';
//import TableFactorise from './components/TableFactorise';
//import Card from './components/Card';
//import TestCard from './components/TestCard';
//import JsxExemple from './components/JsxExemple';
//import smaug from './Asset/smaug.jpg';
//import ConcatName from './components/ConcatName';
//import data from './Data/Data.json';
//import UseStateExemple from './Hooks/UseStateExemple';
//import UseStateTest from './Hooks/UseState';
//import UseEffect from './Hooks/UseEffect';
import Height from './components/Height';
import Route from './Route/Router.js';

function App() {

  //const name = 'DUCHE';
  //const prenom = 'Allan';
  //const element = <h1>Bonjour , {prenom} {name}</h1>
  
  return (
    <div className="App">
    
      <Height>
      </Height>

      {/* 
      <div>
        <header className="App-header">
          <> 
            <Hello name="Allan DUCHE"/>
          </>
          <Card title="lorem" desc="lorem ipsum dolor sit amet" image={logo}></Card>
          <>
            <TestCard title="lo" desc="test" img={smaug}></TestCard>
            <JsxExemple/>
            <ConcatName/>
          </>
        </header>
        <TableFactorise data={data}/>
        <UseStateExemple/>
        <UseStateTest/>
        <UseEffect/>
      </div>
      */}
    
    </div>
  );
}

export default App;
