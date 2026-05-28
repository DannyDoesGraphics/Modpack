---
navigation:
  title: Tree farm (example)
  parent: create/guide/index.md
  icon: minecraft:oak_log
  position: 2
---
#

# Tree farm (example)
<Color id="nord_accent">Tree farms</Color> are a strongly recommended early Create automation you build. Logs feed setups that need <ItemImage id="create:andesite_casing" scale="0.70" /> <ItemLink id="create:andesite_casing" /> and <ItemImage id="create:brass_casing" scale="0.70" /> <ItemLink id="create:brass_casing" />. 


<GameScene zoom="5" interactive={true} background="#2e3440">
  <ImportStructure src="tree_farm_example.snbt" />
</GameScene>

This farm works by using a <ItemImage id="create:mechanical_bearing" scale="0.70" /> <ItemLink id="create:mechanical_bearing" /> which takes in the SU and RPM from the <ItemImage id="create:water_wheel" scale="0.70" /> <ItemLink id="create:water_wheel" /> to spin. This spins the <ItemImage id="create:linear_chassis" scale="0.70" /> <ItemLink id="create:linear_chassis" /> blocks connected to the stickt face of the bearing which can be configured to automatically move blocks in front and behind it. Then, the chest is glued onto the chassis to ensure it moves with the <Color id="nord_warn">contraption</Color>. The <ItemImage id="create:mechanical_saw" scale="0.70" /> <ItemLink id="create:mechanical_saw" /> is in front of the rotating motion. The saw will chop down trees as it's **moving into them**. If you got the rotation wrong or incorrect, you shift right click the mechanical bearing and scroll to change the rotational direction. Whilst the <ItemImage id="create:deployer" scale="0.70" /> <ItemLink id="create:deployer" /> have your tree's sapling choice applied onto them. Later, you can use a <ItemImage id="create:filter" scale="0.70" /> <ItemLink id="create:filter" /> or <ItemImage id="create:attribute_filter" scale="0.70" /> <ItemLink id="create:attribute_filter" /> or <ItemImage id="createshufflefilter:weighted_shuffle_filter" scale="0.70" /> <ItemLink id="createshufflefilter:weighted_shuffle_filter" /> to automatically pick and plant your saplings to support a large variety of trees.

## Tips

1. This farm can be stacked in the same chunk meaning multiple tree farms can be tied to a single <ItemImage id="create_power_loader:andesite_chunk_loader" scale="0.70" /> <ItemLink id="create_power_loader:andesite_chunk_loader" />