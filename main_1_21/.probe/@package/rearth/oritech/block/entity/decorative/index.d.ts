import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ColorableMachine$ColorVariant_, $ColorableMachine, $ColorableMachine$ColorVariant } from "@package/rearth/oritech/util";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $AnimatableManager$ControllerRegistrar_, $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/decorative" {
    export class $TechDoorBlockEntity extends $BlockEntity implements $GeoBlockEntity, $ColorableMachine {
        shouldPlaySoundAgain(): boolean;
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        supportRecoloring(): boolean;
        getDefaultColor(): $ColorableMachine$ColorVariant;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static CLOSE: $RawAnimation;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static OPEN: $RawAnimation;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get currentColor(): $ColorableMachine$ColorVariant;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get defaultColor(): $ColorableMachine$ColorVariant;
        get boneResetTime(): number;
    }
    export class $HangarDoorBlockEntity extends $BlockEntity implements $GeoBlockEntity, $ColorableMachine {
        shouldPlaySoundAgain(): boolean;
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        supportRecoloring(): boolean;
        getDefaultColor(): $ColorableMachine$ColorVariant;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static CLOSE: $RawAnimation;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static OPEN: $RawAnimation;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get currentColor(): $ColorableMachine$ColorVariant;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get defaultColor(): $ColorableMachine$ColorVariant;
        get boneResetTime(): number;
    }
}
