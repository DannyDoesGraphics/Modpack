import { $AccessoriesCapability, $AccessoriesHolder } from "@package/io/wispforest/accessories/api";
import { $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity, $Saddleable, $ItemBasedSteering, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Slot, $ArmorSlot } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Collection_, $Collection } from "@package/java/util";
export * as stack from "@package/io/wispforest/accessories/pond/stack";
export * as owo from "@package/io/wispforest/accessories/pond/owo";

declare module "@package/io/wispforest/accessories/pond" {
    export class $ModelPartLoadingHelper {
    }
    export interface $ModelPartLoadingHelper {
        accessories$pushRoot(root: $ModelPart): void;
        accessories$pollRoot(): $ModelPart;
        accessories$clearQueue(): void;
    }
    export class $ContainerScreenExtension {
    }
    export interface $ContainerScreenExtension {
        isHovering_Logical(slot: $Slot, mouseX: number, mouseY: number): boolean;
        shouldRenderSlot(slot: $Slot): boolean;
        hoverStackOffset(): number;
        forceRenderSlot(context: $GuiGraphics, slot: $Slot): void;
        isHovering_Rendering(slot: $Slot, mouseX: number, mouseY: number): boolean;
    }
    export class $ItemBasedSteerable {
    }
    export interface $ItemBasedSteerable extends $Saddleable {
        getInstance(): $ItemBasedSteering;
        get instance(): $ItemBasedSteering;
    }
    export class $AccessoriesFrameBufferExtension {
    }
    export interface $AccessoriesFrameBufferExtension {
        accessories$setUseHighlightShader(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessoriesFrameBufferExtension}.
     */
    export type $AccessoriesFrameBufferExtension_ = ((arg0: boolean) => void);
    export class $ModelRootAccess {
    }
    export interface $ModelRootAccess {
        accessories$rootPart(): $ModelPart;
        accessories$getAnyDescendantWithName(name: string): ($ModelPart) | undefined;
    }
    export class $CosmeticArmorLookupTogglable {
        static getAlternativeStack(livingEntity: $LivingEntity, equipmentSlot: $EquipmentSlot_, consumer: $Consumer_<$ItemStack>): void;
    }
    export interface $CosmeticArmorLookupTogglable {
        setLookupToggle(value: boolean): void;
        getLookupToggle(): boolean;
    }
    export class $AccessoriesLivingEntityExtension {
    }
    export interface $AccessoriesLivingEntityExtension {
        onEquipItem(arg0: $SlotReference, arg1: $ItemStack_, arg2: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessoriesLivingEntityExtension}.
     */
    export type $AccessoriesLivingEntityExtension_ = ((arg0: $SlotReference, arg1: $ItemStack, arg2: $ItemStack) => void);
    export class $AccessoriesAPIAccess {
    }
    export interface $AccessoriesAPIAccess {
        accessoriesCapability(): $AccessoriesCapability;
        accessoriesHolder(): $AccessoriesHolder;
    }
    export class $ArmorSlotExtension {
    }
    export interface $ArmorSlotExtension {
        setAtlasLocation(atlasLocation: $ResourceLocation_): $ArmorSlot;
        getAtlasLocation(): $ResourceLocation;
    }
    export class $CloseContainerTransfer {
    }
    export interface $CloseContainerTransfer {
        accessories$setScreenTransfer(arg0: $Screen): void;
    }
    /**
     * Values that may be interpreted as {@link $CloseContainerTransfer}.
     */
    export type $CloseContainerTransfer_ = ((arg0: $Screen) => void);
    export class $DroppedStacksExtension {
    }
    export interface $DroppedStacksExtension {
        addToBeDroppedStacks(arg0: $Collection_<$ItemStack_>): void;
        toBeDroppedStacks(): $Collection<$ItemStack>;
    }
}
