import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SpriteContents$Ticker } from "@package/net/minecraft/client/renderer/texture";
import { $EndDragonFight$Data_ } from "@package/net/minecraft/world/level/dimension/end";
export * as diagram from "@package/dev/simulated_team/simulated/mixin_interface/diagram";
export * as extra_kinetics from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
export * as ponder from "@package/dev/simulated_team/simulated/mixin_interface/ponder";
export * as sounds from "@package/dev/simulated_team/simulated/mixin_interface/sounds";
export * as tooltip_flag from "@package/dev/simulated_team/simulated/mixin_interface/tooltip_flag";
export * as create_assembly from "@package/dev/simulated_team/simulated/mixin_interface/create_assembly";
export * as assembly_preventer from "@package/dev/simulated_team/simulated/mixin_interface/assembly_preventer";

declare module "@package/dev/simulated_team/simulated/mixin_interface" {
    export class $PlayerLaunchedPlungerExtension {
    }
    export interface $PlayerLaunchedPlungerExtension {
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
    }
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        simulated$getTicker(): $SpriteContents$Ticker;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
    }
    export class $TickerExtension {
    }
    export interface $TickerExtension {
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
    }
    export class $PlayerTypewriterExtension {
    }
    export interface $PlayerTypewriterExtension {
        simulated$getCurrentTypewriter(): $BlockPos;
        simulated$setCurrentTypewriter(arg0: $BlockPos_): void;
    }
    export class $PrimaryLevelDataExtension {
    }
    export interface $PrimaryLevelDataExtension {
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        getPreset(): $ResourceLocation;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
}
