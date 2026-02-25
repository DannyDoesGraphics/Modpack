console.info("[SOCIETY] addChunkroditeRecipes.js loaded");

ServerEvents.recipes((e) => {
  const addDrainRecipe = (item, amount) => {
    e.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: item,
        },
      ],
      results: [
        {
          amount: amount,
          fluid: "society:milk",
        },
      ],
    });
  };
  [
    "society:large_milk",
    "society:large_goat_milk",
    "society:large_buffalo_milk",
    "society:large_sheep_milk",
    "society:large_warped_milk",
  ].forEach((milk) => {
    addDrainRecipe(milk, 1000);
  });
  ['society:goat_milk', 'society:milk', 'society:buffalo_milk', 'society:warped_milk', 'society:sheep_milk'].forEach((milk) => {
    addDrainRecipe(milk, 250);
  });
});
