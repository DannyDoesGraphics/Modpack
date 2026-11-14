import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $TabButton } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/dev/isxander/yacl3/mixin" {
    export class $TabNavigationBarAccessor {
    }
    export interface $TabNavigationBarAccessor {
        yacl$getLayout(): $LinearLayout;
        yacl$getWidth(): number;
        yacl$getTabManager(): $TabManager;
        yacl$getTabs(): $ImmutableList<$Tab>;
        yacl$getTabButtons(): $ImmutableList<$TabButton>;
    }
    export class $AbstractSelectionListAccessor {
    }
    export interface $AbstractSelectionListAccessor {
    }
    export class $OptionInstanceAccessor<T> {
    }
    export interface $OptionInstanceAccessor<T> {
        getInitialValue(): T;
        get initialValue(): T;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstanceAccessor}.
     */
    export type $OptionInstanceAccessor_<T> = (() => T);
}
