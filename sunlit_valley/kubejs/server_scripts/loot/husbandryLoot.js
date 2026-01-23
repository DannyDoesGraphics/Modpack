console.info("[SOCIETY] husbandryLoot.js loaded");

LootJS.modifiers((e) => {
  e.addEntityLootModifier(global.husbandryAnimals)
    .hasAnyStage("heretic")
    .entityPredicate((entity) => entity.persistentData.getInt("affection") >= 700)
    .modifyLoot(Ingredient.all, (itemStack) => {
      itemStack.setCount(itemStack.getCount() * 5);
      return itemStack;
    });
});
