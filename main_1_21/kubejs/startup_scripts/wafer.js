StartupEvents.registry('item', event => {
    event.create("dam:raw_silicon_wafer").texture("dam:item/raw_silicon_wafer").displayName("Raw Silicon Wafer");
    event.create("dam:incomplete_silicon_wafer").texture("dam:item/incomplete_silicon_wafer").displayName("Incomplete Silicon Wafer");
    event.create("dam:silicon_wafer").texture("dam:item/silicon_wafer").displayName("Silicon Wafer");
    event.create("dam:bare_die").texture("dam:item/silicon_die").displayName("Bare Die");
    event.create("dam:processor_package").texture("dam:item/processor_package").displayName("Processor Package");
    event.create("dam:microprocessor").texture("dam:item/microprocessor").displayName("Microprocessor");
    event.create("dam:processor").texture("dam:item/processor").displayName("Processor");
    event.create("dam:cpu").texture("dam:item/cpu").displayName("CPU");
    
    // Only create these if TFMG items don't exist
    if (!Platform.isLoaded('tfmg')) {
        event.create("dam:p_semiconductor").texture("dam:item/p_semiconductor").displayName("P-Type Semiconductor");
        event.create("dam:n_semiconductor").texture("dam:item/n_semiconductor").displayName("N-Type Semiconductor");
        event.create("dam:resistor").texture("dam:item/resistor").displayName("Resistor");
        event.create("dam:transistor").texture("dam:item/transistor").displayName("Transistor");
        event.create("dam:circuit_board").texture("dam:item/circuit_board").displayName("Circuit Board");
    }
});

StartupEvents.registry('fluid', event => {
    // Only create sulfuric acid if TFMG doesn't exist
    if (!Platform.isLoaded('tfmg')) {
        event.create('dam:sulfuric_acid')
            .displayName('Sulfuric Acid')
            .thinTexture(0xC4A000)
            .bucketColor(0xC4A000);
    }
});