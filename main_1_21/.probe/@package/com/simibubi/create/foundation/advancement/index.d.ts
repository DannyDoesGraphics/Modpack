import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $UUID_ } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SimpleCriterionTrigger$SimpleInstance, $ContextAwarePredicate, $CriterionValidator } from "@package/net/minecraft/advancements/critereon";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Criterion, $CriterionTrigger, $CriterionTrigger$Listener_ } from "@package/net/minecraft/advancements";
import { $UnaryOperator_, $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/foundation/advancement" {
    export class $AdvancementBehaviour extends $BlockEntityBehaviour {
        static setPlacedBy(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity): void;
        setPlayer(arg0: $UUID_): void;
        awardPlayer(arg0: $CreateAdvancement): void;
        awardPlayerIfNear(arg0: $CreateAdvancement, arg1: number): void;
        static tryAward(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CreateAdvancement): void;
        isOwnerPresent(): boolean;
        add(...arg0: $CreateAdvancement[]): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AdvancementBehaviour>;
        constructor(arg0: $SmartBlockEntity, ...arg1: $CreateAdvancement[]);
        set player(value: $UUID_);
        get ownerPresent(): boolean;
    }
    export class $CriterionTriggerBase$Instance implements $SimpleCriterionTrigger$SimpleInstance {
        validate(arg0: $CriterionValidator): void;
        constructor();
    }
    export class $CreateAdvancement$TaskType extends $Enum<$CreateAdvancement$TaskType> {
    }
    /**
     * Values that may be interpreted as {@link $CreateAdvancement$TaskType}.
     */
    export type $CreateAdvancement$TaskType_ = "silent" | "normal" | "noisy" | "expert" | "secret";
    export class $SimpleCreateTrigger extends $CriterionTriggerBase<$SimpleCreateTrigger$Instance> {
        trigger(arg0: $ServerPlayer): void;
        instance(): $SimpleCreateTrigger$Instance;
        constructor(arg0: string);
    }
    export class $CriterionTriggerBase<T extends $CriterionTriggerBase$Instance> implements $CriterionTrigger<T> {
        addPlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        removePlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(arg0: $PlayerAdvancements): void;
        getId(): $ResourceLocation;
        createCriterion(arg0: T): $Criterion<T>;
        constructor(arg0: string);
        get id(): $ResourceLocation;
    }
    export class $CreateAdvancement$Builder {
    }
    export class $CreateAdvancement {
        isAlreadyAwardedTo(arg0: $Player): boolean;
        awardTo(arg0: $Player): void;
        constructor(arg0: string, arg1: $UnaryOperator_<$CreateAdvancement$Builder>);
    }
    export class $SimpleCreateTrigger$Instance extends $CriterionTriggerBase$Instance {
        constructor();
        constructor(arg0: ($ContextAwarePredicate) | undefined);
    }
    export class $AllAdvancements implements $DataProvider {
        static provideLang(arg0: $BiConsumer_<string, string>): void;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        static register(): void;
        static BLAZE_BURNER: $CreateAdvancement;
        static ANDESITE_CASING: $CreateAdvancement;
        static CUCKOO_CLOCK: $CreateAdvancement;
        static SPOUT: $CreateAdvancement;
        static FROGPORT: $CreateAdvancement;
        static FACTORY_GAUGE: $CreateAdvancement;
        static WINDMILL: $CreateAdvancement;
        static CARDBOARD: $CreateAdvancement;
        static DISPLAY_BOARD: $CreateAdvancement;
        static BELT: $CreateAdvancement;
        static STEAM_ENGINE: $CreateAdvancement;
        static PULLEY_MAXED: $CreateAdvancement;
        static COMPACTING: $CreateAdvancement;
        static CART_PICKUP: $CreateAdvancement;
        static LONG_TRAIN: $CreateAdvancement;
        static FAN_PROCESSING: $CreateAdvancement;
        static MECHANISM: $CreateAdvancement;
        static EXTENDO_GRIP: $CreateAdvancement;
        static HONEY_DRAIN: $CreateAdvancement;
        static MILLSTONE: $CreateAdvancement;
        static ANVIL_PLOUGH: $CreateAdvancement;
        static TRAIN: $CreateAdvancement;
        static CHAINED_DRAIN: $CreateAdvancement;
        static HOSE_PULLEY_LAVA: $CreateAdvancement;
        static GLASS_PIPE: $CreateAdvancement;
        static WATER_SUPPLY: $CreateAdvancement;
        static RED_SIGNAL: $CreateAdvancement;
        static SAW_PROCESSING: $CreateAdvancement;
        static TRAIN_TRACK: $CreateAdvancement;
        static TRAIN_ROADKILL: $CreateAdvancement;
        static DRAIN: $CreateAdvancement;
        static STRESSOMETER: $CreateAdvancement;
        static CROSS_STREAMS: $CreateAdvancement;
        static COGS: $CreateAdvancement;
        static DIVING_SUIT: $CreateAdvancement;
        static STURDY_SHEET: $CreateAdvancement;
        static COPPER_CASING: $CreateAdvancement;
        static FOODS: $CreateAdvancement;
        static LAVA_WHEEL: $CreateAdvancement;
        static TRAIN_WHISTLE: $CreateAdvancement;
        static PUMP: $CreateAdvancement;
        static BACKTANK: $CreateAdvancement;
        static CRAFTER: $CreateAdvancement;
        static TRAIN_CRASH: $CreateAdvancement;
        static CARDBOARD_ARMOR: $CreateAdvancement;
        static DISPLAY_LINK: $CreateAdvancement;
        static STEAM_WHISTLE: $CreateAdvancement;
        static FUNNEL_KISS: $CreateAdvancement;
        static PIPE_ORGAN: $CreateAdvancement;
        static SPEED_CONTROLLER: $CreateAdvancement;
        static SIGNAL: $CreateAdvancement;
        static DEPLOYER: $CreateAdvancement;
        static TRACK_CRAFTING: $CreateAdvancement;
        static CONDUCTOR: $CreateAdvancement;
        static TRAIN_CRASH_BACKWARDS: $CreateAdvancement;
        static TRAIN_PORTAL: $CreateAdvancement;
        static STOCK_TICKER: $CreateAdvancement;
        static FIST_BUMP: $CreateAdvancement;
        static CRUSHER_MAXED: $CreateAdvancement;
        static MUSICAL_ARM: $CreateAdvancement;
        static LONG_TRAVEL: $CreateAdvancement;
        static TABLE_CLOTH_SHOP: $CreateAdvancement;
        static CONTRAPTION_ACTORS: $CreateAdvancement;
        static POTATO_CANNON_COLLIDE: $CreateAdvancement;
        static DIVING_SUIT_LAVA: $CreateAdvancement;
        static PACKAGER: $CreateAdvancement;
        static CRUSHING_WHEEL: $CreateAdvancement;
        static SELF_DEPLOYING: $CreateAdvancement;
        static CRAFTER_LAZY: $CreateAdvancement;
        static CHOCOLATE_BUCKET: $CreateAdvancement;
        static PACKAGE_CHUTE_THROW: $CreateAdvancement;
        static EJECTOR_MAXED: $CreateAdvancement;
        static ENTRIES: $List<$CreateAdvancement>;
        static CLOCKWORK_BEARING: $CreateAdvancement;
        static STRESSOMETER_MAXED: $CreateAdvancement;
        static HAND_CRANK: $CreateAdvancement;
        static LINKED_CONTROLLER: $CreateAdvancement;
        static SUPER_GLUE: $CreateAdvancement;
        static PSI: $CreateAdvancement;
        static STEAM_ENGINE_MAXED: $CreateAdvancement;
        static CARDBOARD_ARMOR_TRIM: $CreateAdvancement;
        static PRESS: $CreateAdvancement;
        static MIXER: $CreateAdvancement;
        static WATER_WHEEL: $CreateAdvancement;
        static HAUNTED_BELL: $CreateAdvancement;
        static END: $CreateAdvancement;
        static EXTENDO_GRIP_DUAL: $CreateAdvancement;
        static HOSE_PULLEY: $CreateAdvancement;
        static WRENCH_GOGGLES: $CreateAdvancement;
        static ARM_BLAZE_BURNER: $CreateAdvancement;
        static BRASS_CASING: $CreateAdvancement;
        static MECHANICAL_ARM: $CreateAdvancement;
        static ROOT: $CreateAdvancement;
        static COPPER: $CreateAdvancement;
        static ROSE_QUARTZ: $CreateAdvancement;
        static CHUTE: $CreateAdvancement;
        static ENCASED_FAN: $CreateAdvancement;
        static BRASS: $CreateAdvancement;
        static ARM_MANY_TARGETS: $CreateAdvancement;
        static WINDMILL_MAXED: $CreateAdvancement;
        static FUNNEL: $CreateAdvancement;
        static TRAIN_CASING: $CreateAdvancement;
        static POTATO_CANNON: $CreateAdvancement;
        static START: $CreateAdvancement;
        static ANDESITE: $CreateAdvancement;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $AllTriggers {
        static addSimple(arg0: string): $SimpleCreateTrigger;
        static register(): void;
        constructor();
    }
}
