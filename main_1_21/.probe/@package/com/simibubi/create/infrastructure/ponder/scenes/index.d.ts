import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
export * as fluid from "@package/com/simibubi/create/infrastructure/ponder/scenes/fluid";
export * as trains from "@package/com/simibubi/create/infrastructure/ponder/scenes/trains";
export * as highLogistics from "@package/com/simibubi/create/infrastructure/ponder/scenes/highLogistics";

declare module "@package/com/simibubi/create/infrastructure/ponder/scenes" {
    export class $FunnelScenes {
        static intro(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static transposer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static brass(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static compat(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static directionality(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DisplayScenes {
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static board(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static link(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DetectorScenes {
        static smartObserver(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static thresholdSwitch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $SteamScenes {
        static whistle(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static engine(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ItemVaultScenes {
        static sizes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static storage(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $FanScenes {
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static direction(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $EjectorScenes {
        static splitY(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static ejector(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DeployerScenes {
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static filter(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $BearingScenes {
        static sail(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static windmillsAsSource(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static windmillsAnyStructure(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sailFrame(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static mechanicalBearing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static bearingModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static stabilizedBearings(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static clockwork(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RollerScenes {
        static clearAndPave(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static fill(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ElevatorScenes {
        static multiRope(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static elevator(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $KineticsScenes {
        static shaftAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static shaftsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogsSpeedUp(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogwheelsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static largeCogAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sequencedGearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static creativeMotor(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static creativeMotorMojang(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static waterWheel(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static largeWaterWheel(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static handCrank(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static valveHandle(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static speedController(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static clutch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static gearbox(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static gearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static speedometer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static stressometer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $CartAssemblerScenes {
        static dual(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static rails(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static anchor(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RedstoneScenes2 {
        static roseQuartzLamp(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pulseTimer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ProcessingScenes {
        static crushingWheels(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static emptyBlazeBurner(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static blazeBurner(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static compacting(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static basin(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pressing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static mixing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static millstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $GantryScenes {
        static introForShaft(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static introForPinion(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static subgantry(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static direction(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PulleyScenes {
        static movementModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static multiRope(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static attachment(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TemplateScenes {
        static templateMethod(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MechanicalDrillScenes {
        static breaker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChuteScenes {
        static upward(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static downward(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static smart(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MovementActorScenes {
        static psiTransfer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static psiRedstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraptionControls(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static harvester(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static plough(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChainDriveScenes {
        static chainDriveAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static adjustableChainGearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TunnelScenes {
        static brassModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static andesite(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static brass(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ArmScenes {
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static setup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static filtering(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MechanicalSawScenes {
        static treeCutting(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PistonScenes {
        static movementModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poles(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChassisScenes {
        static linearGroup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static linearAttachement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static superGlue(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static radial(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $CrafterScenes {
        static covers(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static setup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static connect(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RedstoneScenes {
        static pulseExtender(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pulseRepeater(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poweredLatch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poweredToggleLatch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static analogLever(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static nixieTube(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstoneLink(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sticker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contact(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $BeltScenes {
        static beltConnector(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static beltsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static depot(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static directions(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static transport(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
}
