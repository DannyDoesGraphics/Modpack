import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ConfigureZapperPacket, $ZapperScreen, $ZapperItem, $ZapperItemRenderer, $PlacementPatterns_ } from "@package/com/simibubi/create/content/equipment/zapper";
import { $List, $Map, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/zapper/terrainzapper" {
    export class $WorldshaperItem extends $ZapperItem {
        static configureSettings(arg0: $ItemStack_, arg1: $PlacementPatterns_, arg2: $TerrainBrushes_, arg3: number, arg4: number, arg5: number, arg6: $TerrainTools_, arg7: $PlacementOptions_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TerrainBrushes extends $Enum<$TerrainBrushes> implements $StringRepresentable {
        get(): $Brush;
        static values(): $TerrainBrushes[];
        static valueOf(arg0: string): $TerrainBrushes;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static Sphere: $TerrainBrushes;
        static Cylinder: $TerrainBrushes;
        static CODEC: $Codec<$TerrainBrushes>;
        static Cuboid: $TerrainBrushes;
        static Cluster: $TerrainBrushes;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TerrainBrushes>;
        static Surface: $TerrainBrushes;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TerrainBrushes}.
     */
    export type $TerrainBrushes_ = "cuboid" | "sphere" | "cylinder" | "surface" | "cluster";
    export class $CuboidBrush extends $ShapedBrush {
        static MAX_SIZE: number;
        constructor();
    }
    export class $Brush {
        addToGlobalPositions(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_, arg3: $Collection_<$BlockPos_>, arg4: $TerrainTools_): $Collection<$BlockPos>;
        redirectTool(arg0: $TerrainTools_): $TerrainTools;
        hasConnectivityOptions(): boolean;
        getSupportedTools(): $TerrainTools[];
        hasPlacementOptions(): boolean;
        get(arg0: number): number;
        set(arg0: number, arg1: number, arg2: number): void;
        getOffset(arg0: $Vec3_, arg1: $Direction_, arg2: $PlacementOptions_): $BlockPos;
        constructor(arg0: number);
        get supportedTools(): $TerrainTools[];
    }
    export class $TerrainTools extends $Enum<$TerrainTools> implements $StringRepresentable {
        requiresSelectedBlock(): boolean;
        static isReplaceable(arg0: $BlockState_): boolean;
        run(arg0: $Level_, arg1: $List_<$BlockPos_>, arg2: $Direction_, arg3: $BlockState_, arg4: $CompoundTag_, arg5: $Player): void;
        static values(): $TerrainTools[];
        static valueOf(arg0: string): $TerrainTools;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static Replace: $TerrainTools;
        static Fill: $TerrainTools;
        static CODEC: $Codec<$TerrainTools>;
        translationKey: string;
        static Flatten: $TerrainTools;
        icon: $AllIcons;
        static Overlay: $TerrainTools;
        static Place: $TerrainTools;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TerrainTools>;
        static Clear: $TerrainTools;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TerrainTools}.
     */
    export type $TerrainTools_ = "fill" | "place" | "replace" | "clear" | "overlay" | "flatten";
    export class $SphereBrush extends $ShapedBrush {
        static MAX_RADIUS: number;
        constructor();
    }
    export class $WorldshaperRenderHandler {
        static createBrushOutline(arg0: $LocalPlayer, arg1: $ItemStack_): void;
        static tick(): void;
        constructor();
    }
    export class $PlacementOptions extends $Enum<$PlacementOptions> implements $StringRepresentable {
        static values(): $PlacementOptions[];
        static valueOf(arg0: string): $PlacementOptions;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static Attached: $PlacementOptions;
        static CODEC: $Codec<$PlacementOptions>;
        translationKey: string;
        static Merged: $PlacementOptions;
        icon: $AllIcons;
        static Inserted: $PlacementOptions;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PlacementOptions>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlacementOptions}.
     */
    export type $PlacementOptions_ = "merged" | "attached" | "inserted";
    export class $WorldshaperScreen extends $ZapperScreen {
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
        constructor(arg0: $ItemStack_, arg1: $InteractionHand_);
    }
    export class $ShapedBrush extends $Brush {
        constructor(arg0: number);
    }
    export class $DynamicBrush extends $Brush {
        static MAX_RADIUS: number;
        constructor(arg0: boolean);
    }
    export class $ConfigureWorldshaperPacket extends $ConfigureZapperPacket {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureWorldshaperPacket>;
        constructor(arg0: $InteractionHand_, arg1: $PlacementPatterns_, arg2: $TerrainBrushes_, arg3: number, arg4: number, arg5: number, arg6: $TerrainTools_, arg7: $PlacementOptions_);
    }
    export class $FlattenTool {
        static apply(arg0: $Level_, arg1: $List_<$BlockPos_>, arg2: $Direction_): void;
        constructor();
    }
    export class $WorldshaperItemRenderer extends $ZapperItemRenderer {
        constructor();
    }
    export class $CylinderBrush extends $ShapedBrush {
        getIncludedPositions(): $List<$BlockPos>;
        static MAX_RADIUS: number;
        static MAX_HEIGHT: number;
        constructor();
        get includedPositions(): $List<$BlockPos>;
    }
}
