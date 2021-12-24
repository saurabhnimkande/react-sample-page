import './App.css';
import Display from './display.jsx'

function App() {
  const mobileos=["Android","Blackberry","iPhone","Windows Phone"];
  const manufacturer=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <Display valuearr={mobileos} text="Mobile Operating System" />
      <Display valuearr={manufacturer} text="Mobile Manufacturer" />
    </div>
  );
}



export default App;
