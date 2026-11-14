import { $Consumer_ } from "@package/java/util/function";
import { $Callable_, $TimeUnit_, $ScheduledExecutorService, $ScheduledFuture as $ScheduledFuture$1, $Future as $Future$1, $AbstractExecutorService } from "@package/java/util/concurrent";
import { $StackTraceElement, $Thread, $Throwable, $Runnable_, $Thread$State, $Iterable, $Runnable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $EventListener, $Collection_ } from "@package/java/util";

declare module "@package/io/netty/util/concurrent" {
    export class $Promise<V> {
    }
    export interface $Promise<V> extends $Future<V> {
        setSuccess(arg0: V): $Promise<V>;
        syncUninterruptibly(): $Promise<V>;
        trySuccess(arg0: V): boolean;
        setFailure(arg0: $Throwable): $Promise<V>;
        tryFailure(arg0: $Throwable): boolean;
        setUncancellable(): boolean;
        addListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $Promise<V>;
        removeListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $Promise<V>;
        await(): $Promise<V>;
        sync(): $Promise<V>;
        awaitUninterruptibly(): $Promise<V>;
        removeListener(arg0: $GenericFutureListener_<$Future<V>>): $Promise<V>;
        addListener(arg0: $GenericFutureListener_<$Future<V>>): $Promise<V>;
        set success(value: V);
        set failure(value: $Throwable);
    }
    export class $AbstractEventExecutor extends $AbstractExecutorService implements $EventExecutor {
        shutdownGracefully(): $Future<never>;
        lazyExecute(arg0: $Runnable_): void;
        newPromise<V>(): $Promise<V>;
        newProgressivePromise<V>(): $ProgressivePromise<V>;
        newSucceededFuture<V>(arg0: V): $Future<V>;
        newFailedFuture<V>(arg0: $Throwable): $Future<V>;
        inEventLoop(): boolean;
        parent(): $EventExecutorGroup;
        iterator(): $Iterator<$EventExecutor>;
        next(): $EventExecutor;
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        schedule<V>(arg0: $Callable_<V>, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<V>;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        submit(arg0: $Runnable_): $Future<never>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        spliterator(): $Spliterator<$EventExecutor>;
        forEach(arg0: $Consumer_<$EventExecutor>): void;
        [Symbol.iterator](): Iterator<$EventExecutor>
    }
    export class $EventExecutorGroup {
        [Symbol.iterator](): Iterator<$EventExecutor>
    }
    export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<$EventExecutor> {
        isShuttingDown(): boolean;
        shutdownGracefully(arg0: number, arg1: number, arg2: $TimeUnit_): $Future<never>;
        shutdownGracefully(): $Future<never>;
        terminationFuture(): $Future<never>;
        /**
         * @deprecated
         */
        shutdown(): void;
        iterator(): $Iterator<$EventExecutor>;
        next(): $EventExecutor;
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        schedule<V>(arg0: $Callable_<V>, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<V>;
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        submit(arg0: $Runnable_): $Future<never>;
        /**
         * @deprecated
         */
        shutdownNow(): $List<$Runnable>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        [Symbol.iterator](): Iterator<$EventExecutor>
        get shuttingDown(): boolean;
    }
    export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {
        executorCount(): number;
    }
    export class $AbstractEventExecutorGroup implements $EventExecutorGroup {
        shutdownGracefully(): $Future<never>;
        /**
         * @deprecated
         */
        shutdown(): void;
        execute(arg0: $Runnable_): void;
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): T;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>): T;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): $List<$Future$1<T>>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>): $List<$Future$1<T>>;
        /**
         * @deprecated
         */
        shutdownNow(): $List<$Runnable>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        spliterator(): $Spliterator<$EventExecutor>;
        forEach(arg0: $Consumer_<$EventExecutor>): void;
        close(): void;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        constructor();
    }
    export class $OrderedEventExecutor {
    }
    export interface $OrderedEventExecutor extends $EventExecutor {
    }
    export class $EventExecutor {
    }
    export interface $EventExecutor extends $EventExecutorGroup {
        newPromise<V>(): $Promise<V>;
        newProgressivePromise<V>(): $ProgressivePromise<V>;
        newSucceededFuture<V>(arg0: V): $Future<V>;
        newFailedFuture<V>(arg0: $Throwable): $Future<V>;
        inEventLoop(arg0: $Thread): boolean;
        inEventLoop(): boolean;
        parent(): $EventExecutorGroup;
        next(): $EventExecutor;
    }
    export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
    }
    export class $ProgressiveFuture<V> {
    }
    export interface $ProgressiveFuture<V> extends $Future<V> {
        syncUninterruptibly(): $ProgressiveFuture<V>;
        addListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $ProgressiveFuture<V>;
        removeListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $ProgressiveFuture<V>;
        await(): $ProgressiveFuture<V>;
        sync(): $ProgressiveFuture<V>;
        awaitUninterruptibly(): $ProgressiveFuture<V>;
        removeListener(arg0: $GenericFutureListener_<$Future<V>>): $ProgressiveFuture<V>;
        addListener(arg0: $GenericFutureListener_<$Future<V>>): $ProgressiveFuture<V>;
    }
    export class $EventExecutorChooserFactory$EventExecutorChooser {
    }
    export interface $EventExecutorChooserFactory$EventExecutorChooser {
        next(): $EventExecutor;
    }
    /**
     * Values that may be interpreted as {@link $EventExecutorChooserFactory$EventExecutorChooser}.
     */
    export type $EventExecutorChooserFactory$EventExecutorChooser_ = (() => $EventExecutor);
    export class $Future<V> {
    }
    export interface $Future<V> extends $Future$1<V> {
        syncUninterruptibly(): $Future<V>;
        addListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $Future<V>;
        removeListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $Future<V>;
        getNow(): V;
        cause(): $Throwable;
        cancel(arg0: boolean): boolean;
        await(arg0: number): boolean;
        await(): $Future<V>;
        await(arg0: number, arg1: $TimeUnit_): boolean;
        sync(): $Future<V>;
        awaitUninterruptibly(arg0: number, arg1: $TimeUnit_): boolean;
        awaitUninterruptibly(arg0: number): boolean;
        awaitUninterruptibly(): $Future<V>;
        removeListener(arg0: $GenericFutureListener_<$Future<V>>): $Future<V>;
        addListener(arg0: $GenericFutureListener_<$Future<V>>): $Future<V>;
        isCancellable(): boolean;
        isSuccess(): boolean;
        get now(): V;
        get cancellable(): boolean;
        get success(): boolean;
    }
    export class $GenericFutureListener<F extends $Future<never>> {
    }
    export interface $GenericFutureListener<F extends $Future<never>> extends $EventListener {
        operationComplete(arg0: F): void;
    }
    /**
     * Values that may be interpreted as {@link $GenericFutureListener}.
     */
    export type $GenericFutureListener_<F> = ((arg0: F) => void);
    export class $ThreadProperties {
    }
    export interface $ThreadProperties {
        name(): string;
        priority(): number;
        id(): number;
        stackTrace(): $StackTraceElement[];
        isDaemon(): boolean;
        isAlive(): boolean;
        isInterrupted(): boolean;
        state(): $Thread$State;
        get daemon(): boolean;
        get alive(): boolean;
        get interrupted(): boolean;
    }
    export class $RejectedExecutionHandler {
    }
    export interface $RejectedExecutionHandler {
        rejected(arg0: $Runnable_, arg1: $SingleThreadEventExecutor): void;
    }
    /**
     * Values that may be interpreted as {@link $RejectedExecutionHandler}.
     */
    export type $RejectedExecutionHandler_ = ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void);
    export class $ScheduledFuture<V> {
    }
    export interface $ScheduledFuture<V> extends $Future<V>, $ScheduledFuture$1<V> {
    }
    export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {
        threadProperties(): $ThreadProperties;
        pendingTasks(): number;
        addShutdownHook(arg0: $Runnable_): void;
        removeShutdownHook(arg0: $Runnable_): void;
    }
    export class $ProgressivePromise<V> {
    }
    export interface $ProgressivePromise<V> extends $Promise<V>, $ProgressiveFuture<V> {
        tryProgress(arg0: number, arg1: number): boolean;
        setProgress(arg0: number, arg1: number): $ProgressivePromise<V>;
        setSuccess(arg0: V): $ProgressivePromise<V>;
        syncUninterruptibly(): $ProgressivePromise<V>;
        setFailure(arg0: $Throwable): $ProgressivePromise<V>;
        addListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $ProgressivePromise<V>;
        removeListeners(...arg0: $GenericFutureListener_<$Future<V>>[]): $ProgressivePromise<V>;
        await(): $ProgressivePromise<V>;
        sync(): $ProgressivePromise<V>;
        awaitUninterruptibly(): $ProgressivePromise<V>;
        removeListener(arg0: $GenericFutureListener_<$Future<V>>): $ProgressivePromise<V>;
        addListener(arg0: $GenericFutureListener_<$Future<V>>): $ProgressivePromise<V>;
        set success(value: V);
        set failure(value: $Throwable);
    }
    export class $EventExecutorChooserFactory {
    }
    export interface $EventExecutorChooserFactory {
        newChooser(arg0: $EventExecutor[]): $EventExecutorChooserFactory$EventExecutorChooser;
    }
    /**
     * Values that may be interpreted as {@link $EventExecutorChooserFactory}.
     */
    export type $EventExecutorChooserFactory_ = ((arg0: $EventExecutor[]) => $EventExecutorChooserFactory$EventExecutorChooser_);
}
