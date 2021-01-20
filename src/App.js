import { useState } from 'react';

import Feather from './components/Feather';
import Flower from './components/Flower';
import Sands from './components/Sands';
import Goblet from './components/Goblet';
import Circlet from './components/Circlet';

import './App.css';

function App() {
  const [state, setState] = useState('en');
  const translate = (stat) => {
    return stat[state];
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="languageChanger" onClick={() => setState('en')}>
            EN
          </button>
          <button className="languageChanger" onClick={() => setState('ru')}>
            RU
          </button>
        </div>
      </header>
      <div className="App-main">
        <Flower translate={translate} />
        <Feather translate={translate} />
        <Sands translate={translate} />
        <Goblet translate={translate} />
        <Circlet translate={translate} />
      </div>
    </div>
  );
}

export default App;
