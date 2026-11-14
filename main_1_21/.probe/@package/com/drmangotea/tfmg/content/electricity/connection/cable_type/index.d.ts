import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/drmangotea/tfmg/content/electricity/connection/cable_type" {
    export class $CableType$Properties {
        spool(arg0: $ItemEntry<never>): $CableType$Properties;
        color(arg0: number): $CableType$Properties;
        wire(arg0: $ItemEntry<never>): $CableType$Properties;
        constructor(arg0: $ResourceLocation_);
    }
    export interface $CableType extends RegistryMarked<RegistryTypes.TfmgCableTypesTag, RegistryTypes.TfmgCableTypes> {}
    export class $CableType {
        getOrCreateDescriptionId(): string;
        getSpool(): $ItemEntry<never>;
        getWire(): $ItemEntry<never>;
        getKey(): $ResourceLocation;
        getDisplayName(): $Component;
        getDescriptionId(): string;
        getColor(): number;
        constructor(arg0: $CableType$Properties);
        get orCreateDescriptionId(): string;
        get spool(): $ItemEntry<never>;
        get wire(): $ItemEntry<never>;
        get key(): $ResourceLocation;
        get displayName(): $Component;
        get descriptionId(): string;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $CableType}.
     */
    export type $CableType_ = RegistryTypes.TfmgCableTypes;
}
