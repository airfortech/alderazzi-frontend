import { Icon } from "./Icons";
import { ItemArmorClass } from "./ItemArmorClass";
import { ItemTypes } from "./ItemTypes";
import { ItemWeapon } from "./ItemWeapon";

export interface ItemsListOption {
  path: string;
  selectPlaceholder: string;
  icon: Icon;
  buttonLabel: string;
  tableTitle: string;
  defaultOption?: number;
}

export interface WeaponsListOption extends ItemsListOption {
  weaponType: keyof typeof ItemWeapon;
}

export interface ArmorsListOption extends ItemsListOption {
  armorClass: keyof typeof ItemArmorClass;
}

export interface ShieldsListOption extends ItemsListOption {
  shieldParry: number;
}

export interface OthersListOption extends ItemsListOption {
  type: ItemTypes;
  endpoint: keyof typeof ItemTypes;
}
