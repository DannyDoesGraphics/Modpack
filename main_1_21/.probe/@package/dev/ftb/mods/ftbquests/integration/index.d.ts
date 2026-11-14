import { $Enum } from "@package/java/lang";

declare module "@package/dev/ftb/mods/ftbquests/integration" {
    export class $RecipeModHelper$Components extends $Enum<$RecipeModHelper$Components> {
        static values(): $RecipeModHelper$Components[];
        static valueOf(name: string): $RecipeModHelper$Components;
        static LOOT_CRATES: $RecipeModHelper$Components;
        static QUESTS: $RecipeModHelper$Components;
    }
    /**
     * Values that may be interpreted as {@link $RecipeModHelper$Components}.
     */
    export type $RecipeModHelper$Components_ = "quests" | "loot_crates";
}
