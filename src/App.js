import Feather from './components/Artifact/Feather';
import Flower from './components/Artifact/Flower';
import Sands from './components/Artifact/Sands';
import Goblet from './components/Artifact/Goblet';
import Circlet from './components/Artifact/Circlet';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flower />
        <Feather />
        <Sands />
        <Goblet />
        <Circlet />
      </header>
    </div>
  );
}

export default App;
