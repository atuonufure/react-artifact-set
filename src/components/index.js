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
  const [flatDefence, setFlatDefence] = useState(flat(16, 23));
  const [percentDefence, setPercentDefence] = useState(flat(16, 23));

  return (
    <div>
      <div>Сила атаки +{flatAttack} </div>
      <div>Сила атаки +{percentAttack}% </div>
      <div>Защита +{flatDefence} </div>
      <div>Защита +{percentDefence}% </div>
      <button
        onClick={() =>
          setFlatAttack(flat(14, 19)) &
          setPercentAttack(percent(4.1, 5.8)) &
          setFlatDefence(flat(16, 23)) &
          setPercentDefence(percent(5.1, 7.3))
        }>
        обновить
      </button>
    </div>
  );
};

export default Main;
