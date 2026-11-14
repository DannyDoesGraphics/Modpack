import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/worldgen/feature/config" {
    export class $CompositeConfig$Type extends $Enum<$CompositeConfig$Type> implements $StringRepresentable {
        shouldContinue(success: boolean): boolean;
        static values(): $CompositeConfig$Type[];
        static valueOf(name: string): $CompositeConfig$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static NEVER_CANCEL: $CompositeConfig$Type;
        static CODEC: $Codec<$CompositeConfig$Type>;
        static CANCEL_ON_FAILURE: $CompositeConfig$Type;
        static CANCEL_ON_SUCCESS: $CompositeConfig$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CompositeConfig$Type}.
     */
    export type $CompositeConfig$Type_ = "never_cancel" | "cancel_on_failure" | "cancel_on_success";
}
