import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $IEntitiesData, $ISlotData } from "@package/top/theillusivec4/curios/api/type/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotReference, $SlotType } from "@package/io/wispforest/accessories/api/slot";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SlotContextExtension } from "@package/io/wispforest/accessories_compat/curios/pond";
import { $Record } from "@package/java/lang";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";
export * as client from "@package/top/theillusivec4/curios/api/client";

declare module "@package/top/theillusivec4/curios/api" {
    export class $SlotContext extends $Record implements $SlotContextExtension {
        slotType(): $SlotType;
        entity(): $LivingEntity;
        index(): number;
        visible(): boolean;
        isClient(): boolean;
        isClient(value: boolean): void;
        slotReference(slotReference: $SlotReference): void;
        slotReference(): $SlotReference;
        cosmetic(): boolean;
        identifier(): string;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SlotContext}.
     */
    export type $SlotContext_ = { visible?: boolean, cosmetic?: boolean, index?: number, identifier?: string, entity?: $LivingEntity,  } | [visible?: boolean, cosmetic?: boolean, index?: number, identifier?: string, entity?: $LivingEntity, ];
    export class $SlotResult extends $Record {
        slotContext(): $SlotContext;
        stack(): $ItemStack;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotResult}.
     */
    export type $SlotResult_ = { stack?: $ItemStack_, slotContext?: $SlotContext_,  } | [stack?: $ItemStack_, slotContext?: $SlotContext_, ];
    export class $CuriosDataProvider implements $DataProvider {
        createSlot(arg0: string): $ISlotData;
        createEntities(arg0: string): $IEntitiesData;
        copyEntities(arg0: string, arg1: string): $IEntitiesData;
        copySlot(arg0: string, arg1: string): $ISlotData;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        generate(arg0: $HolderLookup$Provider, arg1: $ExistingFileHelper): void;
        constructor(arg0: string, arg1: $PackOutput, arg2: $ExistingFileHelper, arg3: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
}
