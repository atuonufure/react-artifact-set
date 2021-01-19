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
  while (arrFeather.length < calcAnyArray([4])) {
    const r = Math.floor(Math.random() * 10) + 1;
    if (arrFeather.indexOf(r) === -1) if (r !== 2) arrFeather.push(r);
  }

  const FeatherSubStats = arrFeather.map(function (item, index, array) {
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
        src="https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Icebreaker%27s_Resolve.png"
        className="App-logo"
        alt="logo"
      />
      <div>{translate(atk_stat)} 47</div>
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
        roll
      </button>
    </div>
  );
};

export default Feather;
