import { $UnsupportedOperationException, $Exception } from "@package/java/lang";

declare module "@package/org/watermedia/core/exceptions" {
    export class $UnsupportedArchitechtureException extends $UnsupportedOperationException {
        constructor();
    }
    export class $IncompatibleModException extends $Exception {
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $IllegalEnvironmentException extends $Exception {
        constructor();
    }
    export class $IllegalTLauncherException extends $Exception {
        constructor();
    }
}
