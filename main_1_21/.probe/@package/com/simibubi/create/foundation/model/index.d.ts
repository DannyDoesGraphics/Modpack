import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $CustomItemModels } from "@package/com/simibubi/create/foundation/item/render";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $List, $List_, $Map_ } from "@package/java/util";
import { $CustomBlockModels } from "@package/com/simibubi/create/foundation/block/render";
import { $ModelEvent$ModifyBakingResult } from "@package/net/neoforged/neoforge/client/event";
import { $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/model" {
    export class $ModelSwapper {
        getCustomBlockModels(): $CustomBlockModels;
        getCustomItemModels(): $CustomItemModels;
        static swapModels<T extends $BakedModel>(arg0: $Map_<$ModelResourceLocation_, $BakedModel>, arg1: $ModelResourceLocation_, arg2: $Function_<$BakedModel, T>): void;
        static swapModels<T extends $BakedModel>(arg0: $Map_<$ModelResourceLocation_, $BakedModel>, arg1: $List_<$ModelResourceLocation_>, arg2: $Function_<$BakedModel, T>): void;
        onModelBake(arg0: $ModelEvent$ModifyBakingResult): void;
        static getItemModelLocation(arg0: $Item_): $ModelResourceLocation;
        static getAllBlockStateModelLocations(arg0: $Block_): $List<$ModelResourceLocation>;
        registerListeners(arg0: $IEventBus): void;
        constructor();
        get customBlockModels(): $CustomBlockModels;
        get customItemModels(): $CustomItemModels;
    }
    export class $BakedModelHelper {
        static swapSprites(arg0: $List_<$BakedQuad>, arg1: $UnaryOperator_<$TextureAtlasSprite>): $List<$BakedQuad>;
        static cropAndMove(arg0: number[], arg1: $TextureAtlasSprite, arg2: $AABB_, arg3: $Vec3_): number[];
        static generateModel(arg0: $BakedModel, arg1: $UnaryOperator_<$TextureAtlasSprite>): $BakedModel;
        constructor();
    }
    export class $BakedModelWrapperWithData extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $BakedQuadHelper {
        static getXYZ(arg0: number[], arg1: number): $Vec3;
        static setXYZ(arg0: number[], arg1: number, arg2: $Vec3_): void;
        static setU(arg0: number[], arg1: number, arg2: number): void;
        static setV(arg0: number[], arg1: number, arg2: number): void;
        static cloneWithCustomGeometry(arg0: $BakedQuad, arg1: number[]): $BakedQuad;
        static getNormalXYZ(arg0: number[], arg1: number): $Vec3;
        static setNormalXYZ(arg0: number[], arg1: number, arg2: $Vec3_): void;
        static clone(arg0: $BakedQuad): $BakedQuad;
        static getU(arg0: number[], arg1: number): number;
        static getV(arg0: number[], arg1: number): number;
        static NORMAL_OFFSET: number;
        static LIGHT_OFFSET: number;
        static U_OFFSET: number;
        static V_OFFSET: number;
        static FORMAT: $VertexFormat;
        static VERTEX_STRIDE: number;
        static COLOR_OFFSET: number;
        static X_OFFSET: number;
        static Y_OFFSET: number;
        static Z_OFFSET: number;
    }
}
