import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/foundation/block/connected" {
    export class $GlassPaneCTBehaviour extends $SimpleCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $CTModel$CTData {
    }
    export class $CTSpriteShifter {
        static getCT(arg0: $CTType, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $CTSpriteShiftEntry;
        constructor();
    }
    export class $ConnectedTextureBehaviour {
        connectsTo(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockAndTintGetter, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $Direction_, arg6: $Direction_, arg7: $Direction_): boolean;
        connectsTo(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockAndTintGetter, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $Direction_): boolean;
        getCTBlockState(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $Direction_, arg3: $BlockPos_, arg4: $BlockPos_): $BlockState;
        buildContextForOccludedDirections(): boolean;
        buildContext(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $ConnectedTextureBehaviour$ContextRequirement): $ConnectedTextureBehaviour$CTContext;
        getShift(arg0: $BlockState_, arg1: $RandomSource, arg2: $Direction_, arg3: $TextureAtlasSprite): $CTSpriteShiftEntry;
        getShift(arg0: $BlockState_, arg1: $Direction_, arg2: $TextureAtlasSprite): $CTSpriteShiftEntry;
        getDataType(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $CTType;
        constructor();
    }
    export class $CTSpriteShiftEntry extends $SpriteShiftEntry {
        getTargetU(arg0: number, arg1: number): number;
        getTargetV(arg0: number, arg1: number): number;
        getType(): $CTType;
        constructor(arg0: $CTType);
        get type(): $CTType;
    }
    export class $CTTypeRegistry {
        static get(arg0: $ResourceLocation_): $CTType;
        static register(arg0: $CTType): void;
        constructor();
    }
    export class $CTType {
    }
    export interface $CTType {
        getSheetSize(): number;
        getContextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        getTextureIndex(arg0: $ConnectedTextureBehaviour$CTContext): number;
        getId(): $ResourceLocation;
        get sheetSize(): number;
        get contextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        get id(): $ResourceLocation;
    }
    export class $AllCTTypes extends $Enum<$AllCTTypes> implements $CTType {
        getSheetSize(): number;
        getContextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        static values(): $AllCTTypes[];
        static valueOf(arg0: string): $AllCTTypes;
        getId(): $ResourceLocation;
        static ROOF: $AllCTTypes;
        static RECTANGLE: $AllCTTypes;
        static VERTICAL: $AllCTTypes;
        static ROOF_STAIR: $AllCTTypes;
        static CROSS: $AllCTTypes;
        static HORIZONTAL: $AllCTTypes;
        static HORIZONTAL_KRYPPERS: $AllCTTypes;
        static OMNIDIRECTIONAL: $AllCTTypes;
        get sheetSize(): number;
        get contextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AllCTTypes}.
     */
    export type $AllCTTypes_ = "horizontal" | "horizontal_kryppers" | "vertical" | "omnidirectional" | "roof" | "roof_stair" | "cross" | "rectangle";
    export class $SimpleCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $CTModel extends $BakedModelWrapperWithData {
        constructor(arg0: $BakedModel, arg1: $ConnectedTextureBehaviour);
    }
    export class $ConnectedTextureBehaviour$ContextRequirement$Builder {
        vertical(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomLeft(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomRight(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        topLeft(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        topRight(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        corners(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        axisAligned(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        left(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        right(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        build(): $ConnectedTextureBehaviour$ContextRequirement;
        all(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        up(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        down(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        horizontal(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        constructor();
    }
    export class $RotatedPillarCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry);
    }
    export class $ConnectedTextureBehaviour$Base extends $ConnectedTextureBehaviour {
        constructor();
    }
    export class $ConnectedTextureBehaviour$CTContext {
        bottomLeft: boolean;
        left: boolean;
        bottomRight: boolean;
        topLeft: boolean;
        topRight: boolean;
        up: boolean;
        right: boolean;
        static EMPTY: $ConnectedTextureBehaviour$CTContext;
        down: boolean;
        constructor();
    }
    export class $HorizontalCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor(arg0: $CTSpriteShiftEntry);
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry);
    }
    export class $ConnectedTextureBehaviour$ContextRequirement {
        static builder(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomLeft: boolean;
        left: boolean;
        bottomRight: boolean;
        topLeft: boolean;
        topRight: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean);
    }
}
