StartupEvents.registry('item', event => {
    // Base wafer processing items (FEOL/BEOL pipeline)
    event.create("dam:raw_silicon_wafer").texture("dam:item/raw_silicon_wafer").displayName("Raw Silicon Wafer");
    event.create("dam:incomplete_silicon_wafer").texture("dam:item/incomplete_silicon_wafer").displayName("Incomplete Silicon Wafer");
    event.create("dam:patterned_wafer").texture("dam:item/patterned_wafer").displayName("Patterned Wafer");
    event.create("dam:doped_wafer").texture("dam:item/doped_wafer").displayName("Doped Wafer");
    event.create("dam:metallized_wafer").texture("dam:item/metallized_wafer").displayName("Metallized Wafer");
    event.create("dam:defective_wafer").texture("dam:item/defective_wafer").displayName("Defective Wafer");
    event.create("dam:defective_metallized_wafer").texture("dam:item/defective_metallized_wafer").displayName("Defective Metallized Wafer");

    // Node-specific wafers (7 process nodes)
    event.create("dam:wafer_90nm").texture("dam:item/silicon_wafer").displayName("90nm Process Wafer");
    event.create("dam:wafer_45nm").texture("dam:item/silicon_wafer").displayName("45nm Process Wafer");
    event.create("dam:wafer_22nm").texture("dam:item/silicon_wafer").displayName("22nm Process Wafer");
    event.create("dam:wafer_14nm").texture("dam:item/silicon_wafer").displayName("14nm Process Wafer");
    event.create("dam:wafer_7nm").texture("dam:item/silicon_wafer").displayName("7nm Process Wafer");
    event.create("dam:wafer_5nm").texture("dam:item/silicon_wafer").displayName("5nm Process Wafer");
    event.create("dam:wafer_3nm").texture("dam:item/silicon_wafer").displayName("3nm Process Wafer");

    // Node-specific bare dies (7 process nodes)
    event.create("dam:bare_die_90nm").texture("dam:item/silicon_die").displayName("90nm Bare Die");
    event.create("dam:bare_die_45nm").texture("dam:item/silicon_die").displayName("45nm Bare Die");
    event.create("dam:bare_die_22nm").texture("dam:item/silicon_die").displayName("22nm Bare Die");
    event.create("dam:bare_die_14nm").texture("dam:item/silicon_die").displayName("14nm Bare Die");
    event.create("dam:bare_die_7nm").texture("dam:item/silicon_die").displayName("7nm Bare Die");
    event.create("dam:bare_die_5nm").texture("dam:item/silicon_die").displayName("5nm Bare Die");
    event.create("dam:bare_die_3nm").texture("dam:item/silicon_die").displayName("3nm Bare Die");

    // Package tier items (4 packaging levels)
    event.create("dam:basic_chip").texture("dam:item/microprocessor").displayName("Basic Chip");
    event.create("dam:standard_chip").texture("dam:item/processor").displayName("Standard Chip");
    event.create("dam:advanced_chip").texture("dam:item/processor").displayName("Advanced Chip");
    event.create("dam:multi_die_package").texture("dam:item/cpu").displayName("Multi-Die Package");
})