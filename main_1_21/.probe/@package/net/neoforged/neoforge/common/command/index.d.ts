import { $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntitySelector, $EntitySelectorParser } from "@package/net/minecraft/commands/arguments/selector";

declare module "@package/net/neoforged/neoforge/common/command" {
    /**
     * Allows modders to register custom entity selectors by assigning an `IEntitySelectorType` to a String token.
     * 
     * The token "test", for example, corresponds to @test[...] in a command.
     */
    export class $EntitySelectorManager {
        /**
         * This method is called in `EntitySelectorParser#fillSelectorSuggestions(SuggestionsBuilder)`
         */
        static fillSelectorSuggestions(suggestionBuilder: $SuggestionsBuilder): void;
        /**
         * Registers a new `IEntitySelectorType` for the given `token`.
         */
        static register(token: string, type: $IEntitySelectorType): void;
        /**
         * This method is called in `EntitySelectorParser#parse()`
         * 
         * If the REGISTRY does not contain a custom selector for the command being parsed,
         * this method returns `null` and the vanilla logic in `EntitySelectorParser#parseSelector()` is used.
         */
        static parseSelector(parser: $EntitySelectorParser): $EntitySelector;
        constructor();
    }
    /**
     * Implementations of this interface can be registered using `EntitySelectorManager#register`
     */
    export class $IEntitySelectorType {
    }
    export interface $IEntitySelectorType {
        /**
         * Returns an `Component` containing a short description for this selector type.
         */
        getSuggestionTooltip(): $Component;
        /**
         * Returns an `EntitySelector` based on the given `EntitySelectorParser`.
         * 
         * Use `EntitySelectorParser#getReader` to read extra arguments and `EntitySelectorParser#addPredicate(Predicate)` to add the corresponding filters.
         * 
         * If the token being parsed does not match the syntax of this selector, this method should throw an appropriate `CommandSyntaxException`.
         */
        build(parser: $EntitySelectorParser): $EntitySelector;
        get suggestionTooltip(): $Component;
    }
}
