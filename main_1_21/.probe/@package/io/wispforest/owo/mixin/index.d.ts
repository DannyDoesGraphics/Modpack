import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $Connection } from "@package/net/minecraft/network";
import { $RegistryOps$RegistryInfoLookup } from "@package/net/minecraft/resources";
import { $VertexFormat$Mode, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $SetComponentsFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $List_ } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as ui from "@package/io/wispforest/owo/mixin/ui";
export * as itemgroup from "@package/io/wispforest/owo/mixin/itemgroup";
export * as ext from "@package/io/wispforest/owo/mixin/ext";
export * as registry from "@package/io/wispforest/owo/mixin/registry";
export * as shader from "@package/io/wispforest/owo/mixin/shader";
export * as offline from "@package/io/wispforest/owo/mixin/offline";

declare module "@package/io/wispforest/owo/mixin" {
    export class $CachedRegistryInfoGetterAccessor {
    }
    export interface $CachedRegistryInfoGetterAccessor {
        owo$getRegistriesLookup(): $HolderLookup$Provider;
    }
    /**
     * Values that may be interpreted as {@link $CachedRegistryInfoGetterAccessor}.
     */
    export type $CachedRegistryInfoGetterAccessor_ = (() => $HolderLookup$Provider);
    export class $RegistryOpsAccessor {
    }
    export interface $RegistryOpsAccessor {
        owo$infoGetter(): $RegistryOps$RegistryInfoLookup;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOpsAccessor}.
     */
    export type $RegistryOpsAccessor_ = (() => $RegistryOps$RegistryInfoLookup);
    export class $ServerCommonNetworkHandlerAccessor {
    }
    export interface $ServerCommonNetworkHandlerAccessor {
        owo$server(): $MinecraftServer;
        owo$getConnection(): $Connection;
    }
    export class $BufferBuilderAccessor {
    }
    export interface $BufferBuilderAccessor {
        getFormat(): $VertexFormat;
        getDrawMode(): $VertexFormat$Mode;
        isBuilding(): boolean;
        get format(): $VertexFormat;
        get drawMode(): $VertexFormat$Mode;
        get building(): boolean;
    }
    export class $ForwardingDynamicOpsAccessor<T> {
    }
    export interface $ForwardingDynamicOpsAccessor<T> {
        owo$delegate(): $DynamicOps<T>;
    }
    /**
     * Values that may be interpreted as {@link $ForwardingDynamicOpsAccessor}.
     */
    export type $ForwardingDynamicOpsAccessor_<T> = (() => $DynamicOps<T>);
    export class $ClientCommonNetworkHandlerAccessor {
    }
    export interface $ClientCommonNetworkHandlerAccessor {
        getConnection(): $Connection;
        get connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonNetworkHandlerAccessor}.
     */
    export type $ClientCommonNetworkHandlerAccessor_ = (() => $Connection);
    export class $ClientLoginNetworkHandlerAccessor {
    }
    export interface $ClientLoginNetworkHandlerAccessor {
        owo$getConnection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $ClientLoginNetworkHandlerAccessor}.
     */
    export type $ClientLoginNetworkHandlerAccessor_ = (() => $Connection);
    export class $ScreenAccessor {
        static owo$PANORAMA_RENDERER(): $CubeMap;
        static owo$ROTATING_PANORAMA_RENDERER(): $PanoramaRenderer;
    }
    export interface $ScreenAccessor {
        owo$addDrawableChild<T extends $GuiEventListener>(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = ((arg0: any) => any);
    export class $ScreenHandlerInvoker {
    }
    export interface $ScreenHandlerInvoker {
        owo$insertItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenHandlerInvoker}.
     */
    export type $ScreenHandlerInvoker_ = ((arg0: $ItemStack, arg1: number, arg2: number, arg3: boolean) => boolean);
    export class $SetComponentsLootFunctionAccessor {
        static createSetComponentsLootFunction(list: $List_<$LootItemCondition>, componentChanges: $DataComponentPatch_): $SetComponentsFunction;
    }
    export interface $SetComponentsLootFunctionAccessor {
    }
}
