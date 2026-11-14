import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $SyncedBlockEntity, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AllGuiTextures, $AllGuiTextures_ } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as events from "@package/com/simibubi/create/compat/computercraft/events";
export * as implementation from "@package/com/simibubi/create/compat/computercraft/implementation";

declare module "@package/com/simibubi/create/compat/computercraft" {
    export class $AttachedComputerPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttachedComputerPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
    }
    export class $ComputerCraftProxy {
        static behaviour(arg0: $SmartBlockEntity): $AbstractComputerBehaviour;
        static register(): void;
        constructor();
    }
    export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ComputerScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $ComputerScreen$RenderWindowFunction_, arg2: $Screen, arg3: $Supplier_<boolean>);
        constructor(arg0: $Component_, arg1: $Supplier_<$Component>, arg2: $ComputerScreen$RenderWindowFunction_, arg3: $Screen, arg4: $Supplier_<boolean>);
    }
    export class $FallbackComputerBehaviour extends $AbstractComputerBehaviour {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ComputerScreen$RenderWindowFunction {
    }
    export interface $ComputerScreen$RenderWindowFunction {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $AllGuiTextures_): void;
    }
    /**
     * Values that may be interpreted as {@link $ComputerScreen$RenderWindowFunction}.
     */
    export type $ComputerScreen$RenderWindowFunction_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $AllGuiTextures) => void);
}
