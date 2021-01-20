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
} from '../../helpers/calc';
import {
  anemo_stat,
  atk_stat,
  critDmg_stat,
  critRate_stat,
  cryo_stat,
  def_stat,
  electro_stat,
  element_stat,
  energy_stat,
  geo_stat,
  hp_stat,
  hydro_stat,
  phys_stat,
  pyro_stat,
} from '../../helpers/languages';
import gobletImg from '../../assets/goblet.png';

const Goblet = ({ translate }) => {
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
  switch (mainStatIndex) {
    case 4:
      mainStatValue = `${translate(hp_stat)} ${mainLowDmg}%`;
      break;
    case 5:
      mainStatValue = `${translate(atk_stat)} ${mainLowDmg}%`;
      break;
    case 6:
      mainStatValue = `${translate(def_stat)} ${mainHighDmg}%`;
      break;
    case 7:
      mainStatValue = `${translate(element_stat)} ${mainElemental}`;
      break;
    case 11:
      mainStatValue = `${translate(pyro_stat)} ${mainLowDmg}%`;
      break;
    case 12:
      mainStatValue = `${translate(hydro_stat)} ${mainLowDmg}%`;
      break;
    case 13:
      mainStatValue = `${translate(electro_stat)} ${mainLowDmg}%`;
      break;
    case 14:
      mainStatValue = `${translate(anemo_stat)} ${mainLowDmg}%`;
      break;
    case 15:
      mainStatValue = `${translate(cryo_stat)} ${mainLowDmg}%`;
      break;
    case 16:
      mainStatValue = `${translate(geo_stat)} ${mainLowDmg}%`;
      break;
    case 17:
      mainStatValue = `${translate(phys_stat)} ${mainHighDmg}%`;
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
        return (
          <div key={Math.random()}>
            {translate(hp_stat)} +{flatHP}
          </div>
        );
      case 2:
        return (
          <div key={Math.random()}>
            {translate(atk_stat)} +{flatATK}
          </div>
        );
      case 3:
        return (
          <div key={Math.random()}>
            {translate(def_stat)} +{flatDEF}
          </div>
        );
      case 4:
        return (
          <div key={Math.random()}>
            {translate(hp_stat)} +{percentHP}%
          </div>
        );
      case 5:
        return (
          <div key={Math.random()}>
            {translate(atk_stat)} +{percentATK}%
          </div>
        );
      case 6:
        return (
          <div key={Math.random()}>
            {translate(def_stat)} +{percentDEF}%
          </div>
        );
      case 7:
        return (
          <div key={Math.random()}>
            {translate(element_stat)} +{elementalMastery}
          </div>
        );
      case 8:
        return (
          <div key={Math.random()}>
            {translate(energy_stat)} +{energyRecharge}%
          </div>
        );
      case 9:
        return (
          <div key={Math.random()}>
            {translate(critRate_stat)} +{critRate}%
          </div>
        );
      case 10:
        return (
          <div key={Math.random()}>
            {translate(critDmg_stat)} +{critDmg}%
          </div>
        );
      default:
        return alert('fail');
    }
  });

  return (
    <div className="component">
      <img src={gobletImg} className="artifact" alt="goblet" />
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
        roll
      </button>
    </div>
  );
};

export default Goblet;
