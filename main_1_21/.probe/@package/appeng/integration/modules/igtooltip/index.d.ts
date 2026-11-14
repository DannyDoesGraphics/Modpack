import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $AEBasePart } from "@package/appeng/parts";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $TooltipBuilder, $ClientRegistration, $TooltipProvider, $BaseClassRegistration, $TooltipContext_, $CommonRegistration_ } from "@package/appeng/api/integrations/igtooltip";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $ServiceLoader, $List, $Set } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as parts from "@package/appeng/integration/modules/igtooltip/parts";
export * as blocks from "@package/appeng/integration/modules/igtooltip/blocks";

declare module "@package/appeng/integration/modules/igtooltip" {
    export class $DebugProvider {
        static provideBlockEntityBody(arg0: $BlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        static provideBlockEntityData(arg0: $Player, arg1: $BlockEntity, arg2: $CompoundTag_): void;
        static providePartBody(arg0: $AEBasePart, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        static providePartData(arg0: $Player, arg1: $AEBasePart, arg2: $CompoundTag_): void;
    }
    export class $BaseClassRegistrationImpl$BaseClass extends $Record {
        blockEntity(): $Class<$BlockEntity>;
        isSuperclassOf(arg0: $BaseClassRegistrationImpl$BaseClass_): boolean;
        block(): $Class<$Block>;
        constructor(blockEntity: $Class<$BlockEntity>, block: $Class<$Block_>);
    }
    /**
     * Values that may be interpreted as {@link $BaseClassRegistrationImpl$BaseClass}.
     */
    export type $BaseClassRegistrationImpl$BaseClass_ = { blockEntity?: $Class<$BlockEntity>, block?: $Class<$Block_>,  } | [blockEntity?: $Class<$BlockEntity>, block?: $Class<$Block_>, ];
    export class $TooltipIds {
        static PART_TOOLTIP: $ResourceLocation;
        static PATTERN_PROVIDER: $ResourceLocation;
        static CRYSTAL_RESONANCE_GENERATOR: $ResourceLocation;
        static PART_NAME: $ResourceLocation;
        static CHARGER: $ResourceLocation;
        static PART_ICON: $ResourceLocation;
        static PART_MOD_NAME: $ResourceLocation;
        static GRID_NODE_STATE: $ResourceLocation;
        static CRAFTING_MONITOR: $ResourceLocation;
        static DEBUG: $ResourceLocation;
        static POWER_STORAGE: $ResourceLocation;
    }
    export class $BaseClassRegistrationImpl implements $BaseClassRegistration {
        addBaseBlockEntity(arg0: $Class<$BlockEntity>, arg1: $Class<$Block_>): void;
        addPartHost<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>): void;
        getBaseClasses(): $List<$BaseClassRegistrationImpl$BaseClass>;
        getPartHostClasses(): $Set<$BaseClassRegistrationImpl$BaseClass>;
        constructor();
        get baseClasses(): $List<$BaseClassRegistrationImpl$BaseClass>;
        get partHostClasses(): $Set<$BaseClassRegistrationImpl$BaseClass>;
    }
    export class $TooltipProviders implements $TooltipProvider {
        registerBlockEntityBaseClasses(arg0: $BaseClassRegistration): void;
        static loadClient(arg0: $ClientRegistration): void;
        registerCommon(arg0: $CommonRegistration_): void;
        registerClient(arg0: $ClientRegistration): void;
        static loadCommon(arg0: $CommonRegistration_): void;
        static LOADER: $ServiceLoader<$TooltipProvider>;
        constructor();
    }
    export class $GridNodeState extends $Enum<$GridNodeState> {
        textComponent(): $MutableComponent;
        static values(): $GridNodeState[];
        static valueOf(arg0: string): $GridNodeState;
        static fromNode(arg0: $IGridNode): $GridNodeState;
        static NETWORK_BOOTING: $GridNodeState;
        static MISSING_CHANNEL: $GridNodeState;
        static OFFLINE: $GridNodeState;
        static ONLINE: $GridNodeState;
    }
    /**
     * Values that may be interpreted as {@link $GridNodeState}.
     */
    export type $GridNodeState_ = "offline" | "network_booting" | "missing_channel" | "online";
}
