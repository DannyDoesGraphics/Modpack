// Priority: 0

global.artisanMachineDefinitions = [
  {
    id: "society:loom",
    recipes: global.loomRecipes,
    stageCount: 1,
    maxInput: 5,
    upgrade: "society:tiny_gnome",
  },
  {
    id: "society:cheese_press",
    recipes: global.cheesePressRecipes,
    stageCount: 2,
    maxInput: 1,
    upgrade: "society:pink_matter",
  },
  {
    id: "society:aging_cask",
    recipes: global.agingCaskRecipes,
    stageCount: 10,
    maxInput: 1,
    upgrade: "society:broken_clock",
  },
  {
    id: "society:ancient_cask",
    recipes: global.ancientCaskRecipes,
    stageCount: 20,
    maxInput: 1,
    upgrade: "society:inserter",
  },
  {
    id: "society:crystalarium",
    recipes: global.crystalariumCrystals,
    stageCount: 5,
    maxInput: 1,
    upgrade: "society:black_opal",
  },
  {
    id: "society:deluxe_worm_farm",
    recipes: global.deluxeWormFarmRecipes,
    stageCount: 2,
    maxInput: 4,
    upgrade: "society:infinity_worm",
  },
  {
    id: "society:fish_smoker",
    recipes: global.fishSmokerRecipes,
    stageCount: 2,
    maxInput: 1,
    upgrade: "society:ancient_roe",
  },
  {
    id: "society:bait_maker",
    recipes: global.baitMakerRecipes,
    stageCount: 1,
    maxInput: 1,
  },
  {
    id: "society:dehydrator",
    recipes: global.dehydratorRecipes,
    stageCount: 1,
    maxInput: 8,
    upgrade: "society:cordycep",
  },
  {
    id: "society:mayonnaise_machine",
    recipes: global.mayonnaiseMachineRecipes,
    stageCount: 1,
    maxInput: 1,
    upgrade: "society:enkephalin",
  },
  {
    id: "society:preserves_jar",
    recipes: global.preservesJarRecipes,
    stageCount: 3,
    maxInput: 5,
    upgrade: "society:stone_hand",
  },
  {
    id: "society:seed_maker",
    recipes: global.seedMakerRecipes,
    stageCount: 1,
    maxInput: 3,
    upgrade: "society:ancient_cog",
  },
  {
    id: "society:charging_rod",
    recipes: "society:battery",
    stageCount: 5,
    maxInput: 1,
    upgrade: "society:frosted_tip",
  },
  {
    id: "society:espresso_machine",
    recipes: global.espressoMachineRecipes,
    stageCount: 1,
    maxInput: 4,
  },
  {
    id: "society:tapper",
    recipes: global.tapperRecipes,
    stageCount: 7,
    maxInput: 1,
  },
  {
    id: "society:recycling_machine",
    recipes: global.recyclingMachineRecipes,
    stageCount: 1,
    maxInput: 1,
  },
];

global.artisanMachineIds = global.artisanMachineDefinitions.map((x) => x.id);
