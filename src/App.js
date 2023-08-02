import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      
      <PersonCard 
      firstname ={"Dude"}
      lastname = {"Man"}
      age={32}
      color={"blue"} />

      <PersonCard 
      firstname ={"Doe"}
      lastname = {"jane"}
      age={45}
      color={"Black"} />

      <PersonCard 
      firstname ={"Fillmore"}
      lastname = {"Millard"}
      age={50}
      color={"Brown"} />

      <PersonCard 
      firstname ={"S"}
      lastname = {"Millard"}
      age={50}
      color={"Brown"} />

    </div>
  );
}

export default App;
