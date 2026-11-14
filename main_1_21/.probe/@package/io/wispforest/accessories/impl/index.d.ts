import { $AccessoriesHolder, $AccessoriesCapability, $AccessoriesContainer } from "@package/io/wispforest/accessories/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $SlotType, $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Spliterator, $Iterator, $List, $Map, $Set, $Set_, $Collection } from "@package/java/util";
import { $MapCarrier } from "@package/io/wispforest/endec/util";
import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $ContainerListener, $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $AccessoriesHolderLookupCache } from "@package/io/wispforest/accessories/impl/caching";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AccessoriesContainerImplAccessor } from "@package/io/wispforest/accessories_compat/curios/mixin/accessories";
import { $Enum, $Iterable } from "@package/java/lang";
import { $KeyedEndec } from "@package/io/wispforest/endec/impl";
export * as caching from "@package/io/wispforest/accessories/impl/caching";

declare module "@package/io/wispforest/accessories/impl" {
    export class $ExpandedSimpleContainer extends $SimpleContainer implements $Iterable<$Pair<number, $ItemStack>> {
        parseOptional(lookupProvider: $HolderLookup$Provider, tag: $Tag_): $ItemStack;
        wasNewlyConstructed(): boolean;
        isSlotFlagged(slot: number): boolean;
        setPreviousItem(slot: number, stack: $ItemStack_): void;
        getPreviousItem(slot: number): $ItemStack;
        setFromPrev(prevContainer: $ExpandedSimpleContainer): void;
        copyPrev(prevContainer: $ExpandedSimpleContainer): void;
        name(): string;
        iterator(): $Iterator<$Pair<number, $ItemStack>>;
        validIndex(slot: number): boolean;
        spliterator(): $Spliterator<$Pair<number, $ItemStack>>;
        forEach(arg0: $Consumer_<$Pair<number, $ItemStack>>): void;
        size: number;
        items: $NonNullList<$ItemStack>;
        constructor(container: $AccessoriesContainerImpl, size: number, name: string);
        constructor(container: $AccessoriesContainerImpl, size: number, name: string, toggleNewlyConstructed: boolean);
        [Symbol.iterator](): Iterator<$Pair<number, $ItemStack>>
        set fromPrev(value: $ExpandedSimpleContainer);
    }
    export class $InstanceEndec {
        static constructed<T extends $InstanceEndec>(supplier: $Supplier_<T>): $Endec<T>;
    }
    export interface $InstanceEndec {
        write(arg0: $MapCarrier, arg1: $SerializationContext): void;
        read(arg0: $MapCarrier, arg1: $SerializationContext): void;
    }
    export class $PlayerEquipControl extends $Enum<$PlayerEquipControl> {
        static values(): $PlayerEquipControl[];
        static valueOf(name: string): $PlayerEquipControl;
        static DISABLED: $PlayerEquipControl;
        static MUST_NOT_CROUCH: $PlayerEquipControl;
        static MUST_CROUCH: $PlayerEquipControl;
    }
    /**
     * Values that may be interpreted as {@link $PlayerEquipControl}.
     */
    export type $PlayerEquipControl_ = "must_crouch" | "must_not_crouch" | "disabled";
    export class $AccessoriesHolderImpl implements $AccessoriesHolder, $InstanceEndec {
        getLookupCache(): $AccessoriesHolderLookupCache;
        widgetType(value: number): $AccessoriesHolder;
        widgetType(): number;
        setValidTypes(validTypes: $Set_<string>): void;
        getSlotContainers(): $Map<string, $AccessoriesContainer>;
        cosmeticsShown(value: boolean): $AccessoriesHolder;
        cosmeticsShown(): boolean;
        showAdvancedOptions(value: boolean): $AccessoriesHolder;
        showAdvancedOptions(): boolean;
        columnAmount(value: number): $AccessoriesHolder;
        columnAmount(): number;
        showGroupFilter(): boolean;
        showGroupFilter(value: boolean): $AccessoriesHolder;
        mainWidgetPosition(): boolean;
        mainWidgetPosition(value: boolean): $AccessoriesHolder;
        sideWidgetPosition(value: boolean): $AccessoriesHolder;
        sideWidgetPosition(): boolean;
        showCraftingGrid(value: boolean): $AccessoriesHolder;
        showCraftingGrid(): boolean;
        isGroupFiltersOpen(value: boolean): $AccessoriesHolder;
        isGroupFiltersOpen(): boolean;
        filteredGroups(): $Set<string>;
        filteredGroups(value: $Set_<string>): $AccessoriesHolder;
        static of(): $AccessoriesHolderImpl;
        init(capability: $AccessoriesCapability): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(entity: $LivingEntity, carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(capability: $AccessoriesCapability, entity: $LivingEntity, carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(carrier: $MapCarrier, context: $SerializationContext): void;
        showUnusedSlots(): boolean;
        showUnusedSlots(value: boolean): $AccessoriesHolder;
        equipControl(): $PlayerEquipControl;
        equipControl(value: $PlayerEquipControl_): $AccessoriesHolder;
        /**
         * @deprecated
         */
        linesShown(): boolean;
        /**
         * @deprecated
         */
        linesShown(value: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        showUniqueSlots(value: boolean): $AccessoriesHolder;
        /**
         * @deprecated
         */
        showUniqueSlots(): boolean;
        invalidStacks: $List<$ItemStack>;
        constructor();
        get lookupCache(): $AccessoriesHolderLookupCache;
        set validTypes(value: $Set_<string>);
        get slotContainers(): $Map<string, $AccessoriesContainer>;
    }
    export class $AccessoriesContainerImpl implements $AccessoriesContainer, $InstanceEndec, $ContainerListener, $AccessoriesContainerImplAccessor {
        static readContainer(carrier: $MapCarrier, ctx: $SerializationContext, key: $KeyedEndec<$ListTag_>): $SimpleContainer;
        renderOptions(): $List<boolean>;
        getModifiersForOperation(operation: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        addPersistentModifier(modifier: $AttributeModifier_): void;
        removeCachedModifiers(modifier: $AttributeModifier_): void;
        getBaseSize(): number;
        getCachedModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        markChanged(resizingUpdate: boolean): void;
        clearModifiers(): void;
        containerChanged(container: $Container): void;
        getCosmeticAccessories(): $ExpandedSimpleContainer;
        getAccessories(): $ExpandedSimpleContainer;
        getSlotName(): string;
        static copyContainerList(container: $SimpleContainer): $SimpleContainer;
        static readContainers(carrier: $MapCarrier, ctx: $SerializationContext, ...keys: $KeyedEndec<$ListTag_>[]): $List<$SimpleContainer>;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext): void;
        write(carrier: $MapCarrier, ctx: $SerializationContext, sync: boolean): void;
        read(carrier: $MapCarrier, ctx: $SerializationContext): void;
        read(carrier: $MapCarrier, ctx: $SerializationContext, sync: boolean): void;
        getSize(): number;
        copyFrom(other: $AccessoriesContainerImpl): void;
        hasModifier(location: $ResourceLocation_): boolean;
        capability(): $AccessoriesCapability;
        removeModifier(location: $ResourceLocation_): void;
        addTransientModifier(modifier: $AttributeModifier_): void;
        hasChanged(): boolean;
        markChanged(): void;
        slotType(): $SlotType;
        createReference(index: number): $SlotReference;
        shouldRender(index: number): boolean;
        persistentModifiers(): $Set<$AttributeModifier>;
        cachedModifiers(): $Set<$AttributeModifier>;
        modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        static BASE_SIZE_KEY: $KeyedEndec<number>;
        static COSMETICS_KEY: $KeyedEndec<$ListTag>;
        static SLOT_NAME_KEY: $KeyedEndec<string>;
        static CACHED_MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        static PERSISTENT_MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        static ITEMS_KEY: $KeyedEndec<$ListTag>;
        static RENDER_OPTIONS_KEY: $KeyedEndec<$List<boolean>>;
        static CURRENT_SIZE_KEY: $KeyedEndec<number>;
        static MODIFIERS_KEY: $KeyedEndec<$List<$CompoundTag>>;
        constructor(capability: $AccessoriesCapability, slotType: $SlotType);
        get baseSize(): number;
        get cosmeticAccessories(): $ExpandedSimpleContainer;
        get accessories(): $ExpandedSimpleContainer;
        get slotName(): string;
        get size(): number;
    }
}
