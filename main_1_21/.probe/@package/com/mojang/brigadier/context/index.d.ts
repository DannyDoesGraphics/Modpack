import { $Command_, $Command, $CommandDispatcher, $RedirectModifier, $RedirectModifier_, $ImmutableStringReader, $ResultConsumer_ } from "@package/com/mojang/brigadier";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $List_, $Map_, $Map, $Collection } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";

declare module "@package/com/mojang/brigadier/context" {
    export class $CommandContext<S> {
        getCommand(): $Command<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        getRedirectModifier(): $RedirectModifier<S>;
        hasNodes(): boolean;
        isForked(): boolean;
        getLastChild(): $CommandContext<S>;
        getRange(): $StringRange;
        getChild(): $CommandContext<S>;
        getSource(): S;
        getRootNode(): $CommandNode<S>;
        copyFor(arg0: S): $CommandContext<S>;
        getArgument<V>(arg0: string, arg1: $Class<V>): V;
        getInput(): string;
        constructor(arg0: S, arg1: string, arg2: $Map_<string, $ParsedArgument<S, never>>, arg3: $Command_<S>, arg4: $CommandNode<S>, arg5: $List_<$ParsedCommandNode<S>>, arg6: $StringRange, arg7: $CommandContext<S>, arg8: $RedirectModifier_<S>, arg9: boolean);
        get command(): $Command<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get redirectModifier(): $RedirectModifier<S>;
        get forked(): boolean;
        get lastChild(): $CommandContext<S>;
        get range(): $StringRange;
        get child(): $CommandContext<S>;
        get source(): S;
        get rootNode(): $CommandNode<S>;
        get input(): string;
    }
    export class $ParsedCommandNode<S> {
        getRange(): $StringRange;
        getNode(): $CommandNode<S>;
        constructor(arg0: $CommandNode<S>, arg1: $StringRange);
        get range(): $StringRange;
        get node(): $CommandNode<S>;
    }
    export class $StringRange {
        getEnd(): number;
        static encompassing(arg0: $StringRange, arg1: $StringRange): $StringRange;
        get(arg0: string): string;
        get(arg0: $ImmutableStringReader): string;
        getLength(): number;
        isEmpty(): boolean;
        static at(arg0: number): $StringRange;
        static between(arg0: number, arg1: number): $StringRange;
        getStart(): number;
        constructor(arg0: number, arg1: number);
        get end(): number;
        get length(): number;
        get empty(): boolean;
        get start(): number;
    }
    export class $ContextChain$Stage extends $Enum<$ContextChain$Stage> {
        static values(): $ContextChain$Stage[];
        static valueOf(arg0: string): $ContextChain$Stage;
        static EXECUTE: $ContextChain$Stage;
        static MODIFY: $ContextChain$Stage;
    }
    /**
     * Values that may be interpreted as {@link $ContextChain$Stage}.
     */
    export type $ContextChain$Stage_ = "modify" | "execute";
    export class $CommandContextBuilder<S> {
        withArgument(arg0: string, arg1: $ParsedArgument<S, never>): $CommandContextBuilder<S>;
        getCommand(): $Command<S>;
        withCommand(arg0: $Command_<S>): $CommandContextBuilder<S>;
        withChild(arg0: $CommandContextBuilder<S>): $CommandContextBuilder<S>;
        findSuggestionContext(arg0: number): $SuggestionContext<S>;
        withNode(arg0: $CommandNode<S>, arg1: $StringRange): $CommandContextBuilder<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        withSource(arg0: S): $CommandContextBuilder<S>;
        getLastChild(): $CommandContextBuilder<S>;
        getRange(): $StringRange;
        copy(): $CommandContextBuilder<S>;
        build(arg0: string): $CommandContext<S>;
        getChild(): $CommandContextBuilder<S>;
        getSource(): S;
        getArguments(): $Map<string, $ParsedArgument<S, never>>;
        getRootNode(): $CommandNode<S>;
        getDispatcher(): $CommandDispatcher<S>;
        constructor(arg0: $CommandDispatcher<S>, arg1: S, arg2: $CommandNode<S>, arg3: number);
        get command(): $Command<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get lastChild(): $CommandContextBuilder<S>;
        get range(): $StringRange;
        get child(): $CommandContextBuilder<S>;
        get source(): S;
        get arguments(): $Map<string, $ParsedArgument<S, never>>;
        get rootNode(): $CommandNode<S>;
        get dispatcher(): $CommandDispatcher<S>;
    }
    export class $ContextChain<S> {
        static runModifier<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): $Collection<S>;
        static runExecutable<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): number;
        getTopContext(): $CommandContext<S>;
        static tryFlatten<S>(arg0: $CommandContext<S>): ($ContextChain<S>) | undefined;
        executeAll(arg0: S, arg1: $ResultConsumer_<S>): number;
        nextStage(): $ContextChain<S>;
        getStage(): $ContextChain$Stage;
        constructor(arg0: $List_<$CommandContext<S>>, arg1: $CommandContext<S>);
        get topContext(): $CommandContext<S>;
        get stage(): $ContextChain$Stage;
    }
    export class $ParsedArgument<S, T> {
        getRange(): $StringRange;
        getResult(): T;
        constructor(arg0: number, arg1: number, arg2: T);
        get range(): $StringRange;
        get result(): T;
    }
    export class $SuggestionContext<S> {
        parent: $CommandNode<S>;
        startPos: number;
        constructor(arg0: $CommandNode<S>, arg1: number);
    }
}
