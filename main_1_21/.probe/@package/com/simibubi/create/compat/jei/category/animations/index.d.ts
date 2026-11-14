import { $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";
import { $ILightingSettings } from "@package/net/createmod/catnip/gui";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $GuiGameElement$GuiRenderBuilder } from "@package/net/createmod/catnip/gui/element";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_ } from "@package/java/util";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";

declare module "@package/com/simibubi/create/compat/jei/category/animations" {
    export class $AnimatedKinetics implements $IDrawable {
        static defaultBlockElement(arg0: $BlockState_): $GuiGameElement$GuiRenderBuilder;
        static defaultBlockElement(arg0: $PartialModel): $GuiGameElement$GuiRenderBuilder;
        static getCurrentAngle(): number;
        getWidth(): number;
        getHeight(): number;
        draw(arg0: $GuiGraphics): void;
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
        static get currentAngle(): number;
        get width(): number;
        get height(): number;
    }
    export class $AnimatedDeployer extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedPress extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor(arg0: boolean);
    }
    export class $AnimatedSpout extends $AnimatedKinetics {
        withFluids(arg0: $List_<$FluidStack_>): $AnimatedSpout;
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedCrafter extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedSaw extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedItemDrain extends $AnimatedKinetics {
        withFluid(arg0: $FluidStack_): $AnimatedItemDrain;
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedBlazeBurner extends $AnimatedKinetics {
        withHeat(arg0: $BlazeBurnerBlock$HeatLevel_): $AnimatedBlazeBurner;
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedMixer extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedCrushingWheels extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
    export class $AnimatedMillstone extends $AnimatedKinetics {
        offset: number;
        static DEFAULT_LIGHTING: $ILightingSettings;
        constructor();
    }
}
