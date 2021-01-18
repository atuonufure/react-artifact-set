import React, { useState } from 'react';
import {
  calcAnyArray,
  mainElemental,
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

const Goblet = () => {
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

  const mainStatIndex = calcAnyArray([4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17]);
  console.log(mainStatIndex);
  switch (mainStatIndex) {
    case 4:
      mainStatValue = `HP ${mainLowDmg}%`;
      break;
    case 5:
      mainStatValue = `ATK ${mainLowDmg}%`;
      break;
    case 6:
      mainStatValue = `DEF ${mainHighDmg}%`;
      break;
    case 7:
      mainStatValue = `Elemental Mastery ${mainElemental}`;
      break;
    case 11:
      mainStatValue = `Pyro DMG Bonus ${mainLowDmg}%`;
      break;
    case 12:
      mainStatValue = `Hydro DMG Bonus ${mainLowDmg}%`;
      break;
    case 13:
      mainStatValue = `Electro DMG Bonus ${mainLowDmg}%`;
      break;
    case 14:
      mainStatValue = `Anemo DMG Bonus ${mainLowDmg}%`;
      break;
    case 15:
      mainStatValue = `Cryo DMG Bonus ${mainLowDmg}%`;
      break;
    case 16:
      mainStatValue = `Geo DMG Bonus ${mainLowDmg}%`;
      break;
    case 17:
      mainStatValue = `Physical DMG Bonus ${mainHighDmg}%`;
      break;
    default:
      console.log('fail mainstat');
  }

  const arrGoblet = [];
  while (arrGoblet.length < calcAnyArray([4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrGoblet.indexOf(r) === -1) if (r !== mainStatIndex) arrGoblet.push(r);
  }

  const GobletSubStats = arrGoblet.map(function (item, index, array) {
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
          src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Frost-Weaved_Dignity.png"
          className="App-logo"
          alt="logo"
        />
        <div>{mainStatValue}</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>+0</div>
        <div className="substats">{GobletSubStats}</div>
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

export default Goblet;
