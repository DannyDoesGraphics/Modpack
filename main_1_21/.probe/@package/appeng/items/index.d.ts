import { $Item, $CreativeModeTab$Output_, $CreativeModeTab$ItemDisplayParameters_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
export * as contents from "@package/appeng/items/contents";
export * as tools from "@package/appeng/items/tools";
export * as storage from "@package/appeng/items/storage";
export * as parts from "@package/appeng/items/parts";
export * as misc from "@package/appeng/items/misc";
export * as materials from "@package/appeng/items/materials";

declare module "@package/appeng/items" {
    export class $AEBaseItem extends $Item {
        addToMainCreativeTab(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CreativeModeTab$Output_): void;
        getRegistryName(): $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get registryName(): $ResourceLocation;
    }
}
