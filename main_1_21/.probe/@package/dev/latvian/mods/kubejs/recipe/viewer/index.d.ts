import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { SpecialTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $List, $List_, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as server from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";

declare module "@package/dev/latvian/mods/kubejs/recipe/viewer" {
    export class $RemoveRecipesKubeEvent {
    }
    export interface $RemoveRecipesKubeEvent extends $KubeEvent {
        removeFromCategory(category: $ResourceLocation_, recipesToRemove: $ResourceLocation_[]): void;
        remove(recipesToRemove: SpecialTypes.RecipeId[]): void;
    }
    /**
     * Values that may be interpreted as {@link $RemoveRecipesKubeEvent}.
     */
    export type $RemoveRecipesKubeEvent_ = ((category: $ResourceLocation, recipesToRemove: $ResourceLocation[]) => void);
    export class $RecipeViewerEntryType {
        wrapEntry(from: $Object): $Object;
        wrapPredicate(from: $Object): $Object;
        getBase(from: $Object): $Object;
        static fromString(id: $Object): $RecipeViewerEntryType;
        static ITEM: $RecipeViewerEntryType;
        entryType: $RecipeViewerEntryType$Component<never>;
        static ALL_TYPES: $Lazy<$List<$RecipeViewerEntryType>>;
        static FLUID: $RecipeViewerEntryType;
        predicateType: $RecipeViewerEntryType$Component<never>;
        baseClass: $RecipeViewerEntryType$Component<never>;
        id: string;
        static CUSTOM_TYPES: $Lazy<$Map<string, $RecipeViewerEntryType>>;
        constructor(id: string, entryType: $RecipeViewerEntryType$Component_<never>, predicateType: $RecipeViewerEntryType$Component_<never>, baseClass: $RecipeViewerEntryType$Component_<never>);
    }
    export class $AddInformationKubeEvent<F> {
    }
    export interface $AddInformationKubeEvent<F> extends $KubeEvent {
        add(filter: F, info: $List_<$Component_>): void;
    }
    /**
     * Values that may be interpreted as {@link $AddInformationKubeEvent}.
     */
    export type $AddInformationKubeEvent_<F> = ((filter: $Object, info: $List<$Component>) => void);
    export class $RemoveEntriesKubeEvent<F> {
    }
    export interface $RemoveEntriesKubeEvent<F> extends $KubeEvent {
        remove(filter: F): void;
    }
    /**
     * Values that may be interpreted as {@link $RemoveEntriesKubeEvent}.
     */
    export type $RemoveEntriesKubeEvent_<F> = ((filter: $Object) => void);
    export class $RecipeViewerEntryType$Component<T> extends $Record {
        streamCodec(): $StreamCodec<never, T>;
        type(): $TypeInfo;
        empty(): $Predicate<T>;
        constructor(type: $TypeInfo_, streamCodec: $StreamCodec<never, T>, empty: $Predicate_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeViewerEntryType$Component}.
     */
    export type $RecipeViewerEntryType$Component_<T> = { empty?: $Predicate_<any>, type?: $TypeInfo_, streamCodec?: $StreamCodec<never, any>,  } | [empty?: $Predicate_<any>, type?: $TypeInfo_, streamCodec?: $StreamCodec<never, any>, ];
    export class $RemoveCategoriesKubeEvent {
    }
    export interface $RemoveCategoriesKubeEvent extends $KubeEvent {
        remove(categories: $ResourceLocation_[]): void;
    }
    /**
     * Values that may be interpreted as {@link $RemoveCategoriesKubeEvent}.
     */
    export type $RemoveCategoriesKubeEvent_ = ((categories: $ResourceLocation[]) => void);
    export class $RegisterSubtypesKubeEvent<F> {
    }
    export interface $RegisterSubtypesKubeEvent<F> extends $KubeEvent {
        useComponents(filter: F): void;
        useComponents(filter: F, components: $List_<$DataComponentType_<never>>): void;
        register(filter: F, interpreter: $SubtypeInterpreter_): void;
    }
    export class $SubtypeInterpreter {
    }
    export interface $SubtypeInterpreter {
        apply(entry: $Object): $Object;
    }
    /**
     * Values that may be interpreted as {@link $SubtypeInterpreter}.
     */
    export type $SubtypeInterpreter_ = ((entry: $Object) => $Object);
    export class $AddEntriesKubeEvent<E> {
    }
    export interface $AddEntriesKubeEvent<E> extends $KubeEvent {
        add(items: E[]): void;
    }
    /**
     * Values that may be interpreted as {@link $AddEntriesKubeEvent}.
     */
    export type $AddEntriesKubeEvent_<E> = ((items: $Object[]) => void);
    export class $GroupEntriesKubeEvent<F> {
    }
    export interface $GroupEntriesKubeEvent<F> extends $KubeEvent {
        group(filter: F, groupId: $ResourceLocation_, description: $Component_): void;
    }
    /**
     * Values that may be interpreted as {@link $GroupEntriesKubeEvent}.
     */
    export type $GroupEntriesKubeEvent_<F> = ((filter: $Object, groupId: $ResourceLocation, description: $Component) => void);
}
