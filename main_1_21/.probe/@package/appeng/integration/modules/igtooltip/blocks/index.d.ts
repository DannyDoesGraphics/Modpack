import { $BodyProvider, $ServerDataProvider } from "@package/appeng/api/integrations/igtooltip/providers";
import { $PatternProviderLogicHost } from "@package/appeng/helpers/patternprovider";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ChargerBlockEntity } from "@package/appeng/blockentity/misc";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TooltipContext_, $TooltipBuilder } from "@package/appeng/api/integrations/igtooltip";
import { $CrystalResonanceGeneratorBlockEntity } from "@package/appeng/blockentity/networking";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $CraftingMonitorBlockEntity } from "@package/appeng/blockentity/crafting";

declare module "@package/appeng/integration/modules/igtooltip/blocks" {
    export class $ChargerDataProvider implements $BodyProvider<$ChargerBlockEntity> {
        buildTooltip(arg0: $ChargerBlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        constructor();
    }
    export class $PowerStorageDataProvider implements $BodyProvider<$BlockEntity>, $ServerDataProvider<$BlockEntity> {
        buildTooltip(arg0: $BlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $BlockEntity, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $GridNodeStateDataProvider implements $BodyProvider<$BlockEntity>, $ServerDataProvider<$BlockEntity> {
        buildTooltip(arg0: $BlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $BlockEntity, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $CrystalResonanceGeneratorProvider implements $BodyProvider<$CrystalResonanceGeneratorBlockEntity> {
        buildTooltip(arg0: $CrystalResonanceGeneratorBlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        constructor();
    }
    export class $PatternProviderDataProvider implements $BodyProvider<$PatternProviderLogicHost>, $ServerDataProvider<$PatternProviderLogicHost> {
        buildTooltip(arg0: $PatternProviderLogicHost, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $PatternProviderLogicHost, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $CraftingMonitorDataProvider implements $BodyProvider<$CraftingMonitorBlockEntity> {
        buildTooltip(arg0: $CraftingMonitorBlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        constructor();
    }
}
