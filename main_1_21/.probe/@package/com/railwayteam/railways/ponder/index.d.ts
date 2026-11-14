import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SharedTextRegistrationHelper_, $IndexExclusionHelper, $PonderSceneRegistrationHelper, $PonderPlugin, $PonderTagRegistrationHelper } from "@package/net/createmod/ponder/api/registration";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
export * as scenes from "@package/com/railwayteam/railways/ponder/scenes";

declare module "@package/com/railwayteam/railways/ponder" {
    export class $CRPonderIndex {
        static register(arg0: $PonderSceneRegistrationHelper<$ResourceLocation_>): void;
        constructor();
    }
    export class $CRPonderPlugin implements $PonderPlugin {
        registerScenes(arg0: $PonderSceneRegistrationHelper<$ResourceLocation_>): void;
        registerTags(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>): void;
        getModId(): string;
        registerSharedText(arg0: $SharedTextRegistrationHelper_): void;
        onPonderLevelRestore(arg0: $PonderLevel): void;
        indexExclusions(arg0: $IndexExclusionHelper): void;
        constructor();
        get modId(): string;
    }
}
