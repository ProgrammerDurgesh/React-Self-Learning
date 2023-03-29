import logo from './logo.svg';
import './App.css';
import Event from './ButtonEvent';
import ClassComponentsE,{ClassComponentsA,ClassComponentsB,ClassComponentsC,ClassComponentsD} from './ClassComponents';
import FunctionD ,{ FunctionA,FunctionB,FunctionC } from './NewComponents';
function App() {
  return (
    <div className="App">
     <h1>Hello World </h1> 
     <ClassComponentsA/>
     <FunctionA />
     <Event/>
    </div>
  
  );
}
function Durgesh()
{
    return (<h1>This Is Durgesh ABCD </h1>)
}
export default App;
