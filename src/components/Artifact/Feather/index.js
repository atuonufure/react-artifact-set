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

const Feather = () => {
  const [flatHP, setFlatHP] = useState(random_flat_HP);
  const [flatATK, setFlatATK] = useState(random_flat_ATK);
  const [flatDEF, setFlatDEF] = useState(random_flat_DEF);
  const [percentHP, setPercentHP] = useState(random_percent_HP);
  const [percentATK, setPercentATK] = useState(random_percent_ATK);
  const [percentDEF, setPercentDEF] = useState(random_percent_DEF);
  const [elementalMastery, setElementalMastery] = useState(random_ElementalMastery);
  const [energyRecharge, setEnergyRecharge] = useState(random_EnergyRecharge);
  const [critRate, setCritRate] = useState(random_CRIT_Rate);
  const [critDmg, setCritDmg] = useState(random_CRIT_DMG);

  const arrFeather = [];
  while (arrFeather.length < calcAnyArray([3, 4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrFeather.indexOf(r) === -1) if (r !== 2) arrFeather.push(r);
  }

  const FeatherSubStats = arrFeather.map(function (item, index, array) {
    switch (item) {
      case 1:
        return <div key={Math.random()}>HP +{flatHP} </div>;
      case 2:
        return <div key={Math.random()}>ATK +{flatATK} </div>;
      case 3:
        return <div key={Math.random()}>DEF +{flatDEF} </div>;
      case 4:
        return <div key={Math.random()}>HP +{percentHP}% </div>;
      case 5:
        return <div key={Math.random()}>ATK +{percentATK}% </div>;
      case 6:
        return <div key={Math.random()}>DEF +{percentDEF}% </div>;
      case 7:
        return <div key={Math.random()}>Elemental Mastery +{elementalMastery} </div>;
      case 8:
        return <div key={Math.random()}>Energy Recharge +{energyRecharge}% </div>;
      case 9:
        return <div key={Math.random()}>CRIT Rate +{critRate}% </div>;
      case 10:
        return <div key={Math.random()}>CRIT DMG +{critDmg}% </div>;
      default:
        return console.log('fail mainstat');
    }
  });

  return (
    <div>
      <div className="artifact">
        <img
          src="https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Icebreaker%27s_Resolve.png"
          className="App-logo"
          alt="logo"
        />
        <div>ATK 47</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>+0</div>
        <div className="substats">{FeatherSubStats}</div>
        <button
          onClick={() =>
            setFlatHP(random_flat_HP) &
            setFlatATK(random_flat_ATK) &
            setFlatDEF(random_flat_DEF) &
            setPercentHP(random_percent_HP) &
            setPercentATK(random_percent_ATK) &
            setPercentDEF(random_percent_DEF) &
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

export default Feather;
