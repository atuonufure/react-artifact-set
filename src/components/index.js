import React, { useState } from 'react';

const Array_flat_HP = [209, 239, 269, 299];
const Array_flat_ATK = [14, 16, 18, 19];
const Array_flat_DEF = [16, 19, 21, 23];
const Array_percent_HP = [4.1, 4.7, 5.3, 5.8];
const Array_percent_ATK = [4.1, 4.7, 5.3, 5.8];
const Array_percent_DEF = [5.1, 5.8, 6.6, 7.3];
const Array_ElementalMastery = [16, 19, 21, 23];
const Array_EnergyRecharge = [4.5, 5.2, 5.8, 6.5];
const Array_CRIT_Rate = [2.7, 3.1, 3.5, 3.9];
const Array_CRIT_DMG = [5.4, 6.2, 7.0, 7.8];

const calcAnyArray = (array) => array[Math.floor(Math.random() * array.length)];

const Main = () => {
  const random_flat_HP = () => calcAnyArray(Array_flat_HP);
  const random_flat_ATK = () => calcAnyArray(Array_flat_ATK);
  const random_flat_DEF = () => calcAnyArray(Array_flat_DEF);
  const random_percent_HP = () => calcAnyArray(Array_percent_HP);
  const random_percent_ATK = () => calcAnyArray(Array_percent_ATK);
  const random_percent_DEF = () => calcAnyArray(Array_percent_DEF);
  const random_ElementalMastery = () => calcAnyArray(Array_ElementalMastery);
  const random_EnergyRecharge = () => calcAnyArray(Array_EnergyRecharge);
  const random_CRIT_Rate = () => calcAnyArray(Array_CRIT_Rate);
  const random_CRIT_DMG = () => calcAnyArray(Array_CRIT_DMG);

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

  return (
    <div>
      <div>HP +{flatHP} </div>
      <div>ATK +{flatATK} </div>
      <div>DEF +{flatDEF} </div>
      <div>HP +{flatPercentHP}% </div>
      <div>ATK +{flatPercentATK}% </div>
      <div>DEF +{flatPercentDEF}% </div>
      <div>Elemental Mastery +{elementalMastery} </div>
      <div>Energy Recharge +{energyRecharge}% </div>
      <div>CRIT Rate +{critRate}% </div>
      <div>CRIT DMG +{critDmg}% </div>
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
          setCritDmg(random_CRIT_DMG) &
          console.log(
            `flatHP = ${flatHP}`,
            `flatATK = ${flatATK}`,
            `flatDEF = ${flatDEF}`,
            `flatPercentHP = ${flatPercentHP}`,
            `flatPercentATK = ${flatPercentATK}`,
            `flatPercentDEF = ${flatPercentDEF}`,
            `elementalMastery = ${elementalMastery}`,
            `energyRecharge = ${energyRecharge}`,
            `critRate = ${critRate}`,
            `critDmg = ${critDmg}`,
          )
        }>
        обновить
      </button>
    </div>
  );
};

export default Main;
