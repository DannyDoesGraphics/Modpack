import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $LazyTickTier } from "@package/net/pinkcats/createlazytick/helper/tooltip";

declare module "@package/net/pinkcats/createlazytick/bridge/Create" {
    export class $ISmartBlockEntityControl {
    }
    export interface $ISmartBlockEntityControl {
        createLazyTick$setOwnerName(arg0: string): void;
        createLazyTick$setOwnerUUID(arg0: $UUID_): void;
        createLazyTick$sendBlockUpdated(): void;
        createLazyTick$getDynamicValue(): number;
        createLazyTick$getForcedValue(): number;
        createLazyTick$getOwnerName(): string;
        lazytick$isDefaultState(): boolean;
        lazytick$getSyncedTier(): $LazyTickTier;
        lazytick$setSyncedTier(arg0: number, arg1: number): void;
        lazytick$getExtraData(): number;
        lazytick$setExtraData(arg0: number): void;
        createLazyTick$getOwnerUUID(): $UUID;
        CLT$getPos(): $BlockPos;
        CLT$getDimension(): $ResourceKey<$Level>;
        createLazyTick$setCurrentSuperTick(arg0: number): void;
        createLazyTick$getCurrentSuperTick(): number;
        createLazyTick$setDelayForced(arg0: boolean): void;
        createLazyTick$isDelayForced(): boolean;
        createLazyTick$setDynamicValue(arg0: number): void;
        createLazyTick$setForcedValue(arg0: number): void;
        createLazyTick$shouldRenderTier(): boolean;
        createLazyTick$getCustomTooltipInfo(): $List<$Component>;
        createLazyTick$shouldRenderMode(): boolean;
        CLT$onClientRequest(arg0: number): void;
        CLT$IsController(): boolean;
    }
}
