import { $IncludeExclude_, $FuzzyMode_ } from "@package/appeng/api/config";
import { $Iterable, $Iterable_ } from "@package/java/lang";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/util/prioritylist" {
    export class $FuzzyPriorityList implements $IPartitionList {
        getItems(): $Iterable<$AEKey>;
        isListed(arg0: $AEKey): boolean;
        isEmpty(): boolean;
        matchesFilter(arg0: $AEKey, arg1: $IncludeExclude_): boolean;
        constructor(arg0: $KeyCounter, arg1: $FuzzyMode_);
        get items(): $Iterable<$AEKey>;
        get empty(): boolean;
    }
    export class $DefaultPriorityList implements $IPartitionList {
        getItems(): $Iterable<$AEKey>;
        isListed(arg0: $AEKey): boolean;
        isEmpty(): boolean;
        matchesFilter(arg0: $AEKey, arg1: $IncludeExclude_): boolean;
        static INSTANCE: $DefaultPriorityList;
        constructor();
        get items(): $Iterable<$AEKey>;
        get empty(): boolean;
    }
    export class $MergedPriorityList implements $IPartitionList {
        getItems(): $Iterable<$AEKey>;
        addNewList(arg0: $IPartitionList, arg1: boolean): void;
        isListed(arg0: $AEKey): boolean;
        isEmpty(): boolean;
        matchesFilter(arg0: $AEKey, arg1: $IncludeExclude_): boolean;
        constructor();
        get items(): $Iterable<$AEKey>;
        get empty(): boolean;
    }
    export class $IPartitionList$Builder {
        fuzzyMode(arg0: $FuzzyMode_): void;
        add(arg0: $AEKey): void;
        addAll(arg0: $Iterable_<$AEKey>): void;
        build(): $IPartitionList;
    }
    export class $IPartitionList {
        static builder(): $IPartitionList$Builder;
    }
    export interface $IPartitionList {
        getItems(): $Iterable<$AEKey>;
        isListed(arg0: $AEKey): boolean;
        matchesFilter(arg0: $AEKey, arg1: $IncludeExclude_): boolean;
        isEmpty(): boolean;
        get items(): $Iterable<$AEKey>;
        get empty(): boolean;
    }
    export class $PrecisePriorityList implements $IPartitionList {
        getItems(): $Iterable<$AEKey>;
        isListed(arg0: $AEKey): boolean;
        isEmpty(): boolean;
        matchesFilter(arg0: $AEKey, arg1: $IncludeExclude_): boolean;
        constructor(arg0: $KeyCounter);
        get items(): $Iterable<$AEKey>;
        get empty(): boolean;
    }
}
