export enum ItemDurability {
  "naprawde dlugo" = "naprawde dlugo",
  "bardzo dlugo" = "bardzo dlugo",
  "dlugo" = "dlugo",
  "raczej dlugo" = "raczej dlugo",
  "troche" = "troche",
  "raczej krotko" = "raczej krotko",
  "krotko" = "krotko",
  "bardzo krotko" = "bardzo krotko",
}

export const itemDurabilityRealTimes = {
  [ItemDurability["bardzo krotko"]]: "1h",
  [ItemDurability["krotko"]]: "1h-6h",
  [ItemDurability["raczej krotko"]]: "6h-1d",
  [ItemDurability["troche"]]: "1d-2d",
  [ItemDurability["raczej dlugo"]]: "2d-3d",
  [ItemDurability["dlugo"]]: "3d-5d",
  [ItemDurability["bardzo dlugo"]]: "5d-8d",
  [ItemDurability["naprawde dlugo"]]: "8d",
};
