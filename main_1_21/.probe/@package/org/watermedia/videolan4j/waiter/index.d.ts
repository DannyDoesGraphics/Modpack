import { $Enum, $RuntimeException } from "@package/java/lang";
export * as mediaplayer from "@package/org/watermedia/videolan4j/waiter/mediaplayer";
export * as media from "@package/org/watermedia/videolan4j/waiter/media";

declare module "@package/org/watermedia/videolan4j/waiter" {
    export class $Waiter<C, R> {
        await(): R;
        constructor(arg0: C);
    }
    export class $UnexpectedWaiterFinishedException extends $RuntimeException {
    }
    export class $ResultStatus extends $Enum<$ResultStatus> {
    }
    /**
     * Values that may be interpreted as {@link $ResultStatus}.
     */
    export type $ResultStatus_ = "normal" | "error" | "finished";
    export class $UnexpectedWaiterErrorException extends $RuntimeException {
    }
    export class $BeforeWaiterAbortedException extends $RuntimeException {
    }
}
