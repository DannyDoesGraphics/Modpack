import { $ForwardingMultimap } from "@package/com/google/common/collect";
import { $PublicKey } from "@package/java/security";
import { $Record } from "@package/java/lang";

declare module "@package/com/mojang/authlib/properties" {
    export class $Property extends $Record {
        signature(): string;
        name(): string;
        value(): string;
        /**
         * @deprecated
         */
        isSignatureValid(arg0: $PublicKey): boolean;
        hasSignature(): boolean;
        constructor(arg0: string, arg1: string);
        constructor(name: string, value: string, signature: string | null);
    }
    /**
     * Values that may be interpreted as {@link $Property}.
     */
    export type $Property_ = { value?: string, signature?: string, name?: string,  } | [value?: string, signature?: string, name?: string, ];
    export class $PropertyMap extends $ForwardingMultimap<string, $Property> {
        constructor();
    }
}
