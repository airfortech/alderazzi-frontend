import { ConvertedItem } from "../../../types/ConvertTextToItems";
import { ItemArmorClass } from "../../../types/ItemArmorClass";
import { ItemTypes } from "../../../types/ItemTypes";
import { ItemWeapon } from "../../../types/ItemWeapon";
import { ItemWeaponHand } from "../../../types/ItemWeaponHand";

export const convertTextToItems = (text: string): ConvertedItem[] => {
  const items = text
    .split("\n\n")
    .join("XXXX")
    .split("\n")
    .join(" ")
    .split("XXXX")
    .join("\n\n")
    .split(/(?======== Oceniasz starannie)/)
    .filter(item => item.includes("======= Oceniasz starannie"))
    .map(item => {
      const type = item.includes("Typ zbroi: puklerz")
        ? ItemTypes.shield
        : item.includes("Typ zbroi: tarcza")
        ? ItemTypes.shield
        : item.includes("Typ zbroi:")
        ? ItemTypes.armor
        : item.includes("Typ broni:")
        ? ItemTypes.weapon
        : ItemTypes.other;

      let armorClass = null;
      if (type === ItemTypes.armor) {
        const matchedArmorClass = item.match(/(?<=Typ zbroi: )\b\w+/);
        armorClass = (
          matchedArmorClass ? matchedArmorClass[0].trim() : null
        ) as ItemArmorClass | null;
      }

      let weaponType = null;
      if (type === ItemTypes.weapon) {
        const matchedWeaponType = item.match(/(?<=Typ broni: )\b\w+(\s\w+)?/s);
        const weaponType_ = matchedWeaponType
          ? matchedWeaponType[0].trim()
          : null;

        weaponType = weaponType_?.includes("miecz")
          ? ItemWeapon.sword
          : weaponType_?.includes("topor")
          ? ItemWeapon.axe
          : weaponType_?.includes("sztylet")
          ? ItemWeapon.dagger
          : weaponType_?.includes("mlot")
          ? ItemWeapon.hammer
          : weaponType_?.includes("maczug")
          ? ItemWeapon.club
          : weaponType_?.includes("drzewc")
          ? ItemWeapon.poleArm
          : null;
      }

      const matchedShort = item.match(/(?<=Oceniasz, ze ).*(?= wazy)/);
      const short = matchedShort ? matchedShort[0] : "";

      const isMagic = item.includes("zostala zakleta jakas magia");
      const isWeaponSilver =
        type === ItemTypes.weapon
          ? item.includes("wykonania tej broni uzyto srebra")
          : null;

      const matchedWeaponHand = item.match(/(?<=Chwyt: ).*(?=Obrazenia)/);
      const weaponHand_ = matchedWeaponHand ? matchedWeaponHand[0] : null;
      const weaponHand = weaponHand_?.includes("rece lub oburacz")
        ? ItemWeaponHand.oneAndHalfHanded
        : weaponHand_?.includes("lewej rece")
        ? ItemWeaponHand.left
        : weaponHand_?.includes("prawej rece")
        ? ItemWeaponHand.right
        : weaponHand_?.includes("oburacz")
        ? ItemWeaponHand.twoHanded
        : weaponHand_?.includes("dowolnej rece")
        ? ItemWeaponHand.bothHanded
        : null;

      const matchedArmorParts = item.match(/Zaklada sie.* na (.*)\./);
      const armorParts = matchedArmorParts ? matchedArmorParts[1] : null;
      let armorHead = null;
      let armorLeftArm = null;
      let armorRightArm = null;
      let armorChest = null;
      let armorLegs = null;
      let armorFoots = null;
      let armorHands = null;
      if (armorParts?.includes("glowe")) armorHead = true;
      if (armorParts?.includes("lewe ramie")) armorLeftArm = true;
      if (armorParts?.includes("prawe ramie")) armorRightArm = true;
      if (armorParts?.includes("ramiona")) {
        armorLeftArm = true;
        armorRightArm = true;
      }
      if (armorParts?.includes("korpus")) armorChest = true;
      if (armorParts?.includes("nogi")) armorLegs = true;
      if (armorParts?.includes("stopy")) armorFoots = true;
      if (armorParts?.includes("dlonie")) armorHands = true;

      const matchedDamageType = item.match(/(?<=Obrazenia: ).*(?=Wywazenie)/);
      const damageType = matchedDamageType ? matchedDamageType[0].trim() : null;
      const weaponSlashingDamage =
        type === ItemTypes.weapon
          ? damageType?.includes("ciete") || false
          : null;
      const weaponPiercingDamage =
        type === ItemTypes.weapon
          ? damageType?.includes("klute") || false
          : null;
      const weaponBluntDamage =
        type === ItemTypes.weapon
          ? damageType?.includes("obuchowe") || false
          : null;

      const matchedWeaponBalance = item.match(
        /Wywazenie: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const weaponBalance = matchedWeaponBalance
        ? Number(matchedWeaponBalance[2])
        : null;

      const matchedWeaponEffectiveness = item.match(
        /Skutecznosc: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const weaponEffectiveness = matchedWeaponEffectiveness
        ? Number(matchedWeaponEffectiveness[2])
        : null;

      const matchedShieldParry = item.match(
        /Parowanie: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const shieldParry = matchedShieldParry
        ? Number(matchedShieldParry[2])
        : null;

      const matchedArmorPiercingRes = item.match(
        /Ciete: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const armorPiercingRes = matchedArmorPiercingRes
        ? Number(matchedArmorPiercingRes[2])
        : null;
      const matchedArmorSlashingRes = item.match(
        /Klute: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const armorSlashingRes = matchedArmorSlashingRes
        ? Number(matchedArmorSlashingRes[2])
        : null;
      const matchedArmorBluntRes = item.match(
        /Obuchowe: ([^\[]+) \[(\d+)\/(\d+)\]/
      );
      const armorBluntRes = matchedArmorBluntRes
        ? Number(matchedArmorBluntRes[2])
        : null;

      const matchedDescription = item.match(
        /(?<======== Oceniasz starannie.*========).*?(?=Wyglada na to, ze)/s
      );
      const description = matchedDescription
        ? matchedDescription[0].trim()
        : "";

      const matchedWeightInG = item.match(/(?<=wazy ).*(?= gram)/);
      const matchedWeightInKg = item.match(/(?<=wazy ).*(?= kilogram)/);
      const weight = matchedWeightInG
        ? Number(matchedWeightInG[0])
        : matchedWeightInKg
        ? Number(matchedWeightInKg[0]) * 1000
        : null;

      const matchedVolumeInMl = item.match(
        /(?<=objetosc wynosi ).*(?= mililitr)/
      );
      const matchedVolumeInL = item.match(/(?<=objetosc wynosi ).*(?= litr)/);
      const volume = matchedVolumeInMl
        ? Number(matchedVolumeInMl[0])
        : matchedVolumeInL
        ? Number(matchedVolumeInL[0]) * 1000
        : null;

      return {
        short,
        isMagic,
        type,
        weaponType,
        weaponHand,
        weaponSlashingDamage,
        weaponPiercingDamage,
        weaponBluntDamage,
        weaponEffectiveness,
        weaponBalance,
        isWeaponSilver,
        armorClass,
        armorSlashingRes,
        armorPiercingRes,
        armorBluntRes,
        armorHead,
        armorLeftArm,
        armorRightArm,
        armorChest,
        armorLegs,
        armorFoots,
        armorHands,
        shieldParry,
        weight,
        volume,
        description,
      };
    });

  return items.filter(({ type }) => type !== ItemTypes.other);
};
