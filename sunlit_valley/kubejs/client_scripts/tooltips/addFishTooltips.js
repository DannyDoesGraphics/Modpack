ItemEvents.tooltip((tooltip) => {
  const yearRound = ['aquaculture:minnow', 'aquaculture:carp', 'aquaculture:bluegill', 'society:neptuna']
  let springFish = [];
  let summerFish = [];
  let autumnFish = [];
  let winterFish = [];

  tooltip.add(yearRound, " §dYear-Round");
  const addSeasonTooltip = (item, seasonText, seasonArray) => {
    if (!yearRound.includes(item) && !seasonArray.includes(item)) {
      seasonArray.push(item);
      tooltip.add(item, seasonText);
    }
  };
  global.springOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §aSpring", springFish)
  );
  global.springRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §aSpring", springFish)
  );
  global.springFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §aSpring", springFish)
  );

  global.summerOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §eSummer", summerFish)
  );
  global.summerRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §eSummer", summerFish)
  );
  global.summerFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §eSummer", summerFish)
  );

  global.autumnOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §6Autumn", autumnFish)
  );
  global.autumnRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §6Autumn", autumnFish)
  );
  global.autumnFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §6Autumn", autumnFish)
  );

  global.winterOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §bWinter", winterFish)
  );
  global.winterRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §bWinter", winterFish)
  );
  global.winterFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, " §bWinter", winterFish)
  );
});
