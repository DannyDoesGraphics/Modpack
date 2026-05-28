---
navigation:
  title: Sticky mechanical piston
  parent: create/wiki/index.md
  icon: create:sticky_mechanical_piston
  position: 1
item_ids:
  - create:sticky_mechanical_piston
---
#

# <ItemImage id="create:sticky_mechanical_piston" scale="0.70" /> <ItemLink id="create:sticky_mechanical_piston" />

<Row alignItems="start" gap="12">
  <Column alignItems="center" gap="4">
    <GameScene zoom="6" interactive={true} background="#2e3440">
      <Block id="create:sticky_mechanical_piston" p:axis_along_first="false" p:facing="north" p:state="retracted" />
    </GameScene>

    **SU base:** 4

    **RPM range:** [0, 256]
  </Column>
</Row>

Reminder: **SU_consumed = Base × RPM**
