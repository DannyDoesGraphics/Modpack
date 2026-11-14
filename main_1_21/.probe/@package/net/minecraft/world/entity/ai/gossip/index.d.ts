import { $DoublePredicate_, $Predicate_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DynamicOps, $Dynamic, $Codec } from "@package/com/mojang/serialization";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/entity/ai/gossip" {
    export class $GossipContainer$GossipEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GossipContainer$GossipEntry}.
     */
    export type $GossipContainer$GossipEntry_ = { value?: number, type?: $GossipType_, target?: $UUID_,  } | [value?: number, type?: $GossipType_, target?: $UUID_, ];
    export class $GossipType extends $Enum<$GossipType> implements $StringRepresentable {
        static values(): $GossipType[];
        static valueOf(arg0: string): $GossipType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MINOR_NEGATIVE: $GossipType;
        static CODEC: $Codec<$GossipType>;
        static MAJOR_NEGATIVE: $GossipType;
        max: number;
        decayPerTransfer: number;
        static MINOR_POSITIVE: $GossipType;
        weight: number;
        decayPerDay: number;
        static TRADING: $GossipType;
        static REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: number;
        static MAJOR_POSITIVE: $GossipType;
        static REPUTATION_CHANGE_PER_EVENT: number;
        id: string;
        static REPUTATION_CHANGE_PER_TRADE: number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GossipType}.
     */
    export type $GossipType_ = "major_negative" | "minor_negative" | "minor_positive" | "major_positive" | "trading";
    export class $GossipContainer$EntityGossips {
    }
    export class $GossipContainer {
        getReputation(identifier: $UUID_, gossip: $Predicate_<$GossipType>): number;
        decay(): void;
        getGossipEntries(): $Map<$UUID, $Object2IntMap<$GossipType>>;
        getCountForType(gossipType: $GossipType_, gossipPredicate: $DoublePredicate_): number;
        remove(identifier: $UUID_, gossipType: $GossipType_, gossipValue: number): void;
        remove(identifier: $UUID_, gossipType: $GossipType_): void;
        remove(gossipType: $GossipType_): void;
        update(dynamic: $Dynamic<never>): void;
        store<T>(ops: $DynamicOps<T>): T;
        add(identifier: $UUID_, gossipType: $GossipType_, gossipValue: number): void;
        transferFrom(container: $GossipContainer, randomSource: $RandomSource, amount: number): void;
        static DISCARD_THRESHOLD: number;
        constructor();
        get gossipEntries(): $Map<$UUID, $Object2IntMap<$GossipType>>;
    }
}
