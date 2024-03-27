// in game there is currency: 1 mithril = 100 gold, 1 gold = 20 silver, 1 silver = 12 copper
// i have pocket1 and pocket2
// pocket is in format: { mithril: some number, gold: some number, silver: some number, copper: some number }
// i need function that will subtract currency pocket1 - pocket2 and return result in same format
// result must be denominated to the lowest currency possible

type Pocket = {
  mithril: number;
  gold: number;
  silver: number;
  copper: number;
};

export const subtractCurrency = (pocket1: Pocket, pocket2: Pocket): Pocket => {
  const pocket1Copper =
    pocket1.mithril * 100 * 20 * 12 +
    pocket1.gold * 20 * 12 +
    pocket1.silver * 12 +
    pocket1.copper;
  const pocket2Copper =
    pocket2.mithril * 100 * 20 * 12 +
    pocket2.gold * 20 * 12 +
    pocket2.silver * 12 +
    pocket2.copper;
  const resultCopper = pocket1Copper - pocket2Copper;
  const mithril = Math.floor(resultCopper / (100 * 20 * 12));
  const gold = Math.floor((resultCopper % (100 * 20 * 12)) / (20 * 12));
  const silver = Math.floor((resultCopper % (20 * 12)) / 12);
  const copper = resultCopper % 12;
  return { mithril, gold, silver, copper };
};
