import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";

declare module "@package/dev/emi/emi/api/stack/serializer" {
    export class $EmiIngredientSerializer<T extends $EmiIngredient> {
        static getSerialized(ingredient: $EmiIngredient): $JsonElement;
        static getDeserialized(element: $JsonElement_): $EmiIngredient;
    }
    export interface $EmiIngredientSerializer<T extends $EmiIngredient> extends $GlobalMixin {
        getType(): string;
        deserialize(arg0: $JsonElement_): $EmiIngredient;
        serialize(arg0: T): $JsonElement;
        get type(): string;
    }
}
