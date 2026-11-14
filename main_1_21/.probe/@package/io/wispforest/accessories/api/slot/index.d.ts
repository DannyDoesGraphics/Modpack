import { $Level_ } from "@package/net/minecraft/world/level";
import { $AccessoriesCapability, $AccessoriesContainer, $DropRule } from "@package/io/wispforest/accessories/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List_, $Set } from "@package/java/util";
import { $Comparable, $Record } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/api/slot" {
    export class $SlotType {
        static EMPTY_SLOT_ICON: $ResourceLocation;
    }
    export interface $SlotType extends $Comparable<$SlotType> {
        dropRule(): $DropRule;
        name(): string;
        compareTo(o: $SlotType): number;
        order(): number;
        amount(): number;
        icon(): $ResourceLocation;
        translation(): string;
        validators(): $Set<$ResourceLocation>;
    }
    export class $SlotEntryReference extends $Record {
        stack(): $ItemStack;
        reference(): $SlotReference;
        constructor(reference: $SlotReference, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotEntryReference}.
     */
    export type $SlotEntryReference_ = { stack?: $ItemStack_, reference?: $SlotReference,  } | [stack?: $ItemStack_, reference?: $SlotReference, ];
    export class $SlotReference {
        static ofNest(livingEntity: $LivingEntity, slotName: string, initialHolderSlot: number, innerSlotIndices: $List_<number>): $SlotReference;
        static of(livingEntity: $LivingEntity, slotName: string, slot: number): $SlotReference;
    }
    export interface $SlotReference {
        slotName(): string;
        createSlotPath(): string;
        slotContainer(): $AccessoriesContainer;
        entity(): $LivingEntity;
        slot(): number;
        type(): $SlotType;
        getStack(): $ItemStack;
        isValid(): boolean;
        setStack(stack: $ItemStack_): boolean;
        capability(): $AccessoriesCapability;
        get valid(): boolean;
    }
    export class $SlotTypeReference extends $Record {
        slotName(): string;
        get(level: $Level_): $SlotType;
        get(isClientSide: boolean): $SlotType;
        constructor(slotName: string);
    }
    /**
     * Values that may be interpreted as {@link $SlotTypeReference}.
     */
    export type $SlotTypeReference_ = { slotName?: string,  } | [slotName?: string, ];
}
