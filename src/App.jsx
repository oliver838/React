import "./App.css";
import { Counter } from "./components/counter";

function App() {
  
  const h3Sytle={
    boxShadow:'0 0 5px gray',
    padding:'10px',
    textAlign:'center'
  }
  const today = new Date()
  return (
    
      <div  className="app">
        <h1 style={{color:'Black',textAlign:'center'}}>My first React app</h1>
        <h3 style={h3Sytle}>Egyik fofntos jellemzője a JSX szintaxis</h3>
        <p>Mai dátum:{today.toLocaleDateString()}</p>
        <Counter/>  
      </div>
    
  );
}

export default App;
