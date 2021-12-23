import './App.css';

function App() {
  const mobileos=["Android","Blackberry","iPhone","Windows Phone"];
  const manufacturer=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
      {
        mobileos.map((el) => (
          <li>{el}</li>
        ))
      }
      </ul>
      <h1>Mobile Manufacturer</h1>
      <ul>
      {
        manufacturer.map((el) => (
          <li>{el}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
