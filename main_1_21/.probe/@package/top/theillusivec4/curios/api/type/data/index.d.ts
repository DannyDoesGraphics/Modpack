import { $JsonObject } from "@package/com/google/gson";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ICurio$DropRule_ } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";

declare module "@package/top/theillusivec4/curios/api/type/data" {
    export class $ISlotData {
    }
    export interface $ISlotData {
        renderToggle(arg0: boolean): $ISlotData;
        useNativeGui(arg0: boolean): $ISlotData;
        dropRule(arg0: $ICurio$DropRule_): $ISlotData;
        addCondition(arg0: $ICondition): $ISlotData;
        addCosmetic(arg0: boolean): $ISlotData;
        addValidator(arg0: $ResourceLocation_): $ISlotData;
        size(arg0: number): $ISlotData;
        replace(arg0: boolean): $ISlotData;
        order(arg0: number): $ISlotData;
        icon(arg0: $ResourceLocation_): $ISlotData;
        serialize(arg0: $HolderLookup$Provider): $JsonObject;
        /**
         * @deprecated
         */
        operation(arg0: $AttributeModifier$Operation_): $ISlotData;
        operation(arg0: string): $ISlotData;
    }
    export class $IEntitiesData {
    }
    export interface $IEntitiesData {
        addPlayer(): $IEntitiesData;
        addSlots(...arg0: string[]): $IEntitiesData;
        addEntities(...arg0: $EntityType_<never>[]): $IEntitiesData;
        addCondition(arg0: $ICondition): $IEntitiesData;
        replace(arg0: boolean): $IEntitiesData;
        serialize(arg0: $HolderLookup$Provider): $JsonObject;
    }
}
