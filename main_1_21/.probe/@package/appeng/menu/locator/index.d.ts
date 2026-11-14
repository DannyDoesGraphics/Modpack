import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Function_, $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AEBasePart } from "@package/appeng/parts";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record, $Class } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/menu/locator" {
    export class $MenuLocators {
        static forStack(arg0: $ItemStack_): $ItemMenuHostLocator;
        static writeToPacket<T extends $MenuHostLocator>(arg0: $FriendlyByteBuf, arg1: T): void;
        static readFromPacket(arg0: $FriendlyByteBuf): $MenuHostLocator;
        static forHand(arg0: $Player, arg1: $InteractionHand_): $ItemMenuHostLocator;
        static forItemUseContext(arg0: $UseOnContext): $ItemMenuHostLocator;
        static forInventorySlot(arg0: number): $ItemMenuHostLocator;
        static forPart(arg0: $AEBasePart): $MenuHostLocator;
        static forBlockEntity(arg0: $BlockEntity): $MenuHostLocator;
        static forCurioSlot(arg0: number): $ItemMenuHostLocator;
        static forCurioSlot(arg0: number, arg1: $UseOnContext): $ItemMenuHostLocator;
        static register<T extends $MenuHostLocator>(arg0: $Class<T>, arg1: $BiConsumer_<T, $FriendlyByteBuf>, arg2: $Function_<$FriendlyByteBuf, T>): void;
        constructor();
    }
    export class $MenuHostLocator {
    }
    export interface $MenuHostLocator {
        locate<T>(arg0: $Player, arg1: $Class<T>): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuHostLocator}.
     */
    export type $MenuHostLocator_ = ((arg0: $Player, arg1: $Class<any>) => any);
    export class $ItemMenuHostLocator {
        static LOG: $Logger;
    }
    export interface $ItemMenuHostLocator extends $MenuHostLocator {
        locateItem(arg0: $Player): $ItemStack;
        getPlayerInventorySlot(): number;
        locate<T>(arg0: $Player, arg1: $Class<T>): T;
        hitResult(): $BlockHitResult;
        get playerInventorySlot(): number;
    }
    export class $CuriosItemLocator extends $Record implements $ItemMenuHostLocator {
        getPlayerInventorySlot(): number;
        locate<T>(arg0: $Player, arg1: $Class<T>): T;
        get playerInventorySlot(): number;
    }
    /**
     * Values that may be interpreted as {@link $CuriosItemLocator}.
     */
    export type $CuriosItemLocator_ = { curioSlot?: number, hitResult?: $BlockHitResult,  } | [curioSlot?: number, hitResult?: $BlockHitResult, ];
    export class $MenuLocators$Registration<T extends $MenuHostLocator> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MenuLocators$Registration}.
     */
    export type $MenuLocators$Registration_<T> = { writeToPacket?: $BiConsumer_<$MenuHostLocator, $FriendlyByteBuf>, locatorClass?: $Class<$MenuHostLocator_>, readFromPacket?: $Function_<$FriendlyByteBuf, $MenuHostLocator>,  } | [writeToPacket?: $BiConsumer_<$MenuHostLocator, $FriendlyByteBuf>, locatorClass?: $Class<$MenuHostLocator_>, readFromPacket?: $Function_<$FriendlyByteBuf, $MenuHostLocator>, ];
    export class $InventoryItemLocator extends $Record implements $ItemMenuHostLocator {
        getPlayerInventorySlot(): number;
        locate<T>(arg0: $Player, arg1: $Class<T>): T;
        get playerInventorySlot(): number;
    }
    /**
     * Values that may be interpreted as {@link $InventoryItemLocator}.
     */
    export type $InventoryItemLocator_ = { hitResult?: $BlockHitResult, itemIndex?: number,  } | [hitResult?: $BlockHitResult, itemIndex?: number, ];
    export class $BlockEntityLocator extends $Record implements $MenuHostLocator {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityLocator}.
     */
    export type $BlockEntityLocator_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $PartLocator extends $Record implements $MenuHostLocator {
    }
    /**
     * Values that may be interpreted as {@link $PartLocator}.
     */
    export type $PartLocator_ = { pos?: $BlockPos_, side?: $Direction_,  } | [pos?: $BlockPos_, side?: $Direction_, ];
    export class $StackItemLocator extends $Record implements $ItemMenuHostLocator {
        getPlayerInventorySlot(): number;
        locate<T>(arg0: $Player, arg1: $Class<T>): T;
        get playerInventorySlot(): number;
    }
    /**
     * Values that may be interpreted as {@link $StackItemLocator}.
     */
    export type $StackItemLocator_ = { stack?: $ItemStack_,  } | [stack?: $ItemStack_, ];
}
