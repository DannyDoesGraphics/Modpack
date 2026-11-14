import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IIngredientManager } from "@package/mezz/jei/api/runtime";

declare module "@package/com/hlysine/create_connected/compat" {
    export class $FeatureRefreshEvent extends $Event {
        getIngredientManager(): $IIngredientManager;
        getJeiPluginId(): $ResourceLocation;
        get ingredientManager(): $IIngredientManager;
        get jeiPluginId(): $ResourceLocation;
    }
    export class $FeatureRefreshEvent$Pre extends $FeatureRefreshEvent {
        constructor(arg0: $ResourceLocation_, arg1: $IIngredientManager);
    }
    export class $FeatureRefreshEvent$Post extends $FeatureRefreshEvent {
        constructor(arg0: $ResourceLocation_, arg1: $IIngredientManager);
    }
}
