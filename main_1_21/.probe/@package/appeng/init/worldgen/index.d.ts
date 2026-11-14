import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $StructureSet_, $StructureType, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $DimensionType_ } from "@package/net/minecraft/world/level/dimension";

declare module "@package/appeng/init/worldgen" {
    export class $InitStructures {
        static initDatagenStructures(arg0: $BootstrapContext<$Structure_>): void;
        static initDatagenStructureSets(arg0: $BootstrapContext<$StructureSet_>): void;
        static register(arg0: $IEventBus): void;
        static STRUCTURE_TYPES: $DeferredRegister<$StructureType<never>>;
        static STRUCTURE_PIECES: $DeferredRegister<$StructurePieceType>;
    }
    export class $InitDimensionTypes {
        static init(arg0: $BootstrapContext<$DimensionType_>): void;
    }
    export class $InitBiomes {
        static init(arg0: $BootstrapContext<$Biome_>): void;
    }
}
