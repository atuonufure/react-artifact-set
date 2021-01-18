import React, { useState } from 'react';
import {
  calcAnyArray,
  mainCritDmg,
  mainCritRate,
  mainElemental,
  mainHealing,
  mainHighDmg,
  mainLowDmg,
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

const Circlet = () => {
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

  let mainStatValue = 0;

  const mainStatIndex = calcAnyArray([4, 5, 6, 7, 9, 10, 18]);
  console.log(mainStatIndex);
  switch (mainStatIndex) {
    case 4:
      mainStatValue = `HP ${mainLowDmg}%`;
      console.log(`HP ${mainLowDmg}%`);
      break;
    case 5:
      mainStatValue = `ATK ${mainLowDmg}%`;
      console.log(`ATK ${mainLowDmg}%`);
      break;
    case 6:
      mainStatValue = `DEF ${mainHighDmg}%`;
      console.log(`DEF ${mainHighDmg}%`);
      break;
    case 7:
      mainStatValue = `Elemental Mastery ${mainElemental}`;
      console.log(`Elemental Mastery ${mainElemental}`);
      break;
    case 9:
      mainStatValue = `CRIT Rate ${mainCritRate}%`;
      console.log(`CRIT Rate ${mainCritRate}%`);
      break;
    case 10:
      mainStatValue = `CRIT DMG ${mainCritDmg}%`;
      console.log(`CRIT DMG ${mainCritDmg}%`);
      break;
    case 18:
      mainStatValue = `Healing Bonus ${mainHealing}%`;
      console.log(`Healing Bonus ${mainHealing}%`);
      break;
    default:
      console.log('fail mainstat');
  }

  const arrCirclet = [];
  while (arrCirclet.length < calcAnyArray([3, 4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrCirclet.indexOf(r) === -1) if (r !== mainStatIndex) arrCirclet.push(r);
  }

  const CircletSubStats = arrCirclet.map(function (item, index, array) {
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
        return alert('fail');
    }
  });

  return (
    <div>
      <div className="artifact">
        <img
          src="https://static.wikia.nocookie.net/gensin-impact/images/d/df/Item_Broken_Rime%27s_Echo.png"
          className="App-logo"
          alt="logo"
        />
        <div>{mainStatValue}</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>+0</div>
        <div className="substats">{CircletSubStats}</div>
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

export default Circlet;
