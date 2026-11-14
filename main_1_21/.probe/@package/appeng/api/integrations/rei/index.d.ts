import { $List } from "@package/java/util";

declare module "@package/appeng/api/integrations/rei" {
    export class $IngredientConverter<T> {
    }
    export interface $IngredientConverter<T> {
    }
    export class $IngredientConverters {
        static getConverters(): $List<$IngredientConverter<never>>;
        static register(arg0: $IngredientConverter<never>): boolean;
        static get converters(): $List<$IngredientConverter<never>>;
    }
}
