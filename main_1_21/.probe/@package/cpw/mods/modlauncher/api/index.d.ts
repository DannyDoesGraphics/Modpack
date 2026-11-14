import { $Supplier, $Function_ } from "@package/java/util/function";
import { $Class } from "@package/java/lang";
import { $ILaunchPluginService } from "@package/cpw/mods/modlauncher/serviceapi";

declare module "@package/cpw/mods/modlauncher/api" {
    export class $IEnvironment {
        static buildKey<T>(arg0: string, arg1: $Class<T>): $Supplier<$TypesafeMap$Key<T>>;
    }
    export interface $IEnvironment {
        getProperty<T>(arg0: $TypesafeMap$Key<T>): (T) | undefined;
        computePropertyIfAbsent<T>(arg0: $TypesafeMap$Key<T>, arg1: $Function_<$TypesafeMap$Key<T>, T>): T;
        findLaunchHandler(arg0: string): ($ILaunchHandlerService) | undefined;
        findLaunchPlugin(arg0: string): ($ILaunchPluginService) | undefined;
        findModuleLayerManager(): ($IModuleLayerManager) | undefined;
    }
}
