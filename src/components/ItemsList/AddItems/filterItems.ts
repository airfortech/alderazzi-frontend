import { ConvertedItem, FilteredItem } from "../../../types/ConvertTextToItems";
import { calculateMediana } from "../../../utils/calculateMediana";

export const filterItems = (items: ConvertedItem[]): ConvertedItem[] => {
  const newItems = items.reduce((acc: FilteredItem[], item) => {
    const itemInArray = acc.findIndex(({ short }) => short === item.short);
    if (itemInArray === -1) {
      acc.push({
        short: item.short,
        isMagic: item.isMagic,
        type: item.type,
        weaponType: item.weaponType,
        weaponHand: item.weaponHand,
        weaponSlashingDamage: item.weaponSlashingDamage,
        weaponPiercingDamage: item.weaponPiercingDamage,
        weaponBluntDamage: item.weaponBluntDamage,
        weaponEffectiveness: item.weaponEffectiveness
          ? [item.weaponEffectiveness]
          : null,
        weaponBalance: item.weaponBalance ? [item.weaponBalance] : null,
        isWeaponSilver: item.isWeaponSilver,
        armorClass: item.armorClass,
        armorSlashingRes: item.armorSlashingRes
          ? [item.armorSlashingRes]
          : null,
        armorPiercingRes: item.armorPiercingRes
          ? [item.armorPiercingRes]
          : null,
        armorBluntRes: item.armorBluntRes ? [item.armorBluntRes] : null,
        armorHead: item.armorHead,
        armorLeftArm: item.armorLeftArm,
        armorRightArm: item.armorRightArm,
        armorChest: item.armorChest,
        armorLegs: item.armorLegs,
        armorFoots: item.armorFoots,
        armorHands: item.armorHands,
        shieldParry: item.shieldParry ? [item.shieldParry] : null,
        weight: item.weight,
        volume: item.volume,
        description: item.description,
      });
    } else {
      const weaponEffectiveness = acc[itemInArray].weaponEffectiveness;
      if (weaponEffectiveness && item.weaponEffectiveness) {
        weaponEffectiveness.push(item.weaponEffectiveness);
      }
      const weaponBalance = acc[itemInArray].weaponBalance;
      if (weaponBalance && item.weaponBalance) {
        weaponBalance.push(item.weaponBalance);
      }
      const armorSlashingRes = acc[itemInArray].armorSlashingRes;
      if (armorSlashingRes && item.armorSlashingRes) {
        armorSlashingRes.push(item.armorSlashingRes);
      }
      const armorPiercingRes = acc[itemInArray].armorPiercingRes;
      if (armorPiercingRes && item.armorPiercingRes) {
        armorPiercingRes.push(item.armorPiercingRes);
      }
      const armorBluntRes = acc[itemInArray].armorBluntRes;
      if (armorBluntRes && item.armorBluntRes) {
        armorBluntRes.push(item.armorBluntRes);
      }
      const shieldParry = acc[itemInArray].shieldParry;
      if (shieldParry && item.shieldParry) {
        shieldParry.push(item.shieldParry);
      }
    }
    return acc;
  }, []);

  return newItems.map(item => {
    return {
      ...item,
      weaponEffectiveness: calculateMediana(item.weaponEffectiveness),
      weaponBalance: calculateMediana(item.weaponBalance),
      armorSlashingRes: calculateMediana(item.armorSlashingRes),
      armorPiercingRes: calculateMediana(item.armorPiercingRes),
      armorBluntRes: calculateMediana(item.armorBluntRes),
      shieldParry: calculateMediana(item.shieldParry),
    };
  });
};
