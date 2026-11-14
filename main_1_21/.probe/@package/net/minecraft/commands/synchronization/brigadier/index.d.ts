import { $JsonObject_ } from "@package/com/google/gson";
import { $CommandBuildContext } from "@package/net/minecraft/commands";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ArgumentTypeInfo, $ArgumentTypeInfo$Template } from "@package/net/minecraft/commands/synchronization";
import { $DoubleArgumentType, $FloatArgumentType, $StringArgumentType, $StringArgumentType$StringType_, $LongArgumentType, $IntegerArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/synchronization/brigadier" {
    export class $LongArgumentInfo$Template implements $ArgumentTypeInfo$Template<$LongArgumentType> {
        type(): $ArgumentTypeInfo<$LongArgumentType, never>;
        instantiate(context: $CommandBuildContext): $LongArgumentType;
    }
    export class $StringArgumentSerializer$Template implements $ArgumentTypeInfo$Template<$StringArgumentType> {
        type(): $ArgumentTypeInfo<$StringArgumentType, never>;
        instantiate(context: $CommandBuildContext): $StringArgumentType;
        constructor(type: $StringArgumentSerializer, arg1: $StringArgumentType$StringType_);
    }
    export class $FloatArgumentInfo implements $ArgumentTypeInfo<$FloatArgumentType, $FloatArgumentInfo$Template> {
        serializeToNetwork(template: $FloatArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $FloatArgumentInfo$Template, json: $JsonObject_): void;
        unpack(argument: $FloatArgumentType): $FloatArgumentInfo$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $FloatArgumentInfo$Template;
        constructor();
    }
    export class $LongArgumentInfo implements $ArgumentTypeInfo<$LongArgumentType, $LongArgumentInfo$Template> {
        serializeToNetwork(template: $LongArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $LongArgumentInfo$Template, json: $JsonObject_): void;
        unpack(argument: $LongArgumentType): $LongArgumentInfo$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $LongArgumentInfo$Template;
        constructor();
    }
    export class $StringArgumentSerializer implements $ArgumentTypeInfo<$StringArgumentType, $StringArgumentSerializer$Template> {
        serializeToNetwork(template: $StringArgumentSerializer$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $StringArgumentSerializer$Template, json: $JsonObject_): void;
        unpack(argument: $StringArgumentType): $StringArgumentSerializer$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $StringArgumentSerializer$Template;
        constructor();
    }
    export class $DoubleArgumentInfo$Template implements $ArgumentTypeInfo$Template<$DoubleArgumentType> {
        type(): $ArgumentTypeInfo<$DoubleArgumentType, never>;
        instantiate(context: $CommandBuildContext): $DoubleArgumentType;
    }
    export class $FloatArgumentInfo$Template implements $ArgumentTypeInfo$Template<$FloatArgumentType> {
        type(): $ArgumentTypeInfo<$FloatArgumentType, never>;
        instantiate(context: $CommandBuildContext): $FloatArgumentType;
    }
    export class $IntegerArgumentInfo$Template implements $ArgumentTypeInfo$Template<$IntegerArgumentType> {
        type(): $ArgumentTypeInfo<$IntegerArgumentType, never>;
        instantiate(context: $CommandBuildContext): $IntegerArgumentType;
    }
    export class $DoubleArgumentInfo implements $ArgumentTypeInfo<$DoubleArgumentType, $DoubleArgumentInfo$Template> {
        serializeToNetwork(template: $DoubleArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $DoubleArgumentInfo$Template, json: $JsonObject_): void;
        unpack(argument: $DoubleArgumentType): $DoubleArgumentInfo$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $DoubleArgumentInfo$Template;
        constructor();
    }
    export class $IntegerArgumentInfo implements $ArgumentTypeInfo<$IntegerArgumentType, $IntegerArgumentInfo$Template> {
        serializeToNetwork(template: $IntegerArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $IntegerArgumentInfo$Template, json: $JsonObject_): void;
        unpack(argument: $IntegerArgumentType): $IntegerArgumentInfo$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $IntegerArgumentInfo$Template;
        constructor();
    }
}
