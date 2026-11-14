import { $IAE2DataProvider } from "@package/appeng/datagen/providers";
import { $Direction } from "@package/net/minecraft/core";
import { $ExistingFileHelper$ResourceType, $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $WallSide, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Map } from "@package/java/util";
import { $BlockModelBuilder, $ModelProvider, $ItemModelBuilder, $BlockStateProvider, $IGeneratedBlockState, $ItemModelProvider as $ItemModelProvider$1 } from "@package/net/neoforged/neoforge/client/model/generators";
import { $PackOutput } from "@package/net/minecraft/data";

declare module "@package/appeng/datagen/providers/models" {
    export class $BlockModelProvider extends $AE2BlockStateProvider {
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $AE2BlockStateProvider extends $BlockStateProvider implements $IAE2DataProvider {
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $PackOutput, arg1: string, arg2: $ExistingFileHelper);
    }
    export class $DecorationModelProvider extends $AE2BlockStateProvider {
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $CableModelProvider extends $AE2BlockStateProvider {
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $PartModelProvider extends $ModelProvider<$BlockModelBuilder> {
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $BlockModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $ItemModelProvider extends $ItemModelProvider$1 implements $IAE2DataProvider {
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $ItemModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: $ExistingFileHelper);
    }
    export class $VariantsBuilder implements $IGeneratedBlockState {
    }
}
