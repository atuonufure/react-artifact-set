import React, { useState } from 'react';

const calcAnyArray = (array) => array[Math.floor(Math.random() * array.length)];

const random_flat_HP = () => calcAnyArray([209, 239, 269, 299]);
const random_flat_ATK = () => calcAnyArray([14, 16, 18, 19]);
const random_flat_DEF = () => calcAnyArray([16, 19, 21, 23]);
const random_percent_HP = () => calcAnyArray([4.1, 4.7, 5.3, 5.8]);
const random_percent_ATK = () => calcAnyArray([4.1, 4.7, 5.3, 5.8]);
const random_percent_DEF = () => calcAnyArray([5.1, 5.8, 6.6, 7.3]);
const random_ElementalMastery = () => calcAnyArray([16, 19, 21, 23]);
const random_EnergyRecharge = () => calcAnyArray([4.5, 5.2, 5.8, 6.5]);
const random_CRIT_Rate = () => calcAnyArray([2.7, 3.1, 3.5, 3.9]);
const random_CRIT_DMG = () => calcAnyArray([5.4, 6.2, 7.0, 7.8]);

const Main = () => {
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

  let arr = [];
  while (arr.length < 4) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  const FlatHP = () => {
    return <div>HP +{flatHP} </div>;
  };
  const FlatATK = () => {
    return <div>ATK +{flatATK} </div>;
  };
  const FlatDEF = () => {
    return <div>DEF +{flatDEF} </div>;
  };
  const FlatPercentHP = () => {
    return <div>HP +{flatPercentHP}% </div>;
  };
  const FlatPercentATK = () => {
    return <div>ATK +{flatPercentATK}% </div>;
  };
  const FlatPercentDEF = () => {
    return <div>DEF +{flatPercentDEF}% </div>;
  };
  const ElementalMastery = () => {
    return <div>Elemental Mastery +{elementalMastery} </div>;
  };
  const EnergyRecharge = () => {
    return <div>Energy Recharge +{energyRecharge}% </div>;
  };
  const CritRate = () => {
    return <div>CRIT Rate +{critRate}% </div>;
  };
  const CritDmg = () => {
    return <div>CRIT DMG +{critDmg}% </div>;
  };

  let stats = arr.map(function (item, index, array) {
    switch (item) {
      case 1:
        return <FlatHP />;
      case 2:
        return <FlatATK />;
      case 3:
        return <FlatDEF />;
      case 4:
        return <FlatPercentHP />;
      case 5:
        return <FlatPercentATK />;
      case 6:
        return <FlatPercentDEF />;
      case 7:
        return <ElementalMastery />;
      case 8:
        return <EnergyRecharge />;
      case 9:
        return <CritRate />;
      case 10:
        return <CritDmg />;
      default:
        return alert('fail');
    }
  });

  return (
    <div>
      {stats}
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
  );
};

export default Main;
