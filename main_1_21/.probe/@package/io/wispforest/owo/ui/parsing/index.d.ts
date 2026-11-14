import { $InputStream } from "@package/java/io";
import { $Function_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $OwoUIAdapter, $ParentComponent, $Component } from "@package/io/wispforest/owo/ui/core";
import { $Class } from "@package/java/lang";
import { $Map_ } from "@package/java/util";
import { $Element } from "@package/org/w3c/dom";

declare module "@package/io/wispforest/owo/ui/parsing" {
    export class $UIModel {
        expandTemplate<T extends $Component>(expectedClass: $Class<T>, name: string, parameterSupplier: $Function_<string, string>, childSupplier: $Function_<string, $Element>): T;
        expandTemplate<T extends $Component>(expectedClass: $Class<T>, name: string, parameters: $Map_<string, string>): T;
        createAdapterWithoutScreen<T extends $ParentComponent>(x: number, y: number, width: number, height: number, expectedRootComponentClass: $Class<T>): $OwoUIAdapter<T>;
        parseComponent<T extends $Component>(expectedClass: $Class<T>, componentElement: $Element): T;
        static load(path: $Path_): $UIModel;
        static load(stream: $InputStream): $UIModel;
        createAdapter<T extends $ParentComponent>(expectedRootComponentClass: $Class<T>, screen: $Screen): $OwoUIAdapter<T>;
    }
}
