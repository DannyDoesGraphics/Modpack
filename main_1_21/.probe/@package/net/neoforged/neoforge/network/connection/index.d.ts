import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/connection" {
    export class $ConnectionType extends $Enum<$ConnectionType> {
        static values(): $ConnectionType[];
        static valueOf(arg0: string): $ConnectionType;
        isOther(): boolean;
        isNeoForge(): boolean;
        static OTHER: $ConnectionType;
        static NEOFORGE: $ConnectionType;
        get other(): boolean;
        get neoForge(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "neoforge" | "other";
    /**
     * Utility class for storing and retrieving `Connection` objects from `ChannelHandlerContext` objects.
     */
    export class $ConnectionUtils {
        /**
         * Sets the `Connection` object to the `ChannelHandlerContext` object.
         */
        static setConnection(connection: $ChannelHandlerContext, value: $Connection): void;
        /**
         * Removes the `Connection` object from the `ChannelHandlerContext` object.
         */
        static removeConnection(connection: $ChannelHandlerContext): void;
        /**
         * Gets the `Connection` object from the `ChannelHandlerContext` object.
         */
        static getConnection(connection: $ChannelHandlerContext): $Connection;
    }
}
