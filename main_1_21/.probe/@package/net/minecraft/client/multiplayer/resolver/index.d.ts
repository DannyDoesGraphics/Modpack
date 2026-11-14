import { $Logger } from "@package/org/slf4j";
import { $InetSocketAddress } from "@package/java/net";

declare module "@package/net/minecraft/client/multiplayer/resolver" {
    export class $ResolvedServerAddress {
        static from(inetSocketAddress: $InetSocketAddress): $ResolvedServerAddress;
    }
    export interface $ResolvedServerAddress {
        asInetSocketAddress(): $InetSocketAddress;
        getHostIp(): string;
        getPort(): number;
        getHostName(): string;
        get hostIp(): string;
        get port(): number;
        get hostName(): string;
    }
    export class $AddressCheck {
        static createFromService(): $AddressCheck;
    }
    export interface $AddressCheck {
        isAllowed(resolvedServerAddress: $ResolvedServerAddress): boolean;
        isAllowed(serverAddress: $ServerAddress): boolean;
    }
    export class $ServerNameResolver {
        resolveAddress(serverAddress: $ServerAddress): ($ResolvedServerAddress) | undefined;
        static DEFAULT: $ServerNameResolver;
    }
    export class $ServerRedirectHandler {
        static createDnsSrvRedirectHandler(): $ServerRedirectHandler;
        static LOGGER: $Logger;
        static EMPTY: $ServerRedirectHandler;
    }
    export interface $ServerRedirectHandler {
        lookupRedirect(serverAddress: $ServerAddress): ($ServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerRedirectHandler}.
     */
    export type $ServerRedirectHandler_ = ((arg0: $ServerAddress) => ($ServerAddress) | undefined);
    export class $ServerAddressResolver {
        static SYSTEM: $ServerAddressResolver;
        static LOGGER: $Logger;
    }
    export interface $ServerAddressResolver {
        resolve(serverAddress: $ServerAddress): ($ResolvedServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerAddressResolver}.
     */
    export type $ServerAddressResolver_ = ((arg0: $ServerAddress) => ($ResolvedServerAddress) | undefined);
    export class $ServerAddress {
        static isValidAddress(hostAndPort: string): boolean;
        static parseString(ip: string): $ServerAddress;
        getHost(): string;
        getPort(): number;
        constructor(host: string, port: number);
        get host(): string;
        get port(): number;
    }
}
