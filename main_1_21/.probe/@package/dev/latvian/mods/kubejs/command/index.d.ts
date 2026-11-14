import { $CommandSourceStack, $Commands, $CommandBuildContext, $Commands$CommandSelection_, $SharedSuggestionProvider, $Commands$CommandSelection } from "@package/net/minecraft/commands";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Object, $Enum } from "@package/java/lang";
import { $LiteralCommandNode } from "@package/com/mojang/brigadier/tree";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/dev/latvian/mods/kubejs/command" {
    export class $ArgumentTypeWrappers extends $Enum<$ArgumentTypeWrappers> implements $ArgumentTypeWrapper {
        static printAll(): void;
        static values(): $ArgumentTypeWrappers[];
        static valueOf(name: string): $ArgumentTypeWrappers;
        time(minRequired: number): $ArgumentTypeWrapper;
        create(event: $CommandRegistryKubeEvent): $ArgumentType<never>;
        getResult(context: $CommandContext<$CommandSourceStack>, input: string): $Object;
        static registry<T>(event: $CommandRegistryKubeEvent, reg: $ResourceLocation_): $ArgumentTypeWrapper;
        static byName(name: $ResourceLocation_): typeof never;
        static ROTATION: $ArgumentTypeWrappers;
        static VEC2_CENTERED: $ArgumentTypeWrappers;
        static FLOAT: $ArgumentTypeWrappers;
        static PARTICLE: $ArgumentTypeWrappers;
        static INT_RANGE: $ArgumentTypeWrappers;
        static BLOCK_STATE: $ArgumentTypeWrappers;
        static NBT_TAG: $ArgumentTypeWrappers;
        static NBT_PATH: $ArgumentTypeWrappers;
        static ANGLE: $ArgumentTypeWrappers;
        static ITEM_PREDICATE: $ArgumentTypeWrappers;
        static BLOCK_POS_LOADED: $ArgumentTypeWrappers;
        static BLOCK_POS: $ArgumentTypeWrappers;
        static MESSAGE: $ArgumentTypeWrappers;
        static ITEM_SLOT: $ArgumentTypeWrappers;
        static ENTITY: $ArgumentTypeWrappers;
        static BLOCK_PREDICATE: $ArgumentTypeWrappers;
        static DIMENSION: $ArgumentTypeWrappers;
        static VEC2: $ArgumentTypeWrappers;
        static COLOR: $ArgumentTypeWrappers;
        static VEC3: $ArgumentTypeWrappers;
        static ITEM_STACK: $ArgumentTypeWrappers;
        static SWIZZLE: $ArgumentTypeWrappers;
        static OBJECTIVE: $ArgumentTypeWrappers;
        static DOUBLE: $ArgumentTypeWrappers;
        static ENTITIES: $ArgumentTypeWrappers;
        static UUID: $ArgumentTypeWrappers;
        static INTEGER: $ArgumentTypeWrappers;
        static LONG: $ArgumentTypeWrappers;
        static WORD: $ArgumentTypeWrappers;
        static VEC3_CENTERED: $ArgumentTypeWrappers;
        static TIME: $ArgumentTypeWrappers;
        static GREEDY_STRING: $ArgumentTypeWrappers;
        static NBT_COMPOUND: $ArgumentTypeWrappers;
        static BOOLEAN: $ArgumentTypeWrappers;
        static PLAYER: $ArgumentTypeWrappers;
        static RESOURCE_LOCATION: $ArgumentTypeWrappers;
        static FLOAT_RANGE: $ArgumentTypeWrappers;
        static PLAYERS: $ArgumentTypeWrappers;
        static GAME_PROFILE: $ArgumentTypeWrappers;
        static COLUMN_POS: $ArgumentTypeWrappers;
        static STRING: $ArgumentTypeWrappers;
        static COMPONENT: $ArgumentTypeWrappers;
        static ENTITY_ANCHOR: $ArgumentTypeWrappers;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentTypeWrappers}.
     */
    export type $ArgumentTypeWrappers_ = "boolean" | "float" | "double" | "integer" | "long" | "string" | "greedy_string" | "word" | "entity" | "entities" | "player" | "players" | "game_profile" | "block_pos" | "block_pos_loaded" | "column_pos" | "vec3" | "vec2" | "vec3_centered" | "vec2_centered" | "block_state" | "block_predicate" | "item_stack" | "item_predicate" | "color" | "component" | "message" | "nbt_compound" | "nbt_tag" | "nbt_path" | "particle" | "angle" | "rotation" | "swizzle" | "item_slot" | "resource_location" | "entity_anchor" | "int_range" | "float_range" | "dimension" | "time" | "uuid" | "objective";
    export class $ArgumentTypeWrapper {
    }
    export interface $ArgumentTypeWrapper {
        create(event: $CommandRegistryKubeEvent): $ArgumentType<never>;
        getResult(context: $CommandContext<$CommandSourceStack>, input: string): $Object;
    }
    export class $CommandRegistryKubeEvent implements $KubeEvent {
        isForSinglePlayer(): boolean;
        isForMultiPlayer(): boolean;
        getBuiltinSuggestions(): typeof $SharedSuggestionProvider;
        register(command: $LiteralArgumentBuilder<$CommandSourceStack>): $LiteralCommandNode<$CommandSourceStack>;
        getArguments(): typeof $ArgumentTypeWrappers;
        getRegistry(): $CommandBuildContext;
        getCommands(): typeof $Commands;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        selection: $Commands$CommandSelection;
        context: $CommandBuildContext;
        dispatcher: $CommandDispatcher<$CommandSourceStack>;
        constructor(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext, selection: $Commands$CommandSelection_);
        get forSinglePlayer(): boolean;
        get forMultiPlayer(): boolean;
        get builtinSuggestions(): typeof $SharedSuggestionProvider;
        get arguments(): typeof $ArgumentTypeWrappers;
        get registry(): $CommandBuildContext;
        get commands(): typeof $Commands;
    }
}
