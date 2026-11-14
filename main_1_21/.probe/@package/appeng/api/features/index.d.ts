import { $ItemLike, $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set, $UUID_, $Set_ } from "@package/java/util";
import { $IActionHost } from "@package/appeng/api/networking/security";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $AESavedData } from "@package/appeng/core/worlddata";
import { $GlobalPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Record } from "@package/java/lang";
import { $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/api/features" {
    export class $P2PTunnelAttunement$ApiAttunement extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $P2PTunnelAttunement$ApiAttunement}.
     */
    export type $P2PTunnelAttunement$ApiAttunement_ = { component?: $Component_, tunnelType?: $Item_, capability?: $ItemCapability<never, void>,  } | [component?: $Component_, tunnelType?: $Item_, capability?: $ItemCapability<never, void>, ];
    export class $IPlayerRegistry {
        static getPlayerId(arg0: $ServerPlayer): number;
        static getConnected(arg0: $MinecraftServer, arg1: number): $ServerPlayer;
        static getMapping(arg0: $MinecraftServer): $IPlayerRegistry;
        static getMapping(arg0: $Level_): $IPlayerRegistry;
    }
    export interface $IPlayerRegistry {
        getPlayerId(arg0: $GameProfile): number;
        getPlayerId(arg0: $UUID_): number;
        getProfileId(arg0: number): $UUID;
    }
    export class $PlayerRegistryInternal extends $AESavedData implements $IPlayerRegistry {
        getPlayerId(arg0: $GameProfile): number;
    }
    export class $Locatables$Type<T> {
        get(arg0: $Level_, arg1: number): T;
        register(arg0: $Level_, arg1: number, arg2: T): void;
        unregister(arg0: $Level_, arg1: number): void;
        constructor();
    }
    export class $P2PTunnelAttunementInternal$AttunementInfo extends $Record {
        apis(): $Set<$ItemCapability<never, void>>;
        constructor(apis: $Set_<$ItemCapability<never, void>>);
    }
    /**
     * Values that may be interpreted as {@link $P2PTunnelAttunementInternal$AttunementInfo}.
     */
    export type $P2PTunnelAttunementInternal$AttunementInfo_ = { apis?: $Set_<$ItemCapability<never, void>>,  } | [apis?: $Set_<$ItemCapability<never, void>>, ];
    export class $P2PTunnelAttunementInternal {
        static getApiTunnels(): $List<$P2PTunnelAttunementInternal$Resultant>;
        static getTagTunnels(): $Map<$TagKey<$Item>, $Item>;
        static getAttunementInfo(arg0: $ItemLike_): $P2PTunnelAttunementInternal$AttunementInfo;
        static get apiTunnels(): $List<$P2PTunnelAttunementInternal$Resultant>;
        static get tagTunnels(): $Map<$TagKey<$Item>, $Item>;
    }
    export class $IGridLinkableHandler {
    }
    export interface $IGridLinkableHandler {
        canLink(arg0: $ItemStack_): boolean;
        link(arg0: $ItemStack_, arg1: $GlobalPos_): void;
        unlink(arg0: $ItemStack_): void;
    }
    export class $GridLinkables {
        static get(arg0: $ItemLike_): $IGridLinkableHandler;
        static register(arg0: $ItemLike_, arg1: $IGridLinkableHandler): void;
    }
    export class $HotkeyAction {
        static register(arg0: $HotkeyAction_, arg1: string): void;
        static WIRELESS_TERMINAL: string;
        static PORTABLE_FLUID_CELL: string;
        static PORTABLE_ITEM_CELL: string;
    }
    export interface $HotkeyAction {
        run(arg0: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HotkeyAction}.
     */
    export type $HotkeyAction_ = ((arg0: $Player) => boolean);
    export class $P2PTunnelAttunementInternal$Resultant extends $Record {
        tunnelType(): $Item;
        stackPredicate(): $Predicate<$ItemStack>;
        description(): $Component;
        constructor(description: $Component_, tunnelType: $Item_, stackPredicate: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $P2PTunnelAttunementInternal$Resultant}.
     */
    export type $P2PTunnelAttunementInternal$Resultant_ = { stackPredicate?: $Predicate_<$ItemStack>, description?: $Component_, tunnelType?: $Item_,  } | [stackPredicate?: $Predicate_<$ItemStack>, description?: $Component_, tunnelType?: $Item_, ];
    export class $Locatables {
        static quantumNetworkBridges(): $Locatables$Type<$IActionHost>;
    }
    export class $P2PTunnelAttunement {
        static registerAttunementTag(arg0: $ItemLike_): void;
        static registerAttunementApi(arg0: $ItemLike_, arg1: $ItemCapability<never, void>, arg2: $Component_): void;
        static getTunnelPartByTriggerItem(arg0: $ItemStack_): $ItemStack;
        static getAttunementTag(arg0: $ItemLike_): $TagKey<$Item>;
        static ME_TUNNEL: $ItemLike;
        static ITEM_TUNNEL: $ItemLike;
        static ENERGY_TUNNEL: $ItemLike;
        static FLUID_TUNNEL: $ItemLike;
        static LIGHT_TUNNEL: $ItemLike;
        static REDSTONE_TUNNEL: $ItemLike;
    }
}
