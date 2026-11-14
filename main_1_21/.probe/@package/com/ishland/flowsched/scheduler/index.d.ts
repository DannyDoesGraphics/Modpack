import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        isDependencyDirty(): boolean;
        scheduleFlushDependencyCache(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        holdsDependency(): boolean;
        submitAction(cancellation: $Cancellable, status: $ItemStatus<K, V, Ctx>): void;
        changingStatusTo(): $ItemStatus<K, V, Ctx>;
        tryCancelAction(): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        subscribeOp(op: $Completable): void;
        clearFlag(flag: number): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        getOpFuture(): $CompletableFuture<void>;
        submitOp(op: $CompletionStage<void>): void;
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        swapTicket(origStatus: $ItemStatus<K, V, Ctx>, orig: $ItemTicket, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        getCriticalSectionExecutor(): $Executor;
        finishAction(): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        submitOpListener(runnable: $Runnable_): void;
        getCriticalSectionScheduler(): $Scheduler;
        flushDependencyCache0(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        setFlag(flag: number): void;
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        removeTicket(targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        isBusy(): boolean;
        addTicket(targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        getUserData(): $AtomicReference<UserData>;
        isOpen(): boolean;
        getKey(): K;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        getStatus(): $ItemStatus<K, V, Ctx>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        static FLAG_HAVE_RETRIED: number;
        static UNLOADED_EXCEPTION: $IllegalStateException;
        static FLAG_REMOVED: number;
        static FLAG_BROKEN: number;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get dependencyDirty(): boolean;
        get opFuture(): $CompletableFuture<void>;
        get criticalSectionExecutor(): $Executor;
        get criticalSectionScheduler(): $Scheduler;
        set flag(value: number);
        get busy(): boolean;
        get userData(): $AtomicReference<UserData>;
        get open(): boolean;
        get key(): K;
        get flags(): number;
        get item(): $AtomicReference<V>;
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        getPrev(): $ItemStatus<K, V, Ctx>;
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        postUpgradeToThis(arg0: Ctx): $Completable;
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getNext(): $ItemStatus<K, V, Ctx>;
        ordinal(): number;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        get prev(): $ItemStatus<K, V, Ctx>;
        get allStatuses(): $ItemStatus<K, V, Ctx>[];
        get next(): $ItemStatus<K, V, Ctx>;
    }
    export class $ItemTicket$TicketType {
        getDescription(): string;
        static DEPENDENCY: $ItemTicket$TicketType;
        static EXTERNAL: $ItemTicket$TicketType;
        constructor(description: string);
        get description(): string;
    }
    export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
        addTicket0(key: K, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): $ItemHolder<K, V, Ctx, UserData>;
        swapTicket(key: K, origStatus: $ItemStatus<K, V, Ctx>, orig: $ItemTicket, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        removeTicket0(key: K, targetStatus: $ItemStatus<K, V, Ctx>, ticket: $ItemTicket): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        itemCount(): number;
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket {
        consumeCallback(): void;
        getType(): $ItemTicket$TicketType;
        getSource(): $Object;
        constructor(type: $ItemTicket$TicketType, source: $Object, callback: $Runnable_);
        constructor(type: $ItemTicket$TicketType, source: $Object, callback: $Runnable_, consumptions: number);
        get type(): $ItemTicket$TicketType;
        get source(): $Object;
    }
    export class $Cancellable {
        setup(onCancel: $Runnable_): void;
        cancel(): boolean;
        complete(): boolean;
        isCancelled(): boolean;
        isCompleted(): boolean;
        constructor();
        set up(value: $Runnable_);
        get cancelled(): boolean;
        get completed(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
