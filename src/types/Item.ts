import { ItemArmorClass } from "./ItemArmorClass";
import { ItemDurability } from "./ItemDurability";
import { ItemTypes } from "./ItemTypes";
import { ItemWeapon } from "./ItemWeapon";
import { ItemWeaponHand } from "./ItemWeaponHand";

export interface Item {
  name: string;
  short: string;
  isMagic: boolean;
  type: ItemTypes;
  weaponType: ItemWeapon;
  weaponHand: ItemWeaponHand;
  weaponSlashingDamage: boolean;
  weaponPiercingDamage: boolean;
  weaponBluntDamage: boolean;
  weaponEffectiveness: number;
  weaponBalance: number;
  isWeaponSilver: boolean;
  slot: boolean;
  armorClass: ItemArmorClass;
  armorHead: boolean;
  armorLeftArm: boolean;
  armorRightArm: boolean;
  armorChest: boolean;
  armorLegs: boolean;
  armorFoots: boolean;
  armorHands: boolean;
  armorPiercingRes: number;
  armorSlashingRes: number;
  armorBluntRes: number;
  shieldParry: number;
  weight: number;
  volume: number;
  durability: ItemDurability;
  specialBonus: string;
  occurrence: string;
  cost: number;
  vendorCost: number;
  description: string;
  comment: string;
}

export interface ItemResponse extends Item {
  id: string;
}

export interface ItemAddRequest {
  name?: string;
  short: string;
  isMagic?: boolean;
  slot?: boolean;
  weight?: number;
  volume?: number;
  durability?: ItemDurability;
  specialBonus?: string;
  occurrence?: string;
  cost?: number;
  vendorCost?: number;
  description?: string;
  comment?: string;
}

export interface ItemAddWeaponRequest extends ItemAddRequest {
  weaponType: ItemWeapon;
  weaponHand?: ItemWeaponHand;
  weaponSlashingDamage?: boolean;
  weaponPiercingDamage?: boolean;
  weaponBluntDamage?: boolean;
  weaponEffectiveness?: number;
  weaponBalance?: number;
  isWeaponSilver?: boolean;
}

export interface ItemAddArmorRequest extends ItemAddRequest {
  armorClass?: ItemArmorClass;
  armorHead?: boolean;
  armorLeftArm?: boolean;
  armorRightArm?: boolean;
  armorChest?: boolean;
  armorLegs?: boolean;
  armorFoots?: boolean;
  armorHands?: boolean;
  armorPiercingRes?: number;
  armorSlashingRes?: number;
  armorBluntRes?: number;
}

export interface ItemAddShieldRequest extends ItemAddRequest {
  armorPiercingRes?: number;
  armorSlashingRes?: number;
  armorBluntRes?: number;
  shieldParry?: number;
}

export interface ItemUpdateRequest {
  name?: string;
  short?: string;
  type: ItemTypes;
  isMagic?: boolean;
  slot?: boolean;
  weight?: number;
  volume?: number;
  durability?: ItemDurability;
  specialBonus?: string;
  occurrence?: string;
  cost?: number;
  vendorCost?: number;
  description?: string;
  comment?: string;
  weaponType: ItemWeapon;
  weaponHand?: ItemWeaponHand;
  weaponSlashingDamage?: boolean;
  weaponPiercingDamage?: boolean;
  weaponBluntDamage?: boolean;
  weaponEffectiveness?: number;
  weaponBalance?: number;
  isWeaponSilver?: boolean;
  armorClass?: ItemArmorClass;
  armorHead?: boolean;
  armorLeftArm?: boolean;
  armorRightArm?: boolean;
  armorChest?: boolean;
  armorLegs?: boolean;
  armorFoots?: boolean;
  armorHands?: boolean;
  armorPiercingRes?: number;
  armorSlashingRes?: number;
  armorBluntRes?: number;
  shieldParry?: number;
}

export interface ItemAddFormRequest {
  name?: string;
  short: string;
  isMagic?: boolean;
  slot?: boolean;
  durability?: ItemDurability;
  isWeaponSilver?: boolean;
  weaponType?: ItemWeapon;
  weaponHand?: ItemWeaponHand;
  weaponEffectiveness?: number;
  weaponBalance?: number;
  weaponSlashingDamage?: boolean;
  weaponPiercingDamage?: boolean;
  weaponBluntDamage?: boolean;
  shieldParry?: number;
  armorPiercingRes?: number;
  armorSlashingRes?: number;
  armorBluntRes?: number;
  armorHead?: boolean;
  armorChest?: boolean;
  armorLeftArm?: boolean;
  armorRightArm?: boolean;
  armorLegs?: boolean;
  armorHands?: boolean;
  armorFoots?: boolean;
  weight?: number;
  volume?: number;
  specialBonus?: string;
  occurrence?: string;
  cost?: number;
  vendorCost?: number;
  description?: string;
  comment?: string;
}
