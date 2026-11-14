import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $ItemStack, $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $AEKeyType, $AEKeyType_, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $AEBaseItem } from "@package/appeng/items";

declare module "@package/appeng/items/misc" {
    export class $WrappedGenericStack extends $AEBaseItem {
        unwrapWhat(arg0: $ItemStack_): $AEKey;
        unwrapAmount(arg0: $ItemStack_): number;
        static wrap(arg0: $AEKey, arg1: number): $ItemStack;
        static wrap(arg0: $GenericStack_): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PaintBallItem extends $AEBaseItem {
        isLumen(): boolean;
        getColor(): $AEColor;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $AEColor_, arg2: boolean);
        get lumen(): boolean;
        get color(): $AEColor;
    }
    export class $MeteoriteCompassItem extends $AEBaseItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $MissingContentItem$BrokenStackInfo extends $Record {
        displayName(): $Component;
        keyType(): $AEKeyType;
        amount(): number;
        constructor(displayName: $Component_, keyType: $AEKeyType_, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $MissingContentItem$BrokenStackInfo}.
     */
    export type $MissingContentItem$BrokenStackInfo_ = { keyType?: $AEKeyType_, displayName?: $Component_, amount?: number,  } | [keyType?: $AEKeyType_, displayName?: $Component_, amount?: number, ];
    export class $MissingContentItem extends $Item {
        getBrokenStackInfo(arg0: $ItemStack_): $MissingContentItem$BrokenStackInfo;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
