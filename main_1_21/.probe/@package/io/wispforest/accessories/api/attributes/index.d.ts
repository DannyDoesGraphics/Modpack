import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $Map, $Collection } from "@package/java/util";

declare module "@package/io/wispforest/accessories/api/attributes" {
    export class $AttributeModificationData extends $Record {
        slotPath(): string;
        modifier(): $AttributeModifier;
        attribute(): $Holder<$Attribute>;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_);
        constructor(slotPath: string, attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeModificationData}.
     */
    export type $AttributeModificationData_ = { attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_, slotPath?: string,  } | [attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_, slotPath?: string, ];
    export class $AccessoryAttributeBuilder {
        exclusiveAttributes(): $Map<$Holder<$Attribute>, $Map<$ResourceLocation, $AttributeModificationData>>;
        stackedAttributes(): $Multimap<$Holder<$Attribute>, $AttributeModificationData>;
        removeExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModificationData;
        removeStacks(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $Collection<$AttributeModificationData>;
        addFrom(builder: $AccessoryAttributeBuilder): $AccessoryAttributeBuilder;
        addStackable(attribute: $Holder_<$Attribute>, location: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): $AccessoryAttributeBuilder;
        addStackable(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_): $AccessoryAttributeBuilder;
        getAttributeModifiers(filterSlots: boolean): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getSlotModifiers(): $Multimap<string, $AttributeModifier>;
        addExclusive(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_): $AccessoryAttributeBuilder;
        addExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): $AccessoryAttributeBuilder;
        /**
         * @deprecated
         */
        static createSlotPath(slotname: string, slot: number): string;
        /**
         * @deprecated
         */
        static createSlotPath(ref: $SlotReference): string;
        getExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModificationData;
        getStacks(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $Collection<$AttributeModificationData>;
        isEmpty(): boolean;
        constructor(slotName: string, slot: number);
        constructor(slotReference: $SlotReference);
        constructor(slotReference: $SlotReference, parentBuilder: $AccessoryAttributeBuilder);
        constructor();
        get slotModifiers(): $Multimap<string, $AttributeModifier>;
        get empty(): boolean;
    }
}
