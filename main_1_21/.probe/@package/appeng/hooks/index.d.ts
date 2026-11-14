import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Variant } from "@package/net/minecraft/client/renderer/block/model";
import { $DefaultDispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent$BreakSpeed, $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $InteractionResult, $InteractionResult_, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as ticking from "@package/appeng/hooks/ticking";

declare module "@package/appeng/hooks" {
    export class $BlockToolDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        constructor();
    }
    export class $RenderBlockOutlineHook {
        static install(): void;
        static LINES_BEHIND_BLOCK: $RenderType;
    }
    export class $ColorApplicatorPickColorHook {
        static onPickColor(arg0: $Player, arg1: $BlockHitResult): boolean;
    }
    export class $CompassManager$CachedResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CompassManager$CachedResult}.
     */
    export type $CompassManager$CachedResult_ = { closestMeteoritePos?: $BlockPos_, received?: number,  } | [closestMeteoritePos?: $BlockPos_, received?: number, ];
    export class $WrenchHook {
        static isDisassembling(): boolean;
        static onPlayerUseBlock(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult): $InteractionResult;
        static onPlayerUseBlockEvent(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static get disassembling(): boolean;
    }
    export class $AEToolItem {
    }
    export interface $AEToolItem {
    }
    export class $GuiGraphicsHooks {
        static onRenderGuiItem(arg0: $GuiGraphics, arg1: $LivingEntity, arg2: $Level_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: number, arg7: number): boolean;
    }
    export class $CompassManager {
        postResult(arg0: $ChunkPos, arg1: $BlockPos_): void;
        getClosestMeteorite(arg0: $BlockPos_, arg1: boolean): $BlockPos;
        getClosestMeteorite(arg0: $ChunkPos, arg1: boolean): $BlockPos;
        static INSTANCE: $CompassManager;
    }
    export class $BlockstateDefinitionHook {
        static rotateVariant(arg0: $Variant, arg1: number, arg2: number, arg3: number): $Variant;
    }
    export class $BlockAttackHook {
        static install(): void;
    }
    export class $MatterCannonDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        constructor();
    }
    export class $TinyTNTDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        constructor();
    }
    export class $BuiltInModelHooks {
        static addBuiltInModel(arg0: $ResourceLocation_, arg1: $UnbakedModel): void;
        static getBuiltInModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    export class $IBlockTool {
    }
    export interface $IBlockTool {
        useOn(arg0: $UseOnContext): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $IBlockTool}.
     */
    export type $IBlockTool_ = ((arg0: $UseOnContext) => $InteractionResult_);
    export class $IntrinsicEnchantItem {
    }
    export interface $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
    }
    /**
     * Values that may be interpreted as {@link $IntrinsicEnchantItem}.
     */
    export type $IntrinsicEnchantItem_ = ((arg0: $ItemStack, arg1: $Holder<$Enchantment>) => number);
    export class $SkyStoneBreakSpeed {
        static handleBreakFaster(arg0: $PlayerEvent$BreakSpeed): void;
        static SPEEDUP_FACTOR: number;
    }
    export class $VisualStateSaving {
        static isEnabled(arg0: $Level_): boolean;
        static setEnabled(arg0: boolean): void;
    }
}
