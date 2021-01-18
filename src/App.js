import Feather from './components/Artifact/Feather';
import Flower from './components/Artifact/Flower';

import './App.css';
import Sands from './components/Artifact/Sands';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flower />
        <Feather />
        <Sands />
      </header>
    </div>
  );
}

export default App;
