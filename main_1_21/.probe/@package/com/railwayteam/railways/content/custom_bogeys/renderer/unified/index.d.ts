import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BogeyStyle$SizeRenderer, $BogeyVisualizer, $BogeyRenderer } from "@package/com/simibubi/create/content/trains/bogey";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $CarriageContraptionEntity } from "@package/com/simibubi/create/content/trains/entity";
import { $Pair } from "@package/net/createmod/catnip/data";
export * as impl from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified/impl";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified" {
    export class $BogeyDisplay$EntityAware {
    }
    export interface $BogeyDisplay$EntityAware extends $BogeyDisplay {
        entityUpdate(arg0: $CarriageContraptionEntity): void;
    }
    export class $BogeyDisplay$SimpleFactory {
    }
    export interface $BogeyDisplay$SimpleFactory extends $BogeyDisplay$Factory {
        create(arg0: $ElementProvider<never>): $BogeyDisplay;
        create(arg0: $ElementProvider<never>, arg1: boolean): $BogeyDisplay;
    }
    /**
     * Values that may be interpreted as {@link $BogeyDisplay$SimpleFactory}.
     */
    export type $BogeyDisplay$SimpleFactory_ = ((arg0: $ElementProvider<never>) => $BogeyDisplay);
    export class $BogeyDisplay$Factory {
    }
    export interface $BogeyDisplay$Factory {
        createCustomRenderer(): $BogeyRenderer;
        createCustomVisualizer(): $BogeyVisualizer;
        create(arg0: $ElementProvider<never>, arg1: boolean): $BogeyDisplay;
    }
    /**
     * Values that may be interpreted as {@link $BogeyDisplay$Factory}.
     */
    export type $BogeyDisplay$Factory_ = ((arg0: $ElementProvider<never>, arg1: boolean) => $BogeyDisplay);
    export class $ElementProvider<T extends $Affine<T>> {
    }
    export interface $ElementProvider<T extends $Affine<T>> {
        createScrolling(arg0: $PartialModel, arg1: $SpriteShiftEntry): $Pair<$Affine<T>, $ScrollHandle>;
        create(arg0: $PartialModel, ...arg1: $Affine<never>[][]): void;
        create(arg0: $PartialModel, arg1: number): $Affine<T>[];
        create(arg0: $PartialModel): $Affine<T>;
        freeze(): void;
    }
    export class $BogeyDisplay {
        static createSizeRenderer(arg0: $BogeyDisplay$Factory_): $BogeyStyle$SizeRenderer;
        static createSizeRenderer(arg0: $BogeyDisplay$SimpleFactory_): $BogeyStyle$SizeRenderer;
    }
    export interface $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BogeyDisplay}.
     */
    export type $BogeyDisplay_ = ((arg0: $CompoundTag, arg1: number) => void);
    export class $BogeyDisplayHolder {
    }
    export interface $BogeyDisplayHolder {
        runWithDisplay(arg0: $Consumer_<$BogeyDisplay>): void;
    }
    /**
     * Values that may be interpreted as {@link $BogeyDisplayHolder}.
     */
    export type $BogeyDisplayHolder_ = ((arg0: $Consumer<$BogeyDisplay>) => void);
    export class $ScrollHandle {
    }
    export interface $ScrollHandle {
        scroll(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScrollHandle}.
     */
    export type $ScrollHandle_ = ((arg0: number) => void);
}
