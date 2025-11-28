StartupEvents.registry('item', event => {
    event.create("dam:raw_silicon_wafer").texture("dam:item/raw_silicon_wafer").displayName("Raw Silicon Wafer");
    event.create("dam:incomplete_silicon_wafer").texture("dam:item/incomplete_silicon_wafer").displayName("Incomplete Silicon Wafer");
    event.create("dam:silicon_wafer").texture("dam:item/silicon_wafer").displayName("Silicon Wafer");
    event.create("dam:patterned_wafer").texture("dam:item/patterned_wafer").displayName("Patterned Wafer");
    event.create("dam:doped_wafer").texture("dam:item/doped_wafer").displayName("Doped Wafer");
    event.create("dam:metallized_wafer").texture("dam:item/metallized_wafer").displayName("Metallized Wafer");
    event.create("dam:defective_wafer").texture("dam:item/defective_wafer").displayName("Defective Wafer");
    event.create("dam:defective_metallized_wafer").texture("dam:item/defective_metallized_wafer").displayName("Defective Metallized Wafer");
    event.create("dam:bare_die").texture("dam:item/silicon_die").displayName("Bare Die");
    event.create("dam:processor_package").texture("dam:item/processor_package").displayName("Processor Package");
    event.create("dam:microprocessor").texture("dam:item/microprocessor").displayName("Microprocessor");
    event.create("dam:processor").texture("dam:item/processor").displayName("Processor");
    event.create("dam:cpu").texture("dam:item/cpu").displayName("CPU");
})