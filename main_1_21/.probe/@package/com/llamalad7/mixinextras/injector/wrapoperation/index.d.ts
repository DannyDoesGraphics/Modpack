import { $Object } from "@package/java/lang";

declare module "@package/com/llamalad7/mixinextras/injector/wrapoperation" {
    export class $Operation<R> {
    }
    export interface $Operation<R> {
        call(...arg0: $Object[]): R;
    }
    /**
     * Values that may be interpreted as {@link $Operation}.
     */
    export type $Operation_<R> = ((arg0: $Object[]) => R);
}
