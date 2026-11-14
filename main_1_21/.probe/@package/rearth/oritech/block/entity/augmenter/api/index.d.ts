import { $Holder_, $Holder, $GlobalPos } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Enum } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $Attachment } from "@package/rearth/oritech/api/attachment";

declare module "@package/rearth/oritech/block/entity/augmenter/api" {
    export class $ModifierAugment extends $Augment {
        static ACTIVE_AUGMENTS_DATA: $Attachment<$Map<$ResourceLocation, $Augment$AugmentState>>;
        toggleable: boolean;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: number, arg4: boolean);
    }
    export class $CustomAugmentsCollection {
        static getById(arg0: $ResourceLocation_): $Augment;
        static flight: $Augment;
        static PORTAL_TARGET_TYPE: $Attachment<$GlobalPos>;
        static feeder: $Augment;
        static CUSTOM_AUGMENTS: $Map<$ResourceLocation, $Augment>;
        static portal: $Augment;
        static magnet: $Augment;
        static oreFinder: $Augment;
        constructor();
    }
    export class $Augment$AugmentState extends $Enum<$Augment$AugmentState> {
        static values(): $Augment$AugmentState[];
        static valueOf(arg0: string): $Augment$AugmentState;
        static DISABLED: $Augment$AugmentState;
        static NOT_INSTALLED: $Augment$AugmentState;
        static CODEC: $Codec<$Augment$AugmentState>;
        static ENABLED: $Augment$AugmentState;
    }
    /**
     * Values that may be interpreted as {@link $Augment$AugmentState}.
     */
    export type $Augment$AugmentState_ = "enabled" | "disabled" | "not_installed";
    export class $Augment {
        toggle(arg0: $Player): void;
        static registerAttachmentTypes(): void;
        installToPlayer(arg0: $Player): void;
        removeFromPlayer(arg0: $Player): void;
        refreshInterval(): number;
        refreshServer(arg0: $Player): void;
        refreshClient(arg0: $Player): void;
        isEnabled(arg0: $Player): boolean;
        isEnabled(arg0: $Map_<$ResourceLocation_, $Augment$AugmentState_>): boolean;
        activate(arg0: $Player): void;
        deactivate(arg0: $Player): void;
        isInstalled(arg0: $Player): boolean;
        static ACTIVE_AUGMENTS_DATA: $Attachment<$Map<$ResourceLocation, $Augment$AugmentState>>;
        toggleable: boolean;
        id: $ResourceLocation;
    }
    export class $EffectAugment extends $Augment {
        static ACTIVE_AUGMENTS_DATA: $Attachment<$Map<$ResourceLocation, $Augment$AugmentState>>;
        toggleable: boolean;
        amplifier: number;
        id: $ResourceLocation;
        effectType: $Holder<$MobEffect>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: $Holder_<$MobEffect>, arg3: number);
    }
}
