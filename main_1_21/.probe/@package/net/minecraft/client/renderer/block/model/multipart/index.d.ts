import { $JsonElement_, $JsonDeserializationContext_, $JsonDeserializer } from "@package/com/google/gson";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $BlockModelDefinition$Context, $MultiVariant } from "@package/net/minecraft/client/renderer/block/model";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Iterable_ } from "@package/java/lang";
import { $List, $Set, $List_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/client/renderer/block/model/multipart" {
    export class $Selector$Deserializer implements $JsonDeserializer<$Selector> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $Selector;
        constructor();
    }
    export class $MultiPart implements $UnbakedModel {
        getMultiVariants(): $Set<$MultiVariant>;
        getSelectors(): $List<$Selector>;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        constructor(definition: $StateDefinition<$Block_, $BlockState_>, selectors: $List_<$Selector>);
        get multiVariants(): $Set<$MultiVariant>;
        get selectors(): $List<$Selector>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $MultiPart$Deserializer implements $JsonDeserializer<$MultiPart> {
        deserialize(json: $JsonElement_, type: $Type, jsonContext: $JsonDeserializationContext_): $MultiPart;
        constructor(context: $BlockModelDefinition$Context);
    }
    export class $Condition {
        static TRUE: $Condition;
        static FALSE: $Condition;
    }
    export interface $Condition {
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $Condition}.
     */
    export type $Condition_ = ((arg0: $StateDefinition<$Block, $BlockState>) => $Predicate<$BlockState>);
    export class $KeyValueCondition implements $Condition {
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        constructor(key: string, value: string);
    }
    export class $AndCondition implements $Condition {
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        static TOKEN: string;
        constructor(conditions: $Iterable_<$Condition>);
    }
    export class $Selector {
        getVariant(): $MultiVariant;
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        constructor(condition: $Condition_, variant: $MultiVariant);
        get variant(): $MultiVariant;
    }
    export class $OrCondition implements $Condition {
        getPredicate(definition: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        static TOKEN: string;
        constructor(conditions: $Iterable_<$Condition>);
    }
}
