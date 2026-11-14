import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CableBusStorage } from "@package/appeng/parts";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $IFacadePart, $IPartCollisionHelper, $IPartHost, $IFacadeContainer } from "@package/appeng/api/parts";

declare module "@package/appeng/facade" {
    export class $FacadePart implements $IFacadePart {
        getBoxes(arg0: $IPartCollisionHelper, arg1: boolean): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        getTextureItem(): $ItemStack;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        getItem(): $Item;
        getSide(): $Direction;
        getItemStack(): $ItemStack;
        getBlockState(): $BlockState;
        constructor(arg0: $BlockState_, arg1: $Direction_);
        get textureItem(): $ItemStack;
        get item(): $Item;
        get side(): $Direction;
        get itemStack(): $ItemStack;
        get blockState(): $BlockState;
    }
    export class $FacadeContainer implements $IFacadeContainer {
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        canAddFacade(arg0: $IFacadePart): boolean;
        addFacade(arg0: $IFacadePart): boolean;
        getFacade(arg0: $Direction_): $IFacadePart;
        removeFacade(arg0: $IPartHost, arg1: $Direction_): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isEmpty(): boolean;
        constructor(arg0: $CableBusStorage, arg1: $Consumer_<$Direction>);
        get empty(): boolean;
    }
}
