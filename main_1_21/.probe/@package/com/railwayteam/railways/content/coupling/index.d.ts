import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $StandardBogeyBlockEntity } from "@package/com/simibubi/create/content/trains/bogey";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $List } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as coupler from "@package/com/railwayteam/railways/content/coupling/coupler";

declare module "@package/com/railwayteam/railways/content/coupling" {
    export class $VirtualCouplerRendering {
        static renderCoupler(arg0: $Direction_, arg1: number, arg2: boolean, arg3: number, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $StandardBogeyBlockEntity): void;
    }
    export class $TrackCouplerDisplaySource extends $DisplaySource {
        static BY_BLOCK_ENTITY: $SimpleRegistry$Multi<$BlockEntityType<never>, $DisplaySource>;
        static WHITESPACE: $MutableComponent;
        static EMPTY: $List<$MutableComponent>;
        static EMPTY_LINE: $MutableComponent;
        static BY_BLOCK: $SimpleRegistry$Multi<$Block, $DisplaySource>;
        constructor();
    }
    export class $TrainUtils {
        static tryToParkNearby(arg0: $Train, arg1: number): void;
        static discardTrain(arg0: $Train): void;
        static splitTrain(arg0: $Train, arg1: number): $Train;
        static combineTrains(arg0: $Train, arg1: $Train, arg2: $Vec3_, arg3: $Level_, arg4: number): $Train;
        static combineTrains(arg0: $Train, arg1: $Train, arg2: $BlockPos_, arg3: $Level_, arg4: number): $Train;
        static allCarriagesLoaded(arg0: $Train): boolean;
        constructor();
    }
}
