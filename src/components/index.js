import React, { useState } from 'react';

const Main = () => {
  const [flatAttack, setFlatAttack] = useState(14);
  return (
    <div>
      <span>Сила атаки {flatAttack} </span>
      <button onClick={flatAttack > 14 ? () => setFlatAttack(flatAttack - 1) : ''}>
        уменьшить
      </button>
      <button onClick={flatAttack < 19 ? () => setFlatAttack(flatAttack + 1) : ''}>
        прибавить
      </button>
    </div>
  );
};

export default Main;
