import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $Annotation } from "@package/java/lang/annotation";
import { $Function_ } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IFacadeItem } from "@package/appeng/api/implementations/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $IPartItem, $IFacadePart, $IPart, $IPartHost } from "@package/appeng/api/parts";
import { $AEBaseItem } from "@package/appeng/items";

declare module "@package/appeng/items/parts" {
    export class $PartModels implements $Annotation {
    }
    export class $PartItem<T extends $IPart> extends $AEBaseItem implements $IPartItem<T> {
        getPartClass(): $Class<$Item>;
        createPart(): $Item;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $Class<$Item_>, arg2: $Function_<$IPartItem<$Item>, $Item>);
        get partClass(): $Class<$Item>;
    }
    export class $ColoredPartItem<T extends $IPart> extends $PartItem<T> {
        getColor(): $AEColor;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $Class<T>, arg2: $Function_<$ColoredPartItem<T>, T>, arg3: $AEColor_);
        get color(): $AEColor;
    }
    export class $PartModelsHelper {
        static createModels(arg0: $Class<never>): $List<$ResourceLocation>;
        constructor();
    }
    export class $FacadeItem extends $AEBaseItem implements $IFacadeItem {
        static canPlaceFacade(arg0: $IPartHost, arg1: $IFacadePart): boolean;
        getTextureItem(arg0: $ItemStack_): $ItemStack;
        createFacadeForItemUnchecked(arg0: $ItemStack_): $ItemStack;
        getTextureBlockState(arg0: $ItemStack_): $BlockState;
        static createFacade(arg0: $ItemStack_, arg1: $Direction_): $IFacadePart;
        createFacadeForItem(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        createPartFromItemStack(arg0: $ItemStack_, arg1: $Direction_): $IFacadePart;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
