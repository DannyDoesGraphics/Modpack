import { $Consumer_, $Supplier, $IntConsumer_, $Supplier_, $LongSupplier_, $IntSupplier_ } from "@package/java/util/function";
import { $Throwable, $ModuleLayer, $Runnable } from "@package/java/lang";

declare module "@package/net/neoforged/neoforgespi/earlywindow" {
    export class $ImmediateWindowProvider {
    }
    export interface $ImmediateWindowProvider {
        updateFramebufferSize(arg0: $IntConsumer_, arg1: $IntConsumer_): void;
        setupMinecraftWindow(arg0: $IntSupplier_, arg1: $IntSupplier_, arg2: $Supplier_<string>, arg3: $LongSupplier_): number;
        positionWindow(arg0: (never) | undefined, arg1: $IntConsumer_, arg2: $IntConsumer_, arg3: $IntConsumer_, arg4: $IntConsumer_): boolean;
        loadingOverlay<T>(arg0: $Supplier_<never>, arg1: $Supplier_<never>, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean): $Supplier<T>;
        updateModuleReads(arg0: $ModuleLayer): void;
        periodicTick(): void;
        getGLVersion(): string;
        name(): string;
        initialize(arg0: string[]): $Runnable;
        crash(arg0: string): void;
        get GLVersion(): string;
    }
}
