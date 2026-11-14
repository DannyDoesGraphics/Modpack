import { $IntOpenHashSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Long2IntMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ClientPlayerKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $PostChain, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set } from "@package/java/util";
import { $RenderLevelStageEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/dev/latvian/mods/kubejs/client/highlight" {
    export class $HighlightRenderer$Mode extends $Enum<$HighlightRenderer$Mode> {
        static values(): $HighlightRenderer$Mode[];
        static valueOf(name: string): $HighlightRenderer$Mode;
        static SCREEN: $HighlightRenderer$Mode;
        static NONE: $HighlightRenderer$Mode;
        static WORLD: $HighlightRenderer$Mode;
    }
    /**
     * Values that may be interpreted as {@link $HighlightRenderer$Mode}.
     */
    export type $HighlightRenderer$Mode_ = "none" | "screen" | "world";
    export class $HighlightRenderer$ShaderChain extends $Record {
        renderOutput(): $RenderTarget;
        clearInput(mc: $Minecraft): void;
        postChain(): $PostChain;
        renderAnything(): $MutableBoolean;
        mcDepthInput(): $RenderTarget;
        renderInput(): $RenderTarget;
        static load(mc: $Minecraft, id: $ResourceLocation_): $HighlightRenderer$ShaderChain;
        close(): void;
        draw(mc: $Minecraft, delta: number): void;
        clearDepth(mc: $Minecraft, copy: boolean): void;
        constructor(postChain: $PostChain, renderInput: $RenderTarget, mcDepthInput: $RenderTarget, renderOutput: $RenderTarget, renderAnything: $MutableBoolean);
    }
    /**
     * Values that may be interpreted as {@link $HighlightRenderer$ShaderChain}.
     */
    export type $HighlightRenderer$ShaderChain_ = { renderAnything?: $MutableBoolean, postChain?: $PostChain, renderOutput?: $RenderTarget, mcDepthInput?: $RenderTarget, renderInput?: $RenderTarget,  } | [renderAnything?: $MutableBoolean, postChain?: $PostChain, renderOutput?: $RenderTarget, mcDepthInput?: $RenderTarget, renderInput?: $RenderTarget, ];
    export class $HighlightKubeEvent extends $ClientPlayerKubeEvent {
        getTargetBlock(): $LevelBlock;
        addTarget(color: $KubeColor_): void;
        addTargetBlock(color: $KubeColor_): void;
        addEntitiesByType(type: $EntityType_<never>, color: $KubeColor_): void;
        addTargetEntity(color: $KubeColor_): void;
        getTargetEntity(): $Entity;
        addBlock(pos: $BlockPos_, color: $KubeColor_): void;
        addEntity(entity: $Entity, color: $KubeColor_): void;
        addEntities(selector: $EntitySelector, color: $KubeColor_): void;
        addBlocks(from: $BlockPos_, to: $BlockPos_, color: $KubeColor_): void;
        constructor(mc: $Minecraft, renderer: $HighlightRenderer);
        get targetBlock(): $LevelBlock;
        get targetEntity(): $Entity;
    }
    export class $HighlightRenderer {
        updateDepth(mc: $Minecraft): void;
        hudPostDraw(mc: $Minecraft, graphics: $GuiGraphics, delta: number): void;
        tickPre(mc: $Minecraft): void;
        renderAfterEntities(mc: $Minecraft, event: $RenderLevelStageEvent): void;
        renderAfterLevel(mc: $Minecraft, event: $RenderLevelStageEvent): void;
        clearBuffers(mc: $Minecraft): void;
        screen(mc: $Minecraft, graphics: $GuiGraphics, screen: $AbstractContainerScreen<never>, mx: number, my: number, delta: number): void;
        loadPostChains(mc: $Minecraft): void;
        resizePostChains(width: number, height: number): void;
        highlightedEntities: $Reference2IntMap<$Entity>;
        color: $KubeColor;
        static INSTANCE: $HighlightRenderer;
        hoveredSlots: $Set<$Slot>;
        static keyMapping: $KeyMapping;
        uniqueColors: $IntOpenHashSet;
        highlightShader: $ShaderInstance;
        mode: $HighlightRenderer$Mode;
        worldChain: $HighlightRenderer$ShaderChain;
        actualKey: boolean;
        guiChain: $HighlightRenderer$ShaderChain;
        cancelBlockHighlight: boolean;
        highlightedBlocks: $Long2IntMap;
        constructor();
    }
}
