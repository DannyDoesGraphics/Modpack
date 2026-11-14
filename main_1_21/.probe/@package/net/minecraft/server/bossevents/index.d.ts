import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/server/bossevents" {
    export class $CustomBossEvents {
        onPlayerConnect(player: $ServerPlayer): void;
        getEvents(): $Collection<$CustomBossEvent>;
        remove(bossbar: $CustomBossEvent): void;
        get(id: $ResourceLocation_): $CustomBossEvent;
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        create(id: $ResourceLocation_, name: $Component_): $CustomBossEvent;
        onPlayerDisconnect(player: $ServerPlayer): void;
        getIds(): $Collection<$ResourceLocation>;
        constructor();
        get events(): $Collection<$CustomBossEvent>;
        get ids(): $Collection<$ResourceLocation>;
    }
    export class $CustomBossEvent extends $ServerBossEvent {
        setPlayers(serverPlayerList: $Collection_<$ServerPlayer>): boolean;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerConnect(player: $ServerPlayer): void;
        getTextId(): $ResourceLocation;
        addOfflinePlayer(player: $UUID_): void;
        static load(tag: $CompoundTag_, id: $ResourceLocation_, levelRegistry: $HolderLookup$Provider): $CustomBossEvent;
        getValue(): number;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        setValue(max: number): void;
        getDisplayName(): $Component;
        getMax(): number;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerDisconnect(player: $ServerPlayer): void;
        setMax(max: number): void;
        constructor(id: $ResourceLocation_, name: $Component_);
        set players(value: $Collection_<$ServerPlayer>);
        get textId(): $ResourceLocation;
        get displayName(): $Component;
    }
}
