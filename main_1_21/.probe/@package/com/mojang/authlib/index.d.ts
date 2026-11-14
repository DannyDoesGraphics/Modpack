import { $Proxy, $URL } from "@package/java/net";
import { $Object, $Enum, $Exception, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $Map_ } from "@package/java/util";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
export * as properties from "@package/com/mojang/authlib/properties";
export * as minecraft from "@package/com/mojang/authlib/minecraft";
export * as yggdrasil from "@package/com/mojang/authlib/yggdrasil";

declare module "@package/com/mojang/authlib" {
    export class $AuthenticationService {
    }
    export interface $AuthenticationService {
        createMinecraftSessionService(): $MinecraftSessionService;
        createProfileRepository(): $GameProfileRepository;
    }
    export class $ProfileLookupCallback {
    }
    export interface $ProfileLookupCallback {
        onProfileLookupSucceeded(arg0: $GameProfile): void;
        onProfileLookupFailed(arg0: string, arg1: $Exception): void;
    }
    export class $Environment extends $Record {
        name(): string;
        sessionHost(): string;
        servicesHost(): string;
        constructor(sessionHost: string, servicesHost: string, name: string);
    }
    /**
     * Values that may be interpreted as {@link $Environment}.
     */
    export type $Environment_ = { sessionHost?: string, servicesHost?: string, name?: string,  } | [sessionHost?: string, servicesHost?: string, name?: string, ];
    export class $HttpAuthenticationService implements $AuthenticationService {
        getProxy(): $Proxy;
        static constantURL(arg0: string): $URL;
        static buildQuery(arg0: $Map_<string, $Object>): string;
        static concatenateURL(arg0: $URL, arg1: string): $URL;
        get proxy(): $Proxy;
    }
    export class $GameProfile {
        getName(): string;
        getProperties(): $PropertyMap;
        getId(): $UUID;
        constructor(arg0: $UUID_, arg1: string);
        get name(): string;
        get properties(): $PropertyMap;
        get id(): $UUID;
    }
    export class $SignatureState extends $Enum<$SignatureState> {
        static values(): $SignatureState[];
        static valueOf(arg0: string): $SignatureState;
        static SIGNED: $SignatureState;
        static UNSIGNED: $SignatureState;
        static INVALID: $SignatureState;
    }
    /**
     * Values that may be interpreted as {@link $SignatureState}.
     */
    export type $SignatureState_ = "unsigned" | "invalid" | "signed";
    export class $GameProfileRepository {
    }
    export interface $GameProfileRepository {
        findProfilesByNames(arg0: string[], arg1: $ProfileLookupCallback): void;
    }
    /**
     * Values that may be interpreted as {@link $GameProfileRepository}.
     */
    export type $GameProfileRepository_ = ((arg0: string[], arg1: $ProfileLookupCallback) => void);
}
