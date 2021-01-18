import React, { useState } from 'react';

const flat = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const percent = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return +rand.toFixed(1);
};

const Main = () => {
  const [flatAttack, setFlatAttack] = useState(flat(14, 19));
  const [percentAttack, setPercentAttack] = useState(percent(4.1, 5.8));

  return (
    <div>
      <div>
        <span>Сила атаки {flatAttack} </span>
        <button onClick={flatAttack > 14 ? () => setFlatAttack(flatAttack - 1) : ''}>
          уменьшить
        </button>
        <button onClick={flatAttack < 19 ? () => setFlatAttack(flatAttack + 1) : ''}>
          прибавить
        </button>
      </div>
      <div>
        <span>Сила атаки {percentAttack}% </span>
        <button
          onClick={
            percentAttack > 4.1 ? () => setPercentAttack(+(percentAttack - 0.1).toFixed(1)) : ''
          }>
          уменьшить
        </button>
        <button
          onClick={
            percentAttack < 5.8 ? () => setPercentAttack(+(percentAttack + 0.1).toFixed(1)) : ''
          }>
          прибавить
        </button>
      </div>
      <div>
        <button onClick={() => setFlatAttack(flat(14, 19)) & setPercentAttack(percent(4.1, 5.8))}>
          обновить
        </button>
      </div>
    </div>
  );
};

export default Main;
