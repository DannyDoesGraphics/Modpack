import { $InstancerProvider_, $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EditBox } from "@package/net/minecraft/client/gui/components";
import { $DestinationSuggestions } from "@package/com/simibubi/create/content/trains/schedule";
import { $Comparator, $List, $List_ } from "@package/java/util";
import { $ClipboardBlockEntity } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $SuperByteBuffer } from "@package/net/createmod/catnip/render";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix4fc } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as packagerLink from "@package/com/simibubi/create/content/logistics/packagerLink";
export * as tunnel from "@package/com/simibubi/create/content/logistics/tunnel";
export * as stockTicker from "@package/com/simibubi/create/content/logistics/stockTicker";
export * as factoryBoard from "@package/com/simibubi/create/content/logistics/factoryBoard";
export * as filter from "@package/com/simibubi/create/content/logistics/filter";
export * as vault from "@package/com/simibubi/create/content/logistics/vault";
export * as packagePort from "@package/com/simibubi/create/content/logistics/packagePort";
export * as item from "@package/com/simibubi/create/content/logistics/item";
export * as tableCloth from "@package/com/simibubi/create/content/logistics/tableCloth";
export * as redstoneRequester from "@package/com/simibubi/create/content/logistics/redstoneRequester";
export * as chute from "@package/com/simibubi/create/content/logistics/chute";
export * as box from "@package/com/simibubi/create/content/logistics/box";
export * as packager from "@package/com/simibubi/create/content/logistics/packager";
export * as depot from "@package/com/simibubi/create/content/logistics/depot";
export * as itemHatch from "@package/com/simibubi/create/content/logistics/itemHatch";
export * as funnel from "@package/com/simibubi/create/content/logistics/funnel";
export * as crate from "@package/com/simibubi/create/content/logistics/crate";

declare module "@package/com/simibubi/create/content/logistics" {
    export class $BigItemStack {
        static duplicateWrappers(arg0: $List_<$BigItemStack>): $List<$BigItemStack>;
        static receive(arg0: $RegistryFriendlyByteBuf): $BigItemStack;
        isInfinite(): boolean;
        static comparator(): $Comparator<$BigItemStack>;
        static INF: number;
        stack: $ItemStack;
        static CODEC: $Codec<$BigItemStack>;
        count: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BigItemStack>;
        constructor(arg0: $ItemStack_);
        constructor(arg0: $ItemStack_, arg1: number);
        get infinite(): boolean;
    }
    export class $FlapStuffs {
        static commonTransform(arg0: $BlockPos_, arg1: $Direction_, arg2: number): $Matrix4f;
        static renderFlaps(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $SuperByteBuffer, arg3: $Vec3_, arg4: $Direction_, arg5: number, arg6: number, arg7: number): void;
        static flapAngle(arg0: number, arg1: number): number;
        static FLAP_COUNT: number;
        static FUNNEL_PIVOT: $Vec3;
        static SEGMENT_STEP: number;
        static X_OFFSET: number;
        static TUNNEL_PIVOT: $Vec3;
        constructor();
    }
    export class $FlapStuffs$Visual {
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        updateLight(arg0: number): void;
        update(arg0: number): void;
        "delete"(): void;
        constructor(arg0: $InstancerProvider_, arg1: $Matrix4fc, arg2: $Vec3_, arg3: $Model);
    }
    export class $AddressEditBox extends $EditBox {
        tick(): void;
        canLoseFocus: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static BACKWARDS: number;
        active: boolean;
        static FORWARDS: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(arg0: $Screen, arg1: $Font, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $Screen, arg1: $Font, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: string);
    }
    export class $AddressEditBoxHelper {
        static advertiseClipboard(arg0: $ClipboardBlockEntity): void;
        static createSuggestions(arg0: $Screen, arg1: $EditBox, arg2: boolean, arg3: string): $DestinationSuggestions;
        constructor();
    }
}
