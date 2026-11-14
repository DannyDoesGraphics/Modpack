import { $AEKeyRenderHandler } from "@package/appeng/api/client";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ParticleType_ } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";
import { $AEFluidKey, $AEItemKey } from "@package/appeng/api/stacks";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $ModelEvent$RegisterAdditional, $RegisterColorHandlersEvent$Item, $RegisterMenuScreensEvent } from "@package/net/neoforged/neoforge/client/event";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $AEBaseMenu } from "@package/appeng/menu";
import { $AEBaseScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/init/client" {
    export class $InitStackRenderHandlers$ItemKeyRenderHandler implements $AEKeyRenderHandler<$AEItemKey> {
        getTooltip(arg0: $AEItemKey): $List<$Component>;
    }
    export class $InitItemModelsProperties {
        static init(): void;
        static COLORED_PREDICATE_ID: $ResourceLocation;
        static ENERGY_FILL_LEVEL_ID: $ResourceLocation;
    }
    export class $InitParticleTypes {
        static init(arg0: $Registry<$ParticleType_<never>>): void;
    }
    export class $InitScreens$StyledScreenFactory<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $InitScreens$StyledScreenFactory<T extends $AbstractContainerMenu, U extends $Screen> {
        create(arg0: T, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle): U;
    }
    /**
     * Values that may be interpreted as {@link $InitScreens$StyledScreenFactory}.
     */
    export type $InitScreens$StyledScreenFactory_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component, arg3: $ScreenStyle) => U);
    export class $InitBuiltInModels {
        static init(): void;
    }
    export class $InitItemColors {
        static init(arg0: $RegisterColorHandlersEvent$Item): void;
    }
    export class $InitStackRenderHandlers$FluidKeyRenderHandler implements $AEKeyRenderHandler<$AEFluidKey> {
        getTooltip(arg0: $AEFluidKey): $List<$Component>;
    }
    export class $InitBlockColors {
        static init(arg0: $BlockColors): void;
    }
    export class $InitStackRenderHandlers {
        static init(): void;
    }
    export class $InitItemColors$ItemColorRegistrar {
    }
    export interface $InitItemColors$ItemColorRegistrar {
    }
    /**
     * Values that may be interpreted as {@link $InitItemColors$ItemColorRegistrar}.
     */
    export type $InitItemColors$ItemColorRegistrar_ = (() => void);
    export class $InitScreens {
        static register<M extends $AEBaseMenu, U extends $AEBaseScreen<M>>(arg0: $RegisterMenuScreensEvent, arg1: $MenuType_<M>, arg2: $InitScreens$StyledScreenFactory_<M, U>, arg3: string): void;
        static init(arg0: $RegisterMenuScreensEvent): void;
    }
    export class $InitAdditionalModels {
        static init(arg0: $ModelEvent$RegisterAdditional): void;
        constructor();
    }
    export class $InitEntityLayerDefinitions {
        static init(arg0: $BiConsumer_<$ModelLayerLocation, $LayerDefinition>): void;
    }
}
