import { Icon } from "./Icons";
import { ItemWeapon } from "./ItemWeapon";

export interface WeaponsListOption {
  weaponType: keyof typeof ItemWeapon;
  path: string;
  selectPlaceholder: string;
  icon: Icon;
  buttonLabel: string;
  tableTitle: string;
}
