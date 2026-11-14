import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $HumanoidModel$ArmPose } from "@package/net/minecraft/client/model";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Function_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $AbstractClientPlayer, $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomArmPoseItem } from "@package/com/simibubi/create/foundation/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AllGuiTextures_, $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as terrainzapper from "@package/com/simibubi/create/content/equipment/zapper/terrainzapper";

declare module "@package/com/simibubi/create/content/equipment/zapper" {
    export class $ZapperRenderHandler extends $ShootableGadgetRenderHandler {
        addBeam(arg0: $ZapperRenderHandler$LaserBeam): void;
        cachedBeams: $List<$ZapperRenderHandler$LaserBeam>;
        constructor();
    }
    export class $ZapperBeamPacket extends $ShootGadgetPacket {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ZapperBeamPacket>;
        constructor(arg0: $Vec3_, arg1: $InteractionHand_, arg2: boolean, arg3: $Vec3_);
    }
    export class $ConfigureZapperPacket implements $ServerboundPacketPayload {
        configureZapper(arg0: $ItemStack_): void;
        handle(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $InteractionHand_, arg1: $PlacementPatterns_);
    }
    export class $ZapperLog {
        record(arg0: $Level_, arg1: $List_<$BlockPos_>): void;
        redo(): void;
        undo(): void;
        constructor();
    }
    export class $ZapperScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $AllGuiTextures_, arg1: $ItemStack_, arg2: $InteractionHand_);
    }
    export class $ZapperItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
    export class $ShootableGadgetItemMethods {
        static sendPackets(arg0: $Player, arg1: $Function_<boolean, $ShootGadgetPacket>): void;
        static shouldSwap(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: $Predicate_<$ItemStack>): boolean;
        static applyCooldown(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: $Predicate_<$ItemStack>, arg4: number): void;
        static getGunBarrelVec(arg0: $Player, arg1: boolean, arg2: $Vec3_): $Vec3;
        constructor();
    }
    export class $ZapperRenderHandler$LaserBeam {
        constructor(arg0: $Vec3_, arg1: $Vec3_);
    }
    export class $ShootGadgetPacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $Vec3_, arg1: $InteractionHand_, arg2: boolean);
    }
    export class $ZapperInteractionHandler {
        static trySelect(arg0: $ItemStack_, arg1: $Player): boolean;
        static leftClickingBlocksWithTheZapperSelectsTheBlock(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static getRange(arg0: $ItemStack_): number;
        constructor();
    }
    export class $PlacementPatterns extends $Enum<$PlacementPatterns> implements $StringRepresentable {
        static values(): $PlacementPatterns[];
        static valueOf(arg0: string): $PlacementPatterns;
        static applyPattern(arg0: $List_<$BlockPos_>, arg1: $ItemStack_, arg2: $RandomSource): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$PlacementPatterns>;
        translationKey: string;
        static Chance50: $PlacementPatterns;
        icon: $AllIcons;
        static Chance75: $PlacementPatterns;
        static InverseCheckered: $PlacementPatterns;
        static Solid: $PlacementPatterns;
        static Chance25: $PlacementPatterns;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PlacementPatterns>;
        static Checkered: $PlacementPatterns;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlacementPatterns}.
     */
    export type $PlacementPatterns_ = "solid" | "checkered" | "inversecheckered" | "chance25" | "chance50" | "chance75";
    export class $ZapperItem extends $Item implements $CustomArmPoseItem {
        validateUsage(arg0: $ItemStack_): $Component;
        isZapper(arg0: $ItemStack_): boolean;
        getArmPose(arg0: $ItemStack_, arg1: $AbstractClientPlayer, arg2: $InteractionHand_): $HumanoidModel$ArmPose;
        static setBlockEntityData(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CompoundTag_, arg4: $Player): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ShootableGadgetRenderHandler {
        shoot(arg0: $InteractionHand_, arg1: $Vec3_): void;
        getAnimation(arg0: boolean, arg1: number): number;
        dontAnimateItem(arg0: $InteractionHand_): void;
        tick(): void;
        registerListeners(arg0: $IEventBus): void;
        constructor();
    }
}
