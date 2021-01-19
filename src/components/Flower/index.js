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
} from '../../helpers/calc';
import { translate } from '../../App';
import {
  atk_stat,
  critDmg_stat,
  critRate_stat,
  def_stat,
  element_stat,
  energy_stat,
  hp_stat,
} from '../../helpers/languages';

const Flower = () => {
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

  const arrFlower = [];
  while (arrFlower.length < calcAnyArray([4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrFlower.indexOf(r) === -1) if (r !== 1) arrFlower.push(r);
  }

  const FlowerSubStats = arrFlower.map(function (item, index, array) {
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
      <img
        src="https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Snowswept_Memory.png"
        className="App-logo"
        alt="logo"
      />
      <div>{translate(hp_stat)} 717</div>
      <div>⭐⭐⭐⭐⭐</div>
      <div>+0</div>
      <div className="substats">{FlowerSubStats}</div>
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

export default Flower;
