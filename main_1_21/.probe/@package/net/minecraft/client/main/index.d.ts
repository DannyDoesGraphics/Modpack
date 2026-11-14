import { $File_, $File } from "@package/java/io";
import { $Path } from "@package/java/nio/file";
import { $Proxy } from "@package/java/net";
import { $User } from "@package/net/minecraft/client";
import { $DisplayData } from "@package/com/mojang/blaze3d/platform";
import { $Throwable, $Record, $RuntimeException } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";

declare module "@package/net/minecraft/client/main" {
    export class $GameConfig$QuickPlayData extends $Record {
        isEnabled(): boolean;
        path(): string;
        realms(): string;
        singleplayer(): string;
        multiplayer(): string;
        constructor(arg0: string | null, arg1: string | null, arg2: string | null, arg3: string | null);
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GameConfig$QuickPlayData}.
     */
    export type $GameConfig$QuickPlayData_ = { multiplayer?: string, singleplayer?: string, path?: string, realms?: string,  } | [multiplayer?: string, singleplayer?: string, path?: string, realms?: string, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $GameConfig$UserData {
        proxy: $Proxy;
        userProperties: $PropertyMap;
        profileProperties: $PropertyMap;
        user: $User;
        constructor(user: $User, userProperties: $PropertyMap, profileProperties: $PropertyMap, proxy: $Proxy);
    }
    export class $GameConfig$GameData {
        versionType: string;
        disableChat: boolean;
        disableMultiplayer: boolean;
        launchVersion: string;
        demo: boolean;
        constructor(demo: boolean, launchVersion: string, versionType: string, disableMultiplayer: boolean, disableChat: boolean);
    }
    export class $GameConfig {
        game: $GameConfig$GameData;
        display: $DisplayData;
        quickPlay: $GameConfig$QuickPlayData;
        location: $GameConfig$FolderData;
        user: $GameConfig$UserData;
        constructor(user: $GameConfig$UserData, display: $DisplayData, location: $GameConfig$FolderData, game: $GameConfig$GameData, quickPlay: $GameConfig$QuickPlayData_);
    }
    export class $GameConfig$FolderData {
        getExternalAssetSource(): $Path;
        gameDirectory: $File;
        assetIndex: string;
        assetDirectory: $File;
        resourcePackDirectory: $File;
        constructor(gameDirectory: $File_, resourcePackDirectory: $File_, assetDirectory: $File_, assetIndex: string | null);
        get externalAssetSource(): $Path;
    }
    export class $SilentInitException extends $RuntimeException {
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
    }
}
