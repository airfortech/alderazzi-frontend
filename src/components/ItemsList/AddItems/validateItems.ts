import { toast } from "react-toastify";
import { ConvertedItem } from "../../../types/ConvertTextToItems";

export const validateItems = (items: ConvertedItem[]) => {
  for (const {
    short,
    weaponEffectiveness,
    weaponBalance,
    armorSlashingRes,
    armorPiercingRes,
    armorBluntRes,
    shieldParry,
  } of items) {
    console.log(weaponEffectiveness);
    if (
      weaponEffectiveness !== null &&
      (weaponEffectiveness < 1 || weaponEffectiveness > 14)
    ) {
      toast.error(`Skuteczność broni: ${short} musi mieć wartość 1-14`);
      return false;
    }
    if (weaponBalance !== null && (weaponBalance < 1 || weaponBalance > 14)) {
      toast.error(`Wyważenie broni: ${short} musi mieć wartość 1-14`);
      return false;
    }
    if (
      armorSlashingRes !== null &&
      (armorSlashingRes < 1 || armorSlashingRes > 12)
    ) {
      toast.error(
        `Odporność na obrażenia cięte w: ${short} musi mieć wartość 1-12`
      );
      return false;
    }
    if (
      armorPiercingRes !== null &&
      (armorPiercingRes < 1 || armorPiercingRes > 12)
    ) {
      toast.error(
        `Odporność na obrażenia kłute w: ${short} musi mieć wartość 1-12`
      );
      return false;
    }
    if (armorBluntRes !== null && (armorBluntRes < 1 || armorBluntRes > 12)) {
      toast.error(
        `Odporność na obrażenia obuchowe w: ${short} musi mieć wartość 1-12`
      );
      return false;
    }
    if (shieldParry !== null && (shieldParry < 1 || shieldParry > 14)) {
      toast.error(`Parowanie: ${short} musi mieć wartość 1-14`);
      return false;
    }
  }
  return true;
};
