---
navigation:
  title: How to case logs
  parent: create/guide/index.md
  icon: create:andesite_casing
  position: 0
---
#

# How to case logs

<Color id="nord_accent">Casings</Color> turn stripped wood into Create building blocks. There is **no crafting-table recipe**. Apply metal to a log by hand (or automate later with a <ItemImage id="create:deployer" scale="0.70" /> <ItemLink id="create:deployer" />).

## What you need

1. Any stripped log such as <ItemImage id="minecraft:stripped_oak_log" scale="0.70" /> <ItemLink id="minecraft:stripped_oak_log" />
2. A valid alloy such as <ItemImage id="create:andesite_alloy" scale="0.70" /> <ItemLink id="create:andesite_alloy" /> or <ItemImage id="create:brass_ingot" scale="0.70" /> <ItemLink id="create:brass_ingot" />

## Alloy casing

Hold your alloy in your main hand and right-click on your stripped log that has been placed down.

<GameScene zoom="4" interactive={true} background="#2e3440">
  <Block id="minecraft:stripped_oak_log" />
  <Block x="2" id="create:andesite_casing" />
  <BlockAnnotation x="2" y="0" z="0" color="#5e81ac">
    <Color color="#eceff4">Andesite casing</Color> (result)
  </BlockAnnotation>

  <BlockAnnotation x="0" y="0" z="0" color="#88c0d0">
    <Color color="#eceff4">Stripped log</Color>: hold <ItemImage id="create:andesite_alloy" scale="0.70" /> <ItemLink id="create:andesite_alloy" /> in main hand, then <Color color="#8fbcbb">right click (use item)</Color> on this block.
  </BlockAnnotation>
  
</GameScene>

## Automation
Later you can automate casing with a <ItemImage id="create:deployer" scale="0.70" /> <ItemLink id="create:deployer" />.