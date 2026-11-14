import { $ModNameProvider_, $IconProvider_, $NameProvider_, $BodyProvider_, $ServerDataProvider_, $ServerDataProvider } from "@package/appeng/api/integrations/igtooltip/providers";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record, $Class } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as providers from "@package/appeng/api/integrations/igtooltip/providers";

declare module "@package/appeng/api/integrations/igtooltip" {
    export class $BaseClassRegistration {
    }
    export interface $BaseClassRegistration {
        addBaseBlockEntity(arg0: $Class<$BlockEntity>, arg1: $Class<$Block_>): void;
        addPartHost<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>): void;
    }
    export class $CommonRegistration {
    }
    export interface $CommonRegistration {
        addBlockEntityData<T extends $BlockEntity>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $ServerDataProvider_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CommonRegistration}.
     */
    export type $CommonRegistration_ = ((arg0: $ResourceLocation, arg1: $Class<any>, arg2: $ServerDataProvider<any>) => void);
    export class $PartTooltips {
        static addIcon<T>(arg0: $Class<T>, arg1: $IconProvider_<T>, arg2: number): void;
        static addIcon<T>(arg0: $Class<T>, arg1: $IconProvider_<T>): void;
        static addBody<T>(arg0: $Class<T>, arg1: $BodyProvider_<T>): void;
        static addBody<T>(arg0: $Class<T>, arg1: $BodyProvider_<T>, arg2: number): void;
        static addServerData<T>(arg0: $Class<T>, arg1: $ServerDataProvider_<T>, arg2: number): void;
        static addServerData<T>(arg0: $Class<T>, arg1: $ServerDataProvider_<T>): void;
        static addName<T>(arg0: $Class<T>, arg1: $NameProvider_<T>): void;
        static addName<T>(arg0: $Class<T>, arg1: $NameProvider_<T>, arg2: number): void;
    }
    export class $TooltipBuilder {
    }
    export interface $TooltipBuilder {
        addLine(arg0: $Component_): void;
        addLine(arg0: $Component_, arg1: $ResourceLocation_): void;
    }
    export class $TooltipProvider {
        static DEFAULT_PRIORITY: number;
        static DEBUG_PRIORITY: number;
    }
    export interface $TooltipProvider {
        registerBlockEntityBaseClasses(arg0: $BaseClassRegistration): void;
        registerCommon(arg0: $CommonRegistration_): void;
        registerClient(arg0: $ClientRegistration): void;
    }
    export class $TooltipContext extends $Record {
        serverData(): $CompoundTag;
        hitLocation(): $Vec3;
        player(): $Player;
        registries(): $HolderLookup$Provider;
        constructor(serverData: $CompoundTag_, hitLocation: $Vec3_, player: $Player);
    }
    /**
     * Values that may be interpreted as {@link $TooltipContext}.
     */
    export type $TooltipContext_ = { serverData?: $CompoundTag_, player?: $Player, hitLocation?: $Vec3_,  } | [serverData?: $CompoundTag_, player?: $Player, hitLocation?: $Vec3_, ];
    export class $ClientRegistration {
    }
    export interface $ClientRegistration {
        addBlockEntityIcon<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $IconProvider_<T>): void;
        addBlockEntityIcon<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $IconProvider_<T>, arg4: number): void;
        addBlockEntityName<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $NameProvider_<T>, arg4: number): void;
        addBlockEntityName<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $NameProvider_<T>): void;
        addBlockEntityModName<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $ModNameProvider_<T>): void;
        addBlockEntityModName<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $ModNameProvider_<T>, arg4: number): void;
        addBlockEntityBody<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $BodyProvider_<T>, arg4: number): void;
        addBlockEntityBody<T extends $BlockEntity>(arg0: $Class<T>, arg1: $Class<$Block_>, arg2: $ResourceLocation_, arg3: $BodyProvider_<T>): void;
    }
}
