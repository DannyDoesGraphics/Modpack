import { $QuadLighter } from "@package/net/neoforged/neoforge/client/model/lighting";
import { $Path_, $Path } from "@package/java/nio/file";
import { $FilePackResources$SharedZipFileAccess, $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $StringSplitter$WidthProvider_, $StringSplitter$WidthProvider } from "@package/net/minecraft/client";
import { $ThreadLocal } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/team/creative/creativecore/mixin" {
    export class $VanillaPackResourcesAccessor {
    }
    export interface $VanillaPackResourcesAccessor {
        getPathsForType(): $Map<$PackType, $List<$Path>>;
        get pathsForType(): $Map<$PackType, $List<$Path>>;
    }
    /**
     * Values that may be interpreted as {@link $VanillaPackResourcesAccessor}.
     */
    export type $VanillaPackResourcesAccessor_ = (() => $Map_<$PackType_, $List_<$Path_>>);
    export class $FilePackResourcesAccessor {
        static callGetPathFromLocation(arg0: $PackType_, arg1: $ResourceLocation_): string;
    }
    export interface $FilePackResourcesAccessor {
        getZipFileAccess(): $FilePackResources$SharedZipFileAccess;
        get zipFileAccess(): $FilePackResources$SharedZipFileAccess;
    }
    /**
     * Values that may be interpreted as {@link $FilePackResourcesAccessor}.
     */
    export type $FilePackResourcesAccessor_ = (() => $FilePackResources$SharedZipFileAccess);
    export class $PathPackResourcesAccessor {
    }
    export interface $PathPackResourcesAccessor {
        getRoot(): $Path;
        get root(): $Path;
    }
    /**
     * Values that may be interpreted as {@link $PathPackResourcesAccessor}.
     */
    export type $PathPackResourcesAccessor_ = (() => $Path_);
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        setShape(arg0: $DiscreteVoxelShape): void;
        set shape(value: $DiscreteVoxelShape);
    }
    /**
     * Values that may be interpreted as {@link $VoxelShapeAccessor}.
     */
    export type $VoxelShapeAccessor_ = ((arg0: $DiscreteVoxelShape) => void);
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        getLastHandleMovementTime(): number;
        get lastHandleMovementTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $MouseHandlerAccessor}.
     */
    export type $MouseHandlerAccessor_ = (() => number);
    export class $StringSplitterAccessor {
    }
    export interface $StringSplitterAccessor {
        getWidthProvider(): $StringSplitter$WidthProvider;
        get widthProvider(): $StringSplitter$WidthProvider;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitterAccessor}.
     */
    export type $StringSplitterAccessor_ = (() => $StringSplitter$WidthProvider_);
    export class $ForgeModelBlockRendererAccessor {
    }
    export interface $ForgeModelBlockRendererAccessor {
        getFlatLighter(): $ThreadLocal<$QuadLighter>;
        getSmoothLighter(): $ThreadLocal<$QuadLighter>;
        get flatLighter(): $ThreadLocal<$QuadLighter>;
        get smoothLighter(): $ThreadLocal<$QuadLighter>;
    }
}
