import { $Supplier_ } from "@package/java/util/function";
import { $Proxy } from "@package/java/net";
import { $HttpAuthenticationService, $GameProfile, $Environment_ } from "@package/com/mojang/authlib";
import { $Signature } from "@package/java/security";
import { $Enum, $Record } from "@package/java/lang";
import { $Set_, $Collection_, $Collection, $Set } from "@package/java/util";
import { $Property_ } from "@package/com/mojang/authlib/properties";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
export * as request from "@package/com/mojang/authlib/yggdrasil/request";
export * as response from "@package/com/mojang/authlib/yggdrasil/response";

declare module "@package/com/mojang/authlib/yggdrasil" {
    export class $ServicesKeySet {
        static lazy(arg0: $Supplier_<$ServicesKeySet>): $ServicesKeySet;
        static EMPTY: $ServicesKeySet;
    }
    export interface $ServicesKeySet {
        keys(arg0: $ServicesKeyType_): $Collection<$ServicesKeyInfo>;
    }
    /**
     * Values that may be interpreted as {@link $ServicesKeySet}.
     */
    export type $ServicesKeySet_ = ((arg0: $ServicesKeyType) => $Collection_<$ServicesKeyInfo>);
    export class $ProfileActionType extends $Enum<$ProfileActionType> {
        static values(): $ProfileActionType[];
        static valueOf(arg0: string): $ProfileActionType;
        static USING_BANNED_SKIN: $ProfileActionType;
        static FORCED_NAME_CHANGE: $ProfileActionType;
    }
    /**
     * Values that may be interpreted as {@link $ProfileActionType}.
     */
    export type $ProfileActionType_ = "forced_name_change" | "using_banned_skin";
    export class $ServicesKeyInfo {
    }
    export interface $ServicesKeyInfo {
        validateProperty(arg0: $Property_): boolean;
        signature(): $Signature;
        keyBitCount(): number;
        signatureBitCount(): number;
    }
    export class $ProfileResult extends $Record {
        profile(): $GameProfile;
        actions(): $Set<$ProfileActionType>;
        constructor(arg0: $GameProfile);
        constructor(profile: $GameProfile, actions: $Set_<$ProfileActionType_>);
    }
    /**
     * Values that may be interpreted as {@link $ProfileResult}.
     */
    export type $ProfileResult_ = { actions?: $Set_<$ProfileActionType_>, profile?: $GameProfile,  } | [actions?: $Set_<$ProfileActionType_>, profile?: $GameProfile, ];
    export class $ServicesKeyType extends $Enum<$ServicesKeyType> {
        static values(): $ServicesKeyType[];
        static valueOf(arg0: string): $ServicesKeyType;
        static PROFILE_KEY: $ServicesKeyType;
        static PROFILE_PROPERTY: $ServicesKeyType;
    }
    /**
     * Values that may be interpreted as {@link $ServicesKeyType}.
     */
    export type $ServicesKeyType_ = "profile_property" | "profile_key";
    export class $YggdrasilAuthenticationService extends $HttpAuthenticationService {
        createUserApiService(arg0: string): $UserApiService;
        getServicesKeySet(): $ServicesKeySet;
        constructor(arg0: $Proxy);
        constructor(arg0: $Proxy, arg1: $Environment_);
        get servicesKeySet(): $ServicesKeySet;
    }
}
