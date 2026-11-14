import { $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MapCodec, $DynamicOps } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeHolder_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set, $Set_ } from "@package/java/util";
import { $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistryAccess } from "@package/net/minecraft/core";
import { $RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup_ } from "@package/net/minecraft/resources";
import { $PatchedDataComponentMap } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $ResultContainer, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
export * as client from "@package/io/wispforest/accessories/mixin/client";

declare module "@package/io/wispforest/accessories/mixin" {
    export class $StateHolderAccessor<O, S> {
    }
    export interface $StateHolderAccessor<O, S> {
        accessories$owner(): O;
        accessories$propertiesCodec(): $MapCodec<S>;
    }
    export class $CraftingMenuAccessor {
        static accessories$slotChangedCraftingGrid(abstractContainerMenu: $AbstractContainerMenu, level: $Level_, player: $Player, craftingContainer: $CraftingContainer, resultContainer: $ResultContainer, recipeHolder: $RecipeHolder_<$CraftingRecipe>): void;
    }
    export interface $CraftingMenuAccessor {
    }
    export class $DelegatingOpsAccessor<T> {
    }
    export interface $DelegatingOpsAccessor<T> {
        delegate(): $DynamicOps<T>;
    }
    /**
     * Values that may be interpreted as {@link $DelegatingOpsAccessor}.
     */
    export type $DelegatingOpsAccessor_<T> = (() => $DynamicOps<T>);
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        accessories$setY(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SlotAccessor}.
     */
    export type $SlotAccessor_ = ((arg0: number) => void);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        accessors$breakItem(arg0: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = ((arg0: $ItemStack) => void);
    export class $RegistryOpsAccessor {
    }
    export interface $RegistryOpsAccessor {
        lookupProvider(): $RegistryOps$RegistryInfoLookup;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOpsAccessor}.
     */
    export type $RegistryOpsAccessor_ = (() => $RegistryOps$RegistryInfoLookup_);
    export class $ConfigurableRegistryLookupAccessor {
    }
    export interface $ConfigurableRegistryLookupAccessor {
        getRegistryAccess(): $RegistryAccess;
        get registryAccess(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $ConfigurableRegistryLookupAccessor}.
     */
    export type $ConfigurableRegistryLookupAccessor_ = (() => $RegistryAccess);
    export class $ServerChunkLoadingManagerAccessor {
    }
    export interface $ServerChunkLoadingManagerAccessor {
        accessories$getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkLoadingManagerAccessor}.
     */
    export type $ServerChunkLoadingManagerAccessor_ = (() => $Int2ObjectMap<$EntityTrackerAccessor>);
    export class $EntityTrackerAccessor {
    }
    export interface $EntityTrackerAccessor {
        accessories$getSeenBy(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTrackerAccessor}.
     */
    export type $EntityTrackerAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $HolderLookupAdapterAccessor {
    }
    export interface $HolderLookupAdapterAccessor {
        getLookupProvider(): $HolderLookup$Provider;
        get lookupProvider(): $HolderLookup$Provider;
    }
    /**
     * Values that may be interpreted as {@link $HolderLookupAdapterAccessor}.
     */
    export type $HolderLookupAdapterAccessor_ = (() => $HolderLookup$Provider);
    export class $ItemStackAccessor {
    }
    export interface $ItemStackAccessor {
        accessories$addModifierTooltip(arg0: $Consumer_<$Component>, arg1: $Player, arg2: $Holder_<$Attribute>, arg3: $AttributeModifier_): void;
        accessories$components(): $PatchedDataComponentMap;
    }
    export class $CriteriaTriggersAccessor {
        static accessories$callRegister<T extends $CriterionTrigger<never>>(name: string, trigger: T): T;
    }
    export interface $CriteriaTriggersAccessor {
    }
}
