import { $DataResult, $Codec_, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $ExtraCodecs$TagOrElementLocation_, $ExtraCodecs$TagOrElementLocation } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ryanhcode/sable/physics/config/block_properties" {
    export class $BlockStateConditionSet$BlockStateCondition extends $Record {
        value(): string;
        static parse(arg0: string): $BlockStateConditionSet$BlockStateCondition;
        property(): string;
        constructor(property: string, value: string);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateConditionSet$BlockStateCondition}.
     */
    export type $BlockStateConditionSet$BlockStateCondition_ = { value?: string, property?: string,  } | [value?: string, property?: string, ];
    export class $BlockStateConditionSet extends $Record {
        blockStateConditions(): $List<$BlockStateConditionSet$BlockStateCondition>;
        matches(arg0: $StateDefinition<$Block_, $BlockState_>, arg1: $BlockState_): boolean;
        static parse(arg0: string): $DataResult<$BlockStateConditionSet>;
        static CODEC: $Codec<$BlockStateConditionSet>;
        constructor(blockStateConditions: $List_<$BlockStateConditionSet$BlockStateCondition_>);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateConditionSet}.
     */
    export type $BlockStateConditionSet_ = { blockStateConditions?: $List_<$BlockStateConditionSet$BlockStateCondition_>,  } | [blockStateConditions?: $List_<$BlockStateConditionSet$BlockStateCondition_>, ];
    export class $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType<T> extends $Record {
        id(): number;
        defaultValue(): T;
        codec(): $Codec<T>;
        constructor(id: number, codec: $Codec_<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType}.
     */
    export type $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<T> = RegistryTypes.SablePhysicsBlockProperties | { id?: number, codec?: $Codec_<any>, defaultValue?: any,  } | [id?: number, codec?: $Codec_<any>, defaultValue?: any, ];
    export class $PhysicsBlockPropertiesDefinition extends $Record {
        overrides(): ($Map<$BlockStateConditionSet, $Map<$ResourceLocation, $Object>>) | undefined;
        priority(): number;
        properties(): $Map<$ResourceLocation, $Object>;
        selector(): $ExtraCodecs$TagOrElementLocation;
        static PROPERTIES_CODEC: $Codec<$Map<$ResourceLocation, $Object>>;
        static CODEC: $Codec<$PhysicsBlockPropertiesDefinition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PhysicsBlockPropertiesDefinition>;
        constructor(selector: $ExtraCodecs$TagOrElementLocation_, priority: number, properties: $Map_<$ResourceLocation_, $Object>, overrides: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PhysicsBlockPropertiesDefinition}.
     */
    export type $PhysicsBlockPropertiesDefinition_ = { overrides?: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined, selector?: $ExtraCodecs$TagOrElementLocation_, priority?: number, properties?: $Map_<$ResourceLocation_, $Object>,  } | [overrides?: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined, selector?: $ExtraCodecs$TagOrElementLocation_, priority?: number, properties?: $Map_<$ResourceLocation_, $Object>, ];
    export interface $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType<T> extends RegistryMarked<RegistryTypes.SablePhysicsBlockPropertiesTag, RegistryTypes.SablePhysicsBlockProperties> {}
}
