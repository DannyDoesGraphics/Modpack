import { $ChannelHandler } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ConnectionType_ } from "@package/net/neoforged/neoforge/network/connection";
import { $Enum, $Record } from "@package/java/lang";
import { $MessageToMessageEncoder } from "@package/io/netty/handler/codec";

declare module "@package/net/neoforged/neoforge/network/filters" {
    /**
     * A filter for vanilla impl packets.
     * 
     * TODO: Make non-internal when mods are able to register custom filters.
     */
    export class $VanillaPacketFilter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        /**
         * Whether this filter is necessary on the given connection.
         */
        isNecessary(manager: $Connection): boolean;
    }
    export class $NetworkFilters {
        static injectIfNecessary(manager: $Connection): void;
        static cleanIfNecessary(manager: $Connection): void;
    }
    /**
     * A generic packet splitter that can be used to split packets that are too large to be sent in one go.
     */
    export class $GenericPacketSplitter extends $MessageToMessageEncoder<$Packet<never>> implements $DynamicChannelHandler {
        static isRemoteCompatible(manager: $Connection): boolean;
        static getRemoteCompatibility(arg0: $Connection): $GenericPacketSplitter$RemoteCompatibility;
        isNecessary(manager: $Connection): boolean;
        static determineMaxPayloadSize(maxPacketSize: number): number;
        static CHANNEL_HANDLER_NAME: string;
        constructor();
    }
    /**
     * An extension to the netty `ChannelHandler` interface that allows for
     * dynamic injection of handlers into the pipeline, based on whether they are needed
     * on the current connection or not.
     */
    export class $DynamicChannelHandler {
    }
    export interface $DynamicChannelHandler extends $ChannelHandler {
        isNecessary(manager: $Connection): boolean;
    }
    export class $GenericPacketSplitter$RemoteCompatibility extends $Enum<$GenericPacketSplitter$RemoteCompatibility> {
        static values(): $GenericPacketSplitter$RemoteCompatibility[];
        static valueOf(arg0: string): $GenericPacketSplitter$RemoteCompatibility;
        static PRESENT: $GenericPacketSplitter$RemoteCompatibility;
        static ABSENT: $GenericPacketSplitter$RemoteCompatibility;
    }
    /**
     * Values that may be interpreted as {@link $GenericPacketSplitter$RemoteCompatibility}.
     */
    export type $GenericPacketSplitter$RemoteCompatibility_ = "absent" | "present";
    /**
     * A filter for impl packets, used to filter/modify parts of vanilla impl messages that
     * will cause errors or warnings on vanilla clients, for example entity attributes that are added by Forge or mods.
     */
    export class $VanillaConnectionNetworkFilter extends $VanillaPacketFilter {
        constructor(connectionType: $ConnectionType_);
    }
    export class $GenericPacketSplitter$SizeLimits extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GenericPacketSplitter$SizeLimits}.
     */
    export type $GenericPacketSplitter$SizeLimits_ = { packet?: number, part?: number,  } | [packet?: number, part?: number, ];
    export class $CommandTreeCleaner {
    }
}
