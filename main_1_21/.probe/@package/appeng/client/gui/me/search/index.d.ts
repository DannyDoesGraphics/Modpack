import { $GridInventoryEntry } from "@package/appeng/menu/me/common";
import { $Predicate, $Predicate_ } from "@package/java/util/function";

declare module "@package/appeng/client/gui/me/search" {
    export class $AndSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $NameSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $ModSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $TooltipsSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $RepoSearch {
        matches(arg0: $GridInventoryEntry): boolean;
        getSearchString(): string;
        setSearchString(arg0: string): void;
        constructor();
    }
    export class $OrSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $ItemIdSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
    export class $TagSearchPredicate implements $Predicate<$GridInventoryEntry> {
        or(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
        negate(): $Predicate<$GridInventoryEntry>;
        and(arg0: $Predicate_<$GridInventoryEntry>): $Predicate<$GridInventoryEntry>;
    }
}
