import Feather from './components/Feather';
import Flower from './components/Flower';
import Sands from './components/Sands';
import Goblet from './components/Goblet';
import Circlet from './components/Circlet';

import './App.css';
import { useState } from 'react';

export let language = 'en';
export const translate = (stat) => {
  return stat[language];
};

function App() {
  const [state, setState] = useState('en');
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="languageChanger" onClick={() => (language = 'en') & setState('en')}>
            EN
          </button>
          <button className="languageChanger" onClick={() => (language = 'ru') & setState('ru')}>
            RU
          </button>
        </div>
      </header>
      <div className="App-main">
        <Flower />
        <Feather />
        <Sands />
        <Goblet />
        <Circlet />
      </div>
    </div>
  );
}

export default App;
