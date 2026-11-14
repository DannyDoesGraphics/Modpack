import { $CommandResultCallback_, $ExecutionCommandSource, $CommandResultCallback } from "@package/net/minecraft/commands";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Command, $RedirectModifier } from "@package/com/mojang/brigadier";
import { $ContextChain, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $List, $List_, $Collection } from "@package/java/util";
import { $InstantiatedFunction } from "@package/net/minecraft/commands/functions";
export * as tasks from "@package/net/minecraft/commands/execution/tasks";

declare module "@package/net/minecraft/commands/execution" {
    export class $ExecutionContext<T> implements $AutoCloseable {
        forkLimit(): number;
        frameControlForDepth(depth: number): $Frame$FrameControl;
        discardAtDepthOrHigher(depth: number): void;
        incrementCost(): void;
        runCommandQueue(): void;
        static queueInitialCommandExecution<T extends $ExecutionCommandSource<T>>(executionContext: $ExecutionContext<T>, commandInput: string, command: $ContextChain<T>, source: T, returnValueConsumer: $CommandResultCallback_): void;
        tracer(): $TraceCallbacks;
        tracer(tracer: $TraceCallbacks | null): void;
        queueNext(entry: $CommandQueueEntry_<T>): void;
        static queueInitialFunctionCall<T extends $ExecutionCommandSource<T>>(executionContext: $ExecutionContext<T>, _function: $InstantiatedFunction<T>, source: T, returnValueConsumer: $CommandResultCallback_): void;
        close(): void;
        profiler(): $ProfilerFiller;
        constructor(commandLimit: number, forkLimit: number, profiler: $ProfilerFiller);
    }
    export class $ChainModifiers extends $Record {
        setForked(): $ChainModifiers;
        isForked(): boolean;
        flags(): number;
        isReturn(): boolean;
        setReturn(): $ChainModifiers;
        static DEFAULT: $ChainModifiers;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ChainModifiers}.
     */
    export type $ChainModifiers_ = { flags?: number,  } | [flags?: number, ];
    export class $Frame$FrameControl {
    }
    export interface $Frame$FrameControl {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $Frame$FrameControl}.
     */
    export type $Frame$FrameControl_ = (() => void);
    export class $TraceCallbacks {
    }
    export interface $TraceCallbacks extends $AutoCloseable {
        onCommand(depth: number, command: string): void;
        onReturn(depth: number, command: string, returnValue: number): void;
        onCall(depth: number, _function: $ResourceLocation_, commands: number): void;
        close(): void;
        onError(errorMessage: string): void;
    }
    export class $UnboundEntryAction<T> {
    }
    export interface $UnboundEntryAction<T> {
        execute(source: T, executionContext: $ExecutionContext<T>, frame: $Frame_): void;
        bind(source: T): $EntryAction<T>;
    }
    /**
     * Values that may be interpreted as {@link $UnboundEntryAction}.
     */
    export type $UnboundEntryAction_<T> = ((arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame) => void);
    export class $CustomCommandExecutor<T> {
    }
    export interface $CustomCommandExecutor<T> {
        run(source: T, contextChain: $ContextChain<T>, chainModifiers: $ChainModifiers_, executionControl: $ExecutionControl<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomCommandExecutor}.
     */
    export type $CustomCommandExecutor_<T> = ((arg0: T, arg1: $ContextChain<T>, arg2: $ChainModifiers, arg3: $ExecutionControl<T>) => void);
    export class $ExecutionControl<T> {
        static create<T extends $ExecutionCommandSource<T>>(executionContext: $ExecutionContext<T>, frame: $Frame_): $ExecutionControl<T>;
    }
    export interface $ExecutionControl<T> {
        tracer(): $TraceCallbacks;
        tracer(tracer: $TraceCallbacks | null): void;
        queueNext(entry: $EntryAction_<T>): void;
        currentFrame(): $Frame;
    }
    export class $CustomCommandExecutor$CommandAdapter<T> {
    }
    export interface $CustomCommandExecutor$CommandAdapter<T> extends $Command<T>, $CustomCommandExecutor<T> {
        run(context: $CommandContext<T>): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomCommandExecutor$CommandAdapter}.
     */
    export type $CustomCommandExecutor$CommandAdapter_<T> = (() => void);
    export class $CommandQueueEntry<T> extends $Record {
        execute(context: $ExecutionContext<T>): void;
        action(): $EntryAction<T>;
        frame(): $Frame;
        constructor(arg0: $Frame_, arg1: $EntryAction_<T>);
    }
    /**
     * Values that may be interpreted as {@link $CommandQueueEntry}.
     */
    export type $CommandQueueEntry_<T> = { action?: $EntryAction_<any>, frame?: $Frame_,  } | [action?: $EntryAction_<any>, frame?: $Frame_, ];
    export class $CustomModifierExecutor<T> {
    }
    export interface $CustomModifierExecutor<T> {
        apply(originalSource: T, soruces: $List_<T>, contextChain: $ContextChain<T>, chainModifiers: $ChainModifiers_, executionControl: $ExecutionControl<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomModifierExecutor}.
     */
    export type $CustomModifierExecutor_<T> = ((arg0: T, arg1: $List<T>, arg2: $ContextChain<T>, arg3: $ChainModifiers, arg4: $ExecutionControl<T>) => void);
    export class $CustomModifierExecutor$ModifierAdapter<T> {
    }
    export interface $CustomModifierExecutor$ModifierAdapter<T> extends $RedirectModifier<T>, $CustomModifierExecutor<T> {
        apply(context: $CommandContext<T>): $Collection<T>;
    }
    /**
     * Values that may be interpreted as {@link $CustomModifierExecutor$ModifierAdapter}.
     */
    export type $CustomModifierExecutor$ModifierAdapter_<T> = (() => void);
    export class $EntryAction<T> {
    }
    export interface $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
    }
    /**
     * Values that may be interpreted as {@link $EntryAction}.
     */
    export type $EntryAction_<T> = ((arg0: $ExecutionContext<T>, arg1: $Frame) => void);
    export class $Frame extends $Record {
        frameControl(): $Frame$FrameControl;
        returnValueConsumer(): $CommandResultCallback;
        returnSuccess(result: number): void;
        returnFailure(): void;
        depth(): number;
        discard(): void;
        constructor(arg0: number, arg1: $CommandResultCallback_, arg2: $Frame$FrameControl_);
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { depth?: number, returnValueConsumer?: $CommandResultCallback_, frameControl?: $Frame$FrameControl_,  } | [depth?: number, returnValueConsumer?: $CommandResultCallback_, frameControl?: $Frame$FrameControl_, ];
    export class $CustomCommandExecutor$WithErrorHandling<T extends $ExecutionCommandSource<T>> implements $CustomCommandExecutor<T> {
        run(source: T, contextChain: $ContextChain<T>, chainModifiers: $ChainModifiers_, executionControl: $ExecutionControl<T>): void;
        constructor();
    }
}
