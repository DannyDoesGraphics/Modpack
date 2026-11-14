import { $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Item$Properties, $Item_, $Item, $ItemStack, $Equipable } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $List, $Map } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Font, $GuiGraphics, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";

declare module "@package/com/simibubi/create/content/equipment/goggles" {
    export class $GoggleOverlayRenderer {
        static proxiedOverlayPosition(arg0: $Level_, arg1: $BlockPos_): $BlockPos;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static hoverTicks: number;
        static lastHovered: $BlockPos;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
    export class $GoggleConfigScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $GogglesModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $GogglesItem extends $Item implements $Equipable {
        static addIsWearingPredicate(arg0: $Predicate_<$Player>): void;
        static isWearingGoggles(arg0: $Player): boolean;
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipSound(): $Holder<$SoundEvent>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
}
