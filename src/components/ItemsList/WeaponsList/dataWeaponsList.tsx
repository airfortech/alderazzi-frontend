import { ItemWeapon } from "../../../types/ItemWeapon";
import { WeaponsListOption } from "../../../types/ItemsList";

export const weaponsOptions = (weaponType: keyof typeof ItemWeapon) => [
  {
    value: `weapon&weaponType=${weaponType}&isMagic=true`,
    label: "Magiczne",
  },
  {
    value: `weapon&weaponType=${weaponType}&isWeaponSilver=true`,
    label: "Srebrne",
  },
  {
    value: `weapon&weaponType=${weaponType}&isMagic=false&isWeaponSilver=false`,
    label: "Zwykłe",
  },
  {
    value: `weapon&weaponType=${weaponType}`,
    label: "Wszystkie",
  },
];

export const weaponsListOptions: WeaponsListOption[] = [
  {
    weaponType: "sword",
    path: "miecze",
    selectPlaceholder: "Rodzaj mieczy:",
    icon: "sword",
    buttonLabel: "Dodaj miecz",
    tableTitle: "Miecze",
  },
  {
    weaponType: "axe",
    path: "topory",
    selectPlaceholder: "Rodzaj toporów:",
    icon: "axe",
    buttonLabel: "Dodaj topór",
    tableTitle: "Topory",
  },
  {
    weaponType: "dagger",
    path: "sztylety",
    selectPlaceholder: "Rodzaj sztyletów:",
    icon: "daggers",
    buttonLabel: "Dodaj sztylet",
    tableTitle: "Sztylety",
  },
  {
    weaponType: "hammer",
    path: "mloty",
    selectPlaceholder: "Rodzaj młotów:",
    icon: "hammer",
    buttonLabel: "Dodaj młot",
    tableTitle: "Młoty",
  },
  {
    weaponType: "club",
    path: "maczugi",
    selectPlaceholder: "Rodzaj maczug:",
    icon: "club",
    buttonLabel: "Dodaj maczugę",
    tableTitle: "Maczugi",
  },
  {
    weaponType: "poleArm",
    path: "drzewce",
    selectPlaceholder: "Rodzaj drzewców:",
    icon: "flail",
    buttonLabel: "Dodaj drzewiec",
    tableTitle: "Drzewce",
  },
];
