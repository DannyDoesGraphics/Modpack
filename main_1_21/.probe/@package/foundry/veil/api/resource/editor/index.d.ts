import { $Closeable } from "@package/java/io";
import { $JsonElement_ } from "@package/com/google/gson";
import { $VeilResourceManager, $VeilResource, $VeilEditorEnvironment } from "@package/foundry/veil/api/resource";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $CompletableFuture } from "@package/java/util/concurrent";

declare module "@package/foundry/veil/api/resource/editor" {
    export class $ResourceFileEditor<T extends $VeilResource<never>> {
    }
    export interface $ResourceFileEditor<T extends $VeilResource<never>> extends $Closeable {
        getResource(): T;
        close(): void;
        save(arg0: number[], arg1: $VeilResourceManager, arg2: $VeilResource<never>): $CompletableFuture<never>;
        save(arg0: $JsonElement_, arg1: $VeilResourceManager, arg2: $VeilResource<never>): $CompletableFuture<never>;
        isClosed(): boolean;
        render(): void;
        loadFromDisk(): void;
        get resource(): T;
        get closed(): boolean;
    }
    export interface $ResourceFileEditor$Factory<T> extends RegistryMarked<RegistryTypes.VeilResourceEditorTag, RegistryTypes.VeilResourceEditor> {}
    export class $ResourceFileEditor$Factory<T extends $VeilResource<never>> {
    }
    export interface $ResourceFileEditor$Factory<T extends $VeilResource<never>> {
        open(arg0: $VeilEditorEnvironment, arg1: T): $ResourceFileEditor<T>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceFileEditor$Factory}.
     */
    export type $ResourceFileEditor$Factory_<T> = RegistryTypes.VeilResourceEditor | ((arg0: $VeilEditorEnvironment, arg1: T) => $ResourceFileEditor<T>);
}
