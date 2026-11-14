import { $CommandResultCallback_, $ExecutionCommandSource } from "@package/net/minecraft/commands";
import { $Consumer_ } from "@package/java/util/function";
import { $UnboundEntryAction, $CommandQueueEntry, $CommandQueueEntry_, $Frame_, $ChainModifiers_, $EntryAction, $ExecutionContext, $Frame, $ExecutionControl } from "@package/net/minecraft/commands/execution";
import { $DynamicCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $List_ } from "@package/java/util";
import { $InstantiatedFunction } from "@package/net/minecraft/commands/functions";
import { $ContextChain, $CommandContext } from "@package/com/mojang/brigadier/context";

declare module "@package/net/minecraft/commands/execution/tasks" {
    export class $BuildContexts$Continuation<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(commandInput: string, command: $ContextChain<T>, modifiers: $ChainModifiers_, originalSource: T, sources: $List_<T>);
    }
    export class $CallFunction<T extends $ExecutionCommandSource<T>> implements $UnboundEntryAction<T> {
        execute(source: T, executionContext: $ExecutionContext<T>, frame: $Frame_): void;
        bind(source: T): $EntryAction<T>;
        constructor(_function: $InstantiatedFunction<T>, resultCallback: $CommandResultCallback_, returnParentFrame: boolean);
    }
    export class $BuildContexts<T extends $ExecutionCommandSource<T>> {
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(commandInput: string, command: $ContextChain<T>);
    }
    export class $ContinuationTask$TaskProvider<T, P> {
    }
    export interface $ContinuationTask$TaskProvider<T, P> {
        create(frame: $Frame_, argument: P): $CommandQueueEntry<T>;
    }
    /**
     * Values that may be interpreted as {@link $ContinuationTask$TaskProvider}.
     */
    export type $ContinuationTask$TaskProvider_<T, P> = ((arg0: $Frame, arg1: P) => $CommandQueueEntry_<T>);
    export class $ContinuationTask<T, P> implements $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
        static schedule<T, P>(executionContext: $ExecutionContext<T>, frame: $Frame_, _arguments: $List_<P>, taskProvider: $ContinuationTask$TaskProvider_<T, P>): void;
    }
    export class $IsolatedCall<T extends $ExecutionCommandSource<T>> implements $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
        constructor(taskProducer: $Consumer_<$ExecutionControl<T>>, output: $CommandResultCallback_);
    }
    export class $ExecuteCommand<T extends $ExecutionCommandSource<T>> implements $UnboundEntryAction<T> {
        execute(source: T, executionContext: $ExecutionContext<T>, frame: $Frame_): void;
        bind(source: T): $EntryAction<T>;
        constructor(commandInput: string, modifiers: $ChainModifiers_, executionContext: $CommandContext<T>);
    }
    export class $FallthroughTask<T extends $ExecutionCommandSource<T>> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static instance<T extends $ExecutionCommandSource<T>>(): $EntryAction<T>;
        constructor();
    }
    export class $BuildContexts$TopLevel<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(commandInput: string, command: $ContextChain<T>, source: T);
    }
    export class $BuildContexts$Unbound<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $UnboundEntryAction<T> {
        execute(arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame_): void;
        bind(arg0: T): $EntryAction<T>;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(arg0: string, arg1: $ContextChain<T>);
    }
}
