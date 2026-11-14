import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/schematics/requirement" {
    export class $ItemRequirement$ItemUseType extends $Enum<$ItemRequirement$ItemUseType> {
        static values(): $ItemRequirement$ItemUseType[];
        static valueOf(arg0: string): $ItemRequirement$ItemUseType;
        static CONSUME: $ItemRequirement$ItemUseType;
        static DAMAGE: $ItemRequirement$ItemUseType;
    }
    /**
     * Values that may be interpreted as {@link $ItemRequirement$ItemUseType}.
     */
    export type $ItemRequirement$ItemUseType_ = "consume" | "damage";
    export class $ItemRequirement$StrictNbtStackRequirement extends $ItemRequirement$StackRequirement {
        stack: $ItemStack;
        usage: $ItemRequirement$ItemUseType;
        constructor(arg0: $ItemStack_, arg1: $ItemRequirement$ItemUseType_);
    }
    export class $ItemRequirement$StackRequirement {
        matches(arg0: $ItemStack_): boolean;
        stack: $ItemStack;
        usage: $ItemRequirement$ItemUseType;
        constructor(arg0: $ItemStack_, arg1: $ItemRequirement$ItemUseType_);
    }
    export class $ItemRequirement {
        getRequiredItems(): $List<$ItemRequirement$StackRequirement>;
        isEmpty(): boolean;
        static of(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        static of(arg0: $Entity): $ItemRequirement;
        isInvalid(): boolean;
        union(arg0: $ItemRequirement): $ItemRequirement;
        static NONE: $ItemRequirement;
        static INVALID: $ItemRequirement;
        constructor(arg0: $List_<$ItemRequirement$StackRequirement>);
        constructor(arg0: $ItemRequirement$ItemUseType_, arg1: $List_<$ItemStack_>);
        constructor(arg0: $ItemRequirement$ItemUseType_, arg1: $Item_);
        constructor(arg0: $ItemRequirement$ItemUseType_, arg1: $ItemStack_);
        constructor(arg0: $ItemRequirement$StackRequirement);
        get requiredItems(): $List<$ItemRequirement$StackRequirement>;
        get empty(): boolean;
        get invalid(): boolean;
    }
}
