export const calcAnyArray = (array) => array[Math.floor(Math.random() * array.length)];

export const random_flat_HP = () => calcAnyArray([209, 239, 269, 299]);
export const random_flat_ATK = () => calcAnyArray([14, 16, 18, 19]);
export const random_flat_DEF = () => calcAnyArray([16, 19, 21, 23]);
export const random_percent_HP = () => calcAnyArray([4.1, 4.7, 5.3, 5.8]);
export const random_percent_ATK = () => calcAnyArray([4.1, 4.7, 5.3, 5.8]);
export const random_percent_DEF = () => calcAnyArray([5.1, 5.8, 6.6, 7.3]);
export const random_ElementalMastery = () => calcAnyArray([16, 19, 21, 23]);
export const random_EnergyRecharge = () => calcAnyArray([4.5, 5.2, 5.8, 6.5]);
export const random_CRIT_Rate = () => calcAnyArray([2.7, 3.1, 3.5, 3.9]);
export const random_CRIT_DMG = () => calcAnyArray([5.4, 6.2, 7.0, 7.8]);
