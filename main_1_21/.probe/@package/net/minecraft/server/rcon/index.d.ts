import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
export * as thread from "@package/net/minecraft/server/rcon/thread";

declare module "@package/net/minecraft/server/rcon" {
    export class $RconConsoleSource implements $CommandSource {
        /**
         * Clears the RCon log
         */
        prepareForCommand(): void;
        /**
         * Gets the contents of the RCon log
         */
        getCommandResponse(): string;
        sendSystemMessage(component: $Component_): void;
        createCommandSourceStack(): $CommandSourceStack;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        alwaysAccepts(): boolean;
        constructor(server: $MinecraftServer);
        get commandResponse(): string;
    }
    export class $NetworkDataOutputStream {
        /**
         * Resets the byte array output.
         */
        reset(): void;
        write(capacity: number): void;
        writeInt(capacity: number): void;
        /**
         * Writes the given byte array to the output stream
         */
        writeBytes(data: number[]): void;
        writeFloat(data: number): void;
        /**
         * Returns the contents of the output stream as a byte array
         */
        toByteArray(): number[];
        /**
         * Writes the given short to the output stream
         */
        writeShort(data: number): void;
        /**
         * Writes the given String to the output stream
         */
        writeString(data: string): void;
        constructor(capacity: number);
    }
    export class $PktUtils {
        /**
         * Read 4 bytes from the
         */
        static intFromByteArray(input: number[], offset: number): number;
        /**
         * Read 4 bytes from the given array in little-endian format and return them as an int
         */
        static intFromByteArray(input: number[], offset: number, length: number): number;
        /**
         * Read a null-terminated string from the given byte array
         */
        static stringFromByteArray(input: number[], offset: number, length: number): string;
        /**
         * Read 4 bytes from the given array in little-endian format and return them as an int
         */
        static intFromNetworkByteArray(input: number[], offset: number, length: number): number;
        /**
         * Returns a String representation of the byte in hexadecimal format
         */
        static toHexString(input: number): string;
        static MAX_PACKET_SIZE: number;
        static HEX_CHAR: string[];
        constructor();
    }
}
