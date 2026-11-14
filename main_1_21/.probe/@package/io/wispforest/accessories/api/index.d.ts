import { $ItemStackBasedPredicate } from "@package/io/wispforest/accessories/api/caching";
import { $Item_, $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $SlotType, $SlotTypeReference_, $SlotReference, $SlotEntryReference } from "@package/io/wispforest/accessories/api/slot";
import { $AccessoryAttributeBuilder } from "@package/io/wispforest/accessories/api/attributes";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $AccessoryItemAttributeModifiers$Builder } from "@package/io/wispforest/accessories/api/components";
import { $List, $Set_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ExpandedSimpleContainer, $PlayerEquipControl, $PlayerEquipControl_ } from "@package/io/wispforest/accessories/impl";
import { $Predicate_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $AccessoriesHolderLookupCache } from "@package/io/wispforest/accessories/impl/caching";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";
export * as components from "@package/io/wispforest/accessories/api/components";
export * as slot from "@package/io/wispforest/accessories/api/slot";
export * as attributes from "@package/io/wispforest/accessories/api/attributes";
export * as client from "@package/io/wispforest/accessories/api/client";
export * as caching from "@package/io/wispforest/accessories/api/caching";

declare module "@package/io/wispforest/accessories/api" {
    export class $EquipmentChecking extends $Enum<$EquipmentChecking> {
        static values(): $EquipmentChecking[];
        static valueOf(name: string): $EquipmentChecking;
        static ACCESSORIES_ONLY: $EquipmentChecking;
        static COSMETICALLY_OVERRIDABLE: $EquipmentChecking;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentChecking}.
     */
    export type $EquipmentChecking_ = "accessories_only" | "cosmetically_overridable";
    export class $AccessoriesCapability {
        static getOptionally(livingEntity: $LivingEntity): ($AccessoriesCapability) | undefined;
        static get(livingEntity: $LivingEntity): $AccessoriesCapability;
    }
    export interface $AccessoriesCapability {
        updateContainers(): void;
        attemptToEquipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, ($ItemStack) | undefined>;
        attemptToEquipAccessory(stack: $ItemStack_): $SlotReference;
        getContainers(): $Map<string, $AccessoriesContainer>;
        canEquipAccessory(arg0: $ItemStack_, arg1: boolean, arg2: $EquipCheck_): $Pair<$SlotReference, $EquipAction>;
        canEquipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, $EquipAction>;
        isEquipped(predicate: $Predicate_<$ItemStack>, check: $EquipmentChecking_): boolean;
        isEquipped(item: $Item_): boolean;
        isEquipped(item: $Item_, check: $EquipmentChecking_): boolean;
        isEquipped(predicate: $Predicate_<$ItemStack>): boolean;
        isEquipped(predicate: $ItemStackBasedPredicate, check: $EquipmentChecking_): boolean;
        addTransientSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        getFirstEquipped(item: $Item_, check: $EquipmentChecking_): $SlotEntryReference;
        getFirstEquipped(item: $Item_): $SlotEntryReference;
        getFirstEquipped(arg0: $ItemStackBasedPredicate, arg1: $EquipmentChecking_): $SlotEntryReference;
        getFirstEquipped(predicate: $Predicate_<$ItemStack>): $SlotEntryReference;
        getFirstEquipped(predicate: $Predicate_<$ItemStack>, check: $EquipmentChecking_): $SlotEntryReference;
        /**
         * @deprecated
         */
        isAnotherEquipped(slotReference: $SlotReference, item: $Item_): boolean;
        /**
         * @deprecated
         */
        isAnotherEquipped(slotReference: $SlotReference, predicate: $Predicate_<$ItemStack>): boolean;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, item: $Item_): boolean;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, predicate: $Predicate_<$ItemStack>): boolean;
        isAnotherEquipped(stack: $ItemStack_, slotReference: $SlotReference, predicate: $ItemStackBasedPredicate): boolean;
        getEquipped(predicate: $Predicate_<$ItemStack>): $List<$SlotEntryReference>;
        getEquipped(predicate: $ItemStackBasedPredicate): $List<$SlotEntryReference>;
        getEquipped(item: $Item_): $List<$SlotEntryReference>;
        getAllEquipped(): $List<$SlotEntryReference>;
        getAllEquipped(arg0: boolean): $List<$SlotEntryReference>;
        addPersistentSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        removeSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        getSlotModifiers(): $Multimap<string, $AttributeModifier>;
        clearSlotModifiers(): void;
        clearCachedSlotModifiers(): void;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_, allowSwapping: boolean, additionalCheck: $TriFunction_<$Accessory, $ItemStack, $SlotReference, boolean>): $Pair<$SlotReference, $List<$ItemStack>>;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_, allowSwapping: boolean): $Pair<$SlotReference, $List<$ItemStack>>;
        /**
         * @deprecated
         */
        equipAccessory(stack: $ItemStack_): $Pair<$SlotReference, $List<$ItemStack>>;
        getContainer(reference: $SlotTypeReference_): $AccessoriesContainer;
        getContainer(slotType: $SlotType): $AccessoriesContainer;
        entity(): $LivingEntity;
        reset(arg0: boolean): void;
        getHolder(): $AccessoriesHolder;
        get containers(): $Map<string, $AccessoriesContainer>;
        get slotModifiers(): $Multimap<string, $AttributeModifier>;
        get holder(): $AccessoriesHolder;
    }
    export class $AccessoriesHolder {
        static getOptionally(livingEntity: $LivingEntity): ($AccessoriesHolder) | undefined;
        static get(livingEntity: $LivingEntity): $AccessoriesHolder;
    }
    export interface $AccessoriesHolder {
        getLookupCache(): $AccessoriesHolderLookupCache;
        widgetType(arg0: number): $AccessoriesHolder;
        widgetType(): number;
        cosmeticsShown(): boolean;
        cosmeticsShown(arg0: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        linesShown(): boolean;
        /**
         * @deprecated
         */
        linesShown(value: boolean): $AccessoriesHolder;
        showAdvancedOptions(arg0: boolean): $AccessoriesHolder;
        showAdvancedOptions(): boolean;
        columnAmount(arg0: number): $AccessoriesHolder;
        columnAmount(): number;
        showGroupFilter(): boolean;
        showGroupFilter(arg0: boolean): $AccessoriesHolder;
        mainWidgetPosition(): boolean;
        mainWidgetPosition(arg0: boolean): $AccessoriesHolder;
        sideWidgetPosition(): boolean;
        sideWidgetPosition(arg0: boolean): $AccessoriesHolder;
        showCraftingGrid(): boolean;
        showCraftingGrid(arg0: boolean): $AccessoriesHolder;
        isGroupFiltersOpen(arg0: boolean): $AccessoriesHolder;
        isGroupFiltersOpen(): boolean;
        filteredGroups(arg0: $Set_<string>): $AccessoriesHolder;
        filteredGroups(): $Set<string>;
        /**
         * @deprecated
         */
        showUniqueSlots(value: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        showUniqueSlots(): boolean;
        showUnusedSlots(arg0: boolean): $AccessoriesHolder;
        showUnusedSlots(): boolean;
        equipControl(): $PlayerEquipControl;
        equipControl(arg0: $PlayerEquipControl_): $AccessoriesHolder;
        get lookupCache(): $AccessoriesHolderLookupCache;
    }
    export class $SoundEventData extends $Record {
        event(): $Holder<$SoundEvent>;
        volume(): number;
        pitch(): number;
        constructor(event: $Holder_<$SoundEvent>, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $SoundEventData}.
     */
    export type $SoundEventData_ = { event?: $Holder_<$SoundEvent>, volume?: number, pitch?: number,  } | [event?: $Holder_<$SoundEvent>, volume?: number, pitch?: number, ];
    export class $DropRule extends $Enum<$DropRule> {
        static values(): $DropRule[];
        static valueOf(name: string): $DropRule;
        static DESTROY: $DropRule;
        static KEEP: $DropRule;
        static DEFAULT: $DropRule;
        static DROP: $DropRule;
    }
    /**
     * Values that may be interpreted as {@link $DropRule}.
     */
    export type $DropRule_ = "keep" | "drop" | "destroy" | "default";
    export class $AccessoriesContainer {
    }
    export interface $AccessoriesContainer {
        renderOptions(): $List<boolean>;
        getModifiersForOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        addPersistentModifier(arg0: $AttributeModifier_): void;
        removeCachedModifiers(arg0: $AttributeModifier_): void;
        getCachedModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        markChanged(arg0: boolean): void;
        markChanged(): void;
        clearModifiers(): void;
        slotType(): $SlotType;
        getCosmeticAccessories(): $ExpandedSimpleContainer;
        getAccessories(): $ExpandedSimpleContainer;
        getSlotName(): string;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        getSize(): number;
        createReference(index: number): $SlotReference;
        hasModifier(arg0: $ResourceLocation_): boolean;
        capability(): $AccessoriesCapability;
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        shouldRender(index: number): boolean;
        hasChanged(): boolean;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get cosmeticAccessories(): $ExpandedSimpleContainer;
        get accessories(): $ExpandedSimpleContainer;
        get slotName(): string;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get size(): number;
    }
    export class $EquipAction {
    }
    export interface $EquipAction {
        equipStack(arg0: $ItemStack_): ($ItemStack) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EquipAction}.
     */
    export type $EquipAction_ = ((arg0: $ItemStack) => ($ItemStack_) | undefined);
    export class $Accessory {
    }
    export interface $Accessory {
        canEquip(stack: $ItemStack_, reference: $SlotReference): boolean;
        onBreak(stack: $ItemStack_, reference: $SlotReference): void;
        onEquipFromUse(stack: $ItemStack_, reference: $SlotReference): void;
        /**
         * @deprecated
         */
        canEquipFromUse(stack: $ItemStack_, reference: $SlotReference): boolean;
        canEquipFromUse(stack: $ItemStack_): boolean;
        getDropRule(stack: $ItemStack_, reference: $SlotReference, source: $DamageSource_): $DropRule;
        getAttributesTooltip(stack: $ItemStack_, type: $SlotType, tooltips: $List_<$Component_>, tooltipContext: $Item$TooltipContext, tooltipType: $TooltipFlag): void;
        /**
         * @deprecated
         */
        getAttributesTooltip(stack: $ItemStack_, type: $SlotType, tooltips: $List_<$Component_>): void;
        onEquip(stack: $ItemStack_, reference: $SlotReference): void;
        onUnequip(stack: $ItemStack_, reference: $SlotReference): void;
        canUnequip(stack: $ItemStack_, reference: $SlotReference): boolean;
        getDynamicModifiers(stack: $ItemStack_, reference: $SlotReference, builder: $AccessoryAttributeBuilder): void;
        getStaticModifiers(item: $Item_, builder: $AccessoryItemAttributeModifiers$Builder): void;
        /**
         * @deprecated
         */
        getExtraTooltip(stack: $ItemStack_, tooltips: $List_<$Component_>): void;
        getExtraTooltip(stack: $ItemStack_, tooltips: $List_<$Component_>, tooltipContext: $Item$TooltipContext, tooltipType: $TooltipFlag): void;
        /**
         * @deprecated
         */
        getModifiers(stack: $ItemStack_, reference: $SlotReference, builder: $AccessoryAttributeBuilder): void;
        tick(stack: $ItemStack_, reference: $SlotReference): void;
        maxStackSize(stack: $ItemStack_): number;
        getEquipSound(stack: $ItemStack_, reference: $SlotReference): $SoundEventData;
    }
    export class $EquipCheck {
    }
    export interface $EquipCheck {
        isValid(arg0: $ItemStack_, arg1: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EquipCheck}.
     */
    export type $EquipCheck_ = ((arg0: $ItemStack, arg1: boolean) => boolean);
}
