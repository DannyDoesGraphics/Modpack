import { $AbstractMonitorPart } from "@package/appeng/parts/reporting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TooltipBuilder, $TooltipContext_ } from "@package/appeng/api/integrations/igtooltip";
import { $List_ } from "@package/java/util";
import { $IPart, $IPartHost } from "@package/appeng/api/parts";
import { $IconProvider_, $BodyProvider, $BodyProvider_, $ServerDataProvider_, $ServerDataProvider, $NameProvider_ } from "@package/appeng/api/integrations/igtooltip/providers";
import { $P2PTunnelPart } from "@package/appeng/parts/p2p";
import { $AnnihilationPlanePart } from "@package/appeng/parts/automation";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $IUsedChannelProvider } from "@package/appeng/parts/networking";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/integration/modules/igtooltip/parts" {
    export class $P2PStateDataProvider implements $BodyProvider<$P2PTunnelPart<any>>, $ServerDataProvider<$P2PTunnelPart<any>> {
        buildTooltip(arg0: $P2PTunnelPart<any>, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $P2PTunnelPart<any>, arg2: $CompoundTag_): void;
        static TAG_P2P_FREQUENCY: string;
        static TAG_P2P_FREQUENCY_NAME: string;
        static TAG_P2P_STATE: string;
        static TAG_P2P_OUTPUTS: string;
        static TAG_P2P_ME_CARRIED_CHANNELS: string;
        constructor();
    }
    export class $StorageMonitorDataProvider implements $BodyProvider<$AbstractMonitorPart> {
        buildTooltip(arg0: $AbstractMonitorPart, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        constructor();
    }
    export class $AnnihilationPlaneDataProvider implements $BodyProvider<$AnnihilationPlanePart>, $ServerDataProvider<$AnnihilationPlanePart> {
        buildTooltip(arg0: $AnnihilationPlanePart, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $AnnihilationPlanePart, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $PartTooltipProviders$Registration<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PartTooltipProviders$Registration}.
     */
    export type $PartTooltipProviders$Registration_<T> = { provider?: any, priority?: number, baseClass?: $Class<never>,  } | [provider?: any, priority?: number, baseClass?: $Class<never>, ];
    export class $PartTooltipProviders {
        static addIcon<T>(arg0: $Class<T>, arg1: $IconProvider_<T>, arg2: number): void;
        static addBody<T>(arg0: $Class<T>, arg1: $BodyProvider_<T>, arg2: number): void;
        static addServerData<T>(arg0: $Class<T>, arg1: $ServerDataProvider_<T>, arg2: number): void;
        static getProviders<T>(arg0: T): $PartTooltipProviders$CachedProviders<T>;
        static getProviders<U>(arg0: $Class<U>): $PartTooltipProviders$CachedProviders<U>;
        static addName<T>(arg0: $Class<T>, arg1: $NameProvider_<T>, arg2: number): void;
    }
    export class $ChannelDataProvider$ChannelError extends $Enum<$ChannelDataProvider$ChannelError> {
    }
    /**
     * Values that may be interpreted as {@link $ChannelDataProvider$ChannelError}.
     */
    export type $ChannelDataProvider$ChannelError_ = "ad_hoc_nested_p2p_tunnel" | "ad_hoc_too_many_channels" | "controller_conflict";
    export class $GridNodeStateProvider implements $BodyProvider<$IPart>, $ServerDataProvider<$IPart> {
        buildTooltip(arg0: $IPart, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $IPart, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $PartHostTooltips {
        static buildTooltip(arg0: $IPartHost, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        static buildTooltip(arg0: $BlockEntity, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        static provideServerData(arg0: $Player, arg1: $BlockEntity, arg2: $CompoundTag_): void;
        static provideServerData(arg0: $Player, arg1: $IPartHost, arg2: $CompoundTag_): void;
        static getName(arg0: $IPartHost, arg1: $TooltipContext_): $Component;
        static getName(arg0: $BlockEntity, arg1: $TooltipContext_): $Component;
        static getIcon(arg0: $BlockEntity, arg1: $TooltipContext_): $ItemStack;
        static getIcon(arg0: $IPartHost, arg1: $TooltipContext_): $ItemStack;
        static getModName(arg0: $IPartHost, arg1: $TooltipContext_): string;
        static getModName(arg0: $BlockEntity, arg1: $TooltipContext_): string;
    }
    export class $ChannelDataProvider implements $BodyProvider<$IUsedChannelProvider>, $ServerDataProvider<$IUsedChannelProvider> {
        buildTooltip(arg0: $IUsedChannelProvider, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
        provideServerData(arg0: $Player, arg1: $IUsedChannelProvider, arg2: $CompoundTag_): void;
        constructor();
    }
    export class $PartTooltipProviders$CachedProviders<U> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PartTooltipProviders$CachedProviders}.
     */
    export type $PartTooltipProviders$CachedProviders_<U> = { iconProviders?: $List_<$IconProvider_<any>>, bodyProviders?: $List_<$BodyProvider_<any>>, nameProviders?: $List_<$NameProvider_<any>>, serverDataProviders?: $List_<$ServerDataProvider_<any>>,  } | [iconProviders?: $List_<$IconProvider_<any>>, bodyProviders?: $List_<$BodyProvider_<any>>, nameProviders?: $List_<$NameProvider_<any>>, serverDataProviders?: $List_<$ServerDataProvider_<any>>, ];
}
