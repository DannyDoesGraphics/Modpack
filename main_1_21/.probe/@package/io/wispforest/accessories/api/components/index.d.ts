import { $Endec } from "@package/io/wispforest/endec";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $AccessoryAttributeBuilder } from "@package/io/wispforest/accessories/api/attributes";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/wispforest/accessories/api/components" {
    export class $AccessoryItemAttributeModifiers$Entry extends $Record {
        slotName(): string;
        isStackable(): boolean;
        modifier(): $AttributeModifier;
        attribute(): $Holder<$Attribute>;
        static ENDEC: $Endec<$AccessoryItemAttributeModifiers$Entry>;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slotName: string, isStackable: boolean);
        get stackable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessoryItemAttributeModifiers$Entry}.
     */
    export type $AccessoryItemAttributeModifiers$Entry_ = { slotName?: string, isStackable?: boolean, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>,  } | [slotName?: string, isStackable?: boolean, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>, ];
    export class $AccessoryItemAttributeModifiers extends $Record {
        withModifierAddedForAny(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers;
        withoutModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): $AccessoryItemAttributeModifiers;
        withModifierAdded(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers;
        showInTooltip(): boolean;
        gatherAttributes(slotReference: $SlotReference): $AccessoryAttributeBuilder;
        gatherAttributes(slotReference: $SlotReference, parentBuilder: $AccessoryAttributeBuilder): $AccessoryAttributeBuilder;
        modifiers(): $List<$AccessoryItemAttributeModifiers$Entry>;
        static builder(): $AccessoryItemAttributeModifiers$Builder;
        hasModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): boolean;
        getModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModifier;
        static ENDEC: $Endec<$AccessoryItemAttributeModifiers>;
        static EMPTY: $AccessoryItemAttributeModifiers;
        constructor(modifiers: $List_<$AccessoryItemAttributeModifiers$Entry_>, showInTooltip: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AccessoryItemAttributeModifiers}.
     */
    export type $AccessoryItemAttributeModifiers_ = { modifiers?: $List_<$AccessoryItemAttributeModifiers$Entry_>, showInTooltip?: boolean,  } | [modifiers?: $List_<$AccessoryItemAttributeModifiers$Entry_>, showInTooltip?: boolean, ];
    export class $AccessoryItemAttributeModifiers$Builder {
        showInTooltip(value: boolean): $AccessoryItemAttributeModifiers$Builder;
        addForSlot(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        addForAny(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        add(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        build(): $AccessoryItemAttributeModifiers;
        get empty(): boolean;
    }
}
