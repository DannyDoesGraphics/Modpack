import { $Logger } from "@package/org/slf4j";
import { $Throwable, $Thread$UncaughtExceptionHandler, $Exception, $RuntimeException, $Thread } from "@package/java/lang";
import { $RealmsError } from "@package/com/mojang/realmsclient/client";

declare module "@package/com/mojang/realmsclient/exception" {
    export class $RealmsServiceException extends $Exception {
        realmsError: $RealmsError;
        constructor(realmsError: $RealmsError);
    }
    export class $RealmsHttpException extends $RuntimeException {
        constructor(message: string, cause: $Exception);
    }
    export class $RealmsDefaultUncaughtExceptionHandler implements $Thread$UncaughtExceptionHandler {
        uncaughtException(thread: $Thread, throwable: $Throwable): void;
        constructor(logger: $Logger);
    }
    export class $RetryCallException extends $RealmsServiceException {
        delaySeconds: number;
        realmsError: $RealmsError;
        static DEFAULT_DELAY: number;
        constructor(retryAfter: number, httpResultCode: number);
    }
}
