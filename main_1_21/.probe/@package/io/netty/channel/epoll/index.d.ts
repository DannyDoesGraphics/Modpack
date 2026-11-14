import { $RejectedExecutionHandler_, $EventExecutorChooserFactory_ } from "@package/io/netty/util/concurrent";
import { $SelectStrategyFactory_, $MultithreadEventLoopGroup, $EventLoopTaskQueueFactory_ } from "@package/io/netty/channel";
import { $ThreadFactory_, $Executor_ } from "@package/java/util/concurrent";

declare module "@package/io/netty/channel/epoll" {
    export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {
        setIoRatio(arg0: number): void;
        constructor(arg0: number, arg1: $Executor_, arg2: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectStrategyFactory_, arg4: $RejectedExecutionHandler_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectStrategyFactory_, arg4: $RejectedExecutionHandler_, arg5: $EventLoopTaskQueueFactory_);
        constructor(arg0: number, arg1: $Executor_, arg2: $EventExecutorChooserFactory_, arg3: $SelectStrategyFactory_, arg4: $RejectedExecutionHandler_, arg5: $EventLoopTaskQueueFactory_, arg6: $EventLoopTaskQueueFactory_);
        constructor();
        constructor(arg0: number, arg1: $ThreadFactory_);
        constructor(arg0: number, arg1: $SelectStrategyFactory_);
        constructor(arg0: $ThreadFactory_);
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: $ThreadFactory_, arg2: number, arg3: $SelectStrategyFactory_);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: $ThreadFactory_, arg2: number);
        constructor(arg0: number, arg1: $ThreadFactory_, arg2: $SelectStrategyFactory_);
        constructor(arg0: number, arg1: $Executor_);
        set ioRatio(value: number);
    }
}
