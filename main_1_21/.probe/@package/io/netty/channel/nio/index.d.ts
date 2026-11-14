import { $RejectedExecutionHandler_, $EventExecutorChooserFactory_ } from "@package/io/netty/util/concurrent";
import { $SelectStrategyFactory_, $MultithreadEventLoopGroup, $EventLoopTaskQueueFactory_ } from "@package/io/netty/channel";
import { $ThreadFactory_, $Executor_ } from "@package/java/util/concurrent";
import { $SelectorProvider } from "@package/java/nio/channels/spi";

declare module "@package/io/netty/channel/nio" {
    export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {
        rebuildSelectors(): void;
        setIoRatio(arg0: number): void;
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectorProvider, arg4: $SelectStrategyFactory_, arg5: $RejectedExecutionHandler_, arg6: $EventLoopTaskQueueFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectorProvider, arg4: $SelectStrategyFactory_, arg5: $RejectedExecutionHandler_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectorProvider, arg4: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectorProvider, arg4: $SelectStrategyFactory_, arg5: $RejectedExecutionHandler_, arg6: $EventLoopTaskQueueFactory_, arg7: $EventLoopTaskQueueFactory_);
        constructor();
        constructor(arg0: number, arg1: $Executor_);
        constructor(arg0: number, arg1: $ThreadFactory_);
        constructor(arg0: $ThreadFactory_);
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Executor_, arg2: $SelectorProvider, arg3: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $SelectorProvider);
        constructor(arg0: number, arg1: $ThreadFactory_, arg2: $SelectorProvider, arg3: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $ThreadFactory_, arg2: $SelectorProvider);
        set ioRatio(value: number);
    }
}
