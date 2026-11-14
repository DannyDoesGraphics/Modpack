import { $Supplier_, $BiConsumer } from "@package/java/util/function";
import { $RegistrationInfo, $Holder$Reference, $RegistrationInfo_ } from "@package/net/minecraft/core";
import { $CreativeModeTab_, $CreativeModeTab, $Item, $CreativeModeTab$Output } from "@package/net/minecraft/world/item";
import { $Layer, $Layer$Instance } from "@package/io/wispforest/owo/ui/layers";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $BufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $ParentComponent, $PositionedRectangle } from "@package/io/wispforest/owo/ui/core";
import { $ScreenInternals$SyncPropertiesPacket_, $ScreenInternals$LocalPacket_ } from "@package/io/wispforest/owo/client/screens";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/io/wispforest/owo/util/pond" {
    export class $OwoSimpleRegistryExtensions<T> {
    }
    export interface $OwoSimpleRegistryExtensions<T> {
        owo$set(arg0: number, arg1: $ResourceKey_<T>, arg2: T, arg3: $RegistrationInfo_): $Holder$Reference<T>;
    }
    /**
     * Values that may be interpreted as {@link $OwoSimpleRegistryExtensions}.
     */
    export type $OwoSimpleRegistryExtensions_<T> = ((arg0: number, arg1: $ResourceKey<T>, arg2: T, arg3: $RegistrationInfo) => $Holder$Reference<T>);
    export class $OwoItemExtensions {
    }
    export interface $OwoItemExtensions {
        owo$setGroup(arg0: $Supplier_<$CreativeModeTab>): void;
        owo$setGroup(group: $CreativeModeTab_): void;
        owo$shouldTrackUsageStat(): boolean;
        owo$group(): $CreativeModeTab;
        owo$tab(): number;
        owo$stackGenerator(): $BiConsumer<$Item, $CreativeModeTab$Output>;
    }
    export class $OwoCreativeInventoryScreenExtensions {
    }
    export interface $OwoCreativeInventoryScreenExtensions {
        owo$getRootX(): number;
        owo$getRootY(): number;
    }
    export class $OwoSlotExtension {
    }
    export interface $OwoSlotExtension {
        owo$setDisabledOverride(arg0: boolean): void;
        owo$getDisabledOverride(): boolean;
        owo$setScissorArea(arg0: $PositionedRectangle): void;
        owo$getScissorArea(): $PositionedRectangle;
    }
    export class $OwoEntityRenderDispatcherExtension {
    }
    export interface $OwoEntityRenderDispatcherExtension {
        owo$showNametag(): boolean;
        owo$counterRotate(): boolean;
        owo$setCounterRotate(arg0: boolean): void;
        owo$setShowNametag(arg0: boolean): void;
    }
    export class $OwoScreenHandlerExtension {
    }
    export interface $OwoScreenHandlerExtension {
        owo$attachToPlayer(arg0: $Player): void;
        owo$handlePacket(arg0: $ScreenInternals$LocalPacket_, arg1: boolean): void;
        owo$readPropertySync(arg0: $ScreenInternals$SyncPropertiesPacket_): void;
    }
    export class $OwoScreenExtension {
    }
    export interface $OwoScreenExtension {
        owo$updateLayers(): void;
        owo$getInstance<S extends $Screen, R extends $ParentComponent>(arg0: $Layer<S, R>): $Layer$Instance;
        owo$getInstancesView(): $List<$Layer$Instance>;
    }
    export class $OwoTessellatorExtension {
    }
    export interface $OwoTessellatorExtension {
        owo$getStoredBuilder(): $BufferBuilder;
        owo$skipNextBegin(): void;
        owo$setStoredBuilder(arg0: $BufferBuilder): void;
    }
}
