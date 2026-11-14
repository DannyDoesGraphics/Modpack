import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $Map } from "@package/java/util";
import { $AEKeyType_, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/client" {
    export class $StorageCellModels {
        static models(): $Map<$Item, $ResourceLocation>;
        static getDefaultModel(): $ResourceLocation;
        static model(arg0: $ItemLike_): $ResourceLocation;
        static registerModel(arg0: $ItemLike_, arg1: $ResourceLocation_): void;
        static get defaultModel(): $ResourceLocation;
    }
    export class $AEKeyRenderHandler<T extends $AEKey> {
    }
    export interface $AEKeyRenderHandler<T extends $AEKey> {
        drawOnBlockFace(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: T, arg3: number, arg4: number, arg5: $Level_): void;
        getDisplayName(arg0: T): $Component;
        getTooltip(arg0: T): $List<$Component>;
        drawInGui(arg0: $Minecraft, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: T): void;
    }
    export class $AEKeyRendering {
        static drawOnBlockFace(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $AEKey, arg3: number, arg4: number, arg5: $Level_): void;
        static get(arg0: $AEKeyType_): $AEKeyRenderHandler<never>;
        static register<T extends $AEKey>(arg0: $AEKeyType_, arg1: $Class<T>, arg2: $AEKeyRenderHandler<T>): void;
        static getDisplayName(arg0: $AEKey): $Component;
        static getOrThrow(arg0: $AEKeyType_): $AEKeyRenderHandler<never>;
        static getTooltip(arg0: $AEKey): $List<$Component>;
        static drawInGui(arg0: $Minecraft, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: $AEKey): void;
        constructor();
    }
}
