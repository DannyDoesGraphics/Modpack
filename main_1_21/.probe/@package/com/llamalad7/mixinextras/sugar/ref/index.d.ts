
declare module "@package/com/llamalad7/mixinextras/sugar/ref" {
    export class $LocalIntRef {
    }
    export interface $LocalIntRef {
        get(): number;
        set(arg0: number): void;
    }
    export class $LocalBooleanRef {
    }
    export interface $LocalBooleanRef {
        get(): boolean;
        set(arg0: boolean): void;
    }
    export class $LocalFloatRef {
    }
    export interface $LocalFloatRef {
        get(): number;
        set(arg0: number): void;
    }
    export class $LocalRef<T> {
    }
    export interface $LocalRef<T> {
        get(): T;
        set(arg0: T): void;
    }
}
