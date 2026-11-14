import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/appeng/integration/abstraction" {
    export class $IAEFacade {
    }
    export interface $IAEFacade {
        getFacadeState(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $IAEFacade}.
     */
    export type $IAEFacade_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction) => $BlockState_);
    export class $ItemListModAdapter {
        static none(): $ItemListModAdapter;
    }
    export interface $ItemListModAdapter {
        getShortName(): string;
        isEnabled(): boolean;
        setSearchText(arg0: string): void;
        getSearchText(): string;
        hasSearchFocus(): boolean;
        get shortName(): string;
        get enabled(): boolean;
    }
    export class $ItemListMod {
        static setAdapter(arg0: $ItemListModAdapter): void;
        static getShortName(): string;
        static isEnabled(): boolean;
        static setSearchText(arg0: string): void;
        static getSearchText(): string;
        static hasSearchFocus(): boolean;
        static set adapter(value: $ItemListModAdapter);
        static get shortName(): string;
        static get enabled(): boolean;
    }
}
