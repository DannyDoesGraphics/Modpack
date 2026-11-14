import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FMLLoadCompleteEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $RegisterMapDecorationRenderersEvent } from "@package/net/neoforged/neoforge/client/gui/map";
import { $AddPackFindersEvent, $RegisterCommandsEvent, $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $EntityEvent$EnteringSection, $EntityJoinLevelEvent, $EntityLeaveLevelEvent, $EntityMountEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $ServerStoppingEvent } from "@package/net/neoforged/neoforge/event/server";
import { $ChunkEvent$Unload, $LevelEvent$Unload, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $PlayerEvent$PlayerLoggedOutEvent, $ItemTooltipEvent, $PlayerEvent$StartTracking, $AttackEntityEvent, $PlayerInteractEvent$LeftClickEmpty, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $ServerTickEvent$Post, $EntityTickEvent$Pre, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderLevelStageEvent, $RegisterClientCommandsEvent, $RegisterGuiLayersEvent, $ClientTickEvent$Post, $ClientPlayerNetworkEvent$LoggingOut, $RegisterItemDecorationsEvent, $ViewportEvent$RenderFog, $ClientPlayerNetworkEvent$LoggingIn, $ViewportEvent$ComputeCameraAngles, $EntityRenderersEvent$AddLayers, $ClientTickEvent$Pre, $InputEvent$InteractionKeyMappingTriggered, $RenderFrameEvent$Pre, $InputEvent$Key, $RegisterClientReloadListenersEvent, $InputEvent$MouseScrollingEvent, $InputEvent$MouseButton$Pre } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/simibubi/create/foundation/events" {
    export class $CommonEvents$ModBusEvents {
        static onRegisterMapDecorationRenderers(arg0: $RegisterMapDecorationRenderersEvent): void;
        static addPackFinders(arg0: $AddPackFindersEvent): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        constructor();
    }
    export class $CommonEvents {
        static onLoadWorld(arg0: $LevelEvent$Load): void;
        static onUnloadWorld(arg0: $LevelEvent$Unload): void;
        static onEntityEnterSection(arg0: $EntityEvent$EnteringSection): void;
        static onChunkUnloaded(arg0: $ChunkEvent$Unload): void;
        static playerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static addReloadListeners(arg0: $AddReloadListenerEvent): void;
        static leftClickEmpty(arg0: $ServerPlayer): void;
        static startTracking(arg0: $PlayerEvent$StartTracking): void;
        static onEntityTick(arg0: $EntityTickEvent$Pre): void;
        static onEntityAdded(arg0: $EntityJoinLevelEvent): void;
        static onEntityAttackedByPlayer(arg0: $AttackEntityEvent): void;
        static attachData(arg0: $EntityJoinLevelEvent): void;
        static playerLoggedOut(arg0: $PlayerEvent$PlayerLoggedOutEvent): void;
        static registerCommands(arg0: $RegisterCommandsEvent): void;
        static onServerWorldTick(arg0: $LevelTickEvent$Post): void;
        static serverStopping(arg0: $ServerStoppingEvent): void;
        static onServerTick(arg0: $ServerTickEvent$Post): void;
        static onEntityLeaveLevel(arg0: $EntityLeaveLevelEvent): void;
        constructor();
    }
    export class $ClientEvents {
        static onLoadWorld(arg0: $LevelEvent$Load): void;
        static onUnloadWorld(arg0: $LevelEvent$Unload): void;
        static leftClickEmpty(arg0: $PlayerInteractEvent$LeftClickEmpty): void;
        static registerClientReloadListeners(arg0: $RegisterClientReloadListenersEvent): void;
        static onTickPre(arg0: $ClientTickEvent$Pre): void;
        static onLeave(arg0: $ClientPlayerNetworkEvent$LoggingOut): void;
        static onCameraSetup(arg0: $ViewportEvent$ComputeCameraAngles): void;
        static addToItemTooltip(arg0: $ItemTooltipEvent): void;
        static onMount(arg0: $EntityMountEvent): void;
        static getFogDensity(arg0: $ViewportEvent$RenderFog): void;
        static addEntityRendererLayers(arg0: $EntityRenderersEvent$AddLayers): void;
        static onRenderFrame(arg0: $RenderFrameEvent$Pre): void;
        static registerGuiOverlays(arg0: $RegisterGuiLayersEvent): void;
        static onLoadComplete(arg0: $FMLLoadCompleteEvent): void;
        static onTickPost(arg0: $ClientTickEvent$Post): void;
        static registerItemDecorations(arg0: $RegisterItemDecorationsEvent): void;
        static onTick(arg0: boolean): void;
        static registerClientCommands(arg0: $RegisterClientCommandsEvent): void;
        static onRenderWorld(arg0: $RenderLevelStageEvent): void;
        static onJoin(arg0: $ClientPlayerNetworkEvent$LoggingIn): void;
        constructor();
    }
    export class $InputEvents {
        static onMouseInput(arg0: $InputEvent$MouseButton$Pre): void;
        static onClickInput(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static onKeyInput(arg0: $InputEvent$Key): void;
        static onMouseScrolled(arg0: $InputEvent$MouseScrollingEvent): void;
        constructor();
    }
}
