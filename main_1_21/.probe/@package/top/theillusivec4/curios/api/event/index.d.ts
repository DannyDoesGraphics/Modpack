import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap, $ImmutableList } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $CurioAttributeModifierEventAccessor } from "@package/io/wispforest/accessories_compat/curios/mixin/accessor";
import { $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ICuriosItemHandler, $ICurio$DropRule_, $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/top/theillusivec4/curios/api/event" {
    export class $CurioChangeEvent extends $LivingEvent {
        getSlotIndex(): number;
        getFrom(): $ItemStack;
        getTo(): $ItemStack;
        getIdentifier(): string;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get slotIndex(): number;
        get from(): $ItemStack;
        get to(): $ItemStack;
        get identifier(): string;
    }
    export class $DropRulesEvent extends $LivingEvent {
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getOverrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        getLootingLevel(): number;
        addOverride(arg0: $Predicate_<$ItemStack>, arg1: $ICurio$DropRule_): void;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: number, arg4: boolean);
        get curioHandler(): $ICuriosItemHandler;
        get recentlyHit(): boolean;
        get source(): $DamageSource;
        get overrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        get lootingLevel(): number;
    }
    export class $CurioCanEquipEvent extends $LivingEvent {
        setEquipResult(arg0: $TriState_): void;
        getEquipResult(): $TriState;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $TriState_);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get slotContext(): $SlotContext;
        get stack(): $ItemStack;
    }
    export class $SlotModifiersUpdatedEvent extends $LivingEvent {
        getTypes(): $Set<string>;
        constructor(arg0: $LivingEntity, arg1: $Set_<string>);
        get types(): $Set<string>;
    }
    export class $CurioCanUnequipEvent extends $LivingEvent {
        setUnequipResult(arg0: $TriState_): void;
        getUnequipResult(): $TriState;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get slotContext(): $SlotContext;
        get stack(): $ItemStack;
    }
    export class $CurioAttributeModifierEvent extends $Event implements $CurioAttributeModifierEventAccessor {
        getSlotContext(): $SlotContext;
        clearModifiers(): void;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        getOriginalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getId(): $ResourceLocation;
        removeAttribute(arg0: $Holder_<$Attribute>): $Collection<$AttributeModifier>;
        getItemStack(): $ItemStack;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        accessories$setModifiableModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $ResourceLocation_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
        get slotContext(): $SlotContext;
        get originalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get modifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get id(): $ResourceLocation;
        get itemStack(): $ItemStack;
    }
    export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getDrops(): $Collection<$ItemEntity>;
        getSource(): $DamageSource;
        getLootingLevel(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: $Collection_<$ItemEntity>, arg4: number, arg5: boolean);
        get curioHandler(): $ICuriosItemHandler;
        get recentlyHit(): boolean;
        get drops(): $Collection<$ItemEntity>;
        get source(): $DamageSource;
        get lootingLevel(): number;
    }
}
