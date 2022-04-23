import RenderChief from './components/RenderChief';
import './App.css';

function App() {

let date ={
  date: new Date()
}


  return (
    <div className="App">
      <RenderChief date={date.date}/>
    </div>
  );
}

export default App;
