import { $Item$Properties, $Item, $Tier, $ShovelItem, $PickaxeItem, $AxeItem, $HoeItem, $SwordItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $AEBaseItem } from "@package/appeng/items";
import { $Predicate, $Consumer } from "@package/java/util/function";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ItemMenuHost, $IMenuItem } from "@package/appeng/api/implementations/menuobjects";

declare module "@package/appeng/items/tools/quartz" {
    export class $QuartzSpadeItem extends $ShovelItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static FLATTENABLES: $Map<$Block, $BlockState>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
    export class $QuartzWrenchItem extends $AEBaseItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $QuartzCuttingKnifeItem extends $AEBaseItem implements $IMenuItem {
        getMenuHost(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $ItemMenuHost<never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
    export class $QuartzAxeItem extends $AxeItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
    export class $QuartzHoeItem extends $HoeItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static TILLABLES: $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
    export class $QuartzPickaxeItem extends $PickaxeItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
    export class $QuartzToolType extends $Enum<$QuartzToolType> {
        getToolTier(): $Tier;
        getName(): string;
        static values(): $QuartzToolType[];
        static valueOf(arg0: string): $QuartzToolType;
        static CERTUS: $QuartzToolType;
        static NETHER: $QuartzToolType;
        get toolTier(): $Tier;
    }
    /**
     * Values that may be interpreted as {@link $QuartzToolType}.
     */
    export type $QuartzToolType_ = "certus" | "nether";
    export class $QuartzSwordItem extends $SwordItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $QuartzToolType_);
    }
}
