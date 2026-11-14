import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map, $List_ } from "@package/java/util";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Predicate_, $Supplier_, $Function_, $Supplier } from "@package/java/util/function";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RequiredArgumentBuilder, $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Enum, $Record, $Object, $Runnable, $Class } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType, $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";
export * as neoforge from "@package/com/railwayteam/railways/multiloader/neoforge";
export * as fluid from "@package/com/railwayteam/railways/multiloader/fluid";

declare module "@package/com/railwayteam/railways/multiloader" {
    export class $Loader extends $Enum<$Loader> {
        static getActual(): $Loader;
        static getFormatted(): string;
        isCurrent(): boolean;
        static values(): $Loader[];
        static valueOf(arg0: string): $Loader;
        runIfCurrent(arg0: $Supplier_<$Runnable>): void;
        static QUILT: $Loader;
        static FABRIC: $Loader;
        static NEOFORGE: $Loader;
        static FORGE: $Loader;
        static CURRENT: $Loader;
        static get actual(): $Loader;
        static get formatted(): string;
        get current(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Loader}.
     */
    export type $Loader_ = "forge" | "neoforge" | "fabric" | "quilt";
    export class $Env extends $Enum<$Env> {
        isCurrent(): boolean;
        static unsafeRunForDist<T>(arg0: $Supplier_<$Supplier<T>>, arg1: $Supplier_<$Supplier<T>>): T;
        static values(): $Env[];
        static valueOf(arg0: string): $Env;
        runIfCurrent(arg0: $Supplier_<$Runnable>): void;
        static SERVER: $Env;
        static CLIENT: $Env;
        static CURRENT: $Env;
        get current(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Env}.
     */
    export type $Env_ = "client" | "server";
    export class $PacketSet$CheckVersionPacket extends $Record implements $S2CPacket {
        serverVersion(): number;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(serverVersion: number);
    }
    /**
     * Values that may be interpreted as {@link $PacketSet$CheckVersionPacket}.
     */
    export type $PacketSet$CheckVersionPacket_ = { serverVersion?: number,  } | [serverVersion?: number, ];
    export class $PacketSet {
        onPlayerJoin(arg0: $ServerPlayer): void;
        handleS2CPacket(arg0: $Minecraft, arg1: $FriendlyByteBuf): void;
        registerC2SListener(): void;
        registerS2CListener(): void;
        handleC2SPacket(arg0: $ServerPlayer, arg1: $FriendlyByteBuf): void;
        static builder(arg0: string, arg1: number): $PacketSet$Builder;
        static create(arg0: string, arg1: number, arg2: $List_<$Function_<$FriendlyByteBuf, $S2CPacket>>, arg3: $Object2IntMap<$Class<$S2CPacket>>, arg4: $List_<$Function_<$FriendlyByteBuf, $C2SPacket>>, arg5: $Object2IntMap<$Class<$C2SPacket>>): $PacketSet;
        send(arg0: $C2SPacket): void;
        send(arg0: $Object): void;
        sendTo(arg0: $PlayerSelection, arg1: $Object): void;
        sendTo(arg0: $ServerPlayer, arg1: $S2CPacket): void;
        sendTo(arg0: $PlayerSelection, arg1: $S2CPacket): void;
        sendTo(arg0: $ServerPlayer, arg1: $Object): void;
        s2cPacket: $ResourceLocation;
        id: string;
        c2sPacket: $ResourceLocation;
        version: number;
    }
    export class $ClientCommands {
        static argument<T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<$SharedSuggestionProvider, T>;
        static literal(arg0: string): $LiteralArgumentBuilder<$SharedSuggestionProvider>;
        static sendSuccess(arg0: $SharedSuggestionProvider, arg1: $Component_): void;
        static sendFailure(arg0: $SharedSuggestionProvider, arg1: $Component_): void;
        constructor();
    }
    export class $S2CPacket {
    }
    export interface $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
    }
    export class $CommonTags {
        static block(arg0: string): $CommonTag<$Block>;
        static block(arg0: string, arg1: string, arg2: string): $CommonTag<$Block>;
        static item(arg0: string, arg1: string, arg2: string): $CommonTag<$Item>;
        static item(arg0: string): $CommonTag<$Item>;
        static ZINC_NUGGETS: $CommonTag<$Item>;
        static DYES: $Map<$DyeColor, $CommonTag<$Item>>;
        static BRASS_NUGGETS: $CommonTag<$Item>;
        static WORKBENCH: $CommonTag<$Item>;
        static IRON_INGOTS: $CommonTag<$Item>;
        static BRASS_INGOTS: $CommonTag<$Item>;
        static IRON_PLATES: $CommonTag<$Item>;
        static BRASS_PLATES: $CommonTag<$Item>;
        static ALL_BLOCKS: $List<$CommonTag<$Block>>;
        static COLORLESS_GLASS_I: $CommonTag<$Item>;
        static ALL_ITEMS: $List<$CommonTag<$Item>>;
        static STRING: $CommonTag<$Item>;
        static COPPER_INGOTS: $CommonTag<$Item>;
        static RELOCATION_NOT_SUPPORTED: $CommonTag<$Block>;
        static IRON_NUGGETS: $CommonTag<$Item>;
        constructor();
    }
    export class $CommonTag<T> {
        static conventional<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: string, arg2: string, arg3: string): $CommonTag<T>;
        fabric: $TagKey<T>;
        forge: $TagKey<T>;
        tag: $TagKey<T>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(arg0: $TagKey_<T>, arg1: $TagKey_<T>, arg2: $TagKey_<T>);
    }
    export class $PlatformAbstractionHelper {
        static getBurnTime(arg0: $Item_): number;
        static enumArgument<T extends $Enum<T>>(arg0: $Class<T>): $ArgumentType<T>;
        constructor();
    }
    export class $C2SPacket {
    }
    export interface $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
    }
    export class $EntityTypeConfigurator {
        size(arg0: number, arg1: number): $EntityTypeConfigurator;
        static of(arg0: $Object): $EntityTypeConfigurator;
        fireImmune(): $EntityTypeConfigurator;
        constructor();
    }
    export class $PlayerSelection {
        static allWith(arg0: $Predicate_<$ServerPlayer>): $PlayerSelection;
        static trackingWith(arg0: $Entity, arg1: $Predicate_<$ServerPlayer>): $PlayerSelection;
        static tracking(arg0: $Entity): $PlayerSelection;
        static tracking(arg0: $BlockEntity): $PlayerSelection;
        static tracking(arg0: $ServerLevel, arg1: $BlockPos_): $PlayerSelection;
        static trackingAndSelf(arg0: $ServerPlayer): $PlayerSelection;
        static of(arg0: $ServerPlayer): $PlayerSelection;
        accept(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): void;
        static all(): $PlayerSelection;
        constructor();
    }
    export class $PacketSet$Builder {
        c2s(arg0: $Class<$C2SPacket>, arg1: $Function_<$FriendlyByteBuf, $C2SPacket>): $PacketSet$Builder;
        s2c(arg0: $Class<$S2CPacket>, arg1: $Function_<$FriendlyByteBuf, $S2CPacket>): $PacketSet$Builder;
        build(): $PacketSet;
        id: string;
        version: number;
    }
}
