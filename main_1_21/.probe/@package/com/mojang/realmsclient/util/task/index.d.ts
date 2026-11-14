import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsMainScreen } from "@package/com/mojang/realmsclient";
import { $RealmsConfigureWorldScreen, $RealmsLongRunningMcoTaskScreen } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $Backup, $RealmsServerAddress, $RealmsServer, $WorldTemplate } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/util/task" {
    export class $DownloadTask extends $LongRunningTask {
        constructor(worldId: number, arg1: number, slot: string, downloadName: $Screen);
    }
    export class $ResettingGeneratedWorldTask extends $ResettingWorldTask {
        constructor(generationInfo: $WorldGenerationInfo_, serverId: number, arg2: $Component_, title: $Runnable_);
    }
    export class $CreateSnapshotRealmTask extends $LongRunningTask {
        constructor(realmsMainScreen: $RealmsMainScreen, parentId: number, arg2: $WorldGenerationInfo_, generationInfo: string, name: string);
    }
    export class $CloseServerTask extends $LongRunningTask {
        constructor(serverData: $RealmsServer, configureScreen: $RealmsConfigureWorldScreen);
    }
    export class $GetServerDetailsTask extends $LongRunningTask {
        connectScreen(serverAddress: $RealmsServerAddress): $RealmsLongRunningMcoTaskScreen;
        constructor(lastScreen: $Screen, server: $RealmsServer);
    }
    export class $OpenServerTask extends $LongRunningTask {
        constructor(serverData: $RealmsServer, returnScreen: $Screen, join: boolean, minecraft: $Minecraft);
    }
    export class $RealmCreationTask extends $LongRunningTask {
        constructor(realmId: number, arg1: string, name: string);
    }
    export class $ResettingWorldTask extends $LongRunningTask {
        constructor(serverId: number, arg1: $Component_, title: $Runnable_);
    }
    export class $SwitchMinigameTask extends $LongRunningTask {
        constructor(worldId: number, arg1: $WorldTemplate, worldTemplate: $RealmsConfigureWorldScreen);
    }
    export class $SwitchSlotTask extends $LongRunningTask {
        constructor(worldId: number, arg1: number, slot: $Runnable_);
    }
    export class $ConnectTask extends $LongRunningTask {
        constructor(onlineScreen: $Screen, server: $RealmsServer, address: $RealmsServerAddress);
    }
    export class $LongRunningTask implements $Runnable {
        abortTask(): void;
        aborted(): boolean;
        init(): void;
        tick(): void;
        getTitle(): $Component;
        static setScreen(screen: $Screen): void;
        constructor();
        get title(): $Component;
        static set screen(value: $Screen);
    }
    export class $RestoreTask extends $LongRunningTask {
        constructor(backup: $Backup, worldId: number, arg2: $RealmsConfigureWorldScreen);
    }
    export class $ResettingTemplateWorldTask extends $ResettingWorldTask {
        constructor(template: $WorldTemplate, serverId: number, arg2: $Component_, title: $Runnable_);
    }
}
