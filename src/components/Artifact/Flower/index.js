import React, { useState } from 'react';
import {
  calcAnyArray,
  random_CRIT_DMG,
  random_CRIT_Rate,
  random_ElementalMastery,
  random_EnergyRecharge,
  random_flat_ATK,
  random_flat_DEF,
  random_flat_HP,
  random_percent_ATK,
  random_percent_DEF,
  random_percent_HP,
} from '../../calc';

const Flower = () => {
  const [flatHP, setFlatHP] = useState(random_flat_HP);
  const [flatATK, setFlatATK] = useState(random_flat_ATK);
  const [flatDEF, setFlatDEF] = useState(random_flat_DEF);
  const [flatPercentHP, setFlatPercentHP] = useState(random_percent_HP);
  const [flatPercentATK, setFlatPercentATK] = useState(random_percent_ATK);
  const [flatPercentDEF, setFlatPercentDEF] = useState(random_percent_DEF);
  const [elementalMastery, setElementalMastery] = useState(random_ElementalMastery);
  const [energyRecharge, setEnergyRecharge] = useState(random_EnergyRecharge);
  const [critRate, setCritRate] = useState(random_CRIT_Rate);
  const [critDmg, setCritDmg] = useState(random_CRIT_DMG);

  const arrFlower = [];
  while (arrFlower.length < calcAnyArray([3, 4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrFlower.indexOf(r) === -1) if (r !== 1) arrFlower.push(r);
  }

  const flowerSubStats = arrFlower.map(function (item, index, array) {
    switch (item) {
      case 1:
        return <div>HP +{flatHP} </div>;
      case 2:
        return <div>ATK +{flatATK} </div>;
      case 3:
        return <div>DEF +{flatDEF} </div>;
      case 4:
        return <div>HP +{flatPercentHP}% </div>;
      case 5:
        return <div>ATK +{flatPercentATK}% </div>;
      case 6:
        return <div>DEF +{flatPercentDEF}% </div>;
      case 7:
        return <div>Elemental Mastery +{elementalMastery} </div>;
      case 8:
        return <div>Energy Recharge +{energyRecharge}% </div>;
      case 9:
        return <div>CRIT Rate +{critRate}% </div>;
      case 10:
        return <div>CRIT DMG +{critDmg}% </div>;
      default:
        return alert('fail');
    }
  });

  return (
    <div>
      <div>
        <img
          src="https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Snowswept_Memory.png"
          className="App-logo"
          alt="logo"
        />
        <div>HP 717</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>+0</div>
        {flowerSubStats}
        <button
          onClick={() =>
            setFlatHP(random_flat_HP) &
            setFlatATK(random_flat_ATK) &
            setFlatDEF(random_flat_DEF) &
            setFlatPercentHP(random_percent_HP) &
            setFlatPercentATK(random_percent_ATK) &
            setFlatPercentDEF(random_percent_DEF) &
            setElementalMastery(random_ElementalMastery) &
            setEnergyRecharge(random_EnergyRecharge) &
            setCritRate(random_CRIT_Rate) &
            setCritDmg(random_CRIT_DMG)
          }>
          refresh
        </button>
      </div>
    </div>
  );
};

export default Flower;
